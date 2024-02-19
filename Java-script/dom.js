// console.log("connected")
const cards=document.getElementsByClassName("card")
// console.log(cards)
for(bus of cards){
    // console.log(bus)
    bus.addEventListener("click",function(){
        // console.log("I love you")
        const setNumber=document.getElementById("Seat-Number").innerText
        const vipEconomic=document.getElementById("VIP-Economic").innerText
        const taka=document.getElementById("Taka").innerText
        // console.log(setNumber,vipEconomic,taka)
        const titleContainer=document.getElementById("title-container")
        // console.log(titleContainer)
    const p=document.createElement("p")      
    p.innerText=setNumber +vipEconomic+taka
    titleContainer.appendChild(p)
  
    })
}


// ________________//
function play(){
    // console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")

const homeSection= document.getElementById("Home-screen")
// console.log(homeSection)
homeSection.classList.add('hidden')

//show the playground
    const playGround=document.getElementById("play-ground")
    playGround.classList.remove( "hidden")
    // console.log(playGround.classList)
}




function addBackground(event){
   var color='green'
   event.style.backgroundColor=color;

   const allllll=document.getElementById("all")
   allllll.classList.remove("hidden")
}



















































// let titleCount=1
// let totalPrice=0

// const cards=document.querySelectorAll(".card")
// // console.log(cards)
// for(let card of cards)
// // console.log(card);
// card.addEventListener("click",function(){
// // console.log('I love You')

// // ______Start Title________//
// const title = card.childNodes[3].childNodes[3].innerText
// // console.log(title)
// const price=parseFloat (card.childNodes[3].childNodes[5].innerText.split(" ")[1])
// // console.log(typeof price)
// const titleContainer=document.getElementById("title-container")
// // console.log(titleContainer)
// const p=document.createElement("p")
// p.innerText = titleCount+"--"+title
// titleContainer.appendChild(p)
// titleCount++

// // _____Calculate Price______//
// totalPrice += price
// // console.log(totalPrice)
// const total=document.getElementById("totalPrice")
// const showTotal = total.innerText=totalPrice
// console.log(showTotal)

// })

// // ______Apply btn add with function_______//
// const btn=document.getElementById('apply-btn');
// btn.addEventListener('click',function(){
// // console.log('Maruf vai')
// // get input value filed
// const couponElement=document.getElementById("input-field").value;
// // console.log(couponElement)
// const couponCode = couponElement.split(" ").join("").toUpperCase();
// console.log(couponCode)
//     if(totalPrice >=200){
//         if(couponCode==="SELL200"){
//             const discountElement=document.getElementById("discountPrice")
//             const discountAmount=totalPrice*0.2
//             discountElement.innerText = discountAmount.toFixed(2)
//             // final total
//             const finalTotal=document.getElementById("total")
//             finalTotal.innerText=(totalPrice - discountAmount).toFixed(2)
//             document.getElementById("input-field").value=""  // clear the field after apply click
//         }else{
//             alert("Invalid Coupon")
//         }
//     }else{
//         alert("Please at least $200 buy kor")
//     }



// })