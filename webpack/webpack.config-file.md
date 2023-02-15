# html-webpack-plugin

https://webpack.js.org/plugins/html-webpack-plugin/

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates, or use your own loader.

## Actual Implementation

[https://github.com/rohan-paul/redux-boilerplate-base-counter/blob/master/redux-boilerplate-base-counter-AFTER-EJECTING/webpack.config.js#L8](https://github.com/rohan-paul/redux-boilerplate-base-counter/blob/master/redux-boilerplate-base-counter-AFTER-EJECTING/webpack.config.js#L8)

```js
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body',
});
```

### 2> https://medium.com/a-beginners-guide-for-webpack-2/index-html-using-html-webpack-plugin-85eabdb73474

We got webpack configured to package and bundle our js code in a single file -app.bundle.js, we need an index.html for our web app with a script tag havingsrc='app.bundle.js'. We have two options - either create it manually or have it created automatically by using ‘html-webpack-plugin’

While creating index.html manually works good, it would be nice if webpack can create the index.html automatically for us with an included <script> tag with its src pointing to our app.bundle.js.

Webpack can do this for us with the help of html-webpack-plugin. Using this plugin has some added advantages like auto-hashing the ‘src’ attribute of the embedded <script> tag every time the webpack is run, which makes browser to get the latest version of the file from server instead of using a cached one whenever it has a new hash.


In **create-react-app** - this module is used extensively, which I can see after ejecting
The below from ``./config/webpack.config.prod.js``
```js
// Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
```

And the below from ``./config/webpack.config.dev.js``

```js
// Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
```

### Template: We are entering the path where our HTML file is located.

### inject: it is optional actually what it does is Inject the script files inside the body tag.

# Loaders

Webpack accepts a loader object which specify loader to apply to files that match the test regex and exclude files that match the exclude regex. So, loaders let you run preprocessors on files as they’re imported. This allows you to bundle static resources beyond JavaScript, but let’s look at what can be done when loading .js modules first.  In this below case we’re applying the babel-loader to all files with a .js extension that aren’t in node_modules and are not in bower_components

module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
         }
       }
     ]
   }

# Transformations like converting ES6 to ES5 with 'babel-loader'

```js
module: {
        rules: [

          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use:['babel-loader']

          }
    ]
}
```
What above code does is it checks if any file ends with .js/.jsx send that files to the babel-loader and apply transformations.

Like we are using jsx but our browser doesn't understand jsx so that babel loader takes our jsx and converted it into javascript.

# Different types of loaders- css-loader style-loader file-loader ,html-loader.

We can add more loaders in rules array

```js
module: {
        rules: [

          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
          use:['babel-loader']

          },
          {
            test:/\.css$/, use:[
            { loader: MiniCssExtractPlugin.loader}
              ,{loader:"css-loader",

              options:{
                minimize:true,
                sourceMap:true
              }
            }
            ]
          },
          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
              options: {
                attrs: [':data-src'],
                minimize:true
              }
            }
          },
          {
            test: /\.(png|jpg|gif|jpeg|ttf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                 name:'[path][name].[ext]',

                }
              }
            ]
          }
        ]
      },


```
**css-loader:** goes through possible @import and url() lookups within the matched files and creates source map for our CSS files, compress the css files by removing white spaces.



# The understanding of the concept of externals in webpack.config.js - Noted while doing Countdown timer

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