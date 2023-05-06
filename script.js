const wrapper = document.querySelector(".wrapper"),
generateBtn = wrapper.querySelector(".form button"),
qrInput = wrapper.querySelector(".form input"),
qrImg = wrapper.querySelector(".qr-code img");
generateBtn.addEventListener( "click" ,() =>{
   
    let qrValue = qrInput.value;
    if(!qrValue) return;
    


    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    generateBtn.innerText = "Generate QR button..."


    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR button...";
        

    });
    qrImg.addEventListener("load", () =>{
if(!qrInput.value){
    wrapper.classList.remove("active");

}
    });
    

});
