class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.middle = 0;
    }

    setRange(minDigit, maxDigit) {
        this.min = minDigit;
        this.max = maxDigit;
        console.log(this.min, this.max);
    }

    guess() {
        return this.middle = Math.ceil((this.max + this.min)/2);
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;
