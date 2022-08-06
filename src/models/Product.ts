import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct {
    title: string;
    category: string;
    stock: number;
}

export interface IProductModel extends IProduct, Document {}

const ProductSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        category: { type: String, required: true },
        stock: { type: Number, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IProductModel>('Product', ProductSchema);