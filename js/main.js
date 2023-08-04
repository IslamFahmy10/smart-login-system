
var users=[]
if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
  }
console.log(users)
var userName = document.getElementById("Name");
var email = document.getElementById("EmailForSignUp");
var password = document.getElementById("passwordForSignUp");
var inputs = [userName,email,password]
console.log(inputs);



function validateNewUser() {
    
  if (userName.value != "") {
    var nameReg = /^[A-Za-z]{2,}/;
    var x = nameReg.test(userName.value);
    if (x != true) {
      userName.classList.remove("is-valid");
      userName.classList.add("is-invalid");
    } else if (x == true) {
      userName.classList.remove("is-invalid");
      userName.classList.add("is-valid");
    }
  }
  if (email.value != "") {
    var mailReg =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-z]{2,3})$/;
    var y = mailReg.test(email.value);
    if (y != true) {
      email.classList.remove("is-valid");
      email.classList.add("is-invalid");
    } else if (y == true) {
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
    }
  }

  if (password.value != "") {
    var passReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{8,30}/;
    var z = passReg.test(password.value);
    if (z != true) {
      password.classList.remove("is-valid");
      password.classList.add("is-invalid");
    } else if (z == true) {
      password.classList.remove("is-invalid");
      password.classList.add("is-valid");
    }
  }
  if (x == true && y == true && z == true) {
   
     return true;
    
  } else {
    return false;
  }

}

function newUser(valid) {
  if (valid == true) {
    var user = {
        name: userName.value,
        Email: email.value,
        Password: password.value}

        users.push(user);
        window.localStorage.setItem("users", JSON.stringify(users));
        console.log(users);
        document.getElementById("message").innerHTML =
          '<h4 class="text center w-100 p-3 text-success">Success</h4>';
        clr();
      }

  else if (valid == false) {
    document.getElementById("message").innerHTML =
      '<h4 class="text center w-100 p-3 text-danger" >invalid inputs check again</h4>';
  }
}

function clr() {
  userName.value = "";
  email.value = "";
  password.value = "";
  userName.classList.remove("is-valid", "is-invalid");
  email.classList.remove("is-valid",  "is-invalid");
  password.classList.remove("is-valid", "is-invalid");
}

function comparison(){
    var user = {
        name: userName.value,
        Email: email.value,
        Password: password.value}

    var check=users.some(function(e){
        console.log(e.Email==this.Email);
        return e.Email==this.Email
    },user)
    if (check == false){
        newUser(validateNewUser())
    }
    else{
        document.getElementById("message").innerHTML =
        '<h4 class="text center w-100 p-3 text-danger" >this Email signed up before !!</h4>';
        clr()
    }
}
// _____log in codes_____________//


var logMail= document.getElementById('email')
var logPass= document.getElementById('password')
console.log(logMail);
console.log(logPass);



var index

function check(){
    console.log(logMail.value)
    console.log(logPass.value);
    var person={
        clientEmail:logMail.value,
        clientPass:logPass.value
    }
  var  logged = users.some(function(e){
        console.log(e.Email==this.clientEmail);
        return e.Email==this.clientEmail
    },person)
   var  passCheck=users.some(function(e){
        console.log(e.Password==this.clientPass);
        return e.Password==this.clientPass
    },person)

    if( logged==true && passCheck==true){
index = users.findIndex(x => x.Email ===`${logMail.value}`);
    console.log(index);
    return true
    }
    else{
        document.getElementById("message").innerHTML =
        '<h4 class="text center w-100 p-3 text-danger" >incorrect email or password </h4>';
    return false
    }

}

var nameLogged='';
function login(){
    check()
    console.log(check());
    if(check()==true){
    console.log(index);
    nameLogged=users[index].name;
    console.log(nameLogged);
     display()
}
    
    
}
function display(){
    document.getElementById('logged').innerHTML=`
    
    <div class="text-bg-dark p-3 w-100 d-flex justify-content-between">
        <h3 class="w-25"> Smart System</h3>
        <a class="fs-4 btn btn-dark text-decoration-none" href="main.html">log out</a>
    </div>
    <div class="vh-100  d-flex justify-content-center align-items-center overflow-auto">
        <div class="main w-50 d-flex flex-wrap text-center justify-content-center align-items-center  p-5" id="UserName">
        <h1 class="w-100 text-center"> welcome ${nameLogged}</h1>
        </div>
 
    </div>

    </div>
     <script src="js/all.min.js"></script>

    <script src="js/bootstrap.bundle.min.js"></script>
    
    <script src="js/main.js" async defer></script>
    <script>window.history.forward() </script>`
    document.getElementById('edited').innerHTML="welcome page"
    
}


