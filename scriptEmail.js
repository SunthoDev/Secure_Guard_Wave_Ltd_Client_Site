// Email.js integration
function sendEmail(event) {
    event.preventDefault()

    let params = {
       from_name: document.getElementById('yourName').value,
       from_businessName: document.getElementById('businessName').value,
       from_email: document.getElementById('email').value,
       from_phone: document.getElementById('phone').value,
       from_service: document.getElementById('services').value,
       from_message: document.getElementById('message').value,
    }

    // console.log(params);

    emailjs.send('service_xkv9vu9', 'template_qwgrq1p', params)
    .then(function(response) {

        // console.log("SUCCESS!", response.status);
        // alert("Email sent successfully!");
        window.location.href = "success.html";

        
    }, function(error) {
        // console.log("FAILED...", error);
        alert("Failed to send email: " + error.text);
    });

}



















    // .then((result) => {
    //     if (result.text === "OK") {
    //         Swal.fire({
    //             position: 'top-end',
    //             icon: 'success',
    //             title: 'Your work has been saved',
    //             showConfirmButton: false,
    //             timer: 1500
    //         })
    //     }
    //     e.target.reset()
    // }, (error) => {
    //     console.log(error.text);
    // });



