function solve() {

   let uniqueProductNames = new Set();
   let purchasedProductPrices = [];

   let outputArea = document.querySelector('textarea');
   let checkoutButton = document.querySelector('.checkout');

   checkoutButton.addEventListener('click', checkoutResult);

   let allAddButtons = Array.from(document.querySelectorAll('.add-product'));
   allAddButtons.forEach((el) => el.addEventListener('click', addProduct));

   function addProduct(event) {

      let currentProductName = event.target.parentElement.previousElementSibling.children[0].textContent;
      let currentProductPrice = Number(event.target.parentElement.nextElementSibling.textContent);

      purchasedProductPrices.push(currentProductPrice);
      uniqueProductNames.add(currentProductName);

      outputArea.textContent += `Added ${currentProductName} for ${currentProductPrice.toFixed(2)} to the cart.\n`;
   }

   function checkoutResult() {

      let totalCost = 0;
      purchasedProductPrices.forEach((el) => totalCost += el);
      let purchasedProducts = [...uniqueProductNames].join(', ');

      outputArea.textContent += `You bought ${purchasedProducts} for ${totalCost.toFixed(2)}.`

      allAddButtons.forEach((el) => el.removeEventListener('click', addProduct));
      checkoutButton.removeEventListener('click', checkoutResult);
   }
}