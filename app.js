/*-------------------------------- Constants --------------------------------*/
const paths = [
  {
    path: 0,
    img: "https://static.wixstatic.com/media/3ec94b_dcba2020735f482e9811e866bbdc73a4~mv2.png",
    imgAlt: "Office desk with a computer screen at night",
    text: "You're the last one remaining in your office. \n \n There's a big client meeting first thing tomorrow, and your boss wants you to create flashy presentation visuals to showcase the firm's products in the best possible way. With an impressive new client on the horizon, you must present a strong impression – if you don't want to be replaced with someone younger, cheaper, and more capable than yourself. \n \n As the clock strikes midnight, an unsettling chill fills the air. Shadows flicker in the corners of your eye, and the silence is deafening. You’ve heard rumors about this old office building being haunted but often dismissed the rumors as superstition and the over-imaginings of a fearful mind. Now you can feel your fears begin to surface – every nerve in your body on edge – and a growing uneasiness takes over. \n \n You chuckle nervously at the idea of ghosts and continue with your work. You have to finish these tasks if you want to avoid being fired. As you click away on your computer, you glance around the dark office space and try to calm yourself down. After all, there is nobody here besides you, right? \n \n But what about those strange sounds you hear from behind you? Or the cold wind you feel from nowhere? \n \n  ** Knock **  \n \n A shiver runs down your spine. \n \n What's that noise? \n \n With a sudden creak in the office storage room, you realize that you may not be alone.",
    choice1: "Investigate the strange noise in the storage room.",
    choice2: "Ignore it and continue working.",
    choice1Path: 1,
    choice2Path: 2,
  },
  {
    path: 1,
    img: "https://static.wixstatic.com/media/3ec94b_a78a780233f240a9b5546e1e4c297afd~mv2.png",
    imgAlt: "Creepy empty storage room with doll",
    text: "Heart pounding, you approached the storage room and saw the door slightly ajar. \n \n With a gulp, you gently pushed open the door and peered into the dark, cold space. It was pitch-black inside. You could feel your palms begin to sweat, and the hairs on the back of your neck stood up as you took a hesitant step forward. \n \n The office space was filled with old and damaged equipment – outdated computers, broken desktops, and broken monitors. A musty smell hung in the air and grew stronger as you stepped closer. You tried the light switch, but it didn't seem to work. \n \n As you turned around to leave, your eyes caught something. \n \n A doll? \n \n It's a creepy, ragged doll with mismatched eyes and a big red smile. It sat atop an old desk at the far back of the storage room. \n \n Something about that doll gave you the creeps. You stepped towards the box and reached inside. \n \n The doll had an unnatural feel. It's as if something was looking at you through it—like a doll was supposed to be a receptacle for the souls of lost children. You got the feeling that this particular doll was a receptacle for the soul of something else, something darker. \n \n Your heart started to beat faster.",
    choice1: "Pick up the doll.",
    choice2: "Step back and leave the storage room.",
    choice1Path: 3,
    choice2Path: 4,
  },
  {
    path: 2,
    img: "https://static.wixstatic.com/media/3ec94b_e5831fa9049a465287ad0076919a7cef~mv2.png",
    imgAlt: "Doll sitting on the desk staring at reader",
    text: "You sat back down and tried to focus on your report, ignoring the lingering dread. It's probably nothing, but it would be stupid to check it out. You'd have to pass through the dark hallways and confront whatever made those strange noises, which would be foolish. \n \n Just focus on the computer screen. Don't think about those sounds. They're just a trick of the mind, probably a mouse running through the vents. Or maybe the heater. \n \n As you typed, the air grew colder. The office felt even creepier than before. You tried concentrating on the numbers before you but can't shake this feeling. Something's wrong... something’s off... \n \n Suddenly, you notice movement in the corner of your vision. A shadowy figure flitted by the edge of the window, passing over the pale moonlight streaming into the dark office. \n \n You turned over to see a doll suddenly appear on your desk. Its painted eyes seemed to stare right at you.",
    choice1: "Scream and throw the doll in the trash",
    choice2: "Inspect the doll more closely",
    choice1Path: 5,
    choice2Path: 6,
  },
  {
    path: 3,
    img: "https://picsum.photos/id/48/200/300",
    imgAlt: "Test Alt Text",
    text: "Hello This is Path 3",
    choice1: "choice 7 Label",
    choice2: "choice 8 Label",
    choice1Path: 0,
    choice2Path: 0,
  },
  {
    path: 4,
    img: "https://picsum.photos/id/49/200/300",
    imgAlt: "Test Alt Text",
    text: "Hello This is Path 4",
    choice1: "choice 9 Label",
    choice2: "choice 10 Label",
    choice1Path: 0,
    choice2Path: 0,
  },
  {
    path: 5,
    img: "https://picsum.photos/id/50/200/300",
    imgAlt: "Test Alt Text",
    text: "Hello This is Path 5",
    choice1: "choice 11 Label",
    choice2: "choice 12 Label",
    choice1Path: 0,
    choice2Path: 0,
  },
  {
    path: 6,
    img: "https://picsum.photos/id/51/200/300",
    imgAlt: "Test Alt Text",
    text: "Hello This is Path 6",
    choice1: "choice 13 Label",
    choice2: "choice 14 Label",
    choice1Path: 0,
    choice2Path: 0,
  },
  {
    path: 7,
    img: "https://picsum.photos/id/51/200/300",
    imgAlt: "Test Alt Text",
    text: "Hello This is Path 6",
    choice1: "choice 13 Label",
    choice2: "choice 14 Label",
    choice1Path: 0,
    choice2Path: 0,
  },
  {
    path: 8,
    img: "https://picsum.photos/id/51/200/300",
    imgAlt: "Test Alt Text",
    text: "Hello This is Path 6",
    choice1: "choice 13 Label",
    choice2: "choice 14 Label",
    choice1Path: 0,
    choice2Path: 0,
  },
  {
    path: 9,
    img: "https://picsum.photos/id/51/200/300",
    imgAlt: "Test Alt Text",
    text: "Hello This is Path 6",
    choice1: "choice 13 Label",
    choice2: "choice 14 Label",
    choice1Path: 0,
    choice2Path: 0,
  },
  {
    path: 10,
    img: "https://picsum.photos/id/51/200/300",
    imgAlt: "Test Alt Text",
    text: "Hello This is Path 6",
    choice1: "choice 13 Label",
    choice2: "choice 14 Label",
    choice1Path: 0,
    choice2Path: 0,
  },
  {
    path: 11,
    img: "https://picsum.photos/id/51/200/300",
    imgAlt: "Test Alt Text",
    text: "Hello This is Path 6",
    choice1: "choice 13 Label",
    choice2: "choice 14 Label",
    choice1Path: 0,
    choice2Path: 0,
  },
  {
    path: 12,
    img: "https://picsum.photos/id/51/200/300",
    imgAlt: "Test Alt Text",
    text: "Hello This is Path 6",
    choice1: "choice 13 Label",
    choice2: "choice 14 Label",
    choice1Path: 0,
    choice2Path: 0,
  },
  {
    path: 13,
    img: "https://picsum.photos/id/51/200/300",
    imgAlt: "Test Alt Text",
    text: "Hello This is Path 6",
    choice1: "choice 13 Label",
    choice2: "choice 14 Label",
    choice1Path: 0,
    choice2Path: 0,
  },
];

