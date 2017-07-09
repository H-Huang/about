function setClassToggles (controller, offset_val, duration_val, identifiers, set_classes) {
    for (var i = 0; i < identifiers.length; i++) {
        new ScrollMagic.Scene({
            offset: offset_val,
            duration: duration_val
        })
        .setClassToggle(identifiers[i], set_classes[i])
        .addTo(controller)
    }
}

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
        .addTo(ctrl);
    });

    // get window height
    var wh = window.innerHeight;

    // set all skills
    var offset_vals = [.05*wh,         .05*wh,         .05*wh,         .05*wh,         
                       1*wh,        1*wh,        
                       2*wh,        2*wh,        2*wh,    2*wh,        2*wh,          2*wh,       
                       3*wh,        3*wh,        3*wh,     
                       4*wh,        4*wh,        4*wh,
                       4.9*wh];
    var identifiers = ["#skills-header-text", "#first-skill", "#second-skill", "#third-skill", 
                       "#fourth-skill", "#fifth-skill", 
                       "#sixth-skill", "#seventh-skill", "#seventh-skill", "#eighth-skill", "#ninth-skill", "#tenth-skill", 
                       "#eleven-skill", "#twelve-skill", "#thirteen-skill", 
                       "#fourteen-skill", "#fifteen-skill", "#sixteen-skill",
                       "#seventeen-skill"]
    for (var i = 0; i < offset_vals.length; i++) {
        new ScrollMagic.Scene({
            offset: offset_vals[i],
        })
        .setClassToggle(identifiers[i], "fadeInUp")
        .addTo(ctrl);
    }

    // var setMultipleClasses = TweenMax.set($('p'), {
    //     className: "red bold"
    // });

    /* Header animations */
    // "who i am"
    new ScrollMagic.Scene({
        offset: -1,
        duration: wh
    })
    .setClassToggle("#first-header", "fadeInLeft")
    .addTo(ctrl);

    // "what i've done"
    new ScrollMagic.Scene({
        offset: wh-1,
        duration: 2*wh
    })
    .setClassToggle("#second-header", "fadeInLeft")
    .addTo(ctrl);

    // "what i'm doing"
    new ScrollMagic.Scene({
        offset: 3*wh-1,
        duration: 2*wh
    })
    .setClassToggle("#third-header", "fadeInLeft")
    .addTo(ctrl);

    // "how to reach me"
    new ScrollMagic.Scene({
        offset: 5*wh-1
    })
    .setClassToggle("#six", "is-active")
    .addTo(ctrl);

});
