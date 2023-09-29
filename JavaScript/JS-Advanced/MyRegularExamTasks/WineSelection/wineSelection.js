class WineSelection {

    constructor(space) {

      this.space = space;
      this.wines = [];
      this.bill = 0;
    }
  
    reserveABottle(wineName, wineType, price) {

      if (this.space == 0) {
        throw new Error("Not enough space in the cellar.");
      }

      this.wines.push({ wineName, wineType, price, paid: false });
      this.space--;

      return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }
  
    payWineBottle(wineName, price) {

      let findedWine = this.wines.find((wine) => wine.wineName == wineName);

      if (!findedWine) {
        throw new Error(`${wineName} is not in the cellar.`);
      }

      if (findedWine.paid) {
        throw new Error(`${wineName} has already been paid.`);
      }

      findedWine.paid = true;
      this.bill += price;

      return `You bought a ${wineName} for a ${price}$.`;
    }
  
    openBottle(wineName) {

      let wineIndex = this.wines.findIndex((wine) => wine.wineName === wineName);

      if (wineIndex == -1) {
        throw new Error("The wine, you're looking for, is not found.");
      }

      let wine = this.wines[wineIndex];

      if (!wine.paid) {
        throw new Error(`${wineName} need to be paid before open the bottle.`);
      }

      this.wines.splice(wineIndex, 1);
      this.space++;

      return `You drank a bottle of ${wineName}.`;
    }
  
    cellarRevision(wineType) {

      let filteredWines = this.wines;

      if (wineType) {

        if (filteredWines.length == 0) {
            throw new Error(`There is no ${wineType} in the cellar.`);
          }

        filteredWines = filteredWines.filter((wine) => wine.wineType == wineType);

        let result = [];

        result.push(filteredWines
            .map((w) => `${w.wineName} > ${w.wineType} - ${w.paid ? "Has Paid" : "Not Paid"}.`));

        return result.join('\n');
      }

      let emptySlots = this.space;
      let paidBill = this.bill;

      let winesInfo = filteredWines
        .sort((a, b) => a.wineName.localeCompare(b.wineName))
        .map((w) => `${w.wineName} > ${w.wineType} - ${w.paid ? "Has Paid" : "Not Paid"}.`)
        .join("\n");

      return `You have space for ${emptySlots} bottles more.\nYou paid ${paidBill}$ for the wine.\n${winesInfo}`;
    }
  }

//input 1
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
//input 2
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));
//input 3
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));
//input 4
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
// console.log(selection.cellarRevision('Rose'));
//input 5
const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());