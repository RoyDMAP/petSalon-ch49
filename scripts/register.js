console.log("register.js")

// Pet Registration:

// In the pets array, create 3 pets using object literals, eah with the following properties:
// Name
// Age
// Gender
// Service
// Breed

let pets = []
 
//create the pet constructor
//parameters..name,age,gender,breed
function Pet(name,age,gender,breed,service,type){
    this.name=name;   //property example, when "this" is used it is called parameter
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;

}

function displayPetCount() {
    console.log(pets.length); 
}

function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("txtService").value;
    let inputType=document.getElementById("txtType").value;
    console.log(inputName,inputAge,inputGender,inputBreed,inputService,inputType);
    //add Service
    //add Type
// create the obj
let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputService,inputType); //add Service and Type
//pushing the new pet to the array
pets.push(newPet);
console.log(pets); //displaying the array
displayPetCount(); //thi is a function
}


//Add Service and Type.  Type=type of pet
