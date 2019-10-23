$(document).ready(function () {
    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
});
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    relativeInput: true
});
var scene1 = document.getElementById('scene1');
var parallaxInstance1 = new Parallax(scene1, {
    relativeInput: true
});
var scene2 = document.getElementById('scene2');
var parallaxInstance2 = new Parallax(scene2, {
    relativeInput: true
});
var scene3 = document.getElementById('scene3');
var parallaxInstance3 = new Parallax(scene3, {
    relativeInput: true
});
var scene4 = document.getElementById('scene4');
var parallaxInstance4 = new Parallax(scene4, {
    relativeInput: true
});