(function (){
    var jquery_version = '3.3.1';
    var site_url = 'http://127.0.0.1:8000';
    var static_url = site_url + 'static/';
    var min_width = 100;
    var min_height = 100;

    function bookmarklet(msg){
        var css = jQuery('<link>');
        css.attr({
            rel: 'stylesheet',
            type: 'text/css',
            href: static_url + 'css/bookmarklet.css?r='+ Math.floor(Math.random()*99999999999999999999)
        })
        jQuery('head').append(css);
        box_html = '<div id="bookmarklet"><a href="#" id="close">&times;</a><h1>Wybierz obraz do dodania:</h1> <div class="image"></div>';
        jQuery('body').append(box_html);
        jQuery('#')
    };

    if(typeof window.jQuery != 'undefined'){
        bookmarklet();
    }else{
        var confict = typeof window.$ != 'undefined';
        var script = document.createElement('script');
        script.setAttribute('src', 'http://ajax.googlepis.com/ajax/libs/jquery'+jquery_version+'/jquery.min.js');
        document.getElementById('head')[0].appendChild(script);
        var attempts = 15;
        (function (){
            if(typeof window.jQuery == 'undefined'){
                if(--attempts > 0){
                    window.setTimeout(arguments.callee, 250)
                }else{
                    alert("Wystąpił błąd podczas ładowania jQuery")
                }
            }else{
                bookmarklet();
            }
        })();
    }
})