$(function() {

  const cards = [];
  let mark;
  let flipCount = 0;
  let firstCard = null;
  let secondCard = null;


  // 52枚のカード生成
  for (let m = 1; m < 5; m++) {
    if (m === 1) {
      mark =  '♠️';
    } else if (m === 2) {
      mark =  '♣️';
    } else if (m === 3) {
      mark =  '❤︎';
    } else if (m === 4) {
      mark =  '♦︎';
    } 

    for (let i = 1; i < 14; i++) {
      let tramp = (mark + i)
      cards.push(tramp);
    };
  };

  // 52枚のカードをクラスに入れて表示させる
  while (cards.length) {
    let randomCard = cards.splice(Math.floor(Math.random() * cards.length),1)[0];

    let card = $('<div class="card">');
    let inner = $(`<div class="card-front">${randomCard}</div><div class="card-back"></div>`);
    card.prepend(inner);
    
    let container = $('<div class="card-container">')
    container.prepend(card);

    $("#stage").prepend(container);
  }

  // カードがクリックされた時
  $(".card").click(function() {

    // ２枚ともクリックされた時イベントを発火させない
    if (firstCard !== null && secondCard !== null) {
      return;
    }
    flipCount++;

    // クリックされたカードをオープンして数字を取得
    $(this).addClass('card open')
    console.log(flipCount);

    // $(this).find('.card-front').text().replace(/[^0-9]/g, '')

    if (flipCount % 2 === 1) {
      firstCard = this
      console.log($(firstCard).find('.card-front').text().replace(/[^0-9]/g, ''));
    } else {
      secondCard = this
      console.log(secondCard);
      setTimeout(function() {
        check()
      },1000);
    };

    function check() {
        if ($(firstCard).find('.card-front').text().replace(/[^0-9]/g, '') === $(secondCard).find('.card-front').text().replace(/[^0-9]/g, '')) {

          $(firstCard).css('display', 'none');
          $(secondCard).css('display', 'none');
          firstCard = null;
          secondCard = null;
        } else {
          $(firstCard).removeClass('open')
          $(secondCard).removeClass('open')
          firstCard = null;
          secondCard = null;
        }
      }
  });
});