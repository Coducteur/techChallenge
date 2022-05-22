const message = " Notre roi a bien reçu votre message, il vous répondra bientôt ! Merci. ";

document.getElementById("formContact")
.addEventListener("submit", function(event){
    event.preventDefault();
    alert(message);

});