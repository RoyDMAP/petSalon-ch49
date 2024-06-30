console.log("register.js")

// Pet Registration:

// In the pets array, create 3 pets using object literals, eah with the following properties:
// Name
// Age
// Gender
// Service
// Breed

let pets = [
    {
      name: "Scooby",
      age: 8,
      gender: "Male",
      service: "grooming",
      breed: "bulldog",
    },

    {
      name: "Scrappy",
      age: 7,
      gender: "Male",
      service: "nail",
      breed: "germanShepard",
    },

    {
      name: "Tweety",
      age: 85,
      gender: "Female",
      service: "grooming",
      breed: "pitbull"
    },
];
  
console.log(pets);

function displayPetCount() {
    let pets = length;

}

function displayNames() {
    document.getElementById("petList").innerHTML += `<li>${pets[0].name}`;
    document.getElementById("petList").innerHTML += `<li>${pets[1].name}`;
    document.getElementById("petList").innerHTML += `<li>${pets[2].name}`;
    
}
