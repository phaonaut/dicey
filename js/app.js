function addDieShake() {
  $("img.die").toggleClass("dieShake");
}

function removeDieShake() {
  setTimeout(function () {
    $("img.die").removeClass("dieShake");
  }, 800);
}

function updateCounter(total) {
  $("button#counter").html(total);
}

/* Function to do the random die math*/
function dieRandomNumber() {
  let total = 0;
  let d4 = 0;
  let d6 = 0;
  let d8 = 0;
  let d10 = 0;

  function dieMath(d4, d6, d8, d10) {
    let d4Group = document.getElementsByClassName("d4");
    let d6Group = document.getElementsByClassName("d6");
    let d8Group = document.getElementsByClassName("d8");
    let d10Group = document.getElementsByClassName("d10");

    for (let i = 0; i < d4; i++) {
      let thisRoll = Math.floor(Math.random() * 4) + 1;
      total += thisRoll;
      console.log(thisRoll + " : " + total);
      d4Group[i].src = 'img/d4_' + thisRoll + '.png';
    }
    for (let i = 0; i < d6; i++) {
      let thisRoll = Math.floor(Math.random() * 6) + 1;
      total += thisRoll;
      console.log(thisRoll + " : " + total);
      d6Group[i].src = 'img/d6_' + thisRoll + '.png';
    }
    for (let i = 0; i < d8; i++) {
      let thisRoll = Math.floor(Math.random() * 8) + 1;
      total += thisRoll;
      console.log(thisRoll + " : " + total);
      d8Group[i].src = 'img/d8_' + thisRoll + '.png';
    }
    for (let i = 0; i < d10; i++) {
      let thisRoll = Math.floor(Math.random() * 10);
      total += thisRoll;
      console.log(thisRoll + " : " + total);
      d10Group[i].src = 'img/d10_' + thisRoll + '.png';
    }
  }

  //what type of die and how many
  if ($(".d4").length) {
    d4 = $(".d4").length;
  }
  if ($(".d6").length) {
    d6 = $(".d6").length;
  }
  if ($(".d8").length) {
    d8 = $(".d8").length;
  }
  if ($(".d10").length) {
    d10 = $(".d10").length;
  }

  dieMath(d4, d6, d8, d10);

  //export total of die to updateCounter function
  updateCounter(total);
}

/* --- Roll Button Function Call --- */
function roll() {
  //!!!!replace this by animating with jquery
  addDieShake();
  dieRandomNumber();
  removeDieShake();
}

/* --- Show Die Drawer/ Hide Die Drawer --- */
$(".drawerButton").click(function() {
  $(".insideDrawer").toggle();
});

/* --- Add die from die drawer --- */
$(".addD4").click(function() {
  $(".dieBox").append('<div><img class="die d4" src="img/d4_1.png"></div>');
});
$(".addD6").click(function() {
  $(".dieBox").append('<div><img class="die d6" src="img/d6_1.png"></div>');
});
$(".addD8").click(function() {
  $(".dieBox").append('<div><img class="die d8" src="img/d8_1.png"></div>');
});
$(".addD10").click(function() {
  $(".dieBox").append('<div><img class="die d10" src="img/d10_1.png"></div>');
});
/* --- Remove Die by Clicking on Die --- */
$(".clear").click(function() {
  $(".dieBox").empty();
});
