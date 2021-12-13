function qs(element) {
    return document.querySelector(element);
}

let $div = qs('div');
let $title = qs('h1')

$div.classList.add('fondoTransparente');
$title.classList.add('fondoCRUD');
$title.style.color = '#fff'