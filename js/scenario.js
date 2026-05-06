//console.log("Halløjsa fra scenariet"); test //

const btns = document.querySelectorAll(".btn");
const scenarios = document.querySelectorAll(".scenario");
const phishing = document.querySelector(".phishing");

const updateUI = (h2Text, pText, btnsText, imgPath) =>{
    const section = document.createElement("section");
    section.classList.add("scenario");
    section.classList.add("active");
    const h2 = document.createElement("h2");
    h2.textContent = h2Text;
    section.append(h2);

    if(imgPath != undefined){
        const img = document.createElement("img");
        img.src = imgPath
        img.classList.add(".img-scenario");
        section.append(img);
    }

    const p = document.createElement("p");
    p.textContent = pText;
    section.append(p);

    btnsText.forEach(text => {
        const button = document.createElement("button");
        button.textContent = text;
        button.classList.add("btn");
        button.addEventListener("click", nextScenario);
        section.append(button);
    })

    phishing.replaceChildren(section);
}

const nextScenario = (e) =>{
    let h2Text, pText, btnsText, imgPath;
    console.log(e.target.textContent);
    switch(e.target.textContent) {
        case "Start":
        h2Text = "Du har modtaget denne email";
        imgPath = "img/phishing-mail-mobil.png"
        pText ="Du har tre valgmuligheder. Hvad vælger du?"
        btnsText = ["Klik på link og skift adgangskode", "Ignorer emailen", "Slet email"]
        break;

    }

    updateUI(h2Text, pText, btnsText, imgPath);
}

for (const btn of btns){
    btn.addEventListener("click", nextScenario);
}