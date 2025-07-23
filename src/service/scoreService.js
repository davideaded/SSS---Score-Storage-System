import { PrismaClient } from '@prisma/client';
import { NotFoundError } from '../errors/errors.js'

const prisma = new PrismaClient({});

export async function getAllScores(pagination) {
    let scores = null;
    if (pagination === null) {
        scores = await prisma.score.findMany({
            orderBy: {
                value: 'desc'
            }
        });
    } else {
        const { page, limit } = pagination;
        scores = await prisma.score.findMany({
            orderBy: {
                value: 'desc',
            },
            skip: page * limit,
            take: limit 
        });
    }
    return scores;
}

export async function createScore(data) {
    const { name, score } = data;
    return await prisma.score.create({
        data: { name, value: score }
    });
}