
// $(document).ready(function (){
//   	$("#start").click(function (){
//   		i++
//   		var text1 = $('<div id = "text">Line #' + i + '</div>');
//   		var button2 = $('<button id = "change">change color</button>');
//   		var button3 = $('<button id = "remove">remove</button>');
//   		$("body").append(text1, button2, button3);
//   	});
// 	$("#change").on("click", function (){
//  			$(this).css("background-color", "yellow");
//  		});



var i = 0;
$(document).ready(function (){
	$("#start").click(function (){	
		i++;
		$('body').append("<p class = color" + i + ">line  " + i + "</p><button class = 'change'>change color</button><button class = 'remove'>remove</button>");

//however many times the generate button is clicked (let's call that # "gClicked#"), the #1 change/remove button event happens that many times. The #2 change/remove button event happens gClicked#-2 times. The #3 change/remove button event happens gClicked#-3 times etc etc....need to fix

			$('.change').on("click", function(){
				$('.color' +(i-i+1)).css("background-color", "yellow");
			});

			$('.remove').click(function(){
			alert('hello');
		});
	});

});







 // 		i++;
 	// 	$("body").add('<div>Line #' + i + ' <button id = "change">change color</button> <button id = "remove">remove</button></div>');
 	// });
// 	$("#change").on("click", "selected", function (){
// 			$("div").css("background-color", "yellow");
// 		});
// });


//$(document).ready(function (){
	// document.getElementById("start").addEventListener("click", function(){
	//    	i++;
 // 		$("body").add('<div>Line #' + i + ' <button id = "change">change color</button> <button id = "remove">remove</button></div>');
 // 	});
	// });
// });






    // $('button').on('click',function(){
    //     var r= $('<input type="button" value="new button"/>');
    //     $("body").append(r);
    // });