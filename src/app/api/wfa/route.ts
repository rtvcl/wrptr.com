import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get("q") || '';
  const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
  const limit = parseInt(req.nextUrl.searchParams.get("limit") || "5");

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const places = await prisma.place.findMany({
    where: {
      OR: [
        { name: { contains: search } },
        { location_name: { contains: search } },
      ],
    },
    skip: startIndex,
    take: limit,
  });

  const totalCount = await prisma.place.count({
    where: {
      OR: [
        { name: { contains: search } },
        { location_name: { contains: search } },
      ],
    }
  });

  const totalPages = Math.ceil(totalCount / limit);
  return NextResponse.json({
    data: places,
    meta: {
      total: totalCount,
      page,
      total_page: totalPages,
    },
  });
}
