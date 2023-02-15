## Note - What does webpack mean by XX hidden modules

https://stackoverflow.com/questions/28858176/what-does-webpack-mean-by-xx-hidden-modules

Webpack hides modules coming from folders like ["node_modules", "bower_components", "jam", "components"] in your console output by default. This helps you to focus on your modules instead on your dependencies.

You can display them by using the --display-modules argument.

``$ webpack --display-modules``

## Issue - configuration.resolve has an unknown property 'root'.

In webpack.config.js I had below under resolve…

```.js
  resolve: {
    root: __dirname,
```

Final SOLUTION - https://stackoverflow.com/questions/43107233/configuration-resolve-has-an-unknown-property-root

resolve.root is Webpack 1 configuration and doesn't exist for Webpack 2.

For Webpack 2 you can use resolve.modules:

```js
resolve: {
    modules: [__dirname, 'node_modules'],
```

## Issue - “webpack: command not found” - Suddenly getting this, from the same directory from where it was working just fine last night

First followed this.

https://stackoverflow.com/questions/38788166/webpack-command-not-working

“use the scripts property of your package.json to use webpack from this directory which will be exported.” So in package.json included the following in the script:

```js
"scripts": {
  "build": "webpack --config webpack.config.js"
}
```

then ``$ npm run build``

But still was getting the same error.

Hence, from - https://stackoverflow.com/questions/32550089/webpack-command-not-found-after-npm-install-webpack-g

Install it globally

``npm i -g webpack``

And now SOLVED.

## Issue - CLI for webpack must be installed. These are recommended choices  ALSO WAS GETTING “Cannot find module 'webpack-cli”

Just install webpack-cli globally with ``$ npm i -g webpack-cli``


## Issue - ``webpac -w`` command failed giving me the following node-saas error

Node Sass could not find a binding for your current environment: Linux 64-bit with Node.js 9.x

The source of the problems is most certainly, that I upgraded the node version in between.

Solution -
https://stackoverflow.com/questions/37986800/node-sass-could-not-find-a-binding-for-your-current-environment

``npm rebuild node-sass``

Another solution would have been -

Just delete the node-sass folder and run ``npm install``


## Issue - < webpack > would throw error - Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema. - configuration.module has an unknown property 'loaders'.

https://stackoverflow.com/questions/49203841/webpack-4-1-1-configuration-module-has-an-unknown-property-loaders

All I had to do was rename loaders to rules   -  in the webpack.config file