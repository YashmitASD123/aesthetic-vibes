import { model, Schema } from "mongoose";

const ItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Item = model("Item", ItemSchema);
export default Item;
