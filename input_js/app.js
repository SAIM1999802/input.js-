var names = []
var ol = document.getElementById('myOL')
// for (var i = 0; i < names.length; i++){
//       var li = document.createElement('li');
//       li.innerText = names[i];

//   }

// viewItems  =>> li generator and append it to OL

function viewItems() {
    for (var i = 0; i < names.length; i++){

      var li = document.createElement('li');
      li.innerHTML = names[i];

      ol.appendChild(li)
  }

} 

viewItems();


function addText(){
    var input = document.getElementById('myInput')
    ol.innerHTML = null;
    names.push(input.value)
    viewItems()
}

function clearResult(){
  var input = document.getElementById('myInput')
  input.value = " "
}

