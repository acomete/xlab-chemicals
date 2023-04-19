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
    // Shared link to Dropbox file
    link: "https://www.dropbox.com/sh/keptcjl08q3wsid/AACui966iXcXPbagCJ2py2L-a?dl=0",
    file: {
        // Sets the zoom mode for embedded files. Defaults to 'best'.
        zoom: "best" // or "fit"
    },
    folder: {
        // Sets the view mode for embedded folders. Defaults to 'list'.
        view: "list", // or "grid"
        headerSize: "normal" // or "small"
    }
}

Dropbox.embed(options, document.getElementById('intranet-content'));
