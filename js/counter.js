var d = new Date(new Date().getTime() + 509 * 120 * 120 * 2000);
   //jQuery Counter
$('#simply-countdown-losange').simplyCountdown({
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate(),
    enableUtc: false
    //year: 2015, // required
   // month: 6, // required
    //day: 30, // required
    /* Options here */
});