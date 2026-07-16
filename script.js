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

document.body.innerHTML = `

<div class="screen">

<h1>🎉 Happy Birthday Misti 💛</h1>

<div id="fireworks">

✨ 🎆 ✨ 🎇 ✨ 🎆 ✨

</div>

<p>

May your life always shine with happiness,

love and countless beautiful moments. 💛

</p>

</div>

`;

}
