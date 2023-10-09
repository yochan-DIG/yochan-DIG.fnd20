// ＜実装したいこと＞
// ・拍手してる絵文字にclick（人）→ 絵文字にタグ付け必要
// ・clickした数だけ絵文字の下のテキストに数値表示 → テキストにタグ付け必要
// ・数値が100に達したら、ページの最後に別Webページのリンク先が出てくる（プログラム処理）→ リンク先にタグ付け必要



// まず、htmlのタグを取得してjsで使用できるよう変数化をする
const emoji = document.getElementById("emoji"); // emojiのタグ取得（人がやる最後のイベント）
const appnum = document.getElementById("appnum"); // appnumのタグ取得
const applast = document.getElementById("applast"); // applastのタグ取得
const preapplast = document.getElementById("preapplast") // applastの表示とともに消す



// 人がやる最後のイベント emoji にリスナー関数をかける
// こうすることで、click動作と最後に回したい関数をリンクさせている
emoji.addEventListener("click", consoleAppNum);

// 拍手数値を表示させる関数を宣言する
let clicknum = 0;
function consoleAppNum() { // 関数宣言
  clicknum += 1;
  appnum.textContent = clicknum; 
  appLastDisplay();
}


// clicknum が100に達したら、applastを表示
function appLastDisplay() {
  if (clicknum >= 100) {
    applast.style.display = "block";
    preapplast.style.display = "none";
    appnum.classList.add("red-text");
  } else {
    applast.style.display = "none";
    preapplast.style.display = "block";
  }
}
