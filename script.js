$(document).ready(function() {
    // Sample participant list
    var participants = ["Oskar", "Jero", "Tobi", "Tes1", "Tes2", "Tes3"];
    var drawn = []

    $("#drawButton").click(function() {
        let name = $("#name").val();

        let index = null;
        for (var i = 0; i < participants.length; i++) {
            console.log(participants[i] == name)
            if(participants[i] == name){
                index = i;
            }
        }
        if(index === null){
            $("#result").text("Name in Liste nicht vorhanden")
        }else{
            $("#result").text(drawn[index])
        }

    });

    function drawParticipants(seedValue) {
        
        let found = false;
        let increment = 0;

        while(!found){
            var remainingParticipants = participants.slice(); // Create a copy of the participants array
            found = true;
            drawn = [];
            for (var i = 0; i < participants.length; i++) {
                var rng = new Math.seedrandom(seedValue+i+increment);
                var drawnIndex = Math.floor(rng() * remainingParticipants.length);
                var drawnParticipant = remainingParticipants[drawnIndex];

                if(drawnParticipant === participants[i]){
                    found = false;
                }
                drawn.push(drawnParticipant);
            
                // Display or store the assignments
                console.log(participants[i] + " draws " + drawnParticipant);
                remainingParticipants.splice(drawnIndex, 1); // Remove the drawn person from the remaining list
            }
            increment++;
        }
        console.log(drawn)
      }
    
      // Example usage with a seed value "mySeed123"
      drawParticipants(54634455546);
  });