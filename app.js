const info = document.getElementById('info')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
document.onkeydown = onKeyPress

const model = {
  counter: 0,
  rect: [10, 10, 50, 50]
}

draw(model)

function draw(model) {
  info.innerHTML = 'counter: ' + model.counter
  ctx.clearRect(0, 0, 300, 600)

  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillRect(...model.rect);
}

function onKeyPress(e) {
  console.log('--', e)
  if (e.keyCode == '38') {
    // up arrow
    model.counter++
  }
  else if (e.keyCode == '40') {
    // down arrow
    model.counter--
  }
  else if (e.keyCode == '37') {
    // left arrow
    model.counter--
  }
  else if (e.keyCode == '39') {
    // right arrow
    model.counter++
  }

  draw(model)
}