/**
 * Created by wyvern on 15/7/21.
 */
var firmata = require('firmata');
var board = new firmata.Board('/dev/tty.wchusbserialfd120', function () {

    board.on('string',function(){
        console.log(arguments);
    })
    board.pinMode(9,board.MODES.OUTPUT);
    board.pinMode(10,board.MODES.PWM);
    board.pinMode(11,board.MODES.OUTPUT);

    board.digitalWrite(9,1);
    board.analogWrite(10,255);
    board.digitalWrite(11,1);

    board.pinMode(13,board.MODES.OUTPUT);

    board.digitalWrite(13,board.HIGH);
});

