const video = document.getElementById("bg-video");
const image = document.getElementById("bg-image");
const loader = document.getElementById("loader");
const button = document.getElementById("patButton");
const messageBox = document.getElementById("messageBox");
const music = document.getElementById("bg-music");

const messages = [
  "Hope is a good thing, maybe the best of things and no good thing ever dies.",
  "You got a dream? Go get it. Period.",
  "To infinity… and beyond!",
  "You mustn’t be afraid to dream a little bigger, darling.",
  "It’s supposed to be hard. That’s what makes it great.",
  "Just keep swimming.",
  "Sometimes it’s the people no one imagines anything of, who do the things no one can imagine.",
  "This is your time. Now go out there and take it.",
  "You're braver than you believe, stronger than you seem, and smarter than you think.",
  "After all, tomorrow is another day.",
  "What we do in life echoes in eternity.",
  "It’s only after we’ve lost everything that we’re free to do anything.",
  "We are infinite.",
  "When you die, you can't see sunsets!",
  "You’ve always had the power, my dear. You just had to learn it for yourself.",
   "Believe you can and you're halfway there.",
    "Every day is a new beginning.",
    "You are stronger than you think.",
    "Choose to shine.",
    "Small steps every day lead to big results.",
    "Positive mind. Positive vibes. Positive life.",
    "Start where you are. Use what you have. Do what you can.",
    "Your only limit is your mind.",
    "Be the reason someone smiles today.",
    "Happiness is a choice.",
    "You’ve got this!",
    "Don’t wait for the storm to pass, learn to dance in the rain.",
    "Progress, not perfection.",
    "The best is yet to come.",
    "Do something today that your future self will thank you for.",
    "Dream big. Work hard. Stay humble.",
    "Keep going. Everything you need will come to you.",
    "Inhale confidence, exhale doubt.",
    "The comeback is always stronger than the setback.",
    "You are capable of amazing things.",
    "Kindness changes everything.",
    "You don’t have to be perfect to be amazing.",
    "Doubt kills more dreams than failure ever will.",
    "One kind word can change someone’s entire day.",
    "Let your light shine."
];

let videoTimeout;

function hideLoaderWhenReady() {
  if (video.readyState >= 3) {
    loader.style.display = "none";
  }
}

video.addEventListener("canplaythrough", hideLoaderWhenReady);
video.addEventListener("loadeddata", () => {
  setTimeout(hideLoaderWhenReady, 500);
});

setTimeout(() => {
  loader.style.display = "none";
}, 5000);

button.addEventListener("click", () => {
  video.currentTime = 0;
  video.style.display = "block";
  image.classList.add("hidden-fade");
  video.classList.remove("hidden-fade");

  video.play().then(() => {
    music.currentTime = 0;
    music.play();

    const random = Math.floor(Math.random() * messages.length);
    messageBox.textContent = messages[random];
    messageBox.style.display = "block";
    messageBox.style.animation = "none";
    void messageBox.offsetWidth;
    messageBox.style.animation = "fadeScale 0.4s ease forwards";

    if (videoTimeout) clearTimeout(videoTimeout);
    videoTimeout = setTimeout(() => {
      video.pause();
      music.pause();
    }, 10000);
  }).catch((error) => {
    console.error("Video failed to play:", error);
  });
});
