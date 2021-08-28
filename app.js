function register() {
    let firstname = document.getElementById('first name').value;
    let lastname = document.getElementById('last name').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirm password').value;
    // let message = document.getElementById('message');
    let btn = document.getElementById('btn');

    if (firstname.length != 0 && lastname.length != 0 && email.length != 0 && password.length != 0 && confirmpassword != 0) {
        if (password == confirmpassword) {
            btn.innerHTML = "Registered"
            alert("You have been successfully registered");
        }
        else {
           alert("Password does not match"); 
        }
    }
    // else {
    //     alert("Please fill all the form");
    //     // message.textContent = "";
    // }
}
