var liste = [];
var allnumber = "";

function addToList(a) {
  if (a === "+" || a === "-" || a === "*" || a === "/") {
    liste.push(" " + a + " ");
  } else {
    liste.push(a);
  }
  console.log(liste);
  document.getElementById("result").innerHTML = liste.join("");
}

function secureEval(expression) {
  const regex = /^[\d\s()+\-*/.,]+$/;
  if (!regex.test(expression)) {
    throw new Error("NOT VALID");
  }
  return eval(expression);
}

function joinList() {
  allnumber = liste.join("");
  console.log(allnumber + "joinlist");
}

function calc(listenumber) {
  joinList(listenumber);
  console.log(secureEval(allnumber) + "calc");
  document.getElementById("result").innerHTML = secureEval(allnumber);
  document.getElementById("calcul").innerHTML = allnumber;
  liste = [];
}

function del() {
  liste.pop();
  document.getElementById("result").innerHTML = liste.join("");
}

function reset() {
  liste = [];
  document.getElementById("result").innerHTML = 0;
  document.getElementById("calcul").innerHTML = "";
}
