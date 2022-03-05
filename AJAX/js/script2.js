$('.item-box').on('click', 'a.info-link', function(event) {
    event.preventDefault();
    $(this).closest('.item-box').find('.more-info').toggle(800); //alterna entre .show() y .hide()
    // $(this).closest('.item-box').find('.more-info').fadeToggle(3000); //alterna entre fadeIn() y fadeOut()
    // $(this).closest('.item-box').find('.more-info').slideToggle(1000); //alterna entre slideDown() y slideUp()
})