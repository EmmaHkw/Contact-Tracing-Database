console.log("hello");
let contactDatabase = [];


// defined contact object with all its properties
class Contact {

  constructor(name, date, location, distance, len, masks) {

    this.name = name;
    this.date = date;
    this.location = location;
    this.distance = distance;
    this.len = len;
    this.masks = masks;
  }

}

function addContact() {

  let table = document.getElementById("myTable");
  let rowNumber = table.rows.length;
  console.log(rowNumber);

  // adding a new row with the same number of cells
  let row = table.insertRow(rowNumber);
  console.log(rowNumber);

  console.log(table);

  let form = document.getElementById("trackerForm");

  // taking the values the user inputted in the form
  let name = form.elements["name"].value;
  let date = form.elements["date"].value;
  let location = form.elements["location"].value;
  let distance = form.elements["distance"].value;
  console.log(distance);
  let len = form.elements["len"].value;
  console.log(len);
  let masks = form.elements["masks"].value;


  //using these values to create a new Contact (using the constructor in the beginning)
  let newPerson = new Contact(name, date, location, distance, len, masks);

  console.log(newPerson);

  console.log(contactDatabase);


  //pushing "newPerson" into the contactDatabase array
  contactDatabase.push(newPerson);

  //putting contactDatabase into local storage (under the tag contactDatabase)
  localStorage.setItem("contactDatabase", JSON.stringify(contactDatabase));

  console.log(contactDatabase);


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
  lengthCell.innerHTML = newPerson.len;

  let masksCell = row.insertCell(5);
  masksCell.innerHTML = newPerson.masks;

  // delete button
  let deleteCell = row.insertCell(6);

  let deleteButton = document.createElement("BUTTON");
  let dt = document.createTextNode("❌");
  //console.log(dt);
  deleteButton.appendChild(dt);
  // delete action is wrapped in second function so that it does not automatically trigger
  deleteButton.addEventListener("click", function() {
    console.log(rowNumber);
    deleteContact(rowNumber)
  });
  deleteCell.appendChild(deleteButton);

  // confirm button
  let confirmCell = row.insertCell(7);

  let confirmButton = document.createElement("BUTTON");
  let cf = document.createTextNode("✔️");
  //console.log(cf);
  confirmButton.appendChild(cf);

  confirmButton.addEventListener("click", function() {
    console.log(rowNumber);
    confirm(rowNumber)
  });
  confirmCell.appendChild(confirmButton);


}

// prints out contacts from local storage
function printOutContacts() {

  let data;
  //take the string and turn it into array that contains objects
  data = JSON.parse(localStorage.getItem('contactDatabase'));

  //data has properties (generic objects and not linked to class) and Contact() are added in contactDatabase but no properties
  for (let i in data) {
    contactDatabase[i] = new Contact();
    Object.assign(contactDatabase[i], data[i]);
  }
  console.log(contactDatabase);

  // tbl contains table <-- you can add to it
  let tbl = document.getElementById("myTable");
  console.log(tbl);

  //putting values from local storage into myTable

  for (let i = 0; i < contactDatabase.length; i++) {
    // important: added this line --> check if works
    let rowNumber = tbl.rows.length;
    let newRow = tbl.insertRow();
    // make new row everytime you loop through
    let newCell = newRow.insertCell();
    newCell.innerHTML = contactDatabase[i].name;

    let newCell2 = newRow.insertCell();
    newCell2.innerHTML = contactDatabase[i].date;

    let newCell3 = newRow.insertCell();
    newCell3.innerHTML = contactDatabase[i].location;

    let newCell4 = newRow.insertCell();
    newCell4.innerHTML = contactDatabase[i].distance;

    let newCell5 = newRow.insertCell();
    newCell5.innerHTML = contactDatabase[i].len;

    let newCell6 = newRow.insertCell();
    newCell6.innerHTML = contactDatabase[i].masks;

    let newCell7 = newRow.insertCell();


    let deleteButton = document.createElement("BUTTON");
    let dt = document.createTextNode("❌");
    //console.log(dt);
    deleteButton.appendChild(dt);
    // delete action is wrapped in second function so that it does not automatically trigger
    deleteButton.addEventListener("click", function() {
      deleteContact(rowNumber)
    });
    newCell7.appendChild(deleteButton);

    let newCell8 = newRow.insertCell();

    let confirmButton = document.createElement("BUTTON");
    let cf = document.createTextNode("✔️");
    //console.log(cf);
    confirmButton.appendChild(cf);

    confirmButton.addEventListener("click", function() {
      confirm(rowNumber)
    });
    newCell8.appendChild(confirmButton);

  }
}

