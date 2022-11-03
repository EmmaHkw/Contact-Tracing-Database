console.log("hello");
let contactDatabase = [];

// defined contact oject wil all its properties

class Contact {

  constructor(name, date, location, distance, length, masks){

    this.name = name;
    this.date = date;
    this.location = location;
    this.distance = distance;
    this.length = length;
    this.masks = masks;
  }

  confirm(confirmDate){

    this.confirmDate = confirmDate;
    this.symptoms = true;

  }

}

function addContact(){

let person1 = new Contact ("Ian", "10 October", "3:00", "Park", "2m", "4 hours", "yes");
console.log(person1);
person1.confirm("17 October");
console.log(person1);

let table = document.getElementById("myTable");
let rowNumber = table.rows.length;
// adding a new roll with the same number of cells
let row = table.insertRow(rowNumber);

console.log(table);

let form = document.getElementById("trackerForm");

// taking the values the user inputted in the form
let name = form.elements["name"].value;
let date = form.elements["date"].value;
let location = form.elements["location"].value;
let distance = form.elements["distance"].value;
let length = form.elements["length"].value;
let masks = form.elements["masks"].value;

// using these values to create a new Contact (using the constructor in the beginning)
let newPerson = new Contact(name, date, location, distance, length, masks);


//adding the values the user just inputted into the myTable

let nameCell = row.insertCell(0);
nameCell.innerHTML = newPerson.name;

let dateCell = row.insertCell(1);
dateCell.innerHTML = newPerson.date;

let locationCell = row.insertCell(2);
locationCell.innerHTML = newPerson.location;

let distanceCell = row.insertCell(3);
distanceCell.innerHTML = newPerson.distance;

let lengthCell = row.insertCell(4);
lengthCell.innerHTML = newPerson.length;

let masksCell = row.insertCell(5);
masksCell.innerHTML = newPerson.masks;


// pushing "newPerson" into the contactDatabase array
contactDatabase.push(newPerson);

// saving it into local storage
localStorage.setItem("newPerson",JSON.stringify(contactDatabase));

console.log(contactDatabase);


}

// prints out contacts from local storage
function printOutContacts(){

let data;
//take the string and turn it into array that contains objects
data = JSON.parse(localStorage.getItem('newPerson'));

//data has properties (generic objects and not linked to class) and Contact() are added in contactDatabase but no properties
  for (let i in data){
    contactDatabase[i] = new Contact();
    Object.assign(contactDatabase[i], data[i]);
  }
  console.log(contactDatabase);

// tbl contains table <-- you can add to it
let tbl = document.getElementById("myTable");
console.log(tbl);

//putting values from local storage into myTable

for (let i = 0; i < contactDatabase.length; i++){
  let newRow = tbl.insertRow();
  // make new row everytime you loop through
  let newCell = newRow.insertCell();
  newCell.innerHTML = contactDatabase[i].name;
  // make new cell everytime you loop through and add myData.bladeLength into the cell
  let newCell2 = newRow.insertCell();
  newCell2.innerHTML = contactDatabase[i].date;

  let newCell3 = newRow.insertCell();
  newCell3.innerHTML = contactDatabase[i].location;

  let newCell4 = newRow.insertCell();
  newCell4.innerHTML = contactDatabase[i].distance;

  let newCell5 = newRow.insertCell();
  newCell5.innerHTML = contactDatabase[i].length;

  let newCell6 = newRow.insertCell();
  newCell6.innerHTML = contactDatabase[i].masks;
}
}
