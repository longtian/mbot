/**
 * Created by wyvern on 15/7/20.
 */
var firmata = require('firmata');
var board = new firmata.Board('/dev/tty.wchusbserialfd120', function () {
    console.log('ready');
    board.reportDigitalPin(2, 1);
    board.pinMode(2, board.MODES.INPUT)

    var last=Date.now();
    board.on('digital-read-2', function (evt) {
        //process.stdout.write(""+evt);
        console.log(Date.now()-last);
        last=Date.now();
    });
});

