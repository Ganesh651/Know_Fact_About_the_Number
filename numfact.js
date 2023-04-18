let numFactContainer = document.getElementById("numFactContainer");
numFactContainer.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/numbers-fact-bg.png')";
numFactContainer.classList.add("p-3","vh-100","text-center","d-flex","flex-column","justify-content-center");

let heading = document.createElement("h1");
heading.textContent = "Enter a number to know interesting facts about the number";
heading.style.color = "#ffffff";
heading.style.fontSize = "28px";
heading.style.fontWeight = "bold";
numFactContainer.appendChild(heading);


let inputEl = document.createElement("input");
inputEl.classList.add("form-control","w-100","mt-4","mb-4");
inputEl.type = "search";
inputEl.placeholder = "Enter a Number";
numFactContainer.appendChild(inputEl);

let spinnerContainer = document.createElement("div");
spinnerContainer.classList.add("d-flex","flex-row","justify-content-center");
let spinnerWrapEl = document.createElement("div");
spinnerContainer.appendChild(spinnerWrapEl);
let spinnerEl = document.createElement("div");
spinnerEl.classList.add("spinner-border","d-none","text-white");
spinnerWrapEl.appendChild(spinnerEl);
numFactContainer.appendChild(spinnerContainer);

let para = document.createElement("p");
para.textContent = "0 is the atomic number of the theoretical element tetraneutron.";
para.classList.add("mt-4");
para.style.color = "#ffffff";
para.style.fontSize = "18px";
para.style.fontWeight = "bold";
numFactContainer.appendChild(para);

let result = (event) => {
    if (event.key === "Enter"){
        spinnerEl.classList.remove("d-none");
        if(inputEl.value !== ""){
            let url = "https://apis.ccbp.in/numbers-fact?number=" + inputEl.value;
            let option = {
                Method : "GET"
            };
            fetch(url,option)
            .then((response)=>{
                return response.json();
            })
            .then((jsonData)=>{
                console.log(jsonData)
                spinnerEl.classList.add("d-none");
                let {fact} = jsonData;
                para.textContent = fact
            })
        }else{
            alert(`Please Enter a Number`)
        }
    };
}


inputEl.addEventListener("keydown", result);
