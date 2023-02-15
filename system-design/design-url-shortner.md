## Tiny URL shortner - Discuss things like:

How to generate a unique ID for each URL?

[http://blog.gainlo.co/index.php/2016/03/08/system-design-interview-question-create-tinyurl-system/](http://blog.gainlo.co/index.php/2016/03/08/system-design-interview-question-create-tinyurl-system/)

At first glance, each long URL and the corresponding alias form a key-value pair.
In a certain sense, a URL shortener is a giant hash table, which maps integer values to full URL strings. The integer values are represented in the "shortened" URL by a short sequence of characters, which may encode this integer in something like base-64 notation. An alphabet of 64 characters is used, each character representing 6 bits of an encoded number that is used as the key to the hash table.

Therefore, the question can be simplified like this – given a URL, how can we find hash function F that maps URL to a short alias:
F(URL) = alias
and satisfies following condition:s

### Each URL can only be mapped to a unique alias

### Each alias can be mapped back to a unique URL easily

The second condition is the core as in the run time, the system should look up by alias and redirect to the corresponding URL quickly.

## Performance VS flexibility

There are quite a few follow-up questions for this problem. One thing I’d like to further discuss here is that by using GUID (Globally Unique Identifier) as the entry ID, what would be pros/cons versus incremental ID in this problem?

If you dig into the insert/query process, you will notice that using random string as IDs may sacrifice performance a little bit. More specifically, when you already have millions of records, insertion can be costly. Since IDs are not sequential, so every time a new record is inserted, the database needs to go look at the correct page for this ID. However, when using incremental IDs, insertion can be much easier – just go to the last page.

So one way to optimize this is to use incremental IDs. Every time a new URL is inserted, we increment the ID by 1 for the new entry. We also need a hash function that maps each integer ID to a 7-character string. If we think each string as a 62-base numeric, the mapping should be easy (Of course, there are other ways).

On the flip side, using incremental IDs will make the mapping less flexible. For instance, if the system allows users to set custom short URL, apparently GUID solution is easier because for whatever custom short URL, we can just calculate the corresponding hash as the entry ID.

## Cost

I can hardly not ask about how to evaluate the cost of the system. For insert/query, we’ve already discussed above. So I’ll focus more on storage cost.

Each entry is stored as <ID, URL> where ID is a 7-character string. Assuming max URL length is 2083 characters, then each entry takes 7 _ 4 bytes + 2083 _ 4 bytes = 8.4 KB. If we store a million URL mappings, we need around 8.4G storage.

If we consider the size of database index and we may also store other information like user ID, date each entry is inserted etc., it definitely requires much more storage.

## How would you generate unique IDs at scale (thousands of URL shortening requests coming every second)?

## How would your service handle redirects?

## How would you support custom short URLs?

## How to delete expired URLs etc?

## How to track click stats?

## What characters can we allow in our randomly-generated slugs?

[https://www.interviewcake.com/question/java/url-shortener](https://www.interviewcake.com/question/java/url-shortener)

It turns out the answer is "only alphanumerics, the special characters "\$-\_.+!\*'(),", and reserved characters used for their reserved purposes may be used unencoded within a URL" (RFC 1738). "Reserved characters" with "reserved purposes" are characters like '?', which marks the beginning of a query string, and '#', which marks the beginning of a fragment/anchor. We definitely shouldn't use any of those. If we allowed '?' in the beginning of our slug, the characters after it would be interpreted as part of the query string and not part of the slug!

Okay, so it seems like the set of allowed characters is A-Z, a-z, 0-9, and "\$-\_.+!\*'(),". The apostrophe character seems a little iffy, since sometimes URLs are surrounded by single quotes in HTML documents. So let's pull that one.

## What about uppercase and lowercase?

[https://www.interviewcake.com/question/java/url-shortener](https://www.interviewcake.com/question/java/url-shortener)

Domains aren't case-sensitive (so google.com and Google.com will always go to the same place), but the path portion of a URL is case-sensitive. If I query parker.com/foo and parker.com/Foo, I'm requesting different documents (although, as a site owner, I may choose to return the same document in response to both requests). So yes, lowercase and capital versions of the same letter can be treated as different characters in our slugs.
