/**
 * Created by casie on 5/13/15.
 */

var opp;
var firstNum;
var secondNum;

$(document).ready(function(){
    $('.num').on('click', function(){
        console.log("click worked");
        if(!opp){
            if(firstNum) {
                firstNum = "" + firstNum + $(this).data("num");
            }else{
                firstNum = $(this).data("num");
            }
        console.log(firstNum);
            $('#display').text(firstNum);

        }
    });
});







//console.log("js is loading");
//var one;
//var two;
//var three;
//var four;
//var five;
//var six;
//var seven;
//var eight;
//var nine;
//var zero;
//
//$(document).ready(function(){
//    $('.one').on('click', function(){
//         one = $(this).attr('value');
//        $('#display').append(one).val();
//        console.log(one);
//    });
//    $('.two').on('click', function(){
//         two = $(this).attr('value');
//        console.log(two);
//        $('#display').append(two);
//    });
//    $('.three').on('click', function(){
//         three = $(this).attr('value');
//        console.log(three);
//        $('#display').append(three);
//    });
//    $('.four').on('click', function(){
//         four = $(this).attr('value');
//        console.log(four);
//        $('#display').append(four);
//    });
//    $('.five').on('click', function(){
//         five = $(this).attr('value');
//        console.log(five);
//        $('#display').append(five);
//    });
//    $('.six').on('click', function(){
//         six = $(this).attr('value');
//        console.log(six);
//        $('#display').append(six);
//    });
//    $('.seven').on('click', function(){
//         seven = $(this).attr('value');
//        console.log(seven);
//        $('#display').append(seven);
//    });
//    $('.eight').on('click', function(){
//         eight = $(this).attr('value');
//        console.log(eight);
//        $('#display').append(eight);
//    });
//    $('.nine').on('click', function(){
//         nine = $(this).attr('value');
//        console.log(nine);
//        $('#display').append(nine);
//    });
//    $('.zero').on('click', function(){
//         zero = $(this).attr('value');
//        console.log(zero);
//        $('#display').append(zero);
//    });
//    $('.plus').on('click', function(){
//        plus = $(this).attr('value');
//        console.log(plus);
//        $('#display').append(plus);
//    });
//    $('.minus').on('click', function(){
//        minus = $(this).attr('value');
//        console.log(minus);
//        $('#display').append(minus);
//    });
//    $('.divide').on('click', function(){
//        divide = $(this).attr('value');
//        console.log(divide);
//        $('#display').append(divide);
//    });
//    $('.multiply').on('click', function(){
//        multiply = $(this).attr('value');
//        console.log(multiply);
//        $('#display').append(multiply);
//    });
//    $('.equal').on('click', function(){
//        equal = $(this).attr('value');
//        console.log(equal);
//        $('#display').append(equal);
//    });
//    $('.clear').on('click', function(){
//        clear = $(this).attr('value');
//        console.log(clear);
//        $('#display').empty();
//    });
//    //////////////////////////////////////////////////////////////////////////////////////
//    var elms = document.getElementById(containerID).getElementsByTagName("*");
//    for (var i = 0; i < elms.length; i++) {
//        if (elms[i].id === childID) {
//            elm = elms[i];
//            break;
//        }
//    }
//    return elm;
//}
//
//});