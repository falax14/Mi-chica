var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function ($) {
    $.fn.typewriter = function () {
        this.each(function () {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html('');
            var timer = setInterval(function () {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 75);
        });
        return this;
    };
})(jQuery);

function timeElapse(date) {
   const startDate = new Date("2025-10-20T00:00:00");
    const now = new Date();

    let seconds = Math.floor((now - startDate) / 1000); 

    const days = Math.floor(seconds / (3600 * 24));
    seconds %= 3600 * 24;

    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const result = `<span class="digit">${days}</span> días ` +
                   `<span class="digit">${hours}</span> horas ` +
                   `<span class="digit">${minutes}</span> minutos ` +
                   `<span class="digit">${seconds}</span> segundos`;

    document.getElementById("clock").innerHTML = result;
}
