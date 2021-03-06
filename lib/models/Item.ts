import { Document, Model, model, Schema } from "mongoose";
import { IUser } from "./User";

export const ITEM_CATEGORIES = ["BOOKS", "ELECTRONICS", "FOOD", "FURNITURE", "OTHER"];

export interface PriceRange {
    low: Number;
    high: Number;
}

export interface IItem extends Document {
    name: String;
    description: String;
    seller: IUser["_id"];
    isActive: Boolean;
    photoURL: String;
    category: String;
    priceRange: PriceRange;
    keywords: String[];
}
  
const itemSchema: Schema = new Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    isActive: {
        type: Boolean
    },
    photoURL: {
        type: String
    },
    category: {
        type: String,
        enum: [...ITEM_CATEGORIES]
    },
    priceRange: {
        type: Map,
        of: Number
    },
    keywords: {
        type: [String]
    }
  });
  
  const Item: Model<IItem> = model("Item", itemSchema);
  
  export default Item;