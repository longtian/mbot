/**
 * Created by wyvern on 15/7/20.
 */
var firmata = require('firmata');
var keypress = require('keypress');
var current=0;

keypress(process.stdin);

process.stdin.on('keypress', function (ch, key) {
    if (key.name === 'q') {
        process.exit();
        return;
    }

    process.stdout.write('\033c');

    switch(key.name){
        case 'up':
            current++;
            console.log(current);
            break;
        case 'down':
            current--;
            console.log(current);
            break;
        case 'left':
            console.log(current,'HIGH');
            board.pinMode(current,board.MODES.OUTPUT);
            board.digitalWrite(current,board.HIGH);
            break;
        case 'right':
            console.log(current,'LOW');
            board.pinMode(current,board.MODES.OUTPUT);
            board.digitalWrite(current,board.LOW);
            break;
    }

});

process.stdin.setRawMode(true);
process.stdin.resume();


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
        console.log(current,values);
    },500);
});