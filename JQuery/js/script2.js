// $(function() {
//     $('#example').on('click', 'button', function() {
//         var selected = $('#example select option:selected');
//         var value = selected.val();
//         var price = selected.data('price');
//         if(price) {
//             $('#result').html(value + ' ' + price);
//         }
//     })
// });
$(function() {
    $('#example').on('change', '#place', function() {
        var selected = $('#place option:selected');
        var value = selected.val();
        var price = selected.data('price');
        if(price) {
            $('#result').html(`${value} $${price}`);
        }
    });
});