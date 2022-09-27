
// var topicsString = "HTML, CSS, Git, JavaScript";

let HTML = "HTML";
let CSS = "CSS";
let Git = "Git";
let JavaScript = "JavaScript";

let topics = [HTML, CSS, Git, JavaScript];
let randomTopic = topics[Math.floor((Math.random()*topics.length))];

// for (let i=0; i<topics.length; i++){
//     console.log(topics[i]);
// }



// console.log(topics);
// console.log(HTML);
// console.log(CSS);
// console.log(Git);
// console.log(JavaScript);
// console.log(topicsString);

// var topic = "HTML";

async function selectTopic(){
    await wait (5000);
    if (randomTopic === 'HTML') {
      console.log("Let's study " + randomTopic + "!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study "  + topics[1] + "!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study " + topics[2] + "!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study " + topics[3]+ "!");
    } else {
      console.log('Please try again!');
    }
}




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

// makeTea();


async function listTopics(){
    for ( let i = 0; i < topics.length; i++){
        await wait(1000);
        console.log(topics[i]);
    }
}

console.log('Here are the topics we lerned through Prework:');

listTopics();

selectTopic();


const openNoteButtons = document.querySelectorAll('[data-notebox-target]');
const closeNoteButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openNoteButtons.forEach(button => {
  button.addEventListener('click', () =>{
    const notebox = document.querySelector(button.dataset.noteboxTarget)
    openNotebox(notebox)
  })
});

overlay.addEventListener('click', () => {
  const notebox = document.querySelectorAll('.notebox.active')
  notebox.forEach(notebox => {
    closeNotebox(notebox)
  })
})

closeNoteButtons.forEach(button => {
  button.addEventListener('click', () =>{
    const notebox = button.closest('.notebox')
    closeNotebox(notebox)
  })
});

function openNotebox(notebox){
  if (notebox == null) return
  notebox.classList.add('active')
  overlay.classList.add('active')
}

function closeNotebox(notebox){
  if (notebox == null) return
  notebox.classList.remove('active')
  overlay.classList.remove('active')
}