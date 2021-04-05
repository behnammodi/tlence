const { throttle, debounce } = require('./index');

function log(type, number) {
  console.log(type, number);
}

const throttleLog = throttle(log, 5000);
// just run first call to 5s
throttleLog('throttle', 1);
throttleLog('throttle', 2);
throttleLog('throttle', 3);
throttleLog('throttle', 4);
throttleLog('throttle', 5);
throttleLog('throttle', 6);

const debounceLog = debounce(log, 5000);
// just run last call to 5s
debounceLog('debounce');
debounceLog('debounce', 1);
debounceLog('debounce', 2);
debounceLog('debounce', 3);
debounceLog('debounce', 4);
debounceLog('debounce', 5);
debounceLog('debounce', 6);
