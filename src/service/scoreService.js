import { PrismaClient } from '@prisma/client';
import { NotFoundError } from '../errors/errors.js'

const prisma = new PrismaClient({});

export async function getAllScores() {
    const scores = await prisma.score.findMany();
    if (!scores[0]) throw new NotFoundError("Scores don't exist");
    return scores;
}

export async function createScore(data) {
    const { name, score } = data;
    return await prisma.score.create({
        data: { name, value: score }
    });
}