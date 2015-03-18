var dragSrcEl = null;
function handleDragStart(e) {
        "use strict"
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    console.log(this.innerHTML);
}

function handleDragOver(e) {
    "use strict"
    console.log("dragOver");
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(e) {
    "use strict"
    console.log("dragEntere");
    // this / e.target is the current hover target.
    this.classList.add('over');
}

function handleDragLeave(e) {
    "use strict"
    console.log("dragLeave");
    this.classList.remove('over');  // this / e.target is previous target element.
}

function handleDrop(e) {
    "use strict"
    console.log("drop");
    // this/e.target is current target element.
    if (e.stopPropagation) {
            e.stopPropagation(); // Stops some browsers from redirecting.
    }
    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl != this) {
            // Set the source column's HTML to the HTML of the columnwe dropped on.
            dragSrcEl.innerHTML += this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}

function handleDragEnd(e) {
    "use strict"
    var products = document.querySelectorAll('.product');
    [].forEach.call(products, function(prod) {
        col.classList.remove('over');
    });
}

var addListeners=function(){
    "use strict"
var products = document.querySelectorAll('.product');
[].forEach.call(products, function(prod) {
    prod.addEventListener('dragstart', handleDragStart, false);
    prod.addEventListener('dragenter', handleDragEnter, false);

    prod.addEventListener('dragleave', handleDragLeave, false);
});
    var drop= document.getElementById("drop");
        drop.addEventListener('dragover', handleDragOver, false);
    drop.addEventListener('drop', handleDrop, false);
    drop.addEventListener('dragend', handleDragEnd, false);
};


$(document).ready(function() {
    "use strict"
  console.log('el documento está preparado');
  addListeners();

});