/*-------------------------------- Variables --------------------------------*/
let currentPath = 0;

/*------------------------ Cached Element References ------------------------*/
const heroImage = document.querySelector("img");
const story = document.querySelector(".story");
const optionA = document.querySelector("#a");
const optionB = document.querySelector("#b");
const choices = document.querySelectorAll(".option");
const home = document.querySelector(".home");

/*----------------------------- Event Listeners -----------------------------*/

optionA.addEventListener("click", () => {
  currentPath = paths[currentPath].choice1Path; // Move to path number corresponding to choice1Path
  render(currentPath);
});

optionB.addEventListener("click", () => {
  currentPath = paths[currentPath].choice2Path; // Move to path number corresponding to choice2Path
  render(currentPath);
});

home.addEventListener("click", () => {
  currentPath = 0;
  optionA.style.display = "block";
  optionB.style.display = "block";
  render(currentPath);
});
/*----------------------------- Functions -----------------------------*/

function render() {
  home.style.display = "none";
  const currentStory = paths[currentPath];
  story.innerText = currentStory.text;
  optionA.innerText = currentStory.choice1;
  optionB.innerText = currentStory.choice2;
  heroImage.setAttribute("src", currentStory.img);
  heroImage.setAttribute("alt", currentStory.imgAlt);
  if (currentStory.choice1Path === 0) {
    // When player reached an end, choice1Path = 0
    optionA.style.display = "none";
    optionB.style.display = "none";
    home.style.display = "block";
  }
  window.scrollTo({ top: 0, behavior: 'smooth' }) //source: https://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript/62073476
}

render();
