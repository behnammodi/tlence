# tlence

![tlence](http://itten.ir/file/tlence-logo.png)

[![NPM](https://nodei.co/npm/tlence.png)](https://nodei.co/npm/tlence/)

[![install size](https://packagephobia.now.sh/badge?p=tlence)](https://packagephobia.now.sh/result?p=tlence) [![dependencies](https://david-dm.org/uxitten/tlence.svg)](https://david-dm.org/uxitten/tlence.svg)


<a href="https://www.npmjs.com/package/tlence">
  <img src="https://img.shields.io/npm/v/tlence.svg" alt="Version">
</a>

<a href="https://www.npmjs.com/package/tlence">
  <img src="https://img.shields.io/npm/l/tlence.svg" alt="License">
</a>

<a href="https://www.npmjs.com/package/tlence">
  <img src="https://img.shields.io/npm/dm/tlence.svg" alt="Downloads">
</a>

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