$('#add-container').on('click', 'button', function() {
    var value = $('#add-container input').val();
    var html = `<div class="item"><div class="remove">X</div>${value}</div>`;
    // $('#places-container').append(html);
    $(html).appendTo('#places-container');
    // $('#places-container').children().first().after(html);
})
$('#places-container').on('click', '.remove', function() {
    $(this).parent().remove();
})