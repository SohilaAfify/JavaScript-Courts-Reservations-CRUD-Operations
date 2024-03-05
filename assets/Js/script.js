var customerFirstName = document.getElementById("firstName");
var customerLastName = document.getElementById("lastName");
var customerEmail = document.getElementById("userEmail");
var customerPhoneNumber = document.getElementById("phoneNumber");
var customerSports = document.getElementById("dropdownMenuButton1");
var customerCourts = document.getElementById("dropdownMenuButton2");
var customerReservationTime = document.getElementById("dropdownMenuButton3");


var customerData = [];
var customerReservation;


if (localStorage.getItem("CustomersReservationData") != null) {
  customerData = JSON.parse(localStorage.getItem("CustomersReservationData"));
}
function addCustomerReservations() {
  if (
    !customerFirstName.value ||
    !customerLastName.value ||
    !customerEmail.value ||
    !customerPhoneNumber.value ||
    !customerSports.value ||
    !customerCourts.value ||
    !customerReservationTime.value
  ) {
    alert("Please fill in all the required fields.");
    return false; // Prevent form submission
  }

else{
  customerReservation = {
    firstName: customerFirstName.value,
    lastName: customerLastName.value,
    email: customerEmail.value,
    phoneNumber: customerPhoneNumber.value,
    sports: customerSports.options[customerSports.selectedIndex].value,
    courts: customerCourts.options[customerCourts.selectedIndex].value,
    reservationTime:
      customerReservationTime.options[customerReservationTime.selectedIndex]
        .value,
  };
  customerData.push(customerReservation);
  console.log(customerData);
  //Setting a value in local storage:
  localStorage.setItem(
    "CustomersReservationData",
    JSON.stringify(customerData)
  ); //Convert the list to a string using JSON.stringify()
}



  showReservationData();
  
}

function showReservationData() {
  var customers = ``;
  var storedData = JSON.parse(localStorage.getItem("CustomersReservationData"));
  document.getElementById("totalNumber").innerHTML=" (Number of reservations: "+customerData.length+")";
  document.getElementById("deleteAllButton").innerHTML="Delete all reservations ("+customerData.length+")";

  if (storedData != null) {
    for (var i = 0; i < customerData.length; i++) {
      customers += `<tr > 
            <td >${customerData[i].firstName}</td>
            <td >${customerData[i].lastName}</td>
            <td >${customerData[i].email}</td>
            <td >${customerData[i].phoneNumber}</td>
            <td >${customerData[i].sports}</td>
            <td >${customerData[i].courts}</td>
            <td >${customerData[i].reservationTime}</td>
            <td>
            <button type="button" class="btn btn-light" data-toggle="modal" data-target="#myModal${i}">
        Update
    </button>

    <div class="modal fade" id="myModal${i}">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title popupForm">Update Reservations</h5>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <div class="modal-body">
                <label for="updateFirstName${i}" class="form-label popupForm">First name</label>
                <input type="text" class="form-control" id="updateFirstName${i}" placeholder="Enter your first name" value=${customerData[i].firstName}>
                </div>

                <div class="modal-body">
                <label for="updateLastName${i}" class="form-label popupForm">Last name</label>
                <input type="text" class="form-control" id="updateLastName${i}"  name="updateLastName${i}"  placeholder="Enter your last name" value=${customerData[i].lastName}>
                </div>

                <div class="modal-body">
                <label for="updateUserEmail${i}" class="form-label popupForm">Email address</label>
                <input type="email" class="form-control" id="updateUserEmail${i}" name="updateUserEmail${i}"  placeholder="Enter your email address" value=${customerData[i].email}>
                </div>

                <div class="modal-body">
                <label for="updatePhoneNumber${i}" class="form-label popupForm">Phone number</label>
                <input type="text" class="form-control" id="updatePhoneNumber${i}" name="updatePhoneNumber${i}" placeholder="+(02)" value=${customerData[i].phoneNumber}>
                </div>

                <div class="modal-body">
                <label for="UpdateDropdownMenuButton1${i}" class="form-label popupForm">Sports</label>
                <select class="form-select" id="UpdateDropdownMenuButton1${i}" name="UpdateDropdownMenuButton1${i}">
                    <option value="">Choose a sport</option>
                    <option value="Football">Football</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Padel">Padel</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Golf">Golf</option>
                    <option value="Volleyball">Volleyball</option>
                    <option value="Squash">Squash</option>
                  </select>
                </div>

                <div class="modal-body">
                <label for="UpdatedDropdownMenuButton2${i}" class="form-label popupForm">Court</label>
                <select class="form-select" id="UpdatedDropdownMenuButton2${i}" name="UpdateDropdownMenuButton2${i}">
                    <option value="">Choose a court</option>
                    <option value="Court 1">Court 1</option>
                    <option value="Court 2">Court 2</option>
                    <option value="Court 3">Court 3</option>
                    <option value="Court 4">Court 4</option>
                    <option value="Court 5">Court 5</option>
                    <option value="Court 6">Court 6</option>
                    <option value="Court 7">Court 7</option>
                    <option value="Court 8">Court 8</option>
                  </select>
                </div>

                <div class="modal-body">
                <label for="UpdatedDropdownMenuButton3${i}" class="form-label popupForm">Available reservation time</label>
                <select class="form-select" id="UpdatedDropdownMenuButton3${i}" name="UpdateDropdownMenuButton3${i}">
                    <option value="">Choose a time</option>
                    <option value="From 08:00 Am to 10:00 AM">From 08:00 Am to 10:00 AM</option>
                    <option value="From 10:00 Am to 12:00 PM">From 10:00 Am to 12:00 PM</option>
                    <option value="From 12:00 Pm to 02:00 PM">From 12:00 Pm to 02:00 PM</option>
                    <option value="From 02:00 Pm to 04:00 PM">From 02:00 Pm to 04:00 PM</option>
                    <option value="From 04:00 Pm to 06:00 PM">From 04:00 Pm to 06:00 PM</option>
                    <option value="From 06:00 Pm to 08:00 PM">From 06:00 Pm to 08:00 PM</option>
                    <option value="From 08:00 Pm to 10:00 PM">From 08:00 Pm to 10:00 PM</option>
                  </select>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-dark" data-dismiss="modal" onclick="updateReseravtionData(${i})">Save changes</button>
                </div>
            </div>
        </div>
    </div>
            <button type="button" class="btn btn-danger" onclick="deleteReservation(${i})">Delete</button>
            </td>
            </tr>`;
    }
  } else {
    customers += `<tr> 
        <td>No data</td>
        <td>No data</td>
        <td>No data</td>
        <td>No data</td>
        <td>No data</td>
        <td>No data</td>
        <td>No data</td>
        <td>No data</td>
        </tr> `;
  }

  document.getElementById("allReservations").innerHTML = customers;
}

