// make function do slide show on the header photo

//select two buttos
const arwo_right = document.querySelector(".fa-chevron-right");
const arwo_left = document.querySelector(".fa-chevron-left");
//select section header
const theHeader = document.querySelector(".header");
// make array content all photo
let allPhoto = ["h1", "h2", "h3","h4", "h5"];
// create the counter
let counter = 0;
// add event on the button
arwo_right.addEventListener("click", () => {
    counter++;
    theHeader.style.backgroundImage = `url('../photos/${allPhoto[counter]}.jpg')`;
    if(counter > allPhoto.length - 1){
        counter = 0;
        theHeader.style.backgroundImage = `url('../photos/${allPhoto[counter]}.jpg')`
    }
    console.log(counter)
})
arwo_left.addEventListener("click", () => {
    counter --;
    theHeader.style.backgroundImage = `url('../photos/${allPhoto[counter]}.jpg')`;
    if(counter < 0){
        counter = allPhoto.length - 1;
        theHeader.style.backgroundImage = `url('../photos/${allPhoto[counter]}.jpg')`;
    }
})

// do function to move smooth 

//select the button to do function
const moveButton = document.querySelector(".show-down button");
//add event to do function
moveButton.addEventListener("click", _ => {
    //select the section 
    const theSection = document.querySelector(".our-services");
    //use method
    theSection.scrollIntoView({
        behavior : "smooth"
    });
});

// do function handel paragraph

//select paragraph
// const theText = document.querySelector(".testimonials .box p").dataset.text;
// let theNewText = document.querySelector(".testimonials .box p");
// let i = 0;

// // select the section
// // const theTestimonials = document.querySelector(".testimonials");

// // window.onscroll = function() {

// //     let testOffTop = theTestimonials.offsetTop;
// //     let testOffheight = theTestimonials.offsetHeight;
// //     let windowScrolltop = this.pageYOffset;
    
// //     if(windowScrolltop === 1011.2000122070312){
// //         var time = setTimeout(_ => {
// //             i++;
// //             theNewText.textContent += theText[i];
// //             if(i == theText.length - 1){
// //                 clearInterval(time);
// //                 theNewText.textContent ="";
// //             }
// //         },50)
// // }
// // }
// // 1011.2000122070312
// //769.5999755859375

//////////////////////////////////////////////

// add function to increament the number

//select the button 
const theButtons = document.querySelectorAll(".projects .box-image .image .overlay .text .far");
const theButtonsDark = document.querySelectorAll(".projects .box-image .image .overlay .text .fas");
// selct the Number
let theNumber = document.querySelectorAll(".projects .box-image .image .overlay .text span")
// do function on the button 
theButtons.forEach(button => {
    button.addEventListener("click", e => {

        let counter = parseInt(e.target.dataset.number);

        let theSpanContent = theNumber[counter].textContent;

        theSpanContent = parseInt(theSpanContent) + 1;

        let theStringNum = theSpanContent.toString()

        theNumber[counter].textContent = theStringNum;

        console.log(theNumber[counter].textContent);
        // hidden the button
        e.target.style.display = "none";
        // Show theButtonsDark
        theButtonsDark[counter].style.display = "inline-block"
    })
});
theButtonsDark.forEach(button =>{
    button.addEventListener("click", e => {

        let counter = parseInt(e.target.dataset.number);

        let theSpanContent = theNumber[counter].textContent;

        theSpanContent = parseInt(theSpanContent) - 1;

        let theStringNum = theSpanContent.toString()

        theNumber[counter].textContent = theStringNum;

        // hidden the button
        e.target.style.display = "none";
        // // Show theButtonsDark
        theButtons[counter].style.display = "inline-block"
    })
})

// handel Show text button

//select the button
const showButton = document.querySelectorAll(".projects .box-image .image .overlay button");
// select the text
let showText = document.querySelectorAll(".projects .box-image .image .overlay p");

// the setInterval
let time;
// do loop to axis on the one button
showButton.forEach(button => {
    button.addEventListener("click", e =>{
        e.target.style.display = "none"; 
        let theCount = parseInt(e.target.dataset.text);
        let theMainText = showText[theCount].dataset.thetext;
        clearInterval(time)
        // make a counter
        let i = 0;
        // Do setInterval function
        if(e.target.dataset.text == showText[theCount].dataset.thenum){
            time = setInterval(() =>{
                i++;
                showText[theCount].textContent += theMainText[i - 1];
                if(i === theMainText.length){
                    i = 0;
                    clearInterval(time);
                    showText[theCount].style.borderBottomColor = "#FFF";
                    showText[theCount].style.borderBottomWidth = "3px";
                    showText[theCount].style.borderBottomStyle = "solid";
                    showText[theCount].style.paddingBottom = "5px";
                    showText[theCount].style.borderRadius = "5px";
                    
                }
            },30)
        }
        showText.forEach(text => {
            if(text.textContent.length < 56 && text.textContent.length !== 0){
                let theCounter = parseInt(text.dataset.thenum);
                showText[theCounter].textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
                showText[theCounter].style.borderBottomColor = "#FFF";
                showText[theCounter].style.borderBottomWidth = "3px";
                showText[theCounter].style.borderBottomStyle = "solid";
                showText[theCounter].style.paddingBottom = "5px";
                showText[theCounter].style.borderRadius = "5px";
            }
        })
    })
})