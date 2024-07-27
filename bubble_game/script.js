let config = {
  type: Phaser.AUTO,
  width: 700,
  height: 500,
  scene: {
    preload,
    create,
    update,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 200 },
    },
  },
};

const game = new Phaser.Game(config);

let data2 = ["प्", "अ", "त्", "इः"];
let rightText = "पतिः";
let textPaireObject = [];
let gameSpeed = 200;
let isPause = false;

function preload() {
  this.load.image("bg", "./bg.jpg");
  this.load.image("bubble", "./bubble.png");
}

function create() {
  // add background image
  this.add.image(0, 0, "bg").setOrigin(0, 0);

  // add right text
  this.add.text(550, 20, rightText, {
    fontSize: "30px",
    color: "#000",
  });

  // create grid
  let grid = this.add.grid(
    300,
    40,
    500,
    50,
    500 / data2.length,
    50,
    "#000",
    0.2,
    "#000",
    "#fff"
  );

  // create gridText array
  let gridText = new Array(data2.length).fill(null);

  // create grid text array and fill empty text
  let gridTextObject = gridText.map((_, i) => {
    let x = grid.cellWidth / 2 + grid.cellWidth * i + 50;

    let t = this.add.text(x, 35, "", {
      fontSize: "20px",
      color: "#000",
    });

    return t;
  });

  for (let i = 0; i < data2.length; i++) {
    let bubble = this.physics.add
      .image(i * 100 + 40, i * 50, "bubble")
      .setScale(0.3);

    bubble.setBounce(1).setInteractive();
    bubble.setCollideWorldBounds(true);

    bubble.setVelocity(
      Phaser.Math.Between(-gameSpeed, gameSpeed),
      Phaser.Math.Between(-gameSpeed, gameSpeed)
    );

    let text = this.add
      .text(bubble.x, bubble.y, data2[i], {
        fontSize: "20px",
        color: "#000",
      })
      .setOrigin(0.5);

    textPaireObject.push({ bubble, text });

    // click bubble
    bubble.on("pointerdown", () => handleBubbleClick(bubble, text, data2[i]));
  }

  // handle bubble click function
  function handleBubbleClick(bubble, textObj, text) {
    let checkEmptyCell = gridText.findIndex((t) => t == null);
    if (checkEmptyCell !== -1) {
      gridText[checkEmptyCell] = text;
      gridTextObject[checkEmptyCell].setText(text);
    }

    let isRight = gridText.join("") === data2.join("");

    if (isRight) {
      console.log("right");
    } else {
      console.log("Wrong");
    }

    bubble.destroy();
    textObj.destroy();
  }
}

// update function

function update() {
  // update each text position
  textPaireObject.forEach((item) => {
    item.text.setPosition(item.bubble.x, item.bubble.y);
  });

  // speed controller

  document.getElementById("speedController").addEventListener("input", (e) => {
    gameSpeed = e.target.value;
    textPaireObject.forEach((item) => {
      item.bubble.setVelocity(
        Phaser.Math.Between(-gameSpeed, gameSpeed),
        Phaser.Math.Between(-gameSpeed, gameSpeed)
      );
    });
  });

  // play and pause

  document.getElementById("playAndPause").addEventListener("click", () => {
    isPause = !isPause;

    if (isPause) {
      this.scene.pause();
      document.getElementById("playAndPause").innerHTML = "Play";
    } else {
      this.scene.resume();
      document.getElementById("playAndPause").innerHTML = "Pause";
    }
  });
}
