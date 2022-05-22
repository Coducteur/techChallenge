const message = "Our King has receive your message, He will answer it soon ! thank you ";

document.getElementById("formContact")
.addEventListener("submit", function(event){
    event.preventDefault();
    alert(message);

});