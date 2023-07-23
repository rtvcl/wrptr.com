import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {

    // GET /items?limit=20&offset=20 ✅
    // GET /items?page=1

    const limit = parseInt(req.nextUrl.searchParams.get('limit') || '3')
    const offset = parseInt(req.nextUrl.searchParams.get('offset') || '0')
    const page = parseInt(req.nextUrl.searchParams.get('page') || '1')
    const search = req.nextUrl.searchParams.get('q')

    const places = await prisma.place.findMany({
        skip: offset,
        take: limit,
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
    return NextResponse.json({ data: places })
}