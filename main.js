import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const galeriaELEM = document.getElementsByClassName("galeria")[0];
console.log(galeriaELEM);
galeriaELEM.innerHTML = htmlOsszeAllit(KEPEK);  
/* írd bele az összeálíltott html képsorozatot */



/*2. feladat  A .nagykep divben lévő img elem megfogása */
const NAGY_KEP_IMG = document.querySelector(".nagykep img");


/* A .nagykep div megfogása */
const NAGY_KEP_DIV = document.querySelector(".nagykep");



/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const KIS_KEP_ELEMEK = document.querySelectorAll(".kep"); //lista
for (let index = 0; index < KIS_KEP_ELEMEK.length; index++) {
    const element = KIS_KEP_ELEMEK[index];
    KIS_KEP_ELEMEK[index].addEventListener("click",function (event){
        console.log(event.target.src);
        NAGY_KEP_IMG.src = event.target.src;
    }) 
}


function katt(event){
    console.log(event.target.src);
    NAGY_KEP_IMG.src = event.target.src;
}

/* eseménykezelő hozzáadása a kisképekhez, ciklussal */




/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */



let aktIndex = 0;
/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
//  fogd meg a jobb gombot
//  tegyél rá 1 eseménykezelőt
//  az eseménykezelőben az akt index valtozo erteket noveld
// 4. aktIndex valtozonak megfelelo kep eleresi utjat csereld le a nagykepelem img src-jére

const JOBB_GOMB = document.querySelector(".jobb");
JOBB_GOMB.addEventListener("click",jobbra);

function jobbra(){
    aktIndex++;
    aktIndex = aktIndex % KEPEK.length;
    console.log(KEPEK[aktIndex].kep);
    NAGY_KEP_IMG.src = KEPEK[aktIndex].kep;
}