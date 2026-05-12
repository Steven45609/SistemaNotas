function login(usuario, password){
    if(usuario ==="admin" && password === "1234"){
        return "Bienvenido";
    }
    return "Acceso denegado";
}

console.log(login("admin","1234"))