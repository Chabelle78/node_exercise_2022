import mongoose from "mongoose";
const Schema = mongoose.Schema;
interface Wilder {
  name: string;
  city: string;
  description: string;
  skills: [{ title: string; votes: number }];
}

const WilderSchema = new Schema<Wilder>(
  {
    name: {
      //Forme longue
      type: String,
      required: [true, "le nom est requis"],
    },
    city: {
      type: String,
      required: [true, "la ville est requise"],
    },
    description: { type: String, required: [true, "la description est requise"] },
    skills: [
      {
        // Chaque skills pourra contenir un titre de type string et les votes de type number
        title: String,
        votes: Number,
      },
    ],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("wilder", WilderSchema); //ES6 type module

// module.exports = mongoose.model("Wilder", WilderSchema) //ES5
