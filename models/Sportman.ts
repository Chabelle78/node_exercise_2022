import mongoose from 'mongoose';
const Schema = mongoose.Schema; 

interface SportsMan{
    name:string;
    age:number;
    sports: string,
}

const SportmanSchema = new Schema<SportsMan>({
    name: {
        type: String,
        // unique: true,
        required: [true, "Le nom est obligatoire"],
    },
    age: {
        type: Number,
        required:[true, "L'âge est requis"]
    },
    sports:{
        type:String,
        required:[true, "Le sports doit etre requis"], 
    }

})

export default mongoose.model("sportsman", SportmanSchema)
