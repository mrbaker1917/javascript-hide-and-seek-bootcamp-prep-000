
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    let oldNum = parseInt(lis[i].innerHTML);
    lis[i].innerHTML = oldNum + parseInt(n);
  }
}

function deepestChild() {
  let divGN = document.getElementById('grand-node').querySelectorAll('div')
  for (var i = 0; i < divGN.length; i++) {
    if (divGN[i].div === "boo!") {
      return divGN[i].div;
    } 
  }
}