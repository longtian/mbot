/**
 * Created by wyvern on 15/7/20.
 */
var firmata = require('firmata');
var board = new firmata.Board('/dev/tty.wchusbserialfd120', function (){

    function search(mode_name){
        console.log('Mode: %s (%d)\nPins:',mode_name,board.MODES[mode_name]);
        return function(item,i){
            if(item.supportedModes.indexOf(board.MODES[mode_name])!=-1){
                console.log("- D%d",i);
            }
        }
    }

    Object.keys(board.MODES).forEach(function(name){
        board.pins.forEach(search(name));
    });


    process.exit();

});