$('[data-modal=download]').on('click', function() {
    $('.overlay, #download').fadeIn();
});

$('.modal__close').on('click', function() {
    $('.overlay, #download').fadeOut();
});