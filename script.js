function getSound(e) {
    var keyy;
    var eventt = e.__proto__.constructor.name;
    
    var keyy = (eventt == 'KeyboardEvent' ? e.keyCode : (e.path[1].dataset.key ? e.path["1"].dataset.key : e.path["0"].attributes["0"].nodeValue));
    
    //if clicked outside the div
    
    console.log(keyy);
    
    playSound(keyy);
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip this condition for non transormed
    this.classList.remove('playing');
}
/*ES5

keys.forEach(function (key) {
  return key.addEventListener('transitioned', removeTransition);
});
*/
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', getSound);

// Button Clicking Event
var pushBtn = Array.from(document.querySelectorAll('.key')).forEach(function(e){
   e.addEventListener('click', getSound);
});

//This was a test function for keyboard event
/*
function playSound2(e){
    
    //when clicked outside the elements
    //e.path[0].attributes[0].nodeValue
    
    //after printing e, I have found rests from console
    //console.log(e.path[1].dataset.key);
    
    //alert(e.target.innerText);
    var keyy = e.path[1].dataset.key;
    var eventt = e.__proto__.constructor.name;
    //MouseEvent Detector
    //console.log(e.__proto__.constructor.name);
    playSound(keyy, eventt);
}
*/

function playSound(k) {
    
    /*ES5

    document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
    */
    const audio = document.querySelector(`audio[data-key="${k}"]`);
    const key = document.querySelector(`.key[data-key="${k}"]`);
    if(!audio) return; //stop the function for unknown keys

    audio.currentTime = 0; // audio position goes to 0
    audio.play();
    key.classList.add('playing');
}