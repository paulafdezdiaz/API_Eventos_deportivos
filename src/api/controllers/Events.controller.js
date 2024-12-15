const Events = require("../models/Events.model")


const getAll = async(req,res)=>{
    try{
        const list = await Events.find()
        res.status(200).json(list);
    }catch(error){
        res.status(500).json({msg:"error en el servidor"});
    }
}

const getByID = async(req,res)=>{
    try{
        const IDEvent = req.params.eventId
        const list = await Events.findById(IDEvent)
        if(!list){
            return res.status(404).json({msg: "el evento no existe"})
        }
        res.status(200).json(list);
    }catch(error){
        res.status(500).json({msg:"error en el servidor"});

    }
}


const createEvent = async(req,res)=>{
    try{
        const newEvent = new Events(req.body);
        newEvent.organizador = req.user._id;
        const createdEvent = await newEvent.save();
        return res.status(201).json(createdEvent);


    }catch(error){
        res.status(500).json({msg:"error en el servidor"});

    }

}

const updateEvent = async(req,res)=>{
    const IDEvent = req.params.eventId;
    const event = req.body;
    try{

        const newEvent = await Events.findByIdAndUpdate(IDEvent, event, {new:true})
        if(!newEvent){
            return res.status(404).json({msg: "el evento no existe"})
    
        }
        res.status(200).json(newEvent);
    }catch(error){
        res.status(500).json({msg:"error en el servidor"});

    }

}
const deleteEvent = async(req,res)=>{
    const IDEvent = req.params.eventId;
    try{

        const Event = await Events.findByIdAndDelete(IDEvent)
        if(!Event){
            return res.status(404).json({msg: "el evento no existe"})
           
        }
        res.status(200).json(Event);
    }catch(error){
        res.status(500).json({msg:"error en el servidor"});

    }


}

const upcomingEvents = async(req,res)=>{
    try{
        let upcomingEvents = await Events.find()
        upcomingEvents = upcomingEvents.sort((a,b)=>new Date(a.fecha)- new Date(b.fecha))
        res.status(200).json(upcomingEvents);
    }catch(error){
        res.status(500).json({msg:"error en el servidor"});


    }
}
const eventType = async(req,res)=>{
    try{
        const eventType = req.query.type
        let events = await Events.find({tipoDeporte: eventType})
        res.status(200).json(events);

    }catch(error){
        res.status(500).json({msg:"error en el servidor"});

    }

}



module.exports= { getAll, getByID, createEvent, updateEvent, deleteEvent, upcomingEvents, eventType}