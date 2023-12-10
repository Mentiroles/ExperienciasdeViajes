import "dotenv/config";
import express from "express";
import morgan from "morgan";

const app = express();

app.use (morgan("dev"));

//Rutas de usuario
// app.post('/user', newUserController);
// app.get('/user/:id', getUserController);
// app.post('/login', loginController);
// app.patch('/user/:id/profile_pic', authUser, updateProfilePicController);

// //Rutas de recomendaciones
// app.post('/', authUser, newRecommendationController);
// app.get('/', getRecommendationsController);
// app.get('/tweet/:id', getSingleRecommendationController);
// app.delete('/tweet/:id', authUser, deleteRecommendationController);

// Middleware de 404
app.use((req, res) => {
    res.status(404).send({
      status: 'error',
      message: 'Not found',
    });
  });
  
  // Middleware de gestión de errores
  app.use((error, req, res, next) => {
    console.error(error);
  
    res.status(error.httpStatus || 500).send({
      status: 'error',
      message: error.message,
    });
  });
  
  // Lanzamos el servidor
  app.listen(3000, () => {
    console.log('Servidor funcionando! 👻');
  });
  