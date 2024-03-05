function login(){
var adminUserNamee = document.getElementById("adminUserName").value;
var adminUserPasswordd = document.getElementById("adminUserPassword").value;

localStorage.setItem("AdminUserName", "Admin");
localStorage.setItem("AdminPassword", "123");
var name = localStorage.getItem("AdminUserName");
var pass = localStorage.getItem("AdminPassword");

  if(adminUserNamee == name && adminUserPasswordd == pass){
    //window.location.href =  "index.html";
    location.replace("index.html");
  }
  else{
    console.log("Try again");
    document.getElementById("WarningMessage").innerHTML= ` <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>You Entered wrong data!</strong> please try again.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>`;
    
  }
}


