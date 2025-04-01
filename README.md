A simple web page which:

* displays a green box 50% of the time
* displays a red box 50% of the time
* remembers via a cookie which box people saw, so the same person will see the same box if they reload the page

The site is available via GitHub Pages at:

* https://dcycle.github.io/abtestexample/

An accompanying blost, in French, is at http://blog.dcycle.com/blog/2025-04-01/test-ab-javascript-pur/.

In order for cookies to work, you must view this on a web server.

If you're looking it the page locally, create a server using a technique such as:

    cd ./docs
    python3 -m http.server 8123

The visit the site at http://0.0.0.0:8123/
