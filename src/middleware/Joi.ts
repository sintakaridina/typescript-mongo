import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { IProduct } from '../models/Product';
import { ISale } from '../models/Sale';
import Logging from '../library/Logging';

export const ValidateJoi = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);

            next();
        } catch (error) {
            Logging.error(error);

            return res.status(422).json({ error });
        }
    };
};

export const Schemas = {
    product: {
        create: Joi.object<IProduct>({
            title: Joi.string().required(),
            category: Joi.string().required(),
            stock: Joi.number().required()
        }),
        update: Joi.object<IProduct>({
            title: Joi.string(),
            category: Joi.string(),
            stock: Joi.number()
        })
    },
    sale: {
        create: Joi.object<ISale>({
            product: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            total: Joi.number().required()
        })
    }
};