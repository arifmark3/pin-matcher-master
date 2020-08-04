// Pin generator display work
function getGenPin() {
  return document.getElementById("displayGenPin").value;
}

function getGenPinDisplay(num) {
  return (document.getElementById("displayGenPin").value = num);
}

const pinGenBtn = document.getElementById("pinGenerateBtn");

pinGenBtn.addEventListener("click", function () {

  const randomNumber = getRndNum(1000, 9999);
  const pinGenNum = Math.round(randomNumber);

  function getRndNum(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }
  getGenPinDisplay(pinGenNum);
});

// calculator display function work
function getCalOutput() {
  return document.getElementById("displayCalPin").value;
}

function getCalDisplay(num) {
  if (num == "") {
    document.getElementById("displayCalPin").value = num;
  } else {
    document.getElementById("displayCalPin").value = num;
  }

}

// function of calculators

var number = document.getElementsByClassName("number");

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function () {
    var output = getCalOutput();
    if (output != NaN) {
      output = output + this.id;
      getCalDisplay(output);
    }
  })
}


var operator = document.getElementsByClassName("operator");

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function () {
    if (this.id == "clear") {
      getCalDisplay("");
    }
    if (this.id == "backspace") {
      var output = getCalOutput();
      output = output.substr(0, output.length - 1);
      getCalDisplay(output);
    }
  })
}



// submit button work for result


const matchPin = document.getElementById('matchPin');
matchPin.style.display = "none";
const notMatchPin = document.getElementById('notMatchPin');
notMatchPin.style.display = "none";
const tryLeftOption = document.getElementById('tryLeft');



const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', function () {
  const matchPin = document.getElementById('matchPin');
  const notMatchPin = document.getElementById('notMatchPin');
  const tryLeftOption = document.getElementById('tryLeft');

  if (getGenPin() == getCalOutput()) {
    matchPin.style.display = "block";
    // submitBtn.style.display = "none";
    tryLeftOption.style.display = "none";
  } else {
    notMatchPin.style.display = "block";
  }
})