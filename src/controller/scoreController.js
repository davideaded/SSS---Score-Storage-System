import * as scoreService from '../service/scoreService.js';
import { BadRequestError } from '../errors/errors.js';

async function getAllScores(req, res, next) {
    try {
        const scores = await scoreService.getAllScores();
        res.status(200).json({ scores });
    } catch (err) {
        next(err);
    }
}

async function createScore(req, res, next) {
    try {
        if (!req.body) throw new BadRequestError('Invalid params');
        const name = req.body.name?.trim();
        const score = req.body.score;
        if (
            typeof name !== 'string' ||
            !/^[a-zA-Z0-9]{1,20}$/.test(name) ||
            isNaN(+score) ||
            +score <= 0
        ) {
            throw new BadRequestError('Invalid params');
        }
        const result = await scoreService.createScore({ name, score: +score });
        res.status(201).json({ message: `${result.name} created` });
    } catch (err) {
        next(err);
    }
}

export {
    getAllScores,
    createScore
}