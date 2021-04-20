const formulario = document.getElementById("formulario");


formulario.addEventListener("submit",function(ev){//obtengo el formulario despues del evento submit
    ev.preventDefault();//cancela la autocarga de la pagina despues de hacer el envio

    const datos = new FormData(formulario);//obtengo datos enviados del formulario
    console.log("Correo:",datos.get("email")) //los input/datos se identifican por su atributo name
    console.log("Usuario:",datos.get("usuario"))
    console.log("Contraseña:",datos.get("pass"))
    console.log("Descripcion:",datos.get("textarea"))
    console.log("Comuna:",datos.get("select"))
    console.log(datos.get("check"))
    

    const array = []//array vacio
    const resul = document.getElementById("resul")//<ul> en donde mostrare los datos en pantalla
    array.push(datos.get('email'),datos.get('usuario'),datos.get('pass')//inserto en el array todos los datos recibidos del formulario 
    ,datos.get('textarea'),datos.get('select'),datos.get('check'))

    switch(true){
        case datos.get('textarea') === ''://mensaje si esta vacio
            document.getElementById('output').innerHTML = '<div class="alert alert-danger" role="alert">Ingrese una descripción la cual ya no es opcional jajaja, debe hacerlo!</div>';
            break;
        
        case datos.get('select') === ''://mensaje si esta vacio
            document.getElementById('output').innerHTML = '<div class="alert alert-danger" role="alert">Ingrese comuna de residencia!</div>';
            break;   

        case datos.get('check') === null: //Valor vacio para los radio button es null
            document.getElementById('output').innerHTML = '<div class="alert alert-danger" role="alert">Elija forma de entrega de su pedido!</div>';
            break;   

        default: 
            document.getElementById('output').innerHTML = ''//innerHTML para eliminar mensaje de campos vacios
            array.forEach(elementos => resul.innerHTML +=`<li class="color p-2 mx-auto my-3 w-75 rounded-3 border border-1 border-primary text-center text-success lead list-unstyled">${elementos}</li>`)
            alert('Datos enviados correctamente!')
            break;
        }
        
    console.log(array)
    
});