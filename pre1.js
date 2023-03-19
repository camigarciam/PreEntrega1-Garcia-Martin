// conversor de paypal
// tiene en cuenta :usd banco + fees paypal por transacción (fpyp) + impuesto país + rg 4815 (diferente si se transfieren más o menos de 300usd)

do {
let banco= Number(prompt("ingrese el valor del dolar banco"))
let dolar= Number(prompt("Elija cantidad de dólares a transferir o 0 (cero) para terminar"))
let fpyp= 0.061
let pais=0.295
let rg=0.45
let rgm= 0.70

 
    while (dolar != 00) {
        alert ('los valores ingresados fueron \n' + banco + ' valor dolar banco \n' + dolar + ' dólares a transferir')
        if (dolar>=300 ) {
            let total= dolar + dolar * fpyp + dolar * pais + dolar * rgm
            let pesos = total * banco
            
            alert('el total a transferir es de ' + pesos)
            
            }else{
            
            let total= dolar + dolar * fpyp + dolar * pais + dolar * rg
            let pesos = total * banco
            
            alert ('el total a transferir es de '+ pesos)

            }
    break
}
}while (confirm ('desea seguir convirtiendo?'))