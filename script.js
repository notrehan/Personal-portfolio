
document.addEventListener("DOMContentLoaded", function() {
    VanillaTilt.init(document.querySelectorAll(".tilt-image"), {
        scale: 1, // Adjust scale on tilt
        speed: 400, // Speed of the effect
    });
});

function scrollToElement(event, elementId) {
    event.preventDefault(); // Prevent the default anchor behavior
    const element = document.getElementById(elementId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  }

function sendMail() {
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value
  }
  console.log(parms)
  emailjs.send("service_1dc55rl", "template_9vx83fy", parms)
  alert("Mail has been sent!")
}