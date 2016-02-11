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
 

# License

(The MIT License)

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

