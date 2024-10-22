const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      // Reemplaza con tu MONGODB_URI
      await mongoose.connect('mongodb+srv://juanjustomuller:obeLo4Nqf3BxYQ6d@gestion-empleados.6sdgm.mongodb.net/test-empleados?retryWrites=true&w=majority&appName=Gestion-empleados', {
        //useNewUrlParser: true,
        //useUnifiedTopology: true
      });
      console.log('Conectado a MongoDB');
    } catch (error) {
      console.error('Error al conectar a MongoDB:', error);
      process.exit(1); // Salir del proceso si falla la conexión
    }
  };
  
  module.exports = connectDB;