function Service(description, price){
    this.description = description;
    this.price = price
}

function register(){
    let inputDescription = $("#txtDescription").val();

    //get inputPrice

    //create a new Obj
    let newService = new Service(inputDescription, inputPrice)

    // Do validations
}