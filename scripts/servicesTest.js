console.log("hello")
function services(description, price) {
    this.description = description;
    this.price = price;
}

function Service(){
    let inputServices = $("#txtServices").val();
    let newServices = new Services(inputDescription, inputPrice)

}

let services = []
 
function newServices(Services, price){
    this.Services=Services;   
    this.price=price;
    
}

function isValid(Services){
    let validation=true;

    if(newServices.name==""){ 
        
        alert("Please add a description");
        validation=false;
}
    return validation;

}

function Services(){
    let inputServices=document.getElementById("txtServices").value;
    let inputPrice=document.getElementById("txtPrice").value;
    

    console.log(inputServices,inputPrice);

let newServices = new Services(inputServices,inputPrice); //add Service and Type

if(isValid(newServices)){
    
    Services.push(newServices);
    console.log(newServices); 
    displayServices(); 
    displayTable();
    clearForm();
    }
}
function clearForm(){
    $("#txtServices").value="";
    $("#txtPrice").value="";
    //document.getElementById("txtServices").value="";
    //document.getElementById("txtPrice").value="";

}

function calculateAverage(){}

function deleteServices(aServices){
    console.log("Deleting Services ... " + aServices);
    document.getElementById(aServices).remove();
    Services.splice(aServices,1);
    displayTable();
    displayServicesCount();
}
// function init(){
//     //the initialization function
//     let Services1 = new Services("Grooming","Price");
//     let Services2 = new Services("Nail Clipping","Price");
//     let Services3 = new Services("Ear Cleaning","Price");
//     Services.push(Services1,Services2,Services3);
//     displayServicesCount();
//     displayTable();

// }





