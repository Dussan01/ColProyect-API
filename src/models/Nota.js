// idMateria, idUsario, idActividad, nota

import { Schema, model } from "mongoose";

const notaSchema = new Schema({
    user: [{
        ref: "User",
        type: Schema.Types.ObjectId
    }],
    Materia: {type:String},
    nota: {type: Number},
    descripcion: {type:String}
}, {
    timestamps: true,
    versionKey: false,
});




export default model('Nota', notaSchema);