$.ajax('/AJAX/js/destinations.json', {
    dataType: 'json',
    contentTyoe: 'application/json',
    cache: false
})
.done(function(response) {
    var html;
    $.each(response, function(index, element) {
        html = '<div class="item-box" data-id="' + element.id + '">';
        html += '<img src="/img/' + element.image + '">';
        html += '<div class="item-tittle">' + element.name + '</div>';
        html += '<p>' + element.description + '</p>';
        html += '<div class="item-price">' + element.price + '</div>';
        html += '<button>Add to cart</button>';
        html += '<div><a href="#" class="info-link">More info</a></div>';
        html += '<div class="more-info"><p>' + element.moreInfo + '</p></div>';
        html += '</div>';
        $('body').append(html);
    });
})
$('body').on('click', '.info-link', function(event) {
    event.preventDefault();
    $(this).closest('.item-box').find('.more-info').slideToggle(800);
})
var cart = 0;
$('body').on('click', '.item-box button', function(event) {
    event.preventDefault();
    var id = +$(this).closest('.item-box').data('id');
    $.ajax('/AJAX/js/addItem.json', {
        data: {id: id},
        type: 'post',
        dataType: 'json',
        contentType: 'application/json', 
    })
    .done(function(response) {
        cart += response.price;
        $('.shopping-cart').text('Total $' + cart);
    });
})