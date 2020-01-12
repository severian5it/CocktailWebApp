
function sendMail() {
    let name = document.getElementById("form34").value;
    let mail = document.getElementById("form29").value;
    let message = document.getElementById("form8").value;
    emailjs.send("gmail", "cocktail", {"from_name":`${name}`,"from_email":`${mail}`,"message":`${message}`})
}
