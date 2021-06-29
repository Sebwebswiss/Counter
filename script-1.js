let naslov=document.getElementById('naslov');
let dugme=document.getElementById('dugme');
let saveDugmic=document.getElementById('save');
let mjestoZaText=document.getElementById('text');
let brojac=0;

dugme.addEventListener('click', dugmic);
saveDugmic.addEventListener('click', save);

function dugmic(){
    brojac+=1;
naslov.textContent=brojac;

}

function save(){
    mjestoZaText.textContent+= brojac +'-';

     brojac=0;
     naslov.textContent=brojac;
    
}