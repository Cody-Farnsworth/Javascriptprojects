function Ride_Function() {                  // Function using HTML and Java that utilizes a ternary operation
    var Height, Can_ride;
    Height=document.getElementById("Height").Value;
    Can_ride=(Height<52)?"you are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+" to ride.";
}

function Vehicle(Make, Model, Year, Color) {                // The next two functions are a "new and "this function along with a constructor function
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML="Erik drives a "+Erik.Vehicle_Color+"-colored "+Erik.Vehicle_Model+
    " manufactured in "+ Erik.Vehicle_Year;
}

function count_Function() {                     // This is a nested function
    document.getElementById("Nested_Function").innerHTML=Count();
    function Count() {
        var Starting_point= 9;
        function Plus_one() {Starting_point +- 1;}
        Plus_one();
        return Starting_point;
    }
}