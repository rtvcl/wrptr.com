import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
    const places = await prisma.place.findMany()
    return NextResponse.json({data: places})
}