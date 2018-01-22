$(document).ready(function() {
  setTimeout(function() {
     $(".splash-screen").fadeOut(1500);
 },3000);

 setTimeout(function() {
       $(".main-section").fadeIn(1500);
   },3000);
   $("#myModal").modal();

});




function loadPage() {
  $("#input1").keyup(filterRestaurants);
}



/*var resturantes = [];
var $input1 = $("nameInput");
*/
/*var resturants = {
    "name": name,
	"location": location,
	"kind": kind,
 };

console.log(resturants);*/


/*function validateContact () {
  var $containerAddContact = $("#add-contact");

  if($(this).val().trim().length > 0) {
    $containerAddContact.removeAttr("disabled");
  } else {
    $containerAddContact.attr("disabled" , true);
  }
}*/

/*$(document).ready(loadPage);*/


/*
var filterRestaurants = $("#restaurants");

var otra = filterRestaurants.value;*/

var totalRestaurants = data;

console.log(totalRestaurants);


/*var resturantsName = data["name"];



console.log(resturantsName);*/


 var restaurantsName = [];


for (var i = 0; i < data.length; i ++){
   restaurantsName += data[i].name;


  }
  console.log(restaurantsName.name);
 /*
for (var i = 0; i < totalStudents; i++ ) {
var alumnActiva = data[sedes][generation].students[i].active;

  if (alumnActiva===true){
    activas++;
  }
  else {
    inActivas++;

  }
  }
*/
/*
 var restaurantsName = $nameInput.val();
  // Con las variables separadas que obtuvimos creamos una estructura de datos unica, un objeto por cada contacto
  var rest = {
    "name": name,
  };*/

var restaurants = [];

restaurants.push(restaurantsName);

paintRestaurants(restaurantsName);

function paintRestaurants (restaurantsName) {
  // crear elementos con DOM
  var $newRestaurant = $("<p/>");

/*  console.log($newRestaurant);
*/  // agregamos lo que creamos con el Dom a un elemento existente del html


  $("#publish-restaurants").prepend($newRestaurant);

}


 function filterRestaurants (){
  var searchRestaurant = $("#input1").val().toLowerCase();
    if($("#input1").val().trim().length > 0) {
        var filteredRestaurants = restaurants.filter(function(restaurantsName) {
           // console.log(restaurantsName);
            return resturants1.name.toLowerCase().indexOf(searchRestaurant) >= 0;
        });
      $("#publish-restaurants").empty();
      filteredRestaurants.forEach(function(restaurantsName){
        paintRestaurants(restaurantsName);
      });
    } else {
      $("#publish-restaurants").empty();
      restaurants.forEach(function(restaurantsName){
        paintRestaurants(restaurantsName);
      });
    }


  }

console.log(restaurants);
