// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    
    let textoIngresado = document.getElementById('amigo').value.trim();
   
    if(textoIngresado.match(/[!@#$%^&*(),.?":{}|<>]/)){
        alert('El nombre del participante no puede contener caracteres especiales');
        LimpiarNombre();
        return(false);
    }   
    if(textoIngresado.match(/\d/)){
        alert('El nombre no puede contener numeros');
        LimpiarNombre();
        return(false);
    } 
    if(textoIngresado === ''){
       
        alert('Por favor, ingrese a un participante.');
        return;
    }else{
        
        if (amigos.includes(textoIngresado)){
            alert('El nombre del participante ha sido ingresado, por favor ingrese el siguiente');
        }else{         
            amigos.push(textoIngresado);
            CrearLi(textoIngresado);
            
        }
    }
    LimpiarNombre();
}
function LimpiarNombre(){
    let valorInput = nombreEscrito = document.querySelector('#amigo');
    valorInput.value = '';
}

function CrearLi(nombre){
    let nuevoLi = document.createElement('li');
    // asigno el nombre al li
    for(i = 0; i < amigos.length; i++){
        nuevoLi.textContent = nombre;
        document.querySelector('#listaAmigos').appendChild(nuevoLi);
    }
}

function sortearAmigo(){
    let amigoAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSeleccionado = amigos[amigoAleatorio];
    let resultado = document.getElementById('resultado');
    if (amigos == 0 ){
        alert('No hay participantes inscritos, no se puede realizar el sorteo');
        return(false);
    }else{
        resultado.innerHTML = `<li>El amigo secreto es: ${amigoSeleccionado}</li>`;
        
    }
    
   

    
}