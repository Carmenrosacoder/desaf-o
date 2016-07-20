
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
var newarray = [];
function ordenar(){

    newarray.push(array.sort(function(a,b){return a-b}));
    long = array.length;
    for(i=0;i<long;i++){
      var newTar= document.getElementById("ordenados");
      //Crear elementos
      var div=document.createElement("div");
      div.className='numero';
       newTar.appendChild(div);
      var numeroinput=document.createElement('p');
      numeroinput.innerHTML=array[i];


      //Agregar elementos
     div.appendChild(numeroinput);

    }

 }
