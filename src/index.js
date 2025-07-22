import express from 'express';
import { getAllScores, createScore } from './controller/scoreController.js';
const index = express.Router();

index.route('/score')
    .get(getAllScores)
    .post(createScore);

export default index;