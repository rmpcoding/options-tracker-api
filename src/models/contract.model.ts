import { model, Model, Schema, Types } from "mongoose";

// make an interface of the model

// extend that interface such that it has the mongo api

// eventually we will need options level 3 type contracts to include vertical spread logic
const CONTRACT_TYPE = ["CASH_SECURED_PUT", "COVERED_CALL"] as const;

interface IContract {
  _id: Types.ObjectId | string;
  contractType: (typeof CONTRACT_TYPE)[number];
  stockId: Types.ObjectId | string;
  userId: Types.ObjectId | string;
  premiumPrice: number;
  strikePrice: number;
  expirationDate: string;
  createdAtPrice: number | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

interface IContractModel extends Model<IContract> {}

const ContractModel: Schema<IContract> = new Schema({
  contractType: {
    type: String,
    required: Boolean,
  },
  stockId: {
    type: Types.ObjectId || String,
    required: true,
    ref: "stock",
  },
  userId: {
    type: Types.ObjectId || String,
    required: true,
    ref: "user",
  },
  premiumPrice: {
    type: Number,
    required: true,
  },
  strikePrice: {
    type: Number,
    required: true,
  },
  expirationDate: {
    type: String,
    required: true,
  },
  createdAtPrice: {
    type: Number,
    default: null,
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

const Contract = model<IContract, IContractModel>("contract", ContractModel);

export default Contract;
