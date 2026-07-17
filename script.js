const btn = document.getElementById("continueBtn");

btn.addEventListener("click", () => {

document.body.innerHTML = `

<div class="screen">

<h1>🎂 Happy Birthday Misti 💛</h1>

<p>
Make a wish and tap the candle...
</p>

<div id="cake">

<img
id="cakeImage"
src="https://i.imgur.com/9P4K8Yw.png"
alt="Birthday Cake">

<div id="flame">🔥</div>

</div>

<button id="blowBtn">
Blow Candle 🕯️
</button>

</div>

`;

document.getElementById("blowBtn").addEventListener("click", blowCandle);

});

function blowCandle(){

document.getElementById("flame").style.display="none";

document.body.innerHTML = `
<div class="screen">

<h1>💌 A Letter For You</h1>

<div id="letterBox">

<p id="letterText"></p>

</div>

<button id="nextLetter">

Open My Gift 🎁

</button>

</div>

`;

  document.getElementById("nextLetter").addEventListener("click", () => {

    alert("🎁 Gift Page - Coming Next!");

});
  
}
