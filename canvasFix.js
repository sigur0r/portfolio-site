let pixelRatioBox = document.querySelector(".canvas");
let mqString = `(resolution: ${window.devicePixelRatio}dppx)`;

const updatePixelRatio = () => {
  let pr = window.devicePixelRatio;
  let prString = (pr * 100).toFixed(0);
  pixelRatioBox.innerText = `${prString}% (${pr.toFixed(2)})`;
}

updatePixelRatio();

matchMedia(mqString).addListener(updatePixelRatio);
