/**
 * @author Chidinma Irene Nwoye
 */


//Below is an array of my images on how far a human can throw
var images = ["ahigh_throw_blood.png","bhigh_throw_drumstick.png","chigh_throw_redirector.png","dhigh_throw_gravity.png","ehigh_throw_giraffe.png","fhigh_throw_3.png","ghigh_throw_5.png","ihigh_throw_10.png",
"jhigh_throw_14.png","khigh_throw_16.png","lhigh_throw_balloon.png"]; 

var index=0;          //Zero is the index of the first image in my array of images

function setNav(){              //I'm setting the button events here
	console.log("setNav");      //I'm confirming if my function works

	$(".button").on("click",function(){          //I'm setting my buttons and defining a function  

		var isNext = $(this).hasClass("next");

		if(isNext==true&& index!=(images.length-1)){  //I've created an if-else statement to go through my array and output the images when I click on next
			index=index +1;                           //Here we're advancing
		}else if (isNext == false && index>0){
			index=index-1;
		}

		if (index==0){                                        //I've created an if-else statement for my previous button and once the user has exhausted          
			$(".buttonprevious").addClass("disabled");        //the length of my array, at the last value on my index counter, the next button will be disabled
		}else if (index==(images.length-1)){                 //But at that point, the user can still go backwards till the counter is at zero (the first image)
			$(".button.next").addClass("disabled");
		}else{
			$(".button").removeClass("disabled");
		}	

		console.log=(isNext);    //For outputting the next image

		updateImage();  

	});

}