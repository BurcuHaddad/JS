function showMeMyContent(givenArray) {
  if (givenArray.length > 0) {
    for (let item of givenArray) {
      console.log(item);
    }
  } else {
    console.log("This is an empty array.");
  }
}

const bgFood = ["waffle", "burger", "cheesecake"];
showMeMyContent(bgFood);

const emptyArray = [];
showMeMyContent(emptyArray);
