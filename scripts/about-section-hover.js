var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

// function opentab(tabname) {
//     for (tablink of tablinks) {
//         tablink.classList.remove('active-link');
//     }
//     for (tabcontent of tabcontents) {
//         tabcontent.classList.remove('active-tab');
//     }
//     event.currentTarget.classList.add('active-link');
//     document.getElementById(tabname).classList.add("active-tab");
// }
function opentab(tabName) {
    var tabLinks = document.querySelectorAll('.tab-link');
    var tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => link.classList.remove('active-tab-link'));
    tabContents.forEach(content => content.classList.remove('active-content'));

    document.querySelector(`[onclick="opentab('${tabName}')"]`).classList.add('active-tab-link');
    document.getElementById(tabName).classList.add('active-content');
}