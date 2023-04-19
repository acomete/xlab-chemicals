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

var options = {
    link: 'https://www.dropbox.com/sh/pwvs2f8sn1vd4sh/AADAv8oeRj9nJt5wTZXTj9yPa?dl=0',
    folder: {
        view: "grid", // or "grid"
        headerSize: "small" // or "small"
    }
}

Dropbox.embed(options, document.getElementById('intranet-content'));
