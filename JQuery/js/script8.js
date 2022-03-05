$('#example1').on('click', function() {
    $(this).animate({opacity: 0}, 3000);
    $(this).animate({opacity: 1}, 3000);
});
$('#example2').on('click', function() {
    $(this).animate({left: 200, width: 50}, 1000);
    $(this).animate({left: 20, width: 104}, 1000);
});
$('#example3').on('click', function() {
    $(this).animate({left: '+=50', width: 50}, 1000);
    // $(this).animate({left: 20, width: 104}, 1000);
});