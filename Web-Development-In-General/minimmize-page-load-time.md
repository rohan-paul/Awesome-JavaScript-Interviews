# Ways to decrease page load (perceived or actual load time).

## Use minifier and gzip to decrease the page size - actual

Minifying a file involves removing unnecessary formatting, whitespace, and code.

Since every unnecessary piece of code adds to the size of your page, it’s important that you eliminate extra spaces, line breaks, and indentation. This ensures that your pages are as lean as possible.

Combining files is exactly what it sounds like. If your site runs multiple CSS and JavaScript files, you can combine them into one.

## Show spinner or progress bar - perceived

## Preload the page before actually loading it using libraries like InstantClick - both actual and perceived

## Minimize HTTP requests

According to Yahoo, 80% of a Web page’s load time is spent downloading the different parts of the page, like images, stylesheets, and scripts.

An HTTP request is made for each one of these elements, so the more on-page components, the longer it takes for the page to render.

The first step to minimizing your requests is to figure out how many your site currently makes, to use as a benchmark.

If you use Google Chrome, you can use the browser’s Developer Tools to see how many HTTP requests your site makes.

Right-click on the page you want to analyze, and click “Inspect,” then click the “Network” tab. (If you don’t see the “Network” tab, you may need to expand the Developer Tools sidebar by dragging the left border to the left.)

The “Name” column shows all of the files on the page, the “Size” column shows the size of each file, and the “Time” column shows how long it takes to load each file.

In the bottom left corner, you’ll also see the number of total requests the site makes.

Reducing this number of requests will speed up your site, look through your files and see if any are unnecessary.

## This is why you should minimize HTTP requests. There are some excellent ways to do this.

Combine CSS, JS scripts and HTML files together.
Use CSS instead of images whenever possible.
Reduce the number of elements on every web page.
Install a caching plugin.
Reduce redirects, which create additional HTTP requests to your server and increase your page load time.

## Use a CDN

## Enable Browser Caching

 Caching refers to the process of storing static files, such as HTML documents, media files, images, CSS and JavaScript files, for easier and faster access, so that the database does not have to retrieve each and every file every time there is a new request. The more requests are being made to your server, the more time it will take for your website to load.

When someone visits your website, the elements on the web page they are trying to access are automatically downloaded and stored on their hard drive in a cache (temporary storage). That way, the next time they visit your website, their browser will load the requested web page very quickly, without having to send an HTTP request to the server again.

However, caching works for repeat visitors only, since, obviously, first-time visitors don’t have a cached and stored version of your website. Nevertheless, enabling full caching for your website can reduce your page load time from 2.4 to 0.9 seconds. This is due to the fact that there may be 30 or more different components that need to be stored in the user’s cache the first time they visit your website, but only a few components need to be downloaded for subsequent visits.

## Optimize Your Images

Images take up a lot of bandwidth. When they’re not optimized, meaning they are large in size, they use a lot of server resources and take more time to load. When your images are not optimized, your website can be much slower.

## Disable Hotlinking

If you don’t disable hotlinking, you allow people to use the content that’s hosted on your server for their own websites. By allowing them to practically use your servers and your content for their websites, you’ll get a lot of server load for no reason.

This is why you should disable hotlinking and prevent people from stealing your server resources. However, in order to do that, you need to add the necessary code to your server. There are some tools that can help you generate the right code, but your web hosting provider can also help you with this

## Optimize Your Database

Optimizing your database is yet another very effective way to speed up your website. This is something you should do on a regular basis, especially if you use WordPress or some other CMS that relies a lot on database usage.