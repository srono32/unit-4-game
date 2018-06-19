 
    var randomResult;
    var loss;
    var win;

    randomResult = Math.floor(Math.random() * 69) + 30  ;

    $("#result").html("Random Result: "+ randomResult);

    for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1;
        console.log(random);

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
        });


        $(".crystals").append(crystal);

    }
       
    $(".crystal").on("click", function() {

        console.log($(this).attr("data-random"));


    });


    // game with 4 Crystals
    //Every crystal needs a random number asighned to it but not revealed to the player. 1 to 12 is value of crystal
    // A new random number should be generated every win or loss to those Crystals
    // theres also random number that is posted at top of the game. 
    // This is the number the crystals need to add up to 
    // to win the game.
    // When clicking any CRYSTAL, they should add to each other
    // until it equals the total score.
    // If it is not equal, it is a loss and game starts over.
    //If it is equal, then increment a win counter.