//var car = {
//    make: "volvo",
//    speed: 160,
//    engine: {
//        size: 2.0,
//        make: "bmw",
//        fuel: "petrol",
//        pistons:[
//            { maker: "BMW" },
//            { maker: "BMW2" }
//        ]
//    },
//    drive: function(){ return "drive"; }
//};
//
//// Assignment
//
//car.make = "Ford";
//car.make += " Chevy";
//
//car.speed += 50;
//car.speed -= 10;
//car.speed *= 2;
//car.speed /= 2;
//car.speed **= 2;
//car.speed %= 33;
//
//// Creation
//
//car.model = "v60";
//car.color = "red";
//
//car.stop = function()}{ return "stop"; };
//
//// Delete
//
//delete car.color;
//delete car.drive;


function Apple(color, weight)
{
	this.color = color;
	this.weight = weight;
}

Apple.prototype = {
	eat		: function(){ return this; },
	throw	: function(){ return "throw the apple"; }
};

var apple1 = new Apple( "red", 	99);
var apple2 = new Apple( "green", 109);
var apple3 = new Apple( "yellow", 299);

