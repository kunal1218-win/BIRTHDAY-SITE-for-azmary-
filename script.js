const bgMusic = document.getElementById("bgMusic");
const lyricsMusic = document.getElementById("lyricsMusic");



// Show page function
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Start Panda page
document.getElementById("enterBtn").onclick = () => {
  showPage("lyrics");
  bgMusic.pause(); // BG paused on lyrics
  startLyrics();
};

// Lyrics lines with timeline (relative to song start)
const lyricsLines = [
  { text: "We are still kids and we're so in love💘", start: 0, duration: 4000 },
  { text: "Fightin'👊 against all odds 🥲", start: 4000, duration: 4000 },
  { text: "I know we'll be alright", start: 8000, duration: 6000 },
  { text: "this time🫠🌚🤭.!", start: 11000, duration: 3000 },
  { text: "Darling, just hold my hand🤝.", start: 15000, duration: 4000 },
  { text: "Be my girl, I'll be your man🤧🤕.", start: 19000, duration: 4000 },
  { text: "I see my future in your eyes👀🙈.", start: 23000, duration: 4000 }
];

function typeLine(line, callback){
  const text = document.getElementById("lyricsText");
  let j = 0;
  text.innerHTML = "";
  const interval = setInterval(()=>{
    text.innerHTML += (line.charAt(j) === " ") ? "&nbsp;" : line.charAt(j);
    j++;
    if(j >= line.length){
      clearInterval(interval);
      setTimeout(callback, 500); // short gap after line
    }
  }, 75);
}

function startLyrics() {
  lyricsMusic.currentTime = 131; // 00:02:10
  lyricsMusic.play();
  const text = document.getElementById("lyricsText");

  lyricsLines.forEach(line => {
    setTimeout(() => {
      typeLine(line.text, ()=>{});
    }, line.start);
  });

  // Total song duration handling
  setTimeout(()=>{
    lyricsMusic.pause();
    bgMusic.play();
    showPage("message");
  }, 30000); // 00:02:40 - 00:02:09 = 31s
}

// Floating Hearts Generator
for (let i = 0; i < 25; i++) {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "%"; // horizontal position
  heart.style.animationDuration = (5 + Math.random() * 5) + "s"; // speed random
  heart.style.animationDelay = Math.random() * 5 + "s"; // start delay random
  document.body.appendChild(heart);
}



document.getElementById("toVideo").onclick = () => {
  showPage("specialVideo");
  bgMusic.pause();
  const vid = document.getElementById("specialVid");
  vid.controls = true; // add this for testing
  vid.play().catch(() => console.log("Autoplay blocked"));
  vid.onended = () => {
    bgMusic.play();
    showPage("birthday");
  };
};

document.getElementById("nextStage").onclick = () => {
  showPage("memories");      // Show photo page / memories page
};

const memories = document.querySelectorAll(".memory");
const photoOverlay = document.getElementById("photo-overlay");
const overlayImg = document.getElementById("overlay-img");
const overlayPrev = document.getElementById("overlay-prev");
const overlayNext = document.getElementById("overlay-next");
const closeOverlay = document.getElementById("close-overlay");

let currentIndex = 0;

// OPEN IMAGE FULL SCREEN
memories.forEach((img, i) => {
  img.addEventListener("click", () => {
    currentIndex = i;
    overlayImg.src = img.src;
    photoOverlay.classList.remove("hidden");
  });
});

// CLOSE FULL SCREEN
closeOverlay.onclick = () => {
  photoOverlay.classList.add("hidden");
};

// NEXT IMAGE
overlayNext.onclick = () => {
  currentIndex = (currentIndex + 1) % memories.length;
  overlayImg.src = memories[currentIndex].src;
};

// PREV IMAGE
overlayPrev.onclick = () => {
  currentIndex = (currentIndex - 1 + memories.length) % memories.length;
  overlayImg.src = memories[currentIndex].src;
};

const openHeartBtn = document.getElementById("openHeartBtn");

openHeartBtn.onclick = () => {
  showPage("video-page"); // Stage 3 / Video Page open
};

// VIDEO PAGE SYSTEM
const videos = [
  "assets/videos/video1.mp4",
  "assets/videos/video2.mp4",
  "assets/videos/video3.mp4",
  "assets/videos/video4.mp4"
];

const videoGallery = document.querySelectorAll(".video-item");
const videoOverlay = document.getElementById("video-overlay");
const overlayVideo = document.getElementById("overlay-video");
const videoPrev = document.getElementById("video-prev");
const videoNext = document.getElementById("video-next");
const videoClose = document.getElementById("video-close");
const videoOpenBtn = document.getElementById("video-open-btn");

videoOpenBtn.onclick = () => {
  showPage("voice-page");
};


let currentVideoIndex = 0;

// OPEN VIDEO FULL SCREEN
videoGallery.forEach((vid, i) => {
  vid.addEventListener("click", () => {
    currentVideoIndex = i;
    overlayVideo.src = vid.src;
    videoOverlay.classList.remove("hidden");
    overlayVideo.play();
    bgMusic.pause();
  });
});

// NEXT VIDEO
videoNext.onclick = () => {
  currentVideoIndex = (currentVideoIndex + 1) % videoGallery.length;
  overlayVideo.src = videoGallery[currentVideoIndex].src;
  overlayVideo.play();
};

// PREV VIDEO
videoPrev.onclick = () => {
  currentVideoIndex = (currentVideoIndex - 1 + videoGallery.length) % videoGallery.length;
  overlayVideo.src = videoGallery[currentVideoIndex].src;
  overlayVideo.play();
};

// CLOSE FULL SCREEN
videoClose.onclick = () => {
  overlayVideo.pause();
  videoOverlay.classList.add("hidden");
  bgMusic.play();
};


// Floating Hearts Generator
for(let i=0;i<25;i++){
let heart=document.createElement("div");
heart.className="heart";
heart.style.left=Math.random()*100+"%";
heart.style.animationDuration=(5+Math.random()*5)+"s";
document.body.appendChild(heart);
}

function openSpecial(){
document.getElementById("overlay").style.display="flex";
startTyping();
}

function closeSpecial(){
document.getElementById("overlay").style.display="none";
}

const message="You are the most precious part of my life. Every heartbeat of mine carries your name. Stay forever with me.";
let i=0;

function startTyping(){
let text=document.getElementById("typingText");
text.innerHTML="";
i=0;

let interval=setInterval(()=>{
if(i<message.length){
text.innerHTML+=message.charAt(i);
i++;
}else{
clearInterval(interval);
}
},40);
}



// Birthday Card Flower Animation
const flowerContainer = document.querySelector(".flower-container");

if (flowerContainer) {
  for (let i = 0; i < 15; i++) {
    let flower = document.createElement("div");
    flower.className = "flower";
    flower.innerHTML = "🌸";
    flower.style.left = Math.random() * 100 + "%";
    flower.style.animationDuration = (3 + Math.random() * 4) + "s";
    flower.style.animationDelay = Math.random() * 3 + "s";
    flowerContainer.appendChild(flower);
  }
}







const voiceButtons = document.querySelectorAll(".voice-btn");
const voicePlayer = document.getElementById("voice-player");

voiceButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // Pause BG music and remember position
    const bgCurrentTime = bgMusic.currentTime;
    bgMusic.pause();

    // Play selected voice
    voicePlayer.src = btn.getAttribute("data-src");
    voicePlayer.play();

    // When voice ends → resume BG music from same position
    voicePlayer.onended = () => {
      bgMusic.currentTime = bgCurrentTime;
      bgMusic.play();
    };
  });
});
