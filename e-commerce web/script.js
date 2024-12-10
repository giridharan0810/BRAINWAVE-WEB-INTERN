const wrapper = document.querySelector(".sliderwrapper")
const menuitem=document.querySelectorAll(".menuitem")
const product=[
{
    id:1,
    title:"Air Force",
    price:119,
    colors:
    [
        {
            code:"black",
            img:"IMG/air.png",
        },
        {
            code:"darkblue",
            img:"IMG/air2.png",
        },
        
    ],
},
{
    id:2,
    title:"Air Jordan",
    price:149,
    colors:[{
        code:"lightgrey",
        img:"IMG/jordan.png",
    },
            {
                code:"green",
                img:"IMG/jordan2.png",
            },],
},
{
    id:3,
    title:"Blazer",
    price:109,
    colors:[{
        code:"lightgrey",
        img:"IMG/blazer.png",
    },
{
    code:"green",
    img:"IMG/blazer2.png",
}],
},
{
    id:4,
    title:"Crater",
    price:129,
    colors:[{
        code:"black",
        img:"IMG/crater.png",
    },
    {
        code:"white",
        img:"IMG/crater2.png",
    },],
},

{
    id:5,
    title:"Hippe",
    price:99,
    colors:[{
        code:"grey",
        img:"IMG/hippie.png",
    },
         {
            code:"black",
            img:"IMG/hippie2.png",
         }],
},];
let choosenproduct = product[0]
const currentproductimg=document.querySelector(".productimg");
const currentproductitle=document.querySelector(".productitle");
const currentproductprice=document.querySelector(".productprice");
const currentproductcolors=document.querySelectorAll(".color");
const currentproductsizes=document.querySelectorAll(".size");
menuitem.forEach((item,index) => {
    item.addEventListener("click",()=>{wrapper.style.transform=`translateX(${-100*index}vw)`;        
    choosenproduct=product[index]


    currentproductitle.textContent=choosenproduct.title
    currentproductprice.textContent="$"+choosenproduct.price
    currentproductimg.src=choosenproduct.colors[0].img
currentproductcolors.forEach((color, index) => {
    color.style.backgroundColor = choosenproduct.colors[index].code;
});
 });
});
currentproductcolors.forEach((color, index) => {
    color.addEventListener("click",()=>{
        currentproductimg.src=choosenproduct.colors[index].img
    });
});
currentproductsizes.forEach((size, index) => {
    size.addEventListener("click",()=>{
      currentproductsizes.forEach((size)=>{
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
});
const productbutton=document.querySelector(".productbutton");
const payment=document.querySelector(".payment");
const close = document.querySelector(".close");

productbutton.addEventListener("click",()=>{
    payment.style.display="flex";
})
close.addEventListener("click",()=>{
    payment.style.display="none";
})