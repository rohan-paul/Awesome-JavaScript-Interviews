## Where should the enzyme setup file be written?

https://stackoverflow.com/a/46628165/1902852

If you are using jest to run your tests, you can create a test-setup.js file and add the snippet from the enzyme docs:

```js
// test-setup.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```
then add a setupTestFrameworkScriptFile key in your jest configuration and point to that file. For example, if your jest configuration is in package.json:

```js
// package.json
{
    ...,
    "jest": {
        "setupTestFrameworkScriptFile": "<rootDir>/test-setup.js"
    }
}
```
from the jest docs https://facebook.github.io/jest/docs/en/configuration.html#setuptestframeworkscriptfile-string:

### [ NOTE - THIS OPTION OF "setupTestFrameworkScriptFile" WILL NOT WORK IN create-react-app. Read below ]

The path to a module that runs some code to configure or set up the testing framework before each test. Since setupFiles executes before the test framework is installed in the environment, this script file presents you the opportunity of running some code immediately after the test framework has been installed in the environment.

This will execute after your jest environment is initialised, but before your enzyme tests are executed

## VERY IMPORTANT - For people using create-react-app, the expected path for your setup file is src/setupTests.js. See the documentation (README) on GitHub: and the contents as below

[https://github.com/rohan-paul/redux-boilerplate-base-counter/tree/master/redux-boilerplate-base-counter-without-ejecting/src](https://github.com/rohan-paul/redux-boilerplate-base-counter/tree/master/redux-boilerplate-base-counter-without-ejecting/src)

```js
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
```

Initializing Test Environment

Note: this feature is available with react-scripts@0.4.0 and higher. If your app uses a browser API that you need to mock in your tests or if you just need a global setup before running your tests, add a src/setupTests.js to your project. It will be automatically executed before running your tests.

### (As create-react-app does not handle, at least in v1.4.1, the option setupTestFrameworkScriptFile in package.json)


.