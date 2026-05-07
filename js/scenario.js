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
      btnsText = ["Skift adgangskode", "Ignorer mail", "Slet email"];
      break;
    case "Skift adgangskode":
      h2Text = "Skift adgangskode";
      pText = "Indtast din gamle og nye adgangskode";
      imgPath = "img/iba-logo.png";
      btnsText = ["Gem"];
      passwordFields = true;
      break;
    case "Gem":
      pText =
        "Du indtastede dine oplysninger på en falsk side. Husk altid at tjekke afsenderens mailadresse. I dette tilfælde var mailen fra iba.@iba.clk. IBA vil altid sende mails fra iba@iba.dk, altså uden punktum og 'clk', som godt kan ligne 'dk' ved første øjekast. Tryk aldrig på links i mails, hvor du ikke kender afsenderen, da svindlere kan vedhæfte falske links, der lukker virus ind på din computer, anden enhed eller en virksomheds IT-systemer. Obs. Der er ingen database tilknyttet dette scenarie, så der er ikke nogen, der har fået adgang til dine koder, du har indtastet.";
      imgPath = "img/du-er-blevet-hacket-hvidbg.png";
      btnsText = ["Start forfra"];
      break;
    case "Ignorer mail":
      h2Text = "Du valgte at ignorere mailen";
      pText =
        "Det er helt okay at ignorere mailen, men det vil være mest fornuftigt at slette mailen, så du ikke ved et uheld kommer til at åbne mailen og klikke på linket, hvis den ligger i din indbakke.";
      btnsText = ["Start forfra"];
      break;
    case "Slet email":
      h2Text = "Du slettede mailen";
      pText = "Ønsker du at blokere og rapportere afsenderen?";
      btnsText = ["Ja", "Nej"];
      break;
    case "Ja":
      h2Text = "Du valgte at slette mailen og blokere afsenderen";
      pText =
        "Det er det mest sikre valg, når du modtager en mail, som virker mistænkelig. Ved at blokere og rapportere afsenderen begrænser du risikoen for at modtage lignende mails fra samme afsender. Samtidig bliver IBA informeret om, at en phishingmail er i omløb, så de kan advare de studerende.";
      btnsText = ["Start forfra"];
      break;
    case "Nej":
      h2Text =
        "Du slettede mailen, men afsenderen blev ikke blokeret og rapporteret";
      pText =
        "Det er godt, at du slettede mailen, men ved også at blokere og rapportere afsenderen får du ekstra beskyttelse, så du ikke i fremtiden vil modtage lignende mails fra afsenderen. Ved rapportering bliver IBA samtidig informeret om, at der er en phishingmail i omløb, så de kan advare de studerende.";
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
