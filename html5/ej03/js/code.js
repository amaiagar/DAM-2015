window.onload=function() {
    "use strict"
if (Modernizr.input.placeholder)
    {
        console.log("yep");
    }
    else{
        console.log("nop");
}

Modernizr.load({


    test: Modernizr.input.placeholder,
    nope: [
            'placeholder_polyfill.min.css',
            'placeholder_polyfill.jquery.min.combo.js'
          ]
});

}
;
