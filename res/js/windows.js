const page = document.getElementById('page');
const windowWrapper = document.createElement('div');
let wTitle = document.createElement('div');
let pgWrap = document.createElement('iframe');

windowWrapper.appendChild(wTitle).appendChild(pgWrap);

function openWindow(link) {
    page.appendChild(windowWrapper);
    pgWrap.src = link;
}