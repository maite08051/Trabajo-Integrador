// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        else{
            event.preventDefault ()
            const numero = document.querySelector('totalValor').value;
            const total = document.querySelector('#totalCompra');
            total.innerHTML = numero;
            }

        form.classList.add('was-validated')
      }, false)
    })
 })()



//defino valor de ticket//
const valorTicket=200;
//defino porcentajes//

let descuentoEstudiante=0.8;
let descuentoTrainee=0.5;
let descuentoJunior=0.15;

const cantidad= document.getElementById('cantidadEntradas');
const categoria= document.getElementbyId('SelectCategoria');
const botonCalcular= document.getElementById('BtnCalcular');
const botonReset= document.getElementById('BtnReset');
const total= document.getElementsByClassName('ImporteTotal');

function TotalPagar(){
    //calculo valor total
    let TotalValorPagar= cantidad.value * valorTicket //uso el .value porque sino toma todo el valor de la etiqueta(osea atributos) y yo solo quiero el valor.
   //descuentos
    if(categoria.value==1){
        TotalValorPagar=TotalValorPagar-(totalValor*descuentoEstudiante)}

    else if(categoria.value==2){
        totalValor=totalValor-(totalValor*descuentoTrainee)
    }
    else if(categoria.value==3){
    totalValor=totalValor-(totalValor*descuentoJunior)}
    else{
        totalValor=totalValor
    }

   
   
    total.innerHTML=`total a pagar: $${totalValor}`
}

//boton calcular
botonCalcular.addEventListener('click',TotalPagar)


//boton reset

botonReset.addEventListener("click",()=>{
    total.textcontent=`total a pagar:`
})




