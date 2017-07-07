$(document).ready(function() {
    // Init ScrollMagic
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // Create scene
    $("section").each(function() {

        var name = $(this).attr('id');
        new ScrollMagic.Scene({
            triggerElement: this
        })
        .setPin(this)
        .addIndicators({
            colorStart: "rgba(255,255,255,0.5)",
            colorEnd: "rgba(255,255,255,0.5)", 
            colorTrigger : "rgba(255,255,255,1)",
            name:name
        })
        .addTo(ctrl);
    });

    // get window height
    var wh = window.innerHeight;
    console.log(wh);

    new ScrollMagic.Scene({
        offset: wh*3 - 1
    })
    .setClassToggle("#four", "is-active")
    .addTo(ctrl);
});
