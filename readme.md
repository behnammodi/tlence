# tlence

debounce and throttle techniques for performance

## install
```npm
npm install tlence --save
```

## use
```javascript
import { throttle, debounce } from 'tlence';

function log(server) {
  console.log('connecting to', server);
}

const throttleLog = throttle(log, 5000);
// just run first call to 5s
throttleLog('local');
throttleLog('local');
throttleLog('local');
throttleLog('local');
throttleLog('local');
throttleLog('local');

const debounceLog = debounce(log, 5000);
// just run last call to 5s
debounceLog('local');
debounceLog('local');
debounceLog('local');
debounceLog('local');
debounceLog('local');
debounceLog('local');
```