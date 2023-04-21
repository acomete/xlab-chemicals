$('#hint-username').magnificPopup({
    items: {
        src: '<div class="white-popup"><h6>Hint</h6>' +
            '<p>Enter Last Name</p>' +
            '</div>',
        type: 'inline'
    }
});

$('#hint-password').magnificPopup({
    items: {
        src: '<div class="white-popup"><h6>Password hint</h6>' +
            '<p>It’s the symbol of my success, <br/>' +
            'Of course, I chose it red. <br/>' +
            'If you see me with it, you won’t forget it ! <br/>' +
            'Hear it roar in the streets !</p>' +
            '</div>',
        type: 'inline'
    }
});

$('.login').on('click', function () {
    const username = $('input[name=username]').val().toLowerCase();
    const password = $('input[name=password]').val().toLowerCase();

    if (username.toLowerCase() === 'kinson' && password.toLowerCase() === 'ferrari') {
        window.location.href = 'intranet.html'
    } else {
        $('input[name=username]').val('')
        $('input[name=password]').val('')
    }
});
