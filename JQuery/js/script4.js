$(function() {
    $('#example').on('click', 'a', function(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log('hola');
    });
    $('#example').on('click', function(event) {
        console.log('Hello');
    });
});