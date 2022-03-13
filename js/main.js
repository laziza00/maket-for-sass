let cheese = document.querySelector('#cheese');
let sum1 = document.querySelector('#sum1');
const list1 = document.querySelector('#list1');
const item = document.querySelector('#item1');
const item1__box = document.querySelector('#item1__box');
let savatchasum = document.querySelector('#savatchasum')
let sana = document.querySelector('#sana');


cheese.addEventListener('click', countCheese);

let count = 0;

function countCheese() {
    count ++;
    if (count==1) {
         savatchasum.className = "savatcha__sum";
         savatchasum.innerHTML = count*18000;
         sana.innerHTML = count;
        console.log(count);
    }
    else if (count==2) {
        savatchasum.className = "savatcha__sum";
        savatchasum.innerHTML = count*18000;
        sana.innerHTML = count;
       console.log(count);
   }

}