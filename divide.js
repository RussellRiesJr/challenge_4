// What is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder?


for (var i = 11; i <= 5000; i++) {
    if (!(i % 6 || i % 7 || i % 8 || i % 9 || i % 10)) {
      console.log("i", i);
    }
}
