const groupEvenAndOdds = require('./index.js'); // Fonksiyonumuzu import ediyoruz

describe('Tiyatro biletleri gruplama testleri', () => {
  test('Çift ve tek sayılar doğru gruplandırılıyor mu?', () => {
    expect(groupEvenAndOdds([1, 5, 9, 12, 14, 17])).toEqual([
      12, 14, 1, 5, 9, 17,
    ]);
  });

  test('Tüm sayılar çiftken doğru gruplandırılıyor mu?', () => {
    expect(groupEvenAndOdds([2, 4, 6, 8, 10, 12])).toEqual([
      2, 4, 6, 8, 10, 12,
    ]);
  });

  test('Tüm sayılar tekken doğru gruplandırılıyor mu?', () => {
    expect(groupEvenAndOdds([1, 3, 5, 7, 9, 11])).toEqual([1, 3, 5, 7, 9, 11]);
  });

  test('Karışık sayılar doğru gruplandırılıyor mu?', () => {
    expect(groupEvenAndOdds([2, 8, 19, 144, 151, 157])).toEqual([
      2, 8, 144, 19, 151, 157,
    ]);
  });
});