function deleteReservation(index) {
  customerData = JSON.parse(localStorage.getItem("CustomersReservationData"));
  // it means that 1 element will be removed from the myList array
  customerData.splice(index, 1);
  localStorage.setItem(
    "CustomersReservationData",
    JSON.stringify(customerData)
  );
  if (customerData.length == 0) {
    localStorage.clear();
  }
  
  showReservationData();
  
}

function deleteAllReservations() {
  customerData.splice(0, customerData.length);
  localStorage.clear();
  showReservationData();
  console.log(customerData);
}

function updateReseravtionData(index) {
  JSON.parse(localStorage.getItem("CustomersReservationData"));

  var customerFirstNameUpdate = document.getElementById(
    "updateFirstName" + index
  );
  var customerLastNameUpdate = document.getElementById(
    "updateLastName" + index
  );
  var customerEmailUpdate = document.getElementById("updateUserEmail" + index);
  var customerPhoneNumberUpdate = document.getElementById(
    "updatePhoneNumber" + index
  );
  var customerSportsUpdate = document.getElementById(
    "UpdateDropdownMenuButton1" + index
  );
  var customerCourtsUpdate = document.getElementById(
    "UpdatedDropdownMenuButton2" + index
  );
  var customerReservationTimeUpdate = document.getElementById(
    "UpdatedDropdownMenuButton3" + index
  );
  var iUpdate = customerData[index];

  if (customerFirstNameUpdate.value) {
    iUpdate.firstName = customerFirstNameUpdate.value;
  }

  if (customerLastNameUpdate.value) {
    iUpdate.lastName = customerLastNameUpdate.value;
  }

  if (customerEmailUpdate.value) {
    iUpdate.email = customerEmailUpdate.value;
  }

  if (customerPhoneNumberUpdate.value) {
    iUpdate.phoneNumber = customerPhoneNumberUpdate.value;
  }

  if (customerSportsUpdate.value) {
    iUpdate.sports =
      customerSportsUpdate.options[customerSportsUpdate.selectedIndex].value;
  }

  if (customerCourtsUpdate.value) {
    iUpdate.courts =
      customerCourtsUpdate.options[customerCourtsUpdate.selectedIndex].value;
  }

  if (customerReservationTimeUpdate.value) {
    iUpdate.reservationTime =
      customerReservationTimeUpdate.options[
        customerReservationTimeUpdate.selectedIndex
      ].value;
  }

  console.log(customerData);

  localStorage.setItem(
    "CustomersReservationData",
    JSON.stringify(customerData)
  );
  console.log(customerData);
  showReservationData();
}

