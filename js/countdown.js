function makeTimer() {
    var endTime = new Date("16 january 2022 9:56:00 GMT+06:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span class='timer-span'>Days</span>");
    $("#hours").html(hours + "<span class='timer-span'>Hours</span>");
    $("#minutes").html(minutes + "<span class='timer-span'>Minutes</span>");
    $("#seconds").html(seconds + "<span class='timer-span'>Seconds</span>");

}

setInterval(function() { makeTimer(); }, 1000);