$(document).ready(function() {
    // Sample participant list
    var participants = ["Oskar", "Jero", "Tobi"];
    var drawn = []

    $("#drawButton").click(function() {

        var remainingParticipants = participants.slice(); // Create a copy of the participants array
        let name = $("#name").text();
        for (var i = 0; i < participants.length; i++) {
            var randomIndex = Math.floor(Math.random() * remainingParticipants.length);
            var drawnParticipant = remainingParticipants[randomIndex];

            // Ensure nobody draws themselves
            if (drawnParticipant === participants[i]) {
            remainingParticipants.splice(randomIndex, 1); // Remove the drawn person from the remaining list
            randomIndex = Math.floor(Math.random() * remainingParticipants.length);
            drawnParticipant = remainingParticipants[randomIndex];
            }
        }
      

      $("#result").text(drawnParticipant)

    });

    function drawParticipants(seedValue) {
        
        let found = false;
        let increment = 0;

        while(!found){
            var rng = new Math.seedrandom(seedValue+increment);
            var remainingParticipants = participants.slice(); // Create a copy of the participants array
            found = true;
            drawn = [];
            for (var i = 0; i < participants.length; i++) {
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
      drawParticipants(1);
  });