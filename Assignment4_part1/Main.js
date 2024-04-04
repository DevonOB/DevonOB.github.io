
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

storyText = "It was 94 fahrenheit outside, so " + insertX + " went for a walk. When they got to " + insertY + ", they stared in horror for a few moments, then " +insertZ +". " + setname + " saw the whole thing, but was not surprised — " +insertx + " weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
const insertY = ["the soup kitchen", "Disneyland", "the White House"]
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]


randomize.addEventListener('click', result);




function result() {

  if(customName.value !== '') {
    const name = customName.value;
    setname = name;
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + "stones";
    const temperature =  Math.round((94-32) * (5/9)) + "Celsius";

  }

  xItem = randomValueFromArray(insertX);
  yItem = randomValueFromArray(insertY);
  zItem = randomValueFromArray(insertZ);


  newStory = storyText;
  newStory = "It was "+temperature+" outside, so " + xItem + " went for a walk. When they got to " + yItem + ", they stared in horror for a few moments, then " +zItem +". " + setname + " saw the whole thing, but was not surprised — " +xItem + " weighs "+weight+", and it was a hot day.";
  story.textContent = newStory;
  story.style.visibility = 'visible';
}