const button = document.getElementById("btn");




// const url = 'https://anime-quotes5.p.rapidapi.com/api.php?anime=naruto';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'bc42fd55b0msh70b8d0c443dad3dp1c19d5jsncddb6f66fb4b',
// 		'x-rapidapi-host': 'anime-quotes5.p.rapidapi.com'
// 	}
// };

// async function hello()
// {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
//     let random = Math.floor(Math.random() * 93);
//     let animeName = document.createElement("h1");
//     animeName.classList.add("anime-name");
//     let getName = result[12].character;
//     animeName.innerText = `Anime Name:${getName}`
//     document.body.appendChild(animeName);
//     let image = document.createElement("img");
//     if(getName === "Naruto Uzumaki")
//     {
//         image.src = "https://i.pinimg.com/564x/e2/e3/3e/e2e33ec761d528fee30e6620ab106ed6.jpg"
//     }
//     // image.src = `${result[random].character_thumbnail_url}`
//     document.body.appendChild(image)

// 	console.log(result)
    
// }

const animeQuotes = [
    {
        animeName : "Naruto",
        image : ["https://i.pinimg.com/564x/e2/e3/3e/e2e33ec761d528fee30e6620ab106ed6.jpg","https://i.pinimg.com/564x/08/43/25/08432541e2e0c0cf59cd5c5c5cafcc0f.jpg","https://i.pinimg.com/564x/5e/06/02/5e060204e38e415352406f038ee199e6.jpg","https://i.pinimg.com/474x/fa/6d/79/fa6d79fdaf3a1d27e5bd3ea730642f97.jpg","https://i.ibb.co/jW9SX80/sasuke.jpg"]
    },
    {
        animeName : "One Piece",
        image : ["https://i.pinimg.com/564x/b0/9d/cd/b09dcd1e9a8d988326d1aac43faaa4b1.jpg","https://i.pinimg.com/736x/b1/c2/e1/b1c2e1b13613c1ca1620c04a22395cd7.jpg","https://i.pinimg.com/736x/9b/2b/23/9b2b23782f368d1a2120f3ba0b575d56.jpg","https://i.pinimg.com/736x/7e/0c/b4/7e0cb479babd3c26be1174fb97038ee8.jpg","https://s1.zerochan.net/Monkey.D..Luffy.600.1711303.jpg"]
    }
    // {
    //     animeName : "Death Note",
    //     image : ["https://i.pinimg.com/1200x/90/e4/f4/90e4f48d5b31b7c6e85ad00ac2adcbda.jpg"]
    // }
];


button.onclick = hello;
const img = document.createElement("img");
img.classList.add("images");
img.style.width = "650px";
img.style.height = "650px";
// img.style.alignSelf = "center"


document.body.appendChild(img);
function hello()
{
    // let random = Math.floor(Math.random() *5);
    
    img.src = `${animeQuotes[Math.floor(Math.random() *2)].image[Math.floor(Math.random() *5)]}`; 
    


}