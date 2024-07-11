console.log("Hello")
function Service(description, price) {
    this.description = description;
    this.price = price;
}
function register(){
   let inputDescription = $
   ("#txtDescription").val()
   let inputPrice = $("#txtPrice").val()
   
   console.log(inputDescription)
   console.log(inputPrice)

   let newService = new Service (inputDescription, inputPrice)

   let isValid = isValidService(newService)
   console.log("isValid = ", isValid)

   if(isValid == true){
    // save the service in the LocalStorage
   }
}

function isValidService(newService) {
    //console.log(newService.Description)
    
    let isValidDescription = true; 

    if(newService.description == ""){
        isValidDescription = false
        $("#txtDescription").css("background", "red")

    }else {
        isValidDescription = true
        $("#txtDescription").css("background", "none")
    }
    
    if(newService.price == ""){
        isValidPrice = false
        $("#txtPrice").css("border", "solid 1px red")
    }else {
        isValidPrice = true
        $("#txtPrice").css("border", "none")
    }
    return isValidDescription && isValidPrice

    console.log("isValidDescription", isValidDescription) 
    console.log("isValidPrice", isValidPrice)
}
