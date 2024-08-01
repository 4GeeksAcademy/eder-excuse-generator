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
    "while I was praying"
  ];
  let allSegments = [who, action, what, when];

  function excuseGenerator() {
    let newExcuse = [];
    for (let index = 0; index < 4; index++) {
      let singleSegment = allSegments[index];
      let size = allSegments[index].length;
      console.log(size);
      let randomValue = Math.floor(Math.random() * (size - 1)) + 1; //  Math.floor(Math.random() * (max - min +1))+1 define los valores minimo y maximo incluyendo ambos
      newExcuse.push(singleSegment[randomValue]);
    }
    document.getElementById("excuse").innerHTML = newExcuse.join(" ");
  }
  excuseGenerator();
};
