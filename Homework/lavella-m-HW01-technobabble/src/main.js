import { randomElement } from "./utils.js";

let wordArr1 = [];
let wordArr2 = [];
let wordArr3 = [];
const output = document.querySelector("#output");
const button1 = document.querySelector("#btn-gen-1");
const button5 = document.querySelector("#btn-gen-5");


const generateTechno = (num) => {
    output.innerHTML = '';
    for (let i = 0; i < num; i++) {
        const babble = `${wordArr1[randomElement(wordArr1.length)]} ${wordArr2[randomElement(wordArr2.length)]} ${wordArr3[randomElement(wordArr3.length)]}`;

        console.log(babble);

        output.innerHTML += `<p>${babble}</p>`;
    }
};

const loadBabble = () => {
    fetch("./data/babble-data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json()
        })
        .then(data => {
            console.log('Success:', data);

            // Object destructuring
            const { words1, words2, words3 } = data;
            wordArr1 = words1;
            wordArr2 = words2;
            wordArr3 = words3;
        })
        .catch(error => {
            console.error('Error:', error);
            document.querySelector('#output').innerHTML = `<p>Error loading file: ${error.message}</p>`;
        });

    button1.addEventListener('click', () => { generateTechno(1) });
    button5.addEventListener('click', () => { generateTechno(5) });
    generateTechno(1);
};

window.onload = () => {


    loadBabble();
}

