document.body.style.backgroundColor = "#252B42";

// Created container
const container = document.createElement("div");
document.body.appendChild(container);
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.paddingTop = "104px";

// Created firstSection
const firstSection = document.createElement("div");
container.appendChild(firstSection);
firstSection.style.display = "flex";
firstSection.style.width = "701px";
firstSection.style.flexDirection = "column";
firstSection.style.paddingBlock = "30px";
firstSection.style.gap = "40px";
firstSection.style.alignItems = "center";
firstSection.style.margin = "auto";

// Created welcomeHeading
const welcomeHeading = document.createElement("h5");
firstSection.appendChild(welcomeHeading);
welcomeHeading.innerText = "Welcome";
welcomeHeading.style.color = "#23A6F0";
welcomeHeading.style.fontWeight = "700";
welcomeHeading.style.fontSize = "16px";
welcomeHeading.style.textAlign = "center"; 
welcomeHeading.style.lineHeight = "24px";
welcomeHeading.style.fontFamily = "Montserrat";

// Created centerText
const centerText = document.createElement("h1");
firstSection.appendChild(centerText);
centerText.innerText = "Selling on the internet like a pro";
centerText.style.color = " #FFFFFF";
centerText.style.fontWeight = "700";
centerText.style.fontSize = "58px";
centerText.style.textAlign = "center"; 
centerText.style.fontFamily = "Montserrat";
centerText.style.paddingInline = "40px";

// Created largeObjParagraph
const largeObjParagraph = document.createElement("p");
firstSection.appendChild(largeObjParagraph);
largeObjParagraph.innerText =
  "We know how large objects will act, but things on a small scale just do not act that way";
largeObjParagraph.style.fontFamily = "Montserrat";
largeObjParagraph.style.fontWeight = "400";
largeObjParagraph.style.fontSize = "20px";
largeObjParagraph.style.textAlign = "center";
largeObjParagraph.style.color = " #FFFFFF";
largeObjParagraph.style.paddingInline = "60px";

// Created buttonContainer and buttons
const buttonContainer = document.createElement("div");
firstSection.appendChild(buttonContainer);
buttonContainer.style.display = "flex";
buttonContainer.style.gap = "15px";
buttonContainer.style.margin = "auto";
buttonContainer.style.paddingInline = "40px";

//Created firstButton
const firstButton = document.createElement("button");
firstButton.innerText = "Get Quote Now";
buttonContainer.appendChild(firstButton);
firstButton.style.borderRadius = "5px";
firstButton.style.color = "white";
firstButton.style.backgroundColor = "#23A6F0";
firstButton.style.fontFamily = "Montserrat";
firstButton.style.border = "none";
firstButton.style.cursor = "pointer";
firstButton.style.width = "193px";
firstButton.style.height = "52px";


//Created secondButton
const secondButton = document.createElement("button");
secondButton.innerText = "Learn more";
buttonContainer.appendChild(secondButton);
secondButton.style.border = "1px solid #23A6F0";
secondButton.style.borderRadius = "5px";
secondButton.style.background = "transparent";
secondButton.style.cursor = "pointer";
secondButton.style.width = "162px";
secondButton.style.height = "52px";
secondButton.style.color = "#23A6F0";


//Created Three-Row Card Container
const rowContainer = document.createElement("div");
firstSection.appendChild(rowContainer);
rowContainer.style.display = "flex";
rowContainer.style.gap = "40px";

//Created first card inside rowContainer
const firstCard = document.createElement("div");
rowContainer.appendChild(firstCard);
const firstImage = document.createElement("img");
firstImage.src = "./IMG/fixed-width.png";
firstCard.style.display = "flex";
firstCard.style.flexDirection = "column";
firstCard.style.background = "white";
firstCard.style.width = "328px";
firstImage.style.marginLeft = "40px";
firstImage.style.width = "70px";
firstImage.style.height = "76px";
firstImage.style.paddingBlock = "15px";
firstCard.appendChild(firstImage);

const cardParagraph = document.createElement("h5");
firstCard.appendChild(cardParagraph);
cardParagraph.innerText = "training Courses";
cardParagraph.style.fontWeight = "700";
cardParagraph.style.fontSize = "16px";
cardParagraph.style.color = "#252B42";
cardParagraph.style.marginLeft = "40px";

const cardParagraph2 = document.createElement("p");
firstCard.appendChild(cardParagraph2);
cardParagraph2.innerText = "The gradual accumulation of information about atomic and small-scale behaviour...";
cardParagraph2.style.fontWeight = "400";
cardParagraph2.style.fontSize = "14px";
cardParagraph2.style.marginLeft = "40px";


//Created second card

const secondCard = document.createElement("div");
rowContainer.appendChild(secondCard);
const secondImage = document.createElement("img");
secondImage.src = "./IMG/fixed-width (1).png";
secondCard.style.display = "flex";
secondCard.style.flexDirection = "column";
secondCard.style.background = "white";
secondCard.style.width = "328px";
secondImage.style.marginLeft = "40px";
secondImage.style.width = "70px";
secondImage.style.paddingBlock = "15px";
secondCard.appendChild(secondImage);

const secondCardP = document.createElement("h5");
secondCard.appendChild(secondCardP);
secondCardP.innerText = "2,769 online courses";
secondCardP.style.fontWeight = "700";
secondCardP.style.fontSize = "16px";
secondCardP.style.color = "#252B42";
secondCardP.style.marginLeft = "40px";

const cardParagraph3 = document.createElement("p");
secondCard.appendChild(cardParagraph3);
cardParagraph3.innerText =
  "The gradual accumulation of information about atomic and small-scale behaviour...";
cardParagraph3.style.fontWeight = "400";
cardParagraph3.style.fontSize = "14px";
cardParagraph3.style.marginLeft = "40px";

//created third card

const thirdCard = document.createElement("div");
rowContainer.appendChild(thirdCard);
const thirdImage = document.createElement("img");
thirdImage.src = "./IMG/fixed-width (2).png";
thirdCard.style.display = "flex";
thirdCard.style.flexDirection = "column";
thirdCard.style.background = "white";
thirdCard.style.width = "328px";
thirdCard.style.background = "#23A6F0";
thirdImage.style.marginLeft = "40px";
thirdImage.style.width = "70px";
thirdImage.style.paddingBlock = "15px";
thirdCard.appendChild(thirdImage);

const thirdCardP = document.createElement("h5");
thirdCard.appendChild(thirdCardP);
thirdCardP.innerText = "training Courses";
thirdCardP.style.fontWeight = "700";
thirdCardP.style.fontSize = "16px";
thirdCardP.style.color = "#252B42";
thirdCardP.style.marginLeft = "40px";
thirdCardP.style.color = "white";
const cardParagraph4 = document.createElement("p");
thirdCard.appendChild(cardParagraph4);
cardParagraph4.innerText =
  "The gradual accumulation of information about atomic and small-scale behaviour...";
cardParagraph4.style.fontWeight = "400";
cardParagraph4.style.fontSize = "14px";
cardParagraph4.style.marginLeft = "40px";
cardParagraph4.style.color = "white";