function searchReservations() {
  var customers = ``;
  var searchInput = document.getElementById("searchInput").value;
  var storedData = JSON.parse(localStorage.getItem("CustomersReservationData"));
  console.log(searchInput);
  var filteredResults = customerData.filter(
    (data) =>
      data.firstName.toLowerCase().split(" ").join("") ==
        searchInput.toLowerCase().split(" ").join("") ||
      data.lastName.toLowerCase().split(" ").join("") ==
        searchInput.toLowerCase().split(" ").join("") ||
      data.email.toLowerCase().split(" ").join("") ==
        searchInput.toLowerCase().split(" ").join("") ||
      data.phoneNumber.toLowerCase().split(" ").join("") ==
        searchInput.toLowerCase().split(" ").join("") ||
      data.sports.toLowerCase().split(" ").join("") ==
        searchInput.toLowerCase().split(" ").join("") ||
      data.courts.toLowerCase().split(" ").join("") ==
        searchInput.toLowerCase().split(" ").join("") ||
      data.reservationTime.toLowerCase().split(" ").join("") ==
        searchInput.toLowerCase().split(" ").join("")
  );

  if (storedData != null) {
    if (filteredResults.length > 0) {
      for (let k = 0; k < filteredResults.length; k++) {
        console.log(filteredResults[k].phoneNumber, filteredResults[k].email);
        console.log("filteredResults ", filteredResults);
        customers += `<tr> 
    <td >${filteredResults[k].firstName}</td>
    <td >${filteredResults[k].lastName}</td>
    <td >${filteredResults[k].email}</td>
    <td >${filteredResults[k].phoneNumber}</td>
    <td >${filteredResults[k].sports}</td>
    <td >${filteredResults[k].courts}</td>
    <td >${filteredResults[k].reservationTime}</td>
    <td>
    <button type="button" class="btn btn-light" data-toggle="modal" data-target="#myModal${k}">
Update
</button>

<div class="modal fade" id="myModal${k}">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title popupForm">Update Reservations</h5>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">
        <label for="updateFirstName${k}" class="form-label popupForm">First name</label>
        <input type="text" class="form-control" id="updateFirstName${k}" placeholder="Enter your first name">
        </div>

        <div class="modal-body">
        <label for="updateLastName${k}" class="form-label popupForm">Last name</label>
        <input type="text" class="form-control" id="updateLastName${k}"  name="updateLastName${k}"  placeholder="Enter your last name">
        </div>

        <div class="modal-body">
        <label for="updateUserEmail${k}" class="form-label popupForm">Email address</label>
        <input type="email" class="form-control" id="updateUserEmail${k}" name="updateUserEmail${k}"  placeholder="Enter your email address">
        </div>

        <div class="modal-body">
        <label for="updatePhoneNumber${k}" class="form-label popupForm">Phone number</label>
        <input type="text" class="form-control" id="updatePhoneNumber${k}" name="updatePhoneNumber${k}" placeholder="+(02)">
        </div>

        <div class="modal-body">
        <label for="UpdateDropdownMenuButton1${k}" class="form-label popupForm">Sports</label>
        <select class="form-select" id="UpdateDropdownMenuButton1${k}" name="UpdateDropdownMenuButton1${k}">
            <option value="">Choose a sport</option>
            <option value="Football">Football</option>
            <option value="Tennis">Tennis</option>
            <option value="Padel">Padel</option>
            <option value="Basketball">Basketball</option>
          </select>
        </div>

        <div class="modal-body">
        <label for="UpdatedDropdownMenuButton2${k}" class="form-label popupForm">Court</label>
        <select class="form-select" id="UpdatedDropdownMenuButton2${k}" name="UpdateDropdownMenuButton2${k}">
            <option value="">Choose a court</option>
            <option value="Court 1">Court 1</option>
            <option value="Court 2">Court 2</option>
            <option value="Court 3">Court 3</option>
            <option value="Court 4">Court 4</option>
          </select>
        </div>

        <div class="modal-body">
        <label for="UpdatedDropdownMenuButton3${k}" class="form-label popupForm">Available reservation time</label>
        <select class="form-select" id="UpdatedDropdownMenuButton3${k}" name="UpdateDropdownMenuButton3${k}">
            <option value="">Choose a time</option>
            <option value="From 08:00 Am to 10:00 AM">From 08:00 Am to 10:00 AM</option>
            <option value="From 10:00 Am to 12:00 PM">From 10:00 Am to 12:00 PM</option>
            <option value="From 12:00 Pm to 02:00 PM">From 12:00 Pm to 02:00 PM</option>
            <option value="From 02:00 Pm to 04:00 PM">From 02:00 Pm to 04:00 PM</option>
          </select>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-dark" data-dismiss="modal" onclick="updateReseravtionData(${k})">Save changes</button>
        </div>
    </div>
</div>
</div>
    <button type="button" class="btn btn-danger" onclick="deleteReservation(${k})">Delete</button>
    </td>
    </tr>`;
      }
    } else {
      customers += `<tr> 
      <td>No data</td>
      <td>No data</td>
      <td>No data</td>
      <td>No data</td>
      <td>No data</td>
      <td>No data</td>
      <td>No data</td>
      <td>No data</td>
      </tr> `;
    }
  }

  console.log(customerData);
  document.getElementById("allReservations").innerHTML = customers;
}

