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
throttleLog.run('local');
throttleLog.run('local');
throttleLog.run('local');
throttleLog.run('local');
throttleLog.run('local');
throttleLog.run('local');

// you can reset call delay
throttleLog.reset();

const debounceLog = debounce(log, 5000);
// just run last call to 5s
debounceLog('local');
debounceLog('local');
debounceLog('local');
debounceLog('local');
debounceLog('local');
debounceLog('local');
```