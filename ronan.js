
    var trackLyrics = document.getElementById("track-lyrics");

    function startScroll() {
      trackLyrics.start();
    }

    function stopScroll() {
      trackLyrics.stop();
    }
    
    var audioPlayer = document.getElementById("audio-player");
    
    audioPlayer.addEventListener("pause", function() {
      trackLyrics.stop();
    });