function deleteContact(rowNumber) {
  console.log(rowNumber);
  console.log(contactDatabase);

  //deleting the row in contactDatabase
  contactDatabase.splice(rowNumber - 1, 1);
  console.log(contactDatabase);

  //put the changed contactDatabase back into local storage
  localStorage.setItem("contactDatabase", JSON.stringify(contactDatabase));
  //reload the page
  //location.reload();

  //contactDatabase.splice(rowNumber - 1, 1);
  //console.log(contactDatabase);
  //console.log(contactDatabase.rowNumber);
  //localStorage.setItem("contactDatabase", JSON.stringify(contactDatabase));
  location.reload();

}


function confirm(rowNumber) {


  console.log(rowNumber);

  //finding the person you were in contact with and was confirmed
  let confirmedPerson = contactDatabase[rowNumber - 1];
  console.log(confirmedPerson);
  console.log(confirmedPerson.date);

  //ask users when their contact was confirmed with COVID-19

  questionDate = window.prompt("When were they confirmed?\nPlease type it in the format YYYY-MM-DD");


  if (questionDate.slice(0, 4) == confirmedPerson.date.slice(0, 4)) {

    //just checking if the format is correct
    if (questionDate[4] === confirmedPerson.date[4]) {
      if (questionDate[7] === confirmedPerson.date[7]) {

        let confirmedMonth = Number(questionDate[5] + questionDate[6]);
        console.log(`confirmedMonth = ${confirmedMonth}`);
        //Number(confirmedMonth);
        console.log(typeof confirmedMonth);

        let confirmedDay = Number(questionDate[8] + questionDate[9]);
        console.log(`confirmedDay = ${confirmedDay}`);

        let personMonth = Number(confirmedPerson.date[5] + confirmedPerson.date[6]);
        console.log(`personMonth = ${personMonth}`);

        let personDay = Number(confirmedPerson.date[8] + confirmedPerson.date[9]);
        console.log(`personDay = ${personDay}`);

        if (confirmedMonth == personMonth) {

          console.log("be careful");

          // confirmedDay - 14 is the (earliest) day the person was infected (as the incubation period ranges from 1 to 14 days)
          if (personDay > confirmedDay - 14) {

            // if you met them during their incubation period, the database would recommend you to self quarantine
            console.log("get tested");

            if (confirmedPerson.distance < 2 || confirmedPerson.len > 15 || confirmedPerson.masks.value === "no") {

              // suggestions for user
              window.alert(`As you met ${confirmedPerson.name} during their incubation period, based on Public Health guidelines, please self-quarantine and get tested`);

            } else {

              console.log("good behaviour👍🏻 ");
              console.log(confirmedPerson.name);
              window.alert(`Although you met ${confirmedPerson.name} during their incubation period, due to your compliance with the Public Health Guidelines, you should be fine.\nHowever, please still monitor yourself closely and get tested if you have any symptoms.`)
            }

          } else if (personDay < confirmedDay - 14) {

            console.log("should be fine");
            window.alert(`Based on the information you entered, you did not meet ${confirmedPerson.name} during their incubation period. You should be fine but please still monitor yourself closely as incubation periods could vary depending on the person.\nPlease get tested if you have any symptoms.`);

          }
        } else if (confirmedMonth == personMonth + 1) {

          console.log(personMonth + 1);
          console.log("month before");

          // Note: due to complexity, I am just assuming there is 30 days in every month.
          if (personDay > confirmedDay + 30 - 14) {

            if (confirmedPerson.distance < 2 || confirmedPerson.len > 15 || confirmedPerson.masks.value === "no") {

              console.log("get tested");
              // suggestions for user
              window.alert(`As you met ${confirmedPerson.name} during their incubation period, based on Public Health guidelines, please self-quarantine and get tested`);

            } else {

              console.log("good behaviour👍🏻 ");
              console.log(confirmedPerson.name);
              window.alert(`Although you met ${confirmedPerson.name} during their incubation period, due to your compliance with the Public Health Guidelines, you should be fine.\nHowever, please still monitor yourself closely and get tested if you have any symptoms.`)

            }

          } else if (personDay < confirmedDay + 30 - 14) {

            console.log("should be fine");
            window.alert(`Based on the information you entered, you did not meet ${confirmedPerson.name} during their incubation period. You should be fine but please still monitor yourself closely as incubation periods could vary depending on the person.\nPlease get tested if you have any symptoms.`);
          }
        } else if (confirmedMonth > personMonth + 1) {

          console.log("should be fine");
          window.alert(`Based on the information you entered, you did not meet ${confirmedPerson.name} during their incubation period. You should be fine but please still monitor yourself closely as incubation periods could vary depending on the person.\nPlease get tested if you have any symptoms.`);

        }
      }
    }
  } else {

    console.log("should be fine");
    window.alert(`Based on the information you entered, you did not meet ${confirmedPerson.name} during their incubation period. You should be fine but please still monitor yourself closely.\nPlease get tested if you have any symptoms.`);

  }

}
