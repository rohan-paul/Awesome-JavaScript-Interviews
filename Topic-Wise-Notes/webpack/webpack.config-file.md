## html-webpack-plugin

https://webpack.js.org/plugins/html-webpack-plugin/

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates, or use your own loader.

Loaders

Loaders let you run preprocessors on files as they’re imported. This allows you to bundle static resources beyond JavaScript, but let’s look at what can be done when loading .js modules first.

module: {
+     rules: [
+       {
+         test: /\.js$/,
+         exclude: /(node_modules|bower_components)/,
+         use: {
+           loader: 'babel-loader',
+         }
+       }
+     ]
+   }


## The understanding of the concept of externals in webpack.config.js - Noted while doing Countdown timer

A) https://laracasts.com/discuss/channels/laravel/using-webpack-with-externals

I don't need a 1 MB .js file that needs to be recompiled and redownloaded every time I update my code which would otherwise be under 100k. Those jQuery, Bootstrap and other libraries are going to be cached by ISPs and, even when not, able to be pulled from much faster CDNs than trying to pull them from my system (plus they can be cached on the user side as well). From my understanding, instead of compiling the code of jQuery, etc into your app.js file, webpack could use externals to compile your stuff in the expectation that, even if $, _, and Vue aren't around now, they will be at runtime.

B) https://www.toptal.com/javascript/a-guide-to-managing-webpack-dependencies

Configuring External Dependencies
If we want to include modules from externally hosted scripts, we need to define them in the configuration. Otherwise, Webpack cannot generate the final bundle.

We can configure external scripts by using the externals option in the Webpack configuration. For example, we can use a library from a CDN via a separate <script> tag, while still explicitly declaring it as a module dependency in our project.

webpack.config.js

```js
externals: {
   react: 'React',
   'react-dom': 'ReactDOM'
}
```