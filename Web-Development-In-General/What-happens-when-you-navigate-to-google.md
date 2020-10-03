First of all your computer has to interpret the signals coming through from your keyboard—each key press closes a specific electrical circuit that tells your computer the letters and symbols you’re hitting. The computer polls for new inputs every 10 milliseconds or so.

As soon as you click inside your browser’s address bar and press the “g” key all kinds of code whirs into action—your browser checks whether or not you’re in incognito mode, and if you aren’t, scours your bookmarks and history for potential matches. It’s also going to be looking for popular search terms on the web, and of course updating the URL and search suggestions as you add each successive letter.

Chances are, you’ll see “google.com” appear before you finish typing it, thanks to the smart algorithms built into your browser and whatever its default search engine is set to. This is confirmed with a tap on the Enter key, sending the Enter key code to the computer’s Human Interface Device (HID) keyboard driver, which passes it on to the operating system.

## Making sense of what you’ve typed

The next step is to parse what you’ve typed into the address bar—is it a URL? Is it a search term? Is it some gibberish ? If the browser can spot a valid protocol (like HTTP) or domain name (like Google.com) it can open the page, otherwise it passes the query on to your default search engine, often with a code that indicates the referring browser.

### Next, the browser performs a DNS lookup, which is like looking up someone’s home address—though in this case we’re trying to find where a website lives on the internet. The browser might have this information already stored if you’ve visited the site recently, so it checks its cache first; otherwise, it checks the online address book stored in your OS, and then a reputable one stored on the web, to try and find the site you want.

## Making a connection to the site

Once the DNS lookup occurs there’s another layer of checking and counter-checking, known as an Address Resolution Protocol (ARP) process. This actually works inside the DNS lookup to figure out whether you’re connecting to a machine on your own network or a site out on the wilds of the web. Finally, with the address and location of the website established, your browser can open up a socket: a connection between your computer and the site that allows for a two-way flow of information back and forth.

The next stage is a series of virtual introductions and pleasantries between your computer and the website you’ve requested (in this case Google.com). These involve establishing a common language so the displayed website actually makes sense, and going through some ID checks for the sake of security. Key to this is the Transport Layer Security (TLS) handshake, the setup of secret keys to prove you’re on the right website.

Once everyone’s on good terms, the actual data transfer can start—browsers can make all kinds of requests to sites and vice versa, but here we just want the HTML and other code that makes up the Google.com home page. In the space of a few fractions of a second, the familiar search engine interface is showing up in your browser.

Now your browser of choice has to interpret and accurately render all the information coming its way. It typically has to parse HTML, CSS and JavaScript.

It’s the browser’s rendering engine that does the bulk of this work, and the different browser developers have all deployed their own engines (which is why the layout of webpages sometimes varies between browsers): Chrome uses Blink, which is based on the WebKit engine that Safari uses, while Firefox has Gecko. Having used Trident in Internet Explorer, Microsoft now has EdgeHTML for its Edge browser, which is based on Trident.

The browser calls in the help of the CPU and the GPU on your computer as it interprets the code it’s getting and turns it into a webpage—in this case a search box with the Google logo (or maybe a Google doodle) above it.

