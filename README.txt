Mason-Theme-Infinite-Scroll-GA-Page-Tracking
============================================
This addon works for Mason Theme on Tumblr. It allows the user to track pageviews during infinite scroll on the index page. Your pages will be tracked in the following ways: 
/page/2 , /page/3 , …… , /page/n

All you have to do is take the contents of: mikedidthis-mason-index-1-5-min.html 
and replace the script include for http://static.tumblr.com/g8b5dgd/iqPmcaq5y/mikedidthis-mason-index-1-5-min.js which is around line 997

Save your HTML in tumblr and your pageview tracking will now register every page that loads during an infinite scroll on the index page.
If you would like to see the code that was changed, reference the following file:
changed-javascript.js

The code that was added is on lines 10 and 16-18.

10 => var refc = window.location.pathname.slice(0,-1);

16-18 =>   if ((refc != c) && (c != '/page/1')) {
                _gaq.push(['_trackPageview', c]);
           }
