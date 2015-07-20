/**
 * Created by wyvern on 15/7/20.
 */
var firmata = require('firmata');
var board = new firmata.Board('/dev/tty.wchusbserialfd120', function () {

    board.setSamplingInterval(100);
    var values = {};
    for (var i = 0; i < board.analogPins.length; i++) {
        (function (j) {
            var pin=board.analogPins[j];
            board.pinMode(pin,board.MODES.ANALOG);
            board.analogRead(j, function (val) {
                values[j] = val;
            });
        })(i);
    }

    setInterval(function(){
        console.log(values);
    },100);
});

