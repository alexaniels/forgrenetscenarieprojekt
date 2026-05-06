//console.log("Halløjsa fra scenariet"); test //

const btns = document.querySelectorAll(".btn");
const scenarios = document.querySelectorAll(".scenario");
const phishing = document.querySelector(".phishing");

const updateUI = (h2Text, pText, btnsText, imgPath, passwordFields) => {
  const section = document.createElement("section");
  section.classList.add("scenario");
  section.classList.add("active");
  const h2 = document.createElement("h2");
  h2.textContent = h2Text;
  section.append(h2);

  if (imgPath != undefined) {
    const img = document.createElement("img");
    img.src = imgPath;
    img.classList.add("img-scenario");
    section.append(img);
  }

  const p = document.createElement("p");
  p.textContent = pText;
  section.append(p);

  //const span = document.createElement("span");
  // section.append(span)

  if (passwordFields) {
    const oldInput = document.createElement("input");
    oldInput.type = "password";
    oldInput.placeholder = "Gammel adgangskode";
    oldInput.id = "old-password";

    const newInput = document.createElement("input");
    newInput.type = "password";
    newInput.placeholder = "Ny adgangskode";
    newInput.id = "new-password";

    section.append(oldInput);
    section.append(newInput);
  }

  btnsText.forEach((text) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add("btn");
    button.addEventListener("click", nextScenario);
    section.append(button);
  });

  phishing.replaceChildren(section);
};

const nextScenario = (e) => {
  let h2Text, pText, btnsText, imgPath, passwordFields;
  console.log(e.target.textContent);
  switch (e.target.textContent) {
    case "Start":
      h2Text = "Du har modtaget denne email";
      pText = "Du har tre valgmuligheder. Hvad vælger du?";
      imgPath = "img/phishing-mail.png";
      btnsText = ["Skift adgangskode", "Ignorer emailen", "Slet email"];
      break;
    case "Skift adgangskode":
      h2Text = "Skift adgangskode";
      pText = "Indtast din gamle og nye adgangskode";
      imgPath = "img/iba-logo.png";
      btnsText = ["Gem"];
      passwordFields = true;
      break;
    case "Gem":
      h2Text = "DU ER BLEVET HACKET";
      pText = "Du indtastede dine oplygninger på en falsk side";
      imgPath = "img/du-er-blevet-hacket1.png";
      btnsText = ["Start forfra"];
      break;
    case "Ignorer emailen":
      h2Text = "Der skete ingen ting";
      btnsText = ["Start forfra"];
      break;
    case "Slet email":
      h2Text = "Der skete ingen ting";
      btnsText = ["Start forfra"];
      break;
    case "Start forfra":
      h2Text = "Velkommen til dette scenarie.";
      pText =
        "Du har som studerende på IBA modtaget en mail fra iba.@iba.clk, at nu skal du skifte adgangskode ellers mister du adgang til IBA's tjenester. I det første scenarie har du tre valgmuligheder. Du kan trykke på huset i hjørnet for at komme tilbage til start.";
      btnsText = ["Start"];
      break;
  }

  updateUI(h2Text, pText, btnsText, imgPath, passwordFields);
};

for (const btn of btns) {
  btn.addEventListener("click", nextScenario);
}
