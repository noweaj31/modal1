"use strict";

const modalBtns = document.querySelectorAll(".btn-wrap button");
const modalWrap = document.querySelector(".modal-wrap");
const modals = document.querySelectorAll(".modal");
const modalCloses = document.querySelectorAll(".close");
console.log(modalCloses);
/**
 * 1. 버튼누르기
 *  - 모달창이 나와야함
 * 2. 클로즈 버튼 누르기
 *  - 모달창이 닫혀야함
 */

modalBtns.forEach((modalBtn, index) => {
  modalBtn.addEventListener("click", () => {
    modalWrap.style.display = "flex";
    modals[index].style.display = "flex";
  });
});

modalCloses.forEach((modalClose, index) => {
  modalClose.addEventListener("click", () => {
    modalWrap.style.display = "none";
    modals[index].style.display = "none";
  });
});
