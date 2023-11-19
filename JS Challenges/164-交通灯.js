function Litgreen() {
  console.log("Green Light");
}
function Litred() {
  console.log("Red Light");
}
function Lityellow() {
  console.log("Yellow Light");
}

function Light(colour, time) {
  let back = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (colour === "red") {
        Litred();
      } else if (colour === "green") {
        Litgreen();
      } else if (colour === "yellow") {
        Lityellow();
      }
      resolve();
    }, time);
  });
  return back;
}

async function execute() {
  await Light("red", 3000);
  await Light("green", 1000);
  await Light("yellow", 1000);
  execute();
}

execute();
