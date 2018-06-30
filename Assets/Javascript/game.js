 
    var randomResult;
    var loss = 0;
    var win = 0;
    var previous = 0;

    var resetAndStart = function() {

    $(".crystals").empty();

        var images = [
             "https://vignette.wikia.nocookie.net/crashban/images/0/06/Gem-orange.png/revision/latest?cb=20170729064350",
             "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Jewelry-and-Diamonds-PNG/Blue_Gem_PNG_Clip_Art_Image.png?m=1466391301",
             "https://cdn.pixabay.com/photo/2014/04/03/10/02/diamond-309694_960_720.png",
             "https://vignette.wikia.nocookie.net/crashban/images/b/b3/Crash_Nitro_Kart_Red_Gem.png/revision/latest?cb=20170520003355"];
        
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

        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        })

        $(".crystals").append(crystal);

    }  

         $("#previous").html("Total Points: " + previous);

     }

     

    resetAndStart();
       
    $(document).on("click", ".crystal", function() {

        var num = parseInt($(this).attr("data-random"));

        previous += num;

        $("#previous").html("Total Points: " + previous);

        console.log(previous);

        if(previous > randomResult){
            loss++;

            $("#loss").html("You Lose: " + loss);

            previous = 0

            

            resetAndStart();
        }
        else if(previous === randomResult){

            win++;

            $("#win").html("You Win: " + win);

            previous = 0;

            resetAndStart();
        }

         });


    // game with 4 Crystals
    //Every crystal needs a random number asigned to it but player doesnt know the value. 1 to 12 is value of crystal
    
    // theres also random number that is posted at top of the game. 
    // This is the number the crystals need to add up to 
    // to win the game.
    // When clicking any CRYSTAL, they should add to each other
    // until it equals the total score.
    // If it is not equal, it is a loss and game starts over.
    //If it is equal, then add a win to a win counter.
    // A new random number should be generated every win or loss to those Crystals