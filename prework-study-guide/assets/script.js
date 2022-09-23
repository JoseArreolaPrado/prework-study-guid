
// var topicsString = "HTML, CSS, Git, JavaScript";

let HTML = "HTML";
let CSS = "CSS";
let Git = "Git";
let JavaScript = "JavaScript";

let topics = [HTML, CSS, Git, JavaScript];


for (let i=0; i<topics.length; i++){
    console.log(topics[i]);
}



// console.log(topics);
// console.log(HTML);
// console.log(CSS);
// console.log(Git);
// console.log(JavaScript);
// console.log(topicsString);

// var topic = "HTML";

// if (topic === 'HTML') {
//   console.log("Let's study HTML!");
// } else if (topic === 'CSS') {
//   console.log("Let's study CSS!");
// } else if (topic === 'Git') {
//   console.log("Let's study Git!");
// } else if (topic === 'JavaScript') {
//   console.log("Let's study JavaScript!");
// } else {
//   console.log('Please try again!');
// }

function wait(ms){
    return new Promise(
        r => setTimeout(r, ms)
    );
}


async function  makeTea()  {
    console.log("Boile water");
    console.log("Add tea bag");
    console.log("WAIT!!");
    await wait(3000);
    console.log("Enjoy Tea :D ");
};

makeTea();