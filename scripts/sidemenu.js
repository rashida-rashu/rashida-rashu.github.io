document.addEventListener('DOMContentLoaded', function() {
    var sidemenu = document.getElementById('sidemenu');

    function openmenu() {
        sidemenu.style.right = "0";
    }

    function closemenu() {
        sidemenu.style.right = "-200px";
    }

    document.querySelector('.fa-bars').addEventListener('click', function() {
        openmenu();
    });
    document.querySelector('.fa-times').addEventListener('click', function() {
        closemenu();
    });
});
