import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/mern';
mongoose.connect(url);


const db = mongoose.connection;
db.on('open', ()=>{
    console.log("Conexión a MongoDB establecida")
});
db.on('error', (error)=>{
    console.log("Error al conectar a MongoDB", error)
});

export default db;