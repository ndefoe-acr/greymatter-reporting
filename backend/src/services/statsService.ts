import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getMTTR = async () => {
    const incidents = await prisma.incident.findMany({
        where: { closed_at: { not: null } }
    });

    if (incidents.length === 0) return 0;

    const totalMinutes = incidents.reduce((acc, inc) => {
        const diff = (inc.closed_at!.getTime() - inc.created_at.getTime()) / 1000 / 60;
        return acc + diff;
    }, 0);

    return totalMinutes / incidents.length;
};
