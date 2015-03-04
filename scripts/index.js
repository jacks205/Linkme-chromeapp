(function () {
  var debug = true;
  document.getElementById('save-btn').addEventListener('click',saveTextFromInput);
  

  function saveTextFromInput() {
    var text = $('#text-input')[0].value;
    DEBUG('Saved: ' + text);
    addToSavedList(text);
    $('#text-input')[0].value = '';
  }

  function addToSavedList(text){
    var node = document.createElement("li");
    var textNode = document.createTextNode(text);
    node.appendChild(textNode);
    document.getElementById("saved-text").appendChild(node);
  }

  function DEBUG(text){
    if(debug) console.log(text);
  }

})();