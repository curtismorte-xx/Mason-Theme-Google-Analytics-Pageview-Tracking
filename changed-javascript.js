(function (a) {
    if (!a("html").is(".lt-ie9")) {
        var b;
        a(window).scroll(function () {
            b = !0
        });
        setInterval(function () {
            if (b) {
            	var refc = window.location.pathname.slice(0,-1);
                try {
                    var d = a(".post:in-viewport").first().attr("id"),
                        c = sessionStorage.getItem(d);
                    history.replaceState && c && (new_url = c + "/#" + d, history.replaceState("", "", new_url))
                    if ((refc != c) && (c != '/page/1')) {
                        _gaq.push(['_trackPageview', c]);
                    }
                } catch (f) {
                    f.name.toUpperCase()
                }
                b = !1
            }
        }, 250)
    }
})(jQuery);