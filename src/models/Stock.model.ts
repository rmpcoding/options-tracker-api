import { model, Model, Schema, Types } from "mongoose";

interface IStock {
  symbol: string;
  companyName: string;
  userId: Types.ObjectId | string; // Using TypeScript, what do we expect this value to be? String or User._id?
  capitalGains: number | null;
  priceBoughtAt: number;
  registeredDate: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

interface IStockModel extends Model<IStock> {}

const StockSchema: Schema<IStock> = new Schema<IStock>({
  symbol: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  userId: {
    type: Types.ObjectId || String,
    required: true,
    ref: "user",
  },
  capitalGains: {
    type: Number,
    required: true,
  },
  priceBoughtAt: {
    type: Number,
    required: true,
  },
  registeredDate: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
    required: true,
  },
  deletedAt: {
    type: String,
    default: null,
  },
});

const stockSchema = model<IStock, IStockModel>("stock", StockSchema);
