var hr, mn, sc;
var hourAngle, minuteAngle, secondAngle;
var form1;
function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
  form1 = new Form();
}


function draw() {
  background(0); 
  fill("white");
  textSize(30);
  text("Current time in Singapore", 20, 25);
  calcTime('singapore', + 8);
  
 
}
function calcTime(city, offset) {
  d = new Date();
  utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  nd = new Date(utc + (3600000*offset));
  var dateToReturn = nd.toLocaleString();
  var dateAndTime = dateToReturn.split(",");   
  var date = dateAndTime[0];
  var time = dateAndTime[1];
  var timeArray = time.split(":");
  var hour = timeArray[0];
  var minute = timeArray[1];
  var second = timeArray[2];
  console.log(hour);
  console.log(minute);
  console.log(second);  
  //return dateToReturn;
  showClock(hour, minute, second)
}
function showClock(hourArgs, minArgs, secArgs)  {
  
  translate(200, 200);
  rotate( -90); 
  hr = hourArgs;
  mn =minArgs;
  sc = secArgs;
  secondAngle = map(sc, 0, 60, 0, 360);
  minuteAngle = map(mn, 0, 60, 0, 360);
  hourAngle = map(hr % 12,0,12,0,360);
  //drawing seconds hand.
  push();
  rotate(secondAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();
  //drawing minute hand.
  push();
  rotate(minuteAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();
  //drawing hour hand.
  push();
  rotate(hourAngle);
  stroke("green");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();  
  //drawing a point.
  stroke("white");  
  point(0,0);
  //drawingArc.  
  strokeWeight(10);
  noFill();
  stroke("red");
  arc(0, 0, 300, 300, 0, secondAngle);
  stroke("blue");
  arc(0, 0, 280, 280, 0, minuteAngle);
  stroke("green");
  arc(0 , 0, 260, 260, 0, hourAngle);  
  //form1.display();
}
