import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {

    const search = req.nextUrl.searchParams.get('q')
    const page = parseInt(req.nextUrl.searchParams.get('page') || '1')
    const limit = parseInt(req.nextUrl.searchParams.get('limit') || '2')
    const offset = parseInt(req.nextUrl.searchParams.get('offset') || '0')

    const skipTake = {
        skip: ((page - 1) * limit) + offset,
        take: limit
    }

    const places = await prisma.place.findMany({
        ...(skipTake),
        ...(search && {
            where: {
                OR: [
                    {
                        name: {
                            contains: search
                        }
                    },
                    {
                        location_name: {
                            contains: search
                        }
                    }
                ]
            }
        })
    })

    const placesCount = await prisma.place.count({
        ...(search && {
            where: {
                OR: [
                    {
                        name: {
                            contains: search
                        }
                    },
                    {
                        location_name: {
                            contains: search
                        }
                    }
                ]
            }
        })
    })

    return NextResponse.json({ data: places, meta: { total: placesCount, page, total_page: Math.ceil(placesCount / limit) } })
}