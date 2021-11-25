
//variables 
let carList = [];

//constructores
class Vehiculo{
    constructor(marca, modelo, anio, transmision, color, kilometraje, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.transmision = transmision;
        this.color = color;
        this.kilometraje = kilometraje;
        this.precio = precio;
    }
}

class ListCar{
    constructor(){
        this.List = [];
    }
    newCar( car ){
        this.List.push( car )
    }
}

//inicializando lista
const carLists = new ListCar();


//adeventListeners
$('.button-70').click( function(){
    //capturando valores ingresados
    let marca = $('#brand').val();
    let modelo = $('#model').val();
    let anio = $('#year').val();
    let transmision = $('#transmision').val();
    let color = $('#color').val();
    let kilometraje = $('#kilometraje').val();
    let price = $('#price').val();
    
    const Car = new Vehiculo(marca, modelo, anio, transmision, color, kilometraje, price)
    carLists.newCar( Car )
    crearHtml( Car )
    
    //limpiando los input
    $('#brand').val("");
    $('#model').val("");
    $('#year').val("");
    $('#transmision').val("");
    $('#color').val("");
    $('#kilometraje').val("");
    $('#price').val("");
    
})


//funciones
function crearHtml( car ){
   $('#AddCarList').append(`
    <ul >
    <li>${car.marca}</li>
    <li>${car.modelo}</li>
    <li>${car.anio}</li>
    <li>${car.transmision}</li>
    <li>${car.color}</li>
    <li>${car.kilometraje}</li>
    <li>${car.precio}</li>
    </ul>
    `);

}

//fade de agregando...
const li = $('#add');
const rot = $('.fa-sync-alt');
$('.button-70').click( ()=>{
    li.fadeIn(1000);
    li.fadeOut(1000);
    rot.animate(
        { deg: 180 },
        {
          duration: 1200,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        }
      );
    
})


