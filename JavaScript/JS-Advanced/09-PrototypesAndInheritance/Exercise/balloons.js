function balloons() {

    class Balloon {

        constructor(color, gasWeight) {

            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {

        constructor(color, gasWeight, ribbonColor, ribbonLength) {

            super(color, gasWeight);

            this._ribbon = {

                color: ribbonColor,
                length: ribbonLength,
            }
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {

        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {

            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return {

        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    }
}

let classes = balloons();
let testBalloon = new classes.Balloon("yellow", 20.5);
console.log(testBalloon);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
console.log(testPartyBalloon);
let ribbon = testPartyBalloon.ribbon;
let test = new classes.Balloon("Tumno-bqlo", 20.5);
console.log(test.hasWeight);
// console.log(testBalloon);
// console.log(testPartyBalloon);
// console.log(ribbon);
