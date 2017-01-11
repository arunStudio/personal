$(document).ready(function() {
  $('.main-content').css({
    opacity: '1',
    top: '0',
    transition: 'all 1s ease 1s',
  });
});


// include header
$(document).ready(function(){
    $(".header").load("top-header.html");
});

// include footer
$(document).ready(function(){
    $(".footer").load("footer-contact.html");
});