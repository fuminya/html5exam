var canvas = document.getElementById('sample');
var ctx = canvas.getContext('2d');

// 円
ctx.beginPath();
ctx.strokeStyle = '#000000';
ctx.arc(30, 30, 20, 0, Math.PI*2, false);
ctx.stroke();

// 塗りつぶし円
ctx.beginPath();
ctx.fillStyle = '#FF0000';
ctx.arc(30, 80, 20, 0, Math.PI*2, false);
ctx.fill();

// 矩形
ctx.beginPath();
ctx.strokeStyle = '#000000';
ctx.rect(10, 120, 40, 40);
ctx.stroke();

// 塗りつぶし矩形
ctx.beginPath();
ctx.fillStyle = '#0000FF';
ctx.rect(10, 180, 40, 40);
ctx.fill();

// 矩形塗りつぶし/くり抜き/描画
ctx.fillStyle = '#0000FF';
ctx.strokeStyle = '#000000';
ctx.fillRect(100, 10, 50, 100);
ctx.clearRect(110, 30, 30, 60);
ctx.strokeRect(120, 40, 10, 40);

// テキスト
ctx.strokeStyle = '#000000';
ctx.fillStyle = '#00FF00';
ctx.strokeText('Text', 200, 40);
ctx.fillText('Text', 200, 80);

// 線
ctx.beginPath();
ctx.moveTo(100, 140);
ctx.lineTo(150, 140);
ctx.lineTo(100, 180);
ctx.lineTo(150, 180);
ctx.stroke();

// 線の太さを変更
ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(200, 120);
ctx.lineTo(250, 120);
ctx.stroke();
ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(200, 140);
ctx.lineTo(250, 140);
ctx.stroke();
ctx.beginPath();
ctx.lineWidth = 10;
ctx.moveTo(200, 160);
ctx.lineTo(250, 160);
ctx.stroke();

// 円弧
ctx.beginPath();
ctx.lineWidth = 1;
ctx.arc(320, 20, 30, Math.PI/4, Math.PI*3/4, false);
ctx.stroke();
ctx.beginPath();
ctx.arc(320, 100, 30, Math.PI/2, Math.PI*3/2, false);
ctx.stroke();

// ベジェ曲線
ctx.beginPath();
ctx.moveTo(300, 150);
ctx.bezierCurveTo(350, 200, 380, 200, 350, 150);
ctx.stroke();