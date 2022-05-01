const API = `mAOfyJwidanfoklCSpXxuToe9QjAkxqxu80oFKV2SmE`;

import {navbar} from "../components/navbar.js";

import "../styles/navbar.css";

import {searchimages, append} from "../scripts/fetch.js"

document.getElementById("navbar").innerHTML = navbar();

let submit = (e) => {
    if(e.key === "Enter"){
        const value = document.getElementById("search").value;

        searchimages(value,API).then((data)=>{

            let container = document.getElementById("container");
            container.innerHTML = null;

            append(data.results, container);
        });

    };
}

let categories = document.getElementById("parameters").children;

function specificSearch(){

    document.getElementById("search").value = this.id;

    searchimages(this.id, API).then((data) => {
        let container = document.getElementById("container");
        container.innerHTML = null;
    
        append(data.results, container);
    })   
}

for (let el of categories){
    el.addEventListener("click",specificSearch);
}


document.getElementById("search").addEventListener("keydown",submit);