// Call ShowEmployeesData on page load
showReservationData();



















//improve the deisgn of app
// save data of customer data mal3ab
//form for adding data
// update data
//delete data
// search data
//b3mal sync ben el local storage and array h

/*
// Function to search for reservations based on the search query
function searchReservation() {
  var searchInput = document.getElementById("searchInput").value.toLowerCase();
  var filteredData = customerData.filter(function (reservation) {
    return (
      reservation.firstName.toLowerCase().includes(searchInput) ||
      reservation.lastName.toLowerCase().includes(searchInput) ||
      reservation.email.toLowerCase().includes(searchInput) ||
      reservation.phoneNumber.toLowerCase().includes(searchInput) ||
      reservation.sports.toLowerCase().includes(searchInput) ||
      reservation.courts.toLowerCase().includes(searchInput) ||
      reservation.reservationTime.toLowerCase().includes(searchInput)
    );
  });

  // Display the search results
  showFilteredReservations(filteredData);
}

// Function to display the filtered reservation data
function showFilteredReservations(filteredData) {
  var customers = ``;
  if (filteredData.length > 0) {
    for (var i = 0; i < filteredData.length; i++) {
      customers += `<tr class="table-dark"> 
            <td class="table-dark">${filteredData[i].firstName}</td>
            <td class="table-dark">${filteredData[i].lastName}</td>
            <td class="table-dark">${filteredData[i].email}</td>
            <td class="table-dark">${filteredData[i].phoneNumber}</td>
            <td class="table-dark">${filteredData[i].sports}</td>
            <td class="table-dark">${filteredData[i].courts}</td>
            <td class="table-dark">${filteredData[i].reservationTime}</td>
            <td>
            <!-- Update and delete buttons -->
            </td>
            </tr>`;
    }
  } else {
    customers += `<tr class="table-dark"> 
        <td class="table-dark" colspan="7">No matching results found.</td>
        </tr>`;
  }

  document.getElementById("allReservations").innerHTML = customers;
}

*/



  /*
  if(customerFirstNameUpdate !=null && customerLastNameUpdate !=null){
    iUpdate.firstName=customerFirstNameUpdate.value;
    iUpdate.lastName=customerLastNameUpdate.value;
  }
  
    iUpdate.firstName=customerFirstNameUpdate.value;
    iUpdate.lastName=customerLastNameUpdate.value;
    iUpdate.email=customerEmailUpdate.value;
    iUpdate.phoneNumber=customerPhoneNumberUpdate.value;
    iUpdate.sports=customerSportsUpdate.options[customerSportsUpdate.selectedIndex].value;
    iUpdate.courts=customerCourtsUpdate.options[customerCourtsUpdate.selectedIndex].value;
    iUpdate.reservationTime=customerReservationTimeUpdate.options[customerReservationTimeUpdate.selectedIndex].value;
  */




      /*
  for (let i = 0; i < customerData.length; i++) {
    if (customerData[i].sports == customerReservation.sports && 
      customerData[i].courts ==customerReservation.courts && 
      customerData[i].reservationTime == customerReservation.reservationTime) {
        console.log("HIDE DATA");
        var selectedCustomerReservationTime = document.getElementById("dropdownMenuButton3");
        var selectedOption = selectedCustomerReservationTime.options[selectedCustomerReservationTime.selectedIndex];
        selectedOption.style.display = "none";
    }
}*/