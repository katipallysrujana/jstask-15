const card=document.getElementById("div1")
card.innerHTML=`<img src="https://m.media-amazon.com/images/I/71fZOKh0i1L._AC_UY327_FMwebp_QL65_.jpg" width="250px"/>
<p>cost:85,999</p><button>buy now</button>`
card.style.border="2px solid black ";
card.style.display="inline-block";
card.style.padding="10px"
card.style.textAlign="center"
card.style.backgroundColor="lightgray"

const card1=document.getElementById("div2")
card1.innerHTML=`<img src="https://m.media-amazon.com/images/I/61bJZx1v8GL._SX679_.jpg" height="154px" width="250px"/>
<p>cost:49,900</p><button>buy now</button>`
card1.style.border="2px solid black ";
card1.style.display="inline-block";
card1.style.padding="10px"
card1.style.textAlign="center"
card1.style.backgroundColor="lightgray"



const card2=document.createElement("div3");
card2.innerHTML=`<img src="https://m.media-amazon.com/images/I/61qV17Px4NL._SX679_.jpg"  height="154px" width="250px"/><p>
cost:1,19,000</p><button>buy now</button>`
card2.style.border="2px solid black";
card2.style.display="inline-block"
card2.style.padding="10px";
card2.style.textAlign="center"
card2.style.backgroundColor="lightgray"


document.body.appendChild(card2)

const card3=document.createElement("div4");
card3.innerHTML=`<img src="https://m.media-amazon.com/images/I/81epBowa4UL._AC_UY327_FMwebp_QL65_.jpg"  height="154px" width="250px"/><p>
cost:65,990</p><button>buy now</button>`
card3.style.border="2px solid black";
card3.style.display="inline-block"
card3.style.padding="10px";
card3.style.textAlign="center";
card3.style.backgroundColor="lightgray"



document.body.appendChild(card3)
document.body.style.display="flex"
document.body.style.gap="10px"