

document.getElementById('btn-pause').disabled = true;
document.getElementById('btn-stop').disabled = true;



var timer = null;
var h = 0;
var m = 0;
var  s = 0;

function startCounting() {

  h = + document.getElementById('input-hour').value || h;
  m = + document.getElementById('input-mins').value || m;
  s = + document.getElementById('input-secs').value || s;

  if (
    (h == 0 && m == 0 && s == 0) || (h < 0 || m < 0 || s < 0)
  ) {
    alert("The time entered is Illegal");
    return;
  }

  timer = setInterval(counting, 1000);

  document.getElementById('btn-start').disabled = true;
  document.getElementById('btn-pause').disabled = false;
  document.getElementById('btn-stop').disabled = false;
  document.getElementById('btn-reset').disabled = false;
  document.getElementById('input-hour').disabled = true;
  document.getElementById('input-mins').disabled = true;
  document.getElementById('input-secs').disabled = true;
  
}


function pauseCounting() {

  document.getElementById('btn-start').disabled = true;
  document.getElementById('btn-pause').disabled = false;
  document.getElementById('btn-stop').disabled = true;
  document.getElementById('btn-reset').disabled = false;
  document.getElementById('input-hour').disabled = true;
  document.getElementById('input-mins').disabled = true;
  document.getElementById('input-secs').disabled = true;

  clearInterval(timer);
  
}

function resetCounting() {
  clearInterval();
  document.getElementById('btn-start').disabled = false;
  document.getElementById('btn-pause').disabled = true;
  document.getElementById('btn-stop').disabled = true;
  document.getElementById('btn-reset').disabled = false;
  document.getElementById('input-hour').disabled = true;
  document.getElementById('input-mins').disabled = true;
  document.getElementById('input-secs').disabled = true;

  document.getElementById('input-hour').value = "H";
  document.getElementById('input-mins').value = "M";
  document.getElementById('input-secs').value = "S";

 

  document.getElementById('currentTime').innerHTML = "Current Time :"

}


function stopCounting() {

  document.getElementById('btn-start').disabled = true;
  document.getElementById('btn-pause').disabled = true;
  document.getElementById('btn-stop').disabled = false;
  document.getElementById('btn-reset').disabled = false;
  document.getElementById('input-hour').disabled = true;
  document.getElementById('input-mins').disabled = true;
  document.getElementById('input-secs').disabled = true;

  clearInterval(timer);

  h = 0;
  m = 0;
  s = 0;

  document.getElementById('currentTime').innerHTML = "Timer Stopped";
  
}



function counting() {

  if (s == 0) {
    if (m == 0) {
      h--;
      m = 59;
      s = 59;
    } else {
      m--;
      s = 59;
    }
    
  } else {
    s--;
  }

  document.getElementById('currentTime').innerHTML = "Current Time : " + h + " Hour " + m + " Mins " + s + " Secs";
  document.getElementById('input-hour').value = h;
  document.getElementById('input-mins').value = m;
  document.getElementById('input-secs').value = s;



  if (s == 0) {
    if (m == 0) {
      if (h == 0) {

        stopCounting();

          setTimeout(function() {
            alert("Time is Up!");
          }, 0);
        
      }
      
    }
    
  }

}


var inputHour = document.getElementById('input-hour');
var inputMins = document.getElementById("input-mins");
var inputSecs = document.getElementById('input-secs');


inputHour.addEventListener("input", function() {
  inputHour.value = parseInt(inputHour.value || 0);
  if(inputHour.value > 24) inputHour.value = 24;
  if(inputHour.value < 0) inputHour.value = 0;
});

inputMins.addEventListener("input", function() {
  inputMins.value = parseInt(inputMins.value || 0);
  if(inputMins.value > 59) inputMins.value = 59; 
  if(inputMins.value < 0) inputMins.value = 0; 
});

inputSecs.addEventListener("input", function () {
  inputSecs.value = parseInt(inputSecs.value || 0);
  if(inputSecs.value > 59) inputSecs.value = 59;
  if(inputSecs.value < 0) inputSecs.value = 0;
});


h = h.toString();
m = m.toString();
s = s.toString();


if (h.match(/^\d$/)) {
  h = "0" + h; 
}

if (m.match(/^\d$/)) {
  m = "0" + m;
}

if (s.match(/^\d$/)) {
  s = "0" + s;
}




const colorEl = document.querySelectorAll(".color");
const rootEl = document.querySelector(":root");
const backG = document.querySelector("body");

colorEl[0].addEventListener("click",()=>{
    rootEl.style = "--color :  #a51" 
})

colorEl[1].addEventListener("click",()=>{
    rootEl.style = "--color : #d34" 
})

colorEl[2].addEventListener("click",()=>{
    rootEl.style = "--color : #4ae" 
})

colorEl[3].addEventListener("click",()=>{
    rootEl.style = "--color : #000" 
})



