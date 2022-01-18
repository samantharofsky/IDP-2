let box = [];

function preload() {
  bg = loadImage('background.jpg')
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  background(bg);
  for (let i = 0; i < 300; i++) {
    box[i] = {
      x: random(width),
      y: random(height),
      w: random(2, 4),
      // h: random(30,30),
      c: color('white'),
      dy: random(0.5, 1),
      dx: random(0.5, 1),
    }
  }
}


// let y = year();


function draw() {
  background(bg);
  textSize(24);
  // textFont(fontBold);
  textFont('Georgia');
  text('Countdown to 2023', 150, 100);
  textSize(18);
  let y = 2022 - year();
  text('Years: \n' + y, 140, 150)
  let m1 = month();
  let months = 12 - m1;
  text('Months: \n' + months, 230, 150)
  if (months == 0) {
    (d = 18 - day());
  } else if (month() == 9, 5, 6, 11) {
    (d = 31 - day());
  } else if (month() == 1, 3, 4, 7, 8, 10) {
    (d = 18  - day());
  }
  // } else if ( month() == 2) and (y == y/4){
  //   (d = 29 - day());
  else if (month() == 2) {
    (d = 28 - day);
  }
  // let d = 18 - day();
  text('Days: \n' + d, 330, 150);
  let h = 24 - hour();
  text('Hours:\n' + h, 180, 220);
  let m2 = 59 - minute();
  text('Minutes:\n' + m2, 280, 220)
  let s = 59 - second();
  text('Seconds:\n' + s, 230, 280)
  for (let i = 0; i < 150; i++) {
    // const b = box[i];
    // fill(b.c);
    noStroke();
    circle(box[i].x, box[i].y, box[i].w)
    box[i].y += box[i].dy;
    if (box[i].y > height || box[i].y < 0) {
      // box[i].dy *= -2;
      box[i].y += box[i].dy;
    }
    if (box[i].x > width || box[i].x < 0) {
        box[i].x += box[i].dx;
    }
    }  
}
