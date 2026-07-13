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
#hearts{
position:fixed;
left:0;
top:0;
width:100%;
height:100%;
overflow:hidden;
pointer-events:none;
z-index:1;
}

.heart{
position:absolute;
font-size:22px;
animation:floatHeart linear forwards;
opacity:.9;
}

@keyframes floatHeart{

0%{
transform:translateY(100vh) scale(.8);
opacity:0;
}

15%{
opacity:1;
}

100%{
transform:translateY(-120px) scale(1.4);
opacity:0;
}

}

