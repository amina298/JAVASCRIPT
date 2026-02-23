
  const box = document.getElementById("box");

  let positionX = 200;
  let positionY = 200;
  const speed = 20;

  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
      positionY -= speed;
    }
    else if (event.key === "ArrowDown") {
      positionY += speed;
    }
    else if (event.key === "ArrowLeft") {
      positionX -= speed;
    }
    else if (event.key === "ArrowRight") {
      positionX += speed;
    }

    box.style.top = positionY + "px";
    box.style.left = positionX + "px";
  });
