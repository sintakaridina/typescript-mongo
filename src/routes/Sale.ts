import express from 'express';
import controller from '../controllers/Sale';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/', ValidateJoi(Schemas.sale.create), controller.createSale);
router.get('/get/', controller.readAll);

export = router;