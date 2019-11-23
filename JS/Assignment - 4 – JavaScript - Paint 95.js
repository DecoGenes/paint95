var x;
var y;
var canvas = document.getElementById('canvasId');
var canvasHeight = canvas.style.height = 500 + 'px';
var canvasWidth = canvas.style.width = 500 + 'px';
var isPainting = false;
var colorSelection;
var color = 'black';
var sizeH = 10;
var sizeW = 10;
var radius = 50;
var topBarBtns = document.getElementById('topBar');
var btnsSelected = undefined;


function changecolor(e) {
    var clickedcolor = e.target;
    color = clickedcolor.id;
}

document.getElementById('blue').addEventListener('click', changecolor);
document.getElementById('yellow').addEventListener('click', changecolor);
document.getElementById('green').addEventListener('click', changecolor);
document.getElementById('black').addEventListener('click', changecolor);
document.getElementById('orange').addEventListener('click', changecolor);
document.getElementById('red').addEventListener('click', changecolor);
document.getElementById('purple').addEventListener('click', changecolor);
document.getElementById('brown').addEventListener('click', changecolor);
document.getElementById('pink').addEventListener('click', changecolor);
document.getElementById('gray').addEventListener('click', changecolor);
document.getElementById('magenta').addEventListener('click', changecolor);
document.getElementById('lightblue').addEventListener('click', changecolor);
document.getElementById('lightgreen').addEventListener('click', changecolor);
document.getElementById('gold').addEventListener('click', changecolor);
document.getElementById('white').addEventListener('click', changecolor);

function cursorPosition(event) {
    let area = canvas.getBoundingClientRect();
    x = event.clientX - area.left;
    y = event.clientY - area.top;
};

canvas.addEventListener('mousedown', function () {
    painting();
    isPainting = true;
});
canvas.addEventListener('mousemove', function () {
    if (isPainting === true)
        painting();
});

document.body.addEventListener('mouseup', function () {
    isPainting = false;
})

function painting() {
    var obj = document.createElement('div');
    var d = document.getElementById('canvasId').appendChild(obj);
    cursorPosition(event);
    d.style.position = 'absolute';
    d.style.left = x + 'px';
    d.style.top = y + 'px';
    d.style.height = sizeH + 'px';
    d.style.width = sizeW + 'px';
    d.style.backgroundColor = color;
    d.style.display = 'inline-block';
    d.style.borderRadius = radius + '%';
};

function changeShape(e) {
    var clickedShape = e.target;
    if (clickedShape.id == 'square') {
        radius = 0;
    } else if (clickedShape.id == 'circle') {
        radius = 50;
    }
};

document.getElementById('square').addEventListener('click', changeShape);
document.getElementById('circle').addEventListener('click', changeShape);


function changeSize(e) {
    var clickedSize = e.target;
    if (clickedSize.id == 'small') {
        sizeH = 5;
        sizeW = 5;
    } else if (clickedSize.id == 'medium') {
        sizeH = 10;
        sizeW = 10;
    } else if (clickedSize.id == 'large') {
        sizeH = 20;
        sizeW = 20;
    }
};

document.getElementById('small').addEventListener('click', changeSize);
document.getElementById('medium').addEventListener('click', changeSize);
document.getElementById('large').addEventListener('click', changeSize);

document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('canvasId').innerHTML = '';
})

function createCanvas() {
    canvas.style.height = parseInt(document.getElementById("newCanvasHeigthId").value) + "px";
    canvas.style.width = parseInt(document.getElementById("newCanvasWidthId").value) + "px";
    canvas.style.zIndex = 8;
    canvas.style.position = "absolute";
    canvas.style.border = "1px solid black";
    document.body.appendChild(canvas);
}

document.getElementById('canvasChangeBtn').addEventListener('click', function() {
    createCanvas();
    make();
})

for ( var i=0; i<topBarBtns.length; i++){
    if (btnsSelected != undifined){
        document.getElementById('btnsSelected').classList.remove('topBarBtnSelected')
    } else {
        var btnSelection = e.taget;
        btnsSelected = btnsSelected.id;
        btnSelection.classList.add('topBarBtnSelected')
    }
}
