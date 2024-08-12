let data = [];

for (let i=0; i < 3; i++) {
  data[i] = function() {
    console.log(i);
  }
}

data[0]();
data[1]();
data[2]();
// 0
// 1
// 2