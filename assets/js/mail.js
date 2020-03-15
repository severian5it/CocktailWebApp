/**
 * function to send mail if all fields are valid
 */
function sendMail() {
    let name = document.getElementById("form34");
    let mail = document.getElementById("form29");
    let message = document.getElementById("form8");
    if (name.checkValidity() && mail.checkValidity() && message.checkValidity()) {
        emailjs.send("gmail", "cocktail", {
            "from_name": `${name.value}`,
            "from_email": `${mail.value}`,
            "message": `${message.value}`
        });
        $('#modalContactForm').modal('toggle');
        return true;
    }
    return false;

}
