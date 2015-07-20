/**
 * Created by wyvern on 15/7/21.
 */
var firmata = require('firmata');
var board = new firmata.Board('/dev/tty.wchusbserialfd120', function () {

    console.log('ready');

    var P=11;

    board.pinMode(P,board.MODES.PWM);

    setInterval(function(){

        board.digitalWrite(13,board.HIGH);
        board.digitalWrite(13,board.LOW);
        board.digitalWrite(11,board.HIGH);
        board.digitalWrite(11,board.LOW);

    },100)

});

