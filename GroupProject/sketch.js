//source code is from https://www.familyfriendpoems.com/poem/a-friend-is-someone 
let source_text = `A friend is someone
You turn to.
A friend is someone
You confide in.
A friend is someone
Who stands by you.
A friend is someone
Who lifts your spirits.
A friend is someone
who encourages you.
A friend is someone
You treasure always.
A friend is someone
Who makes you smile.
A friend is someone
Who brightens your day.`;
let search_word = `friend`;
let replace_word= `enemy`;
let search_word2=`A`;
let replace_word2=`An`;
let search_word3=`day`;
let replace_word3=`life`;
let altered_text;

function setup() {
  createCanvas(400, 400);
//We decided to make the poem ironic/sarcastic in a sense by flipping it around and attributing these positives to someone you hate. So friend now becomes enemy.
  altered_text= source_text.replaceAll(search_word, replace_word);
//To make the poem gramatically correct, we had to change A to An.
  altered_text= altered_text.replaceAll(search_word2, replace_word2);
//To add a little more impact to the end, we changed day to life. Bullies can have that everlasting traumatic impact we wanted to convey.
  altered_text= altered_text.replaceAll(search_word3, replace_word3);
}

function draw() {
  background(255);
  textFont(`Baskerville`);
  textSize(20);
  let show_text;
  if(mouseIsPressed){
    //So angry! Enemy and red, rage association like Barbra Kruger and rip-off advertising.
    fill("red");
    show_text=altered_text;
    }
  else 
  {
  //So happy! Friendly, nature-y color, less aggressive than red.
    fill("green");
    show_text=source_text;
    
  }
  text(show_text, 10, 10, width*0.9);
}