var data;

function preload() {
  data = loadJSON("runner.json");
  bg = loadImage("world-map.jpg");
}
// Drawing the Location/participant/finish time 
function drawParticipant(x, y, city,date,text1,text2,text3,text4) {
  fill(0);
  ellipse(x, y, 10, 10);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(city, x, y - 105);
  textSize(15);
  text(date, x, y - 90);
  textSize(13);
  text('Male First Place:',x, y - 70);
  textSize(12);
  text(text1, x, y - 60);
  text(text2, x, y - 50);
  textSize(13);
  text('Female First Place:',x, y - 40);
  textSize(12);
  text(text3, x, y - 30);
  text(text4, x, y - 20);
}
function drawDownParticipant(x, y, city,date,text1,text2,text3,text4) {
  fill(0);
  ellipse(x, y, 10, 10);
  textAlign(CENTER, CENTER);
  textSize(13);
  text('Male First Place:',x, y + 55);
  textSize(12);
  text(text1, x, y + 65);
  text(text2, x, y + 75);
  textSize(13);
  text('Female First Place:',x, y + 85);
  textSize(12);
  text(text3, x, y + 95);
  text(text4, x, y + 105);
  textSize(20);
  text(city, x, y + 20);
  textSize(15);
  text(date, x, y + 35);
}
function drawDownRightParticipant(x, y, city,date,text1,text2,text3,text4) {
  fill(0);
  ellipse(x, y, 10, 10);
  textAlign(CENTER, CENTER);
  textSize(13);
  text('Male First Place:',x + 50, y + 45); 
  textSize(12);
  text(text1, x + 50, y + 55);
  text(text2, x + 50, y + 65);
  textSize(13);
  text('Female First Place:',x + 50, y + 75); 
  text(text3, x  + 50, y + 85);
  text(text4, x + 50, y + 95);
  textSize(20);
  text(city, x + 50, y + 10);
  textSize(15);
  text(date, x + 50, y + 25);
}
function setup() {
  createCanvas(1500, 848);
  background(bg);
  var events = data.events;
  var date = data.date;
  for (var i = 0; i < events.length; i++) {
    // createElement("h1", events[i].name);
// Pulling participants/latitude/longitude in json file 
    var participants = data.events[i].participants;
    var x = data.events[i].latitude;
    var y = data.events[i].longitude;
    // console.log(participants[0])  
    for(var prop in participants[0]) {
      console.log(prop, participants[0][prop]);  
      // createDiv(prop.replace('_', ' ').toUpperCase()); 
      // createDiv(participants[0][prop]);
      if (events[i]['name'] == "Boston") {
        drawDownRightParticipant(x, y, events[i]['name'],events[i]['date'],participants[0]             ['male_first_place'],participants[0]['male_finish_time'], participants[0]['female_first_place'],participants[0]['female_finish_time']);
      } else if (events[i]['name'] == "Berlin Marathon") {
        drawDownParticipant(x, y, events[i]['name'],events[i]['date'],participants[0]['male_first_place'],participants[0]['male_finish_time'], participants[0]['female_first_place'],participants[0]['female_finish_time']);
      } else if (events[i]['name'] == "Chicago") {
        drawDownParticipant(x, y, events[i]['name'],events[i]['date'],participants[0]['male_first_place'],participants[0]['male_finish_time'], participants[0]['female_first_place'],participants[0]['female_finish_time']);
      } else {
        drawParticipant(x, y, events[i]['name'],events[i]['date'],participants[0]['male_first_place'],participants[0]['male_finish_time'], participants[0]['female_first_place'],participants[0]['female_finish_time']);
      }
    }
  }    
}

  