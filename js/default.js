//確認ダイアログを表示
var result = window.confirm('準備OK?');
//結果を表示
if(result){
  document.getElementById('choice').textContent='OKが押されました';
}eles{
  document.getElementById('choice').textContent='キャンセルが押されました';
}
//答えを用意
var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0～2の数字を入力してください！'));

var mesage;
if(answer === number){
  message = 'あたり！';
}else if(answer < number){
  message = '残念！もっと大きいです';
}eles if(number < answer){
  message = '残念！もっと小さいです';
}eles{
  message = '0～3の数字を入力してください';
}

//結果を表示
document.getElementById('choice').textContent = message;
