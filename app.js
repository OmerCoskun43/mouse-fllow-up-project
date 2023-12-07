const eyes = document.getElementsByClassName("eye");
// console.log(eyes);

document.addEventListener("mousemove", (e) => {
  let x = (e.clientX * 100) / window.innerWidth + "%";
  let y = (e.clientY * 100) / window.innerHeight + "%";
  //   let width = window.innerWidth;
  //   let height = window.innerHeight;
  //   console.log(width, height);

  for (let index = 0; index < 2; index++) {
    eyes[index].style.top = y;
    eyes[index].style.right = x;
    eyes[index].style.transform = `translate(-${x}, -${y})`;
  }
});
