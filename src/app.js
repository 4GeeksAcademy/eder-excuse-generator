/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];
  let allSegments = [who, action, what, when];

  function excuseGenerator() {
    let newExcuse = [];
    for (let index = 0; index < 4; index++) {
      let singleSegment = allSegments[index];
      let size = allSegments[index].length;
      let randomValue = Math.floor(Math.random() * size); //  Math.floor(Math.random() * (size))  define los valores minimo como 0 y max como size-1 (ejem: 0 y 3 para array-who)
      newExcuse.push(singleSegment[randomValue]);
    }
    document.getElementById("excuse").innerHTML = newExcuse.join(" ");
  }
  excuseGenerator();
};
