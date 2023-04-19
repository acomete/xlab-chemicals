$('#hint-username').magnificPopup({
    items: {
        src: '<div class="white-popup"><h6>My username help</h6>' +
            '<p>My Last Name</p>' +
            '</div>',
        type: 'inline'
    }
});

$('#hint-password').magnificPopup({
    items: {
        src: '<div class="white-popup"><h6>My password help</h6>' +
            '<p>It’s a fiery red symbol of my dream come true, My prized possession that sets me apart from others.</p>' +
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
