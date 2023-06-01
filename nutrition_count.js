var sliders = document.querySelectorAll('.slider');
var outputs = document.querySelectorAll('[id^="demo"]');

var updateOutput = function() {
  var sliderValue = this.value;
  var outputId = this.getAttribute('id').replace('myRange', 'demo');
  var output = document.getElementById(outputId);
  output.innerHTML = sliderValue;
};

for (var i = 0; i < sliders.length; i++) {
  sliders[i].addEventListener("input", updateOutput);
  outputs[i].innerHTML = sliders[i].value;
}