function  boton4 ( )  {
    ventana . alerta ( 'mensaje4' ) ;
}

function  boton1 ( )  {
    ventana . alerta ( 'mensaje1' ) ;
}

// defino una variable llamada btnEnviar1 la cual "apunta" al elemento HTML identificado por el ID con nombre "btnEnviar1"
var  btnEnviar1  =  documento . getElementById ( "btnEnviar1" ) ;
btnEnviar1 . estilo . color  =  "rojo" ;
// se agrega un listener (escucha) para cachar el evento de clic en botón
// la acción que ocurrió al dar clic está determinada por la función es anónima function () {}
btnEnviar1 . addEventListener ( "clic" ,  función  ( )  { 
    ventana . alerta ( 'mensaje1' ) ; 
} ) ;

var  btnEnviar5  =  documento . getElementById ( "btnEnviar5" ) ;
// una función callback se llama sin parentesis, porque de lo contrario es ejecutar la función
// la función callback significa transferir el control a 
btnEnviar5 . addEventListener ( "clic" ,  devolución de llamada ) ;

function  callback ( )  {
   cambiarColor ( "azul" ) ;   
   cambiarEstado ( ) ;
}

var  emailHelp  =  documento . getElementById ( "emailHelp" ) ;
función  cambiarColor ( color )  {
    emailHelp . estilo . color  =  color ;
}

var  exampleCheck1  =  documento . getElementById ( "exampleCheck1" ) ;
función  cambiarEstado ( )  {
    ejemploCheck1 . comprobado  =  verdadero ;
}
