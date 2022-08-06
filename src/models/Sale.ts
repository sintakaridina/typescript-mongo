import mongoose, { Document, Schema } from 'mongoose';

export interface ISale {
    product: string;
    total: number;
}

export interface ISaleModel extends ISale, Document {}

const SaleSchema: Schema = new Schema(
    {
        total: { type: Number, required: true },
        product: { type: Schema.Types.ObjectId, required: true, ref: 'Product' }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<ISaleModel>('Sale', SaleSchema);