var firstName = "Denis";
var lastName = "Bandic";
var fullName = firstName + " " + lastName;


// console.log("full name: "fullName);

for (var i = 1; i <= 20; i++){
   if (i % 2 == 0){
    //console.log("Broj " + i + " je paran") 
   }
    else {
       // console.log("Broj " + i + " je neparan");
    }
}
var names = ["John", "Jane", "Mike"];
for(let i =0; i< names.length; i++){
    //console.log(names[i])
}
var names = ["John", "Jane", "Mike"];
for (var i = 0; i < names.length; ++i) {
    console.log(names[i]);
}

names.forEach(function(value){
    console.log(value);
});


