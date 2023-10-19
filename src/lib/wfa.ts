import prisma from "@/lib/prisma";

export class WfaAPI {
    search: string;
    limit: number;
    startIndex: number;
    constructor({ search, limit = 0, startIndex = 0 }: { search: string; limit: number; startIndex: number }) {
        this.search = search
        this.limit = limit
        this.startIndex = startIndex
    }
    getPlaces = () => {
        return prisma.place.findMany({
            where: {
                OR: [
                    { name: { contains: this.search } },
                    { location_name: { contains: this.search } },
                ],
            },
            skip: this.startIndex,
            take: this.limit,
        })
    }
    getTotalPlaces = () => {
        return prisma.place.count({
            where: {
                OR: [
                    { name: { contains: this.search } },
                    { location_name: { contains: this.search } },
                ],
            },
        });
    }
    getTotalPages = async () => {
        return Math.ceil(await this.getTotalPlaces() / this.limit);
    }
}