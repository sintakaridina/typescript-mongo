import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Sale from '../models/Sale';

const createSale = (req: Request, res: Response, next: NextFunction) => {
    const { product, total } = req.body;

    const sale = new Sale({
        _id: new mongoose.Types.ObjectId(),
        product,
        total
    });

    return sale
        .save()
        .then((sale) => res.status(201).json({ sale }))
        .catch((error) => res.status(500).json({ error }));
};
const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Sale.find()
        .then((sales) => res.status(200).json({ sales }))
        .catch((error) => res.status(500).json({ error }));
};
export default { createSale , readAll };