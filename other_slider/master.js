let mainImage = document.querySelector(".slide img")


let images = document.querySelectorAll(".slides img")


images.forEach((img)=>{
    img.addEventListener("click", (e)=>{
        mainImage.src = e.currentTarget.src
    })
})
document.querySelector(".slider-container .slides").addEventListener("mousemove",(e)=>{
    document.querySelector(".slider-container .slides").scrollLeft = e.pageX;
})