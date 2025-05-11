const video = document.getElementById("bg-video");
const image = document.getElementById("bg-image");
const loader = document.getElementById("loader");
const button = document.getElementById("patButton");
const messageBox = document.getElementById("messageBox");

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
  "You’ve always had the power, my dear. You just had to learn it for yourself."
];

let videoTimeout;

// Wait for video to be ready
video.addEventListener("canplaythrough", () => {
  if (video.readyState >= 4) {
    loader.style.display = "none";
  }
});

video.addEventListener("loadeddata", () => {
  setTimeout(() => {
    if (video.readyState >= 4) {
      loader.style.display = "none";
    }
  }, 1000);
});

button.addEventListener("click", () => {
  image.style.display = "none";
  video.style.display = "block";
  video.play();

  if (videoTimeout) clearTimeout(videoTimeout);

  const random = Math.floor(Math.random() * messages.length);
  messageBox.textContent = messages[random];
  messageBox.style.display = "block";

  messageBox.style.animation = "none";
  void messageBox.offsetWidth; // reset animation
  messageBox.style.animation = "fadeScale 0.4s ease forwards";

  videoTimeout = setTimeout(() => {
    video.pause();
    video.currentTime = 0;
    video.style.display = "none";
    image.style.display = "block";
  }, 10000);
});
