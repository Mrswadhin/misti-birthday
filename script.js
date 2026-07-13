const loading = document.getElementById("loading");

setTimeout(() => {
    loading.style.display = "none";
}, 3000);

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

document.querySelector(".glass").innerHTML = `

<h2 style="font-family:'Great Vibes',cursive;font-size:45px;color:#d4a000;">
For You 💛
</h2>

<p style="margin-top:25px;font-size:22px;line-height:1.8;">

Every heartbeat...

Every smile...

Every beautiful memory...

reminds me how special you are.

✨

Today isn't just your birthday.

It's a celebration of your existence.

💛

</p>

<br>

<button onclick="nextPage()">

Continue ➜

</button>

`;

});

function nextPage(){

document.querySelector(".glass").innerHTML=`

<h2 style="font-family:'Great Vibes',cursive;color:#d4a000;">

Project MISTI 💛

</h2>

<p style="font-size:21px;line-height:1.8;">

Coming in the next update...

📸 Premium Photo Gallery

💌 Romantic Letter

🎂 Birthday Cake

🎁 Gift Box

🎥 Surprise Video

✨ Fireworks

🌹 Rose Animation

</p>

<br>

<h3>

— Swadhin da 💙

</h3>

`;

}
// ===== Floating Yellow Hearts =====

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💛";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);
