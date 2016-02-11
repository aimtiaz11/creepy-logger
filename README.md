# creepy-logger
creepy-logger is a simple logging node module that wraps around the standard console.log.

## Usage

Download creepy-logger using npm:
```
npm install creepy-logger
```

Add to your node application: 

```javascript
var logger = require('creepy-logger');

logger.info('logging information');

```

Output:

> ai@au10019:~/gitstuff/$ node test.js 

> 11-Feb-2016 16:07:55 INFO logging information

You can optionally use `warn` and `error` to log warning and error messages.

## Methods
1. `logger.info` - Log information
2. `logger.warn` - Log warning messages
3. `loggger.error`  Log error messages
