// Listen on a specific host via the HOST environment variable. Should be 0.0.0.0 for koyeb.com
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable  Should be 8000 for koyeb.com
var port = process.env.PORT || 8000;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins

    //TODO: these should be toggled! But they are a little hard to deal with. Will come back is security becomes more important
    //requireHeader: ['origin', 'x-requested-with'],

    //problems with origin:
    //=======
    //Allsearch uses an in-memory image to load in images in the background, then
    //a div with background-image to render once the in-memory image's onload is called.
    //it's easy to add default CORS headers to the in-memory image object (just
    //use the crossOrigin attribute), but not easy to do that for the div with background-image.
    //I also don't want to use AJAX requests like people keep on suggesting.
    //One thing to try is this: https://github.com/kennethcachia/background-check/issues/16.
    //But the canvas I happen to be using in Allsearch use is small for performance reasons
    //so this results in pixelated backgrounds (and I don't want to make the canvas larger).

    //problems with x-requested-with:
    //=======
    //You can't set custom headers in normal images, let alone divs with background-image.
    //Only way to do this filter would eb to use AJAX or something

    removeHeaders: ['cookie', 'cookie2'],
    handleInitialRequest: (req, resp, dest) => {
        console.log(`Got request from ${req.headers.host}:`, dest)
        return false
    }
}).listen(port, host, function () {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
}).on("error", (e) => {
    console.error(e)
});