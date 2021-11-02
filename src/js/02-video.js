var throttle = require('lodash.throttle');

var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(currentTime);
player.on('timeupdate', throttle(data => localStorage.setItem(LOCALSTORAGE_KEY, data.seconds), 1000));