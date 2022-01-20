document.querySelector("#button").addEventListener("click", signIn);

var regdUsers = JSON.parse(localStorage.getItem("userDatabase"));
function signIn() {
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "admin" && password === "admin") {
    window.location.href = "handsoapshome.html";
  } else {
    for (var i = 0; i < regdUsers.length; i++) {
      if (regdUsers[i].email == email && regdUsers[i].pass == password) {
        alert("Login In Successfully");
        console.log("registered user");
        window.location.href = "handsoapshome.html";
      } else {
         alert("Enter Correct Email and Password");
      }
    }
  }
}
