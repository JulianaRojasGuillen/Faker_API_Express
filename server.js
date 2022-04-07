const { faker } = require('@faker-js/faker');
const express = require('express');
const app = express();

class Usuario{
    constructor(){
        this._id = faker.faker.datatype.uuid();
        this.primerNombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.numeroTelefono = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.contrasenia = faker.internet.password();
    }
}

class Empresa{
    constructor(){
        this._id = faker.datatype.uuid();
        this.nombre = faker.company.companyName();
        this.direccion = {
            calle:faker.address.streetName(),
            ciudad:faker.address.cityName(),
            estado:faker.address.state(),
            codigoPostal:faker.address.zipCode(),
            pais:faker.address.country()
        }
    }
}

app.get("/api/users/new",(request,response) =>{
    let usuario = new Usuario();
    return response.status(200).json(usuario);
})

app.get("/api/companies/new", (request,response) =>{
    let empresa = new Empresa();
    return response.status(200).json(empresa);
})

app.get("/api/user/company", (request,response) =>{
    let userCompany = {
        usuario: new Usuario(),
        empresa: new Empresa()
    }
    return response.status(200).json(userCompany);
})

app.listen ( 8080, () => {
    console.log ("El servidor se encuentra corriendo en el puerto 8080.")
})