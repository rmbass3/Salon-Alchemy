AOS.init();

$(".arrow-container").on("click", ()=> {
    $(".arrow-container").fadeOut();
})

new TypeIt("#adj-change", {
    speed: 100,
    lifeLike: true,
    afterComplete: function (step, instance) {
        instance.destroy();
    }
})
.pause(500)
.type("beautifully", {delay: 3000})
.delete(11)
.type("magically", {delay: 3000})
.delete(9)
.type("expertly", {delay: 2200})
.go();
