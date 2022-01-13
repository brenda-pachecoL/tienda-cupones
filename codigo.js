function precioConDescuento(descuento,precioProducto){
    const producto = (precioProducto / 100)* descuento;
    return producto

}

function calculandoCupon(){
    const precio = document.getElementById("precio");
    const precioProducto = precio.value;
    const cupon = document.getElementById("cupon");
    const cuponPorValiar = cupon.value;



        switch (cuponPorValiar){
            case 'verano' || 'Verano' :
                var descuento = 100 - 20;
                var resultado = precioConDescuento(descuento,precioProducto);
                alert("tu producto tuvo un 20% de descuento debes pagar $" + resultado);
            break;
            case'otoño':
                var descuento = 100 - 30;
                var resultado = precioConDescuento(descuento,precioProducto);
                alert("tu producto tuvo un 30% de descuento debes pagar $" + resultado);
            break;
            case'primavera':
                var descuento = 100 - 50;
                var resultado = precioConDescuento(descuento,precioProducto);
                alert("tu producto tuvo un 50% de descuentodebes pagar $" + resultado);
            break;

            default:
                alert("el cupon no es valido ;(" );
        }


}