// document.addEventListener('DOMContentLoaded', function() {
//     var sidemenu = document.getElementById('sidemenu');

//     function openmenu() {
//         sidemenu.style.right = "0";
//     }

//     function closemenu() {
//         sidemenu.style.right = "-200px";
//     }

//     document.querySelector('.fa-bars').addEventListener('click', function() {
//         openmenu();
//     });
//     document.querySelector('.fa-times').addEventListener('click', function() {
//         closemenu();
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const sidemenu = document.getElementById('sidemenu');
    const openBtn = document.querySelector('.fa-bars');
    const closeBtn = document.querySelector('.fa-times');

    openBtn.addEventListener('click', function() {
        sidemenu.style.right = "0";
    });

    closeBtn.addEventListener('click', function() {
        sidemenu.style.right = "-200px";
    });
});
