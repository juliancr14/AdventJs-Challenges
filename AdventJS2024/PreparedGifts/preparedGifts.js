/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
  let temp;
  let preparedGifts = [];

  for (let i = 0; i <= gifts.length; i++) {
    for (let i = 0; i <= gifts.length; i++) {
      if (gifts[i] > gifts[i + 1]) {
        temp = gifts[i];
        gifts[i] = gifts[i + 1];
        gifts[i + 1] = temp;
      }
    }
  }

  for (let i = 0; i <= gifts.length; i++) {
    if (gifts[i] != gifts[i + 1]) {
      preparedGifts.push(gifts[i]);
    }
  }

  return preparedGifts;
}

const gifts1 = [3, 1, 2, 3, 4, 2, 5];
const preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1); // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5];
const preparedGifts2 = prepareGifts(gifts2);
console.log(preparedGifts2); // [5, 6]

const gifts3 = [];
const preparedGifts3 = prepareGifts(gifts3);
console.log(preparedGifts3); // []
// No hay regalos, la lista queda vacía
