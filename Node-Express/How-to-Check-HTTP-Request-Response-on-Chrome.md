## How to Check HTTP Request and Response on Chrome?

Open a webpage ( say https://github.com/rohan-paul ) in Google Chrome and go to “View > Developer > Developer Tools” menu.

You can also open the developer console by right clicking on the page and choose “Inspect” option.

Go to “Network” tab and then reload the page. Now you will see the loading time for each single component on the page.

Now to load the above page (https://github.com/rohan-paul), there will be many othere resources will alo be loaded and I will see all of them, out of which only the top one will match my exaxt requested URL (https://github.com/rohan-paul in this case) in the network tab

click on it, and then I will see the below


```js
General
    Request URL: https://github.com/rohan-paul
    Request Method: GET
    Status Code: 200 OK (from disk cache)
    Remote Address: 192.30.253.112:443
    Referrer Policy: no-referrer-when-downgrade

Response Header

    Cache-Control: no-cache
    Content-Encoding: gzip
    Content-Security-Policy: default-src 'none'; base-uri 'self'; block-all-mixed-content; connect-src 'self' uploads.github.com status.github.com collector.githubapp.com api.github.com www.google-analytics.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com wss://live.github.com; font-src assets-cdn.github.com; form-action 'self' github.com gist.github.com; frame-ancestors 'none'; frame-src render.githubusercontent.com; img-src 'self' data: assets-cdn.github.com identicons.github.com collector.githubapp.com github-cloud.s3.amazonaws.com *.githubusercontent.com; manifest-src 'self'; media-src 'none'; script-src assets-cdn.github.com; style-src 'unsafe-inline' assets-cdn.github.com
    Content-Type: text/html; charset=utf-8
    Date: Sat, 04 Aug 2018 06:37:08 GMT
    Expect-CT: max-age=2592000, report-uri="https://api.github.com/_private/browser/errors"
    Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin
    Server: GitHub.com
    Status: 200 OK
    Vary: X-Requested-With
    X-Content-Type-Options: nosniff
    X-Frame-Options: deny
    X-GitHub-Request-Id: BA24:46F9:392689:63210A:5B654993
    X-Request-Id: 9935daaa-bd89-435e-80bc-c8f85184566f
    X-Runtime: 0.632885
    X-Runtime-rack: 0.640618
    X-XSS-Protection: 1; mode=block

```