import express from 'express';
import { getAllScores, createScore } from './controller/scoreController.js';
const index = express.Router();

function getPaginated(req, res, next) {
    if (!req.query) next();
    const page = req.query.page;
    const limit = req.query.limit;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
}

index.route('/score')
    .get(getAllScores)
    .post(createScore);

export default index;