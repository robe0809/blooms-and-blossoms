 $(document).ready(readyNow); 

function readyNow () {
    // Hide/show animation hamburger function
    $('.navbar-toggler').on('click', toggler) 
};

function toggler() {
    // Take this line to first hamburger animations
    $('.animated-icon1').toggleClass('open');
}