const mongoose = require("mongoose");

const Schema= mongoose.Schema;

const EventsSchema = new Schema({
    nombre: {type:String, require:true},
    descripcion: {type:String},
    fecha:{type:Date },
    ubicacion: {type:String},
    tipoDeporte: {type:String},
    organizador: {type: Schema.Types.ObjectId, ref:"users"},    
},{
    collection: "events",
    timestamps: true
});

const Events = mongoose.model("events", EventsSchema)

module.exports = Events