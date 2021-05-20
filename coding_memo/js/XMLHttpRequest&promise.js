 /**
  * jsonデータを取得する
  */
 var promise, data;

 promise = new Promise((resolve) => { // #1
   var xhr = new XMLHttpRequest;
   xhr.open('GET', '/diagnose/json/detail.json', true);
   xhr.setRequestHeader('Pragma', 'no-cache');
   xhr.setRequestHeader('Cache-Control', 'no-cache');
   xhr.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
   xhr.send(null);

   xhr.addEventListener('load', () => {
     data = JSON.parse(xhr.responseText || "null");
     resolve("#1");
   }, false);
 });

 promise.then(() => { // #2
   return someFunc();
 }).then(() => { // #3
   return otherFunc();
 }).catch(() => {
   console.error('error')
 });

 function someFunc() {
   // json取得後の関数の内容を記述
   resolve("#2");
 }

 function otherFunc() {
   // someFunc後の関数の内容を記述
   resolve("#3");
 }