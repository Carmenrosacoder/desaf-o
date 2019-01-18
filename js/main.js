'use strict'
window.addEventListener('load', ()=>{
  var buttonAdd = document.querySelector("#add-number");
  var buttonSort = document.querySelector("#sort");
  buttonAdd.addEventListener("click", ()=>{
    send();
  });
  buttonSort.addEventListener("click",()=>{
    ordenar();
  });

  function getNumeros(){
    var inputTareas = document.getElementById("inputNumero");
    return inputNumero.value;//envío el valor ingresado en el input
  }
  function send(){
    var ingresoonumero = getNumeros();//recibe el valor ingresado
      if(ingresoonumero!=""){
          imprimirElemento(ingresoonumero);
          array.push(ingresoonumero);
          clean();
      }
      else{
        alert("Ingresa un número");
      }
    }
  function imprimirElemento(numeronuevo){
    var newNum= document.getElementById("listdeNumeros");
    //Crear elementos
    var div=document.createElement("div");
    div.className='numero';
    newNum.appendChild(div);
    var numeroinput=document.createElement('p');
    numeroinput.innerHTML=numeronuevo;
    //Agregar elementos
    div.appendChild(numeroinput);
  }
  function clean(){
    var tex = document.getElementById("inputNumero");
    tex.value="";
    tex.focus();
  }
  var array = [];
  function ordenar(){
      var contenido = "";
      array.sort(function(a,b){return a-b});
      for(var i=0;i<array.length;i++){
        var boxOrden= document.getElementById("ordenados");
        //Crear elementos
        contenido += "<div class='numero'>";
        contenido += "<p>";
        contenido += array[i];
        contenido += "</p></div>";
        boxOrden.innerHTML = contenido;  
        
      }
  }    
});
