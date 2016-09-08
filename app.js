let _ = require('lodash');
let friends = [
{   Name: "Peter Smeal",
    Gender: "Male",
    Hometown: "Morgan City",
    Age: "42",
    Bestie: true,
},
{   Name: "Ana Karim",
    Gender: "Female",
    Hometown: "Wingate",
    Age: "44",
    Bestie: false,
},
{   Name: "Kelly Nicholson",
    Gender: "Female",
    Hometown: "Mingo",
    Age: "31",
    Bestie: false,
},
{   Name: "Ryan Clemmons",
    Gender: "Male",
    Hometown: "Yoder",
    Age: "40",
    Bestie: true,
},
{   Name: "Carlos Feldman",
    Gender: "Male",
    Hometown: "Miami",
    Age: "48",
    Bestie: false,
}
]

window.addEventListener('load', function () {
    for (i=0; i<friends.length; i++){
    $("#friendslist").append('<li class="friend"><h2>' + friends[i].Name + '</h2><p>' + friends[i].Gender + '</p><p>' + friends[i].Hometown + '</p><p>' + friends[i].Age + '</p><p>' + friends[i].Bestie + '</p></li>');
    }

$("li").draggable({
    revert: true,
  });

$( "section" ).droppable({
      drop: function( event, ui ) {

        console.log("dropped");
        console.log(friends);    
      }
    });
});

