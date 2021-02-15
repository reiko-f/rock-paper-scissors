let container = document.getElementById('game-container');
let start = document.getElementById('btn');
let call = document.getElementById('call');
let shoot = document.getElementById('shoot');

let image = document.createElement('img');
let comment = document.getElementById('comment');
let confirm = document.createElement('p');
// let result = document.createElement('input');
// result.type = 'text';
let continueBtn = document.createElement('button');

shoot.append(image);
shoot.append(comment);
container.append(confirm);
// confirm.append(result);
// container.append(continueBtn);

start.addEventListener('click', function() {
  call.innerText = 'Rock, Paper, Scissors, Shoot!';

  setTimeout(function() {

    shoot = Math.floor(Math.random()*7);
  
    if (shoot==0) {

      image.src = "./images/rock.png";
      image.width="300";
      image.height="300";
      comment.innerText = "\u261D\u261D It's Rock BTW";
      
    } else if (shoot==1) {

      image.src = "./images/paper.png";
      image.width="300";
      image.height="300";
      comment.innerText = "\u261D\u261D It's Paper BTW";
      
    } else if (shoot==2) {  
      image.src = "./images/scissors.png";
      image.width="300";
      image.height="300";
      comment.innerText = "\u261D\u261D It's Scissors BTW";
      
    }
  }, 2000);
  
  setTimeout(function() {
    confirm.innerText = "You won or tie? Press button for continue.\n"
    container.append(continueBtn);
    continueBtn.innerText = 'Continue';
  }, 3500);
});

continueBtn.addEventListener('click', function() {
  confirm.innerText = 'ready? Rock, Paper, Scissors, Shoot!';
  
  call.innerText = 'Rock, Paper, Scissors, Shoot!';

  setTimeout(function() {

    shoot = Math.floor(Math.random()*3);
  
    if (shoot==0) {

      image.src = "./images/rock.png";
      image.width="300";
      image.height="300";
      comment.innerText = "\u261D It's Rock BTW";
      
    } else if (shoot==1) {

      image.src = "./images/paper.png";
      image.width="300";
      image.height="300";
      comment.innerText = "\u261D It's Paper BTW";
      
    } else if (shoot==2) {  
      image.src = "./images/scissors.png";
      image.width="300";
      image.height="300";
      comment.innerText = "\u261D It's Scissors BTW";
      
    }
  }, 2000);
  
  setTimeout(function() {
    confirm.innerText = "You won or tie? Press button for continue.\n"
    container.append(continueBtn);
    continueBtn.innerText = 'Continue';
  }, 3500);
});
