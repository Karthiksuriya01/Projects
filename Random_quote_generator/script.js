const button = document.getElementById("btn");

const animeQuotes = [
    {
        animeName : "Naruto",
        image : ["https://i.pinimg.com/564x/e2/e3/3e/e2e33ec761d528fee30e6620ab106ed6.jpg","https://i.pinimg.com/564x/08/43/25/08432541e2e0c0cf59cd5c5c5cafcc0f.jpg","https://i.pinimg.com/564x/5e/06/02/5e060204e38e415352406f038ee199e6.jpg","https://i.pinimg.com/474x/fa/6d/79/fa6d79fdaf3a1d27e5bd3ea730642f97.jpg","https://i.ibb.co/jW9SX80/sasuke.jpg"]
    },
    {
        animeName : "One Piece",
        image : ["https://i.pinimg.com/564x/b0/9d/cd/b09dcd1e9a8d988326d1aac43faaa4b1.jpg","https://i.pinimg.com/736x/b1/c2/e1/b1c2e1b13613c1ca1620c04a22395cd7.jpg","https://i.pinimg.com/736x/9b/2b/23/9b2b23782f368d1a2120f3ba0b575d56.jpg","https://i.pinimg.com/736x/7e/0c/b4/7e0cb479babd3c26be1174fb97038ee8.jpg","https://s1.zerochan.net/Monkey.D..Luffy.600.1711303.jpg"]
    }
    /* add your anime photo links here */
];


button.onclick = hello;
const img = document.createElement("img");
img.classList.add("images");
img.style.width = "650px";
img.style.height = "650px";



document.body.appendChild(img);
function hello()
{
    // let random = Math.floor(Math.random() *5);
    
    img.src = `${animeQuotes[Math.floor(Math.random() *2)].image[Math.floor(Math.random() *5)]}`; 
    


}