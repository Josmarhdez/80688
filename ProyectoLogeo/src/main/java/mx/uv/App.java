package mx.uv;

import static spark.Spark.*;
import com.google.gson.*;


public class App 
{
    public static void main( String[] args )
    {
        options("/*", (request, response) -> {

            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });
        before((req, res) -> res.header("Access-Control-Allow-Origin", "*"));

        get("/saludar", (req, res) -> {
            String l = req.queryParams("usuario");
            String p = req.queryParams("password");
            String respuesta;
            System.out.println(l + " " + p);

            if (l.equals("Usuario1") && p.equals("123456"))
                respuesta = "Bienvenido usuario ";
            else
                respuesta = "Usuario equivocado ";
            return respuesta + l + " <a href='http://127.0.0.1:5500/envio_formulario.html'>volver</a>";
        });
    

    }
}
