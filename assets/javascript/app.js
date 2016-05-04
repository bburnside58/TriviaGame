$(document).ready(function(){
	var game = 	{

		questions:
				[
				{
				question: "What motocross rider is featured on the 2016 Wheaties cereal box?",
				answer0: "James Stewart",
				answer1: "Ricky Carmichael",
				answer2: "Travis Pastrana",
				answer3: "Ryan Dungey",
				answer4: "Yo greedy, greedy grandpappy",
				correctans: "Ryan Dungey",
				}
				]

				}

				correctans: 0,
				wrongans: 0,
				unans: 0, 

	$('#start').on('click', timer);



	// start: function(){
	// 	alert:"you started"
	// }

    $("#start").on("click", function(){
        console.log("you started");
        
    })
})
