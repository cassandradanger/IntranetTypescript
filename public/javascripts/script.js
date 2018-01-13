/**
 * Created by casie on 5/13/15.
 */

var opp;
var firstNum;
var secondNum;
var total;

$(document).ready(function(){
    $('.num').on('click', function(){
        console.log("click worked");
        if (!opp) {
            if (firstNum) {
                firstNum = "" + firstNum + $(this).data("num");
            } else {
                firstNum = $(this).data("num");
            }
            console.log(firstNum);
            $('#display').text(firstNum);
        };
    });

    $('.opp').on('click', function(){
        opp = $(this).attr('value');
        console.log(opp);
        $('#display').text(opp);
    });

    $('.num').on('click', function() {
        console.log("click worked");
        if (opp) {
            if (secondNum) {
                secondNum = "" + secondNum + $(this).data("num");
            } else {
                secondNum = $(this).data("num");
            }
            console.log(secondNum);
            $('#display').text(secondNum);
            console.log(firstNum);
        };
    });

    $('.equal').on('click', function(){
        console.log('equal works!');
        if(opp == "+"){
            total = (parseInt(firstNum)) + (parseInt(secondNum));
        };
        if(opp == "-"){
            total = (parseInt(firstNum)) - (parseInt(secondNum));
        };
        if(opp == "/"){
            total = (firstNum / secondNum);
        };
        if(opp == "*"){
            total = (firstNum * secondNum);
        };
        $('#display').text(total);
    });

    $('.clear').on('click', function(){
        $('#display').empty();
        firstNum = 0;
        secondNum = 0;
        opp = "";
        total = 0;
    });
});
