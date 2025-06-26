document.addEventListener("DOMContentLoaded", function() {
    var discordLink = document.getElementById('discord-link');
    
    discordLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Show the message
        alert("Add Me In Discord; The Username Is: legpeice");
    });
});
