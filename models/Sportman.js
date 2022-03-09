import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const SportmanSchema = new Schema({
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