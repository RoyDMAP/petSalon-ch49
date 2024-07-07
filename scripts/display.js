function displayPetcards() {
    let card="";
    for(let i=0;i<pets.length;i++){
        let pet = pets[i];
        card+=`
        <div class="pet">
            <h6>${pet.name}</h6>
            <p>${pet.age}</p>
            <p>${pet.gender}</P>
            <p>${pet.breed}</p>
            <p>${pet.service}</p>
            <p>${pet.type}</p>
            <p>${pet.Payment}</p>
        </div>
        `;
    }
    document.getElementById("pets").innerHTML=row;
}

function displayTable(){
    let row="";//creating a var

    for(let i=0;i<pets.length;i++){//travel the array
        let pet = pets[i];//getting each pet on the array (one by one)
        row+=`
        <tr id="${i}">
            <td>${i}</td>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.type}</td>
            <td>${pet.Payment}</td>
            <td><button onclick="deletePet(${i});">Delete</button></td>
        </tr>
        `;
    }
    document.getElementById("petTable").innerHTML=row;
}
function displayPetCount() {
    document.getElementById("total").innerHTML="Total:" +pets.length;

}
