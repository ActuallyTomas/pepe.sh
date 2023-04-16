var colorIndex = 0
document.querySelector('marquee').addEventListener('bounce', function() {
  var colors = [
    'red',
    'green',
    'blue',
    'white',
    'purple',
    'teal',
    'fuchsia'
  ]
  colorIndex = colorIndex === colors.length - 1 ? 0 : colorIndex + 1
  this.querySelector('svg').style.color = colors[colorIndex]
})