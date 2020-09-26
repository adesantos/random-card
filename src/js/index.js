/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    RandomCard();
  });

  function RandomCard() {
    var random = Math.floor(Math.random() * 11);
    var ar_num = [random, "J", "Q", "K", "A"];
    var ar_icon = ["&hearts;", "&spades;", "&clubs;", "&diams;"];
    var html_icon = document.getElementsByClassName("icon");
    var html_num = document.querySelector(".value");
    var icon;
    var num;

    icon = ar_icon[Math.floor(Math.random() * ar_icon.length)];
    num = ar_num[Math.floor(Math.random() * ar_num.length)];

    if (icon == "&hearts;" || icon == "&diams;") {
      html_icon[0].classList.remove("black");
      html_icon[1].classList.remove("black");
      html_icon[0].classList.add("red");
      html_icon[1].classList.add("red");
      //html_num.classList.add("red");
    } else {
      html_icon[0].classList.remove("red");
      html_icon[1].classList.remove("red");
      html_icon[1].classList.add("black");
      html_icon[0].classList.add("black");
      //html_num.classList.add("black");
    }
    html_num.innerHTML = num;
    html_icon[0].innerHTML = icon;
    html_icon[1].innerHTML = icon;
  }
};
