let van = new Cat("Van",65,45);
let chuot1= new Rat("Binh", 56,38);
let chuot2= new Rat("Than", 46,49);
let chuot3= new Rat("Cuong", 57,42);
van.CatchRat(chuot1);
van.CatchRat(chuot2);
van.CatchRat(chuot3);
van.EatRat(chuot1);
van.EatRat(chuot2);
van.EatRat(chuot3);
console.log(chuot1.status)
console.log(chuot2.status)
console.log(chuot3.status)
