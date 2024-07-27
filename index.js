function groupEvenAndOdds(array) {
  /* kodlar buraya */
  const oddsArr = new Array();
  const evenArr = new Array();
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array.at(i) % 2 === 0) {
      evenArr.push(array.at(i));
    } else {
      oddsArr.push(array.at(i));
    }
  }
  const result = evenArr.concat(oddsArr);
  return result;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = groupEvenAndOdds;
