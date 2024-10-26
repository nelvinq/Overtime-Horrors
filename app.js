/*-------------------------------- Constants --------------------------------*/
const paths = [
    { path: 0, img: "https://picsum.photos/id/45/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 0",
        choice1: "choice 1 Label", choice2: "choice 2 Label",
        choice1Path: 1, choice2Path:2},
    { path: 1, img: "https://picsum.photos/id/46/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 1",
        choice1: "choice 3 Label", choice2: "choice 4 Label",
        choice1Path: 3, choice2Path:4},
    { path: 2, img: "https://picsum.photos/id/47/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 2",
        choice1: "choice 5 Label", choice2: "choice 6 Label",
        choice1Path: 5, choice2Path:6},
    { path: 3, img: "https://picsum.photos/id/48/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 3",
        choice1: "choice 7 Label", choice2: "choice 8 Label",
        choice1Path: 0, choice2Path:0},
    { path: 4, img: "https://picsum.photos/id/49/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 4",
        choice1: "choice 9 Label", choice2: "choice 10 Label",
        choice1Path: 0, choice2Path:0},
    { path: 5, img: "https://picsum.photos/id/50/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 5",
        choice1: "choice 11 Label", choice2: "choice 12 Label",
        choice1Path: 0, choice2Path:0},
    { path: 6, img: "https://picsum.photos/id/51/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 6",
        choice1: "choice 13 Label", choice2: "choice 14 Label",
        choice1Path: 0, choice2Path:0},
    { path: 7, img: "https://picsum.photos/id/51/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 6",
        choice1: "choice 13 Label", choice2: "choice 14 Label",
        choice1Path: 0, choice2Path:0},
	{ path: 8, img: "https://picsum.photos/id/51/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 6",
		choice1: "choice 13 Label", choice2: "choice 14 Label",
		choice1Path: 0, choice2Path:0},
	{ path: 9, img: "https://picsum.photos/id/51/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 6",
		choice1: "choice 13 Label", choice2: "choice 14 Label",
		choice1Path: 0, choice2Path:0},
	{ path: 10, img: "https://picsum.photos/id/51/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 6",
		choice1: "choice 13 Label", choice2: "choice 14 Label",
		choice1Path: 0, choice2Path:0},
	{ path: 11, img: "https://picsum.photos/id/51/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 6",
		choice1: "choice 13 Label", choice2: "choice 14 Label",
		choice1Path: 0, choice2Path:0},
	{ path: 12, img: "https://picsum.photos/id/51/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 6",
		choice1: "choice 13 Label", choice2: "choice 14 Label",
		choice1Path: 0, choice2Path:0},
	{ path: 16, img: "https://picsum.photos/id/51/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 6",
		choice1: "choice 13 Label", choice2: "choice 14 Label",
		choice1Path: 0, choice2Path:0},
	{ path: 17, img: "https://picsum.photos/id/51/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 6",
		choice1: "choice 13 Label", choice2: "choice 14 Label",
		choice1Path: 0, choice2Path:0},
	{ path: 18, img: "https://picsum.photos/id/51/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 6",
		choice1: "choice 13 Label", choice2: "choice 14 Label",
		choice1Path: 0, choice2Path:0},
	{ path: 19, img: "https://picsum.photos/id/51/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 6",
		choice1: "choice 13 Label", choice2: "choice 14 Label",
		choice1Path: 0, choice2Path:0},
	{ path: 20, img: "https://picsum.photos/id/51/200/300", imgAlt:"Test Alt Text", text: "Hello This is Path 6",
		choice1: "choice 13 Label", choice2: "choice 14 Label",
		choice1Path: 0, choice2Path:0},
	];

/*-------------------------------- Variables --------------------------------*/
let currentPath = 0;

/*------------------------ Cached Element References ------------------------*/
const heroImage = document.querySelector("img")
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
	currentPath = 0
	optionA.style.display = "block";
	optionB.style.display = "block";
	render(currentPath)
}); 
/*----------------------------- Functions -----------------------------*/

function render() {
    home.style.display = "none";
	const currentStory = paths[currentPath];
    story.innerText = currentStory.text;
    optionA.innerText = currentStory.choice1;
    optionB.innerText = currentStory.choice2;
	heroImage.setAttribute("src",currentStory.img);
	heroImage.setAttribute("alt", currentStory.imgAlt);
	;
    if (currentStory.choice1Path === 0) { // When player reached an end, choice1Path = 0
        optionA.style.display = "none";
        optionB.style.display = "none";
		home.style.display = "block"
	}
};

render();