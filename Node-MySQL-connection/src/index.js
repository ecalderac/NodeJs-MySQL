const app = require('./config/server');

require('./app/routes/news')(app);

// Iniciar el Servidor
app.listen(app.get('port'), () => {
    console.log('servidor en puerto', app.get('port'));
});