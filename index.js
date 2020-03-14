
function nameAsk(){
    
let name = prompt('what is your name');
    let result = 'about' + ' ' + name;
    document.getElementById('nam').innerHTML = result;
}
nameAsk();

function ageAsk(){
    let ag = prompt('how old are you');
    let rsl = 'i am' + ' ' + ag + ' ' + 'years' + ' ' + 'old';
    document.getElementById('age').innerHTML = rsl;
}
ageAsk();

function workAsk(){
    let work = prompt('what do you wok as');
    let workOpinion = prompt('what do you think about your work.(start with i think)');
    let workR = 'i work as a' + ' ' + work + ' ' + 'and' + ' ' + workOpinion;
    document.getElementById('wrk').innerHTML = workR;
}
workAsk();

function aboutMe(){
    let ab = prompt('write abit about your self (start with i)');
    let abR = ab;
    document.getElementById('about').innerHTML = abR;
}
aboutMe();
