import express from 'express';
const index = express.Router();

index.route('/score')
    .get((req, res) => {
        res.status(200).json({ message: 'Hello, world!' });
    })
    .post((req, res) => {
        res.status(201).json({ message: 'Score created!' });
    });

export default index;