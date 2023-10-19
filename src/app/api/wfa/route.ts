import { WfaAPI } from "@/lib/wfa";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  const search = req.nextUrl.searchParams.get("q") || "";
  const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
  const limit = parseInt(req.nextUrl.searchParams.get("limit") || "5");
  
  const startIndex = (page - 1) * limit;
  
  const wfaAPI = new WfaAPI({search, limit, startIndex})
  
  const endIndex = page * limit;
  
  const places = await wfaAPI.getPlaces()
  const totalCount = await wfaAPI.getTotalPlaces()
  const totalPages = await wfaAPI.getTotalPages()

  return NextResponse.json({
    data: places,
    meta: {
      total: totalCount,
      page,
      total_page: totalPages,
    },
  });
}
