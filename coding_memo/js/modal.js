/**
 * モーダル表示
 */
function modal_show() {
  var btn = $('.js-detail');
  var close = $('.js-modal-detail-close');
  var modal = $('.js-modal-detail');
  var cont = $('.d-modal__wrapper');

  if (modal) {

    btn.click(function () {
      // ボタンが押されたら、モーダルウィンドウを表示
      modal.show();
      return false;
    });

    modal.click(function () {
      // 背景がクリックされたら、ウィンドウを閉じる
      modal.hide();
      return false;
    });

    cont.click(function (event) {
      // ウィンドウの中身をクリックしても、閉じないようにする
      // (親要素への伝播を止める)
      event.stopPropagation();
    });

    close.click(function (event) {
      // 閉じるボタンでモーダルウィンドウを非表示
      modal.hide();
    });


  }
}