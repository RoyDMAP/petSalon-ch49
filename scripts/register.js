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
function Pet(name,age,gender,breed,service,type,Payment){
    this.name=name;   //property example, when "this" is used it is called parameter
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
    this.Payment=Payment;

}



function isValid(aPet){
    let validation=true;//assuming the pet is valid

    if(aPet.name==""){ //is the name empty?
        //if the answer was yes, you will be executing the line
        alert("Please add a name to the pet");
        validation=false;
}
    return validation;

}

function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("txtService").value;
    let inputType=document.getElementById("txtType").value;
    let inputPayment=document.getElementById("txtPayment").value;

    console.log(inputName,inputAge,inputGender,inputBreed,inputService,inputType,inputPayment);
    
    //add Service
    //add Type
// create the obj
let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputService,inputType,inputPayment); //add Service and Type

if(isValid(newPet)){
    //pushing the new pet to the array
    pets.push(newPet);
    console.log(pets); //displaying the array
    displayPetCount(); //thi is a function
    displayTable();
    clearForm();
    }
}
function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtService").value="";
    document.getElementById("txtType").value="";
    document.getElementById("txtPayment").value="";
}
//Add Service and Type.  Type=type of pet

// Extra challenge
function calculateAverage(){}

function deletePet(aPet){
    console.log("Deleting pet ... " + aPet);
    document.getElementById(aPet).remove();
    pets.splice(aPet,1);
    displayTable();
    displayPetCount();
}
function init(){
    //the initialization function
    let pet1 = new Pet("Scooby",99,"Male","Dane", "Grooming", "Dog", "Credit Card");
    let pet2 = new Pet("Scrappy",99,"Male","Dane", "Grooming", "Dog", "Credit Card");
    let pet3 = new Pet("Tweety",99,"Male","Dane", "Grooming", "Dog", "Credit Card");
    let pet4 = new Pet("Sparky",25,"Male", "Pincher", "Grooming", "Dog", "Credit Card");
    pets.push(pet1,pet2,pet3,pet4);
    displayPetCount();
    displayTable();

}
window.onload=init;//waiting for render the HTML




