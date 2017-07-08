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
        offset: -1,
        duration: wh
    })
    .setClassToggle("#first", "not-shown")
    .addTo(ctrl);

    new ScrollMagic.Scene({
        offset: wh - 1,
        duration: wh
    })
    .setClassToggle("#first", "shown")
    .addTo(ctrl);

    new ScrollMagic.Scene({
        offset: 2*wh - 1,
        duration: wh
    })
    .setClassToggle("#second", "shown")
    .addTo(ctrl);

    new ScrollMagic.Scene({
        offset: 5*wh - 1
    })
    .setClassToggle("#six", "is-active")
    .addTo(ctrl);
});
