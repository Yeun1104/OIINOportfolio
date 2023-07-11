var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
var dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  velocity: 0,
  gravity: 0.5,
  jumpHeight: 10,
  isJumping: false,

  draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },

  jump() {
    if (!this.isJumping) {
      this.velocity = -this.jumpHeight;
      this.isJumping = true;
    }
  },

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > canvas.height - this.height) {
      this.y = canvas.height - this.height;
      this.velocity = 0;
      this.isJumping = false;
    }
  }
};

dino.draw();

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var cactus = new Cactus();
cactus.draw();

function frame() {
  requestAnimationFrame(frame);

  cactus.x -= 4;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dino.update();
  dino.draw();
  cactus.draw();
}

frame();

canvas.addEventListener('click', function () {
  dino.jump();
});

// 초기 위치에서 자동으로 점프
setTimeout(function () {
  dino.jump();
}, 1000);
