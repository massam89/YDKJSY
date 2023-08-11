function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}
var reel = {
  symbols: ["X", "Y", "Z", "W", "$", "*", "<", "@"],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};
var slotMachine = {
  reels: [
    // this slot machine needs 3 separate reels
    // hint: Object.create(..)
    Object.create(reel),
    Object.create(reel),
    Object.create(reel),
    Object.create(reel),
    Object.create(reel),
    Object.create(reel),
    Object.create(reel),
    Object.create(reel),
    Object.create(reel),
  ],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    let output = "";
    this.reels.forEach(function (reel, index) {
      if ((index + 1) % 3) {
        output = `${output} ${reel.display()} |`;
      } else {
        output = `${output} ${reel.display()} \n`;
      }
    });
    console.log(output);
  },
};

slotMachine.spin();
slotMachine.display();
