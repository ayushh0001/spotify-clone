// Alert on playlist click
let alertme = document.getElementById('plist');
alertme.addEventListener('click', function () {
  alert("Log in to create an album");
});

// Initial setup
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterplay');

// Buttons for next and previous
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('previous');

// Song list
let songs = [
  { title: "Espresso", filepath: "songs/espresso.mp3" },
  { title: "Prime", filepath: "songs/prime.mp3" },
  { title: "Sao Paulo", filepath: "songs/saopualo.mp3" },
  { title: "Maniac", filepath: "songs/maniac.mp3" },
  { title: "Dior", filepath: "songs/dior.mp3" },
  { title: "One Love", filepath: "songs/onelove.mp3" },
  { title: "Illuminati", filepath: "songs/illuminati.mp3" },
  { title: "Bachke", filepath: "songs/bachke.mp3" },
  { title: "Victory Anthem", filepath: "songs/victory anthem.mp3" },
  { title: "Aam Jehe Munde", filepath: "songs/AamJeheMunde.mp3" },
  { title: "GOAT", filepath: "songs/goat.mp3" },
  { title: "FE!N", filepath: "songs/fein.mp3" },
  { title: "Shoorveer", filepath: "songs/shoorveer.mp3" },
  { title: "White Brown", filepath: "songs/white brown.mp3" },
  { title: "Lemonade", filepath: "songs/lemonade.mp3" },
  { title: "Case", filepath: "songs/case.mp3" },
  { title: "Maharani", filepath: "songs/maharani.mp3" },
  { title: "Jee Ni Lagda", filepath: "songs/jee ni lagda.mp3" },
  { title: "Zulfaan", filepath: "songs/zulfaan.mp3" },
  { title: "Vaathi", filepath: "songs/vaathi.mp3" }
];

// Play/pause toggle
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
});

// Click on song cards to play the song
Array.from(document.getElementsByClassName('card')).forEach((element, index) => {
  element.addEventListener('click', () => {
    if (songs[index]) {
      const song = songs[index];
      
      audioElement.src = song.filepath;
      audioElement.play();
      songIndex = index;

      // ✅ Update song title
      songTitle.textContent = "Now Playing: " + song.title;

      console.log(`Now playing: ${song.title || "Track " + (index + 1)}`);
    }
  });
});

// Next Song
nextBtn.addEventListener('click', () => {
  songIndex = (songIndex + 1) % songs.length; // loop back to first song
  audioElement.src = songs[songIndex].filepath;
  audioElement.play();
  console.log(`Now playing: ${songs[songIndex].songname || "Track " + (songIndex + 1)}`);
});

// Previous Song
prevBtn.addEventListener('click', () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length; // loop back from start
  audioElement.src = songs[songIndex].filepath;
  audioElement.play();
  console.log(`Now playing: ${songs[songIndex].songname || "Track " + (songIndex + 1)}`);
});



audioElement.addEventListener('ended', () => {
  // Move to the next song index
  songIndex = (songIndex + 1) % songs.length;
  

  // Set the new song source
  audioElement.src = songs[songIndex].filepath;

  // Play the next song
  audioElement.play();

  console.log(`Now playing: ${songs[songIndex].songname || "Track " + (songIndex + 1)}`);
});


const login=document.getElementById("login")
login.addEventListener("click", function () {
    window.location.href = "login.html";
});




















 

  const songTitle = document.getElementById('song-title');
  const progress = document.getElementById('progress');
  const progressContainer = document.getElementById('progress-container');

 


  
  // Progress bar update
 audioElement.addEventListener("timeupdate", () => {
  if (audioElement.duration) {
    const percent = (audioElement.currentTime / audioElement.duration) * 100;
    progress.style.width = percent + '%';
  }
});
  // Seek on click
 progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audioElement.duration;

  if (!isNaN(duration)) {
    audioElement.currentTime = (clickX / width) * duration;
  }
});

  // Initialize
  const muteBtn = document.getElementById('mute');

// muteBtn.addEventListener('click', () => {
//   audioElement.muted = !audioElement.muted; // Toggle mute

//   // Change icon or text based on state
 
// });