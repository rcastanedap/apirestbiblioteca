import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

//conexion a mongo app
try {
    await mongoose.connect('mongodb+srv://rubiismari:1Yjp68twW8ZSrRJ0@cluster0.bzxw4p2.mongodb.net/cluster0?retryWrites=true&w=majority')
    console.log('Conectado con exito')
}catch(error){
    console.log(error)
}

//modelo para usuario
const usuarioSchema = new mongoose.Schema({
    nombre: String, 
    apellido: String, 
    username: String, 
    password: String
});
//modelo para archivos

const archivoSchema = new mongoose.Schema({
    nombre: String, 
    descripcion: String,
    fechapublicacion: String,
    tipo: String
});
// modelo track
const trackSchema = new mongoose.Schema({
    nombre: String, 
    descripcion: String,
    fechapublicacion: String,
    tipo: String
});


const Usuario = mongoose.model('Usuario', usuarioSchema);
const Archivo = mongoose.model('Archivo', archivoSchema);
const Track = mongoose.model('Track', trackSchema);


//rutas para obtener los usuarios 
app.get('/usuarios', (req, res) => {
    Usuario.find()
    .then(usuario => res.json(usuario))
    .catch(error => res.json(error))
});

app.get('/archivos', (req, res) => {
    Archivo.find()
    .then(archivo => res.json(archivo))
    .catch(error => res.json(error))
});

app.get('/tracks', (req, res) => {
    Track.find()
    .then(track => res.json(track))
    .catch(error => res.json(error))
});




//rutas para guardar en mongo db
app.post('/usuarios', (req, res) =>{
    const body = req.body;
    const usuario = new Usuario(body);
    usuario.save();
    res.json({
        mensaje: 'Usuario guardado',
        usuario,
    });
});

app.post('/archivos', (req, res) => {
    const body = req.body;
    const archivo = new Archivo(body);
    archivo.save();
    res.json({
        mensaje: 'Archivo guardado',
        archivo,
    });
});

app.post('/tracks', (req, res) => {
    const body = req.body;
    const track = new Track(body);
    track.save();
    res.json({
        mensaje: 'Track guardado',
        track,
    });
});


//rutas para actualizar 
app.put('/usuarios/:id', async (req, res) => {
    const {id} = req.params;
    const body = req.body;
    const nuevoUsuario = await Usuario.findByIdAndUpdate(id, body, {new: true});
    res.json({ 
        mensaje: 'Usuario Actualizado',
        nuevoUsuario,
    })
});

app.put('/archivos/:id', async (req, res) => {
    const {id} = req.params;
    const body = req.body;
    const nuevoArchivo = await Archivo.findByIdAndUpdate(id, body, {new: true});
    res.json({ 
        mensaje: 'Archivo Actualizado',
        nuevoArchivo,
    })
});

app.put('/tracks/:id', async (req, res) => {
    const {id} = req.params;
    const body = req.body;
    const nuevoTrack = await Track.findByIdAndUpdate(id, body, {new: true});
    res.json({ 
        mensaje: 'Track Actualizado',
        nuevoTrack,
    })
});
//ruta para eliminar 
app.delete('/usuarios/:id', async (req, res) =>{
    const {id} = req.params;
    await Usuario.findByIdAndDelete(id);
    res.json({ 
        mensaje: 'Usuario eliminado'
    })
});

app.delete('/archivos/:id', async (req, res) =>{
    const {id} = req.params;
    await Archivo.findByIdAndDelete(id);
    res.json({ 
        mensaje: 'Archivo eliminado'
    })
});

app.delete('/tracks/:id', async (req, res) =>{
    const {id} = req.params;
    await Track.findByIdAndDelete(id);
    res.json({ 
        mensaje: 'Track eliminado'
    })
});



app.listen(3000,() => {
    console.log('listening on port 3000')
})