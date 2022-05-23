# Prueba de maquetacion, integración de endpoints para limonbyte

## Variables de entorno para frontend

REACT_APP_API_URL = Establecer la url a donde estara ejecutandose el backend.
Ejemplo: "http://localhost:3001/api" si esta en local

## La base de datos usada es mysql

## Variables de entorno para backend

Dentro de la carpeta server colocar:
PORT = Puerto donde se esta ejecutando el servidor

TYPE_CONNECTION = "LOCAL". Coloquelo en "REMOTE" para usar una base de datos remota

LOCAL_DB = "nombre de la base de datos"
LOCAL_USER_DB = "usuario de la base de datos"; en local por defecto es: root
LOCAL_PASSWORD = "password de la base de datos"
LOCAL_HOST_DB = "localhost" por defecto.

REMOTE_DB = ""
REMOTE_USER_DB = ""
REMOTE_PASSWORD = ""
REMOTE_HOST_DB = ""
