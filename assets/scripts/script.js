 // Get the button and the message container
 const showMessageBtn = document.getElementById('showMessageBtn');
 const message = document.getElementById('message');
 const audioPlayer = document.getElementById('audioPlayer');

 // Add an event listener to the button to toggle the message visibility
 showMessageBtn.addEventListener('click', () => {
     if (message.style.display === 'none') {
         message.style.display = 'block';
         showTimePassed();
         audioPlayer.play();  // Call the function to show time passed
     } else {
         message.style.display = 'none';
         audioPlayer.pause();
     }
 });

 // Function to calculate and display time passed since March 19, 2024
 function showTimePassed() {
     // Set the start date (March 19, 2024)
     const startDate = new Date("March 19, 2024 00:00:00").getTime();

     // Update the time passed every second
     const timeInterval = setInterval(function () {
         const now = new Date().getTime();
         const timeElapsed = now - startDate; // Calculate time elapsed since March 19, 2024

         // Time calculations for days, hours, minutes, and seconds
         const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

         // Display the time passed
         const timePassedDisplay = document.getElementById('timePassed');
         timePassedDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

     }, 1000); // Update every second
 }