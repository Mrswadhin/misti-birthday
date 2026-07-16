const btn = document.getElementById("continueBtn");

btn.addEventListener("click", () => {

document.body.innerHTML = `

<div class="screen">

<h1>🎂 Happy Birthday Misti 💛</h1>

<p>
Make a wish and tap the candle...
</p>

<div id="cake">

<div id="flame">🔥</div>

<div id="candle"></div>

<div id="cakeBody"></div>

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

alert("🎉 Happy Birthday Misti! 🎆");

}
