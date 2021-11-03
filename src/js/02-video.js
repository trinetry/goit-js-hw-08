var throttle = require('lodash.throttle');

var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.setCurrentTime(currentTime);
player.on('timeupdate', throttle(data => localStorage.setItem(LOCALSTORAGE_KEY, data.seconds), 1000));