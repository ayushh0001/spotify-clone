// Alert on playlist click
let alertme = document.getElementById('plist');
alertme.addEventListener('click', function () {
  alert("Log in to create an album");
});

// Initial setup
let songIndex = 0;
let audioElement = new Audio('songs/espresso.mp3');
let masterPlay = document.getElementById('masterplay');

// Buttons for next and previous
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('previous');

// Song list
let songs = [
  { filepath: "songs/espresso.mp3" },
  { filepath: "songs/prime.mp3" },
  {  filepath: "songs/saopualo.mp3", },
  { filepath: "songs/maniac.mp3", },
  { filepath: "songs/dior.mp3",},
  { filepath: "songs/onelove.mp3" },
  {  filepath: "songs/illuminati.mp3" },
  {  filepath: "songs/bachke.mp3" },
  {  filepath: "songs/victory anthem.mp3" },
  {  filepath: "songs/AamJeheMunde.mp3" },
  {  filepath: "songs/goat.mp3", },
  { filepath: "songs/fein.mp3", },
  {  filepath: "songs/shoorveer.mp3", },
  {  filepath: "songs/white brown.mp3", },
  {  filepath: "songs/lemonade.mp3", },
  {  filepath: "songs/case.mp3", },
  {  filepath: "songs/maharani.mp3", },
  {  filepath: "songs/jee ni lagda.mp3", },
  {  filepath: "songs/zulfaan.mp3", },
  {  filepath: "songs/vaathi.mp3", },
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
      
      audioElement.src = songs[index].filepath;
      audioElement.play();
      songIndex = index;
      console.log(`Now playing: ${songs[index].songname || "Track " + (index + 1)}`);
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

