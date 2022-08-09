const app = document.getElementById("app");
const output = document.getElementById("output");
const btnGambar = document.getElementById("btnGambar");
const input = document.getElementById("input");

const generateGambar = () => {
const test = input.value.toLowerCase();
if(test == "burung"){
        output.src = "./img/burung.jpeg";
    } else if(test == "harimau"){
        output.src = "./img/Tiger.jpg";
    } else if(test == "kucing"){
        output.src = "./img/Kucing.jpg";
    } else {
        output.src = "./img/human.jpg"
    }
};

btnGambar.addEventListener("click", generateGambar);