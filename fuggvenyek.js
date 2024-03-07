export function htmlOsszeAllit(lista) {
//    állítsd össze a html kódot
let txt = "";        
for (let index = 0; index < lista.length; index++) {
            const element = lista[index];
            txt +=`<div class="kep"><img src="${element.kep}" alt="${element.cim}"></div>`;
        
        }
        console.log(txt);
        return txt;
}
