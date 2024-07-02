// Declare variables below to save the different divs of your story.
let storyOpening = document.querySelector(".story-opening")
let buttons = document.querySelector(".buttons")
let optionOneScreen = document.querySelector(".option-one-screen")
let optionTwoScreen = document.querySelector(".option-two-screen")
let optionOneEnd = document.querySelector(".option-one-end")
let optionTwoEnd = document.querySelector(".option-two-end")

let optionOne = document.querySelector(".option-one")
let optionTwo = document.querySelector(".option-two")
let optionOnea = document.querySelector(".option-onea")
let optionTwoa = document.querySelector(".option-twoa")
let openingImage = document.querySelector(".opening-image")
let optionTwob = document.querySelector(".option-twob")
let optionOneb = document.querySelector(".option-oneb")
let optionThreea = document.querySelector(".option-threea")
let optionFoura = document.querySelector(".option-foura")
let optionThreeb = document.querySelector(".option-threeb")
let optionFourb = document.querySelector(".option-fourb")
let optionThreec = document.querySelector(".option-threec")
let optionFourc = document.querySelector(".option-fourc")
let optionThreed = document.querySelector(".option-threed")
let optionFourd = document.querySelector(".option-fourd")
let optionGameEndBad1 = document.querySelector(".option-game-end-bad1")
let optionGameEndGood1 = document.querySelector(".option-game-end-good1")

let story1 = document.querySelector(".story1")
let thealien = document.querySelector(".thealien")

optionOne.addEventListener("click", function() {
    story1.innerHTML="Ayhay T'Oom Ahns teleports himself into your office.  'We'd like to park our Quantum Super Planetary Annihilator in Orbit of Saturn for peacekeeping reasons.'";
    openingImage.src = "https://media.istockphoto.com/photos/grey-realistic-alien-isolated-on-black-digital-picture-id484147304?k=6&m=484147304&s=612x612&w=0&h=Ss9YeoHxJtZ2CIsKmgMsm5JIaP0PKkjxkwwKJXuB3pc=";
    optionOne.style.display = "none"
    optionTwo.style.display = "none"
    optionOnea.style.display = "block"
    optionTwoa.style.display = "block"

})

optionTwo.addEventListener("click", function (){
    story1.innerHTML = "The french diplomatic envoy to the U.S. bursts into your office. 'Qu'est-ce que c'est?!?!' he presents you with a tariff taxing imported croissants, brie cheese, and Burgundy grape juice."
    openingImage.src = "https://www.shutterstock.com/shutterstock/photos/1634611372/display_1500/stock-photo-young-french-artist-man-looking-confident-angry-strong-and-aggressive-with-fists-ready-to-fight-1634611372.jpg"
    optionOne.style.display= "none"
    optionTwo.style.display = "none"
    optionOneb.style.display = "block"
    optionTwob.style.display = "block"
})

optionOneb.addEventListener("click", function(){
    story1.innerHTML = "You gather your things and leave the office. It's getting late and you hope to get some good sleep before tomorrow. Next morning you arrive in your office and find todays issue of the news. The headlines read 'ECONOMIC TURMOIL WITH MILLIONS OUT OF JOBS: THE PRESIDENT'S LIFT ON TARIFF TO BLAME?' As a result of the repeal of the tariff, the country's cheese and breadmaking businesses (it's economic and industrial heart) plumet into financial turmoil followed by the rest of the U.S."
    openingImage.src = "https://th.bing.com/th/id/R.8a59a6306e1c0a903b4fcd09ac37b022?rik=kA4A9PvhYNf%2f%2bA&riu=http%3a%2f%2fd279m997dpfwgl.cloudfront.net%2fwp%2f2015%2f08%2f0824_black-monday.jpg&ehk=1j9lW1VbFX%2bvXhEKpl4%2fRW1nivhcre%2bvMeglBhGzVaA%3d&risl=&pid=ImgRaw&r=0"
    optionOneb.style.display= "none"
    optionTwob.style.display = "none"
    optionThreea.style.display = "block"
    optionFoura.style.display = "block"
})

optionTwob.addEventListener("click", function(){
    story1.innerHTML = "Your phone rings. You pick up the receiver. 'Mr. President. These United States of America are under attack yes under attack by foreign powers as we speak. Not in the traditional sense no sir. Take a look out your window sir. Do you see those flapping avian abominations? No not birds . . . FOREIGN ESPIONAGE CRAFT WITH THE INTENT OF DESTROYING OUR AMERICA! I'm requesting the $600M gained from the tariff with an additional $800M to be redirected from the Student Stars College Funding Program into our defense budget immediatly!"
    openingImage.src ="https://as1.ftcdn.net/v2/jpg/01/61/48/86/1000_F_161488604_hROamF5eRMwwcmxCmSsQNARKqL8iwq2T.jpg"
    optionOneb.style.display= "none"
    optionTwob.style.display = "none"
    optionThreeb.style.display = "block"
    optionFourb.style.display = "block"

})

optionOnea.addEventListener("click", function(){
    story1.innerHTML = "Independence Day 2: Alien Assasination has been announced to be in production. The film studio which is producing it has asked you to star in it."
    openingImage.src = "https://th.bing.com/th/id/R.3f5f64906ab762ffe35bcecdd25422b9?rik=SXTMNxxMh38eog&pid=ImgRaw&r=0"
    optionOnea.style.display= "none"
    optionTwoa.style.display = "none"
    optionThreec.style.display = "block"
    optionFourc.style.display = "block"
})

optionTwoa.addEventListener("click", function(){
    story1.innerHTML = "You turn to watch some of the White House television. You switch to the news and see your opposition in the coming election. 'I was in Congress conducting my 87 hour philibuster when I saw the president pick his nose. Yes he picked is nose. Its disgusting. And he took the booger and put it in his mouth! Disgustingest thing I've ever seen and I've seen Senator Bob Mitch Michael Jones put gum under the table, so I know disgusting folks."
    openingImage.src ="https://c8.alamy.com/comp/GX8END/winning-the-election-GX8END.jpg"
    optionOnea.style.display= "none"
    optionTwoa.style.display = "none"
    optionThreed.style.display = "block"
    optionFourd.style.display = "block"

})

function probably(percentage) {
    return Math.random() * 100 < percentage;
  }
  
optionThreea.addEventListener("click", function(){
    if (probably(50)) {
        story1.innerHTML = "The 'Back in my Day' Speech was given on the 7th of December 2047. In an attempt to address the nation in hard times, the President would deliver this speech in front of the Washington Monument. 'back in my day, we ate shoe soles and sold paperclips and used juice boxes in -12 degree weather with only our drawers on. You think the foods too expensive? Your lucky to even breath the air. You all need to suck it up and tough it-' you are promptly stormed by the crowd and they throw you into the D.C. sewers."
        openingImage.src ="https://thumbs.dreamstime.com/b/aggressive-politician-giving-speech-press-conference-aggressive-politician-giving-speech-press-conference-201758230.jpg"
        optionThreea.style.display= "none"
        optionFoura.style.display = "none"
        optionGameEndBad1.style.display= "block"
;
      } else {
        story1.innerHTML = "The 'Live, Laugh, Love' Speech was given on the 7th December of 2047. In an attempt to rally the nation during hard times, the President would deliver this speech in front of Bozzelli's Italian Deli. 'The most inspiring words of my life have been Live, Laugh, and Love. During these trying times, I encourage the American to purchase Yankee Candles, buy signs with meaningless quotes, and live laugh and love.' The end of the speech is met with thunderous applause. The President's approval ratings would skyrocket paving the way for their second term."
        openingImage.src ="https://thumbs.dreamstime.com/z/confident-politician-talking-to-media-confident-politician-talking-to-media-standing-front-microphones-201757994.jpg"
        optionThreea.style.display= "none"
        optionFoura.style.display = "none"
        optionGameEndGood1.style.display= "block"

      }
})

optionFoura.addEventListener("click", function(){
    if (probably(50)) {
        story1.innerHTML = "'This economic downturn is lame af (as frick). Like fr fr ong wish i was dead/j. Can't imagine what its like for the homeless people lmaoooo.' Your post was incredibly unpopular with the American Public. Your approval ratings plumet and you lose the next election over your scandalous social media presence."
        openingImage.src ="https://thumbs.dreamstime.com/z/old-man-suit-read-news-smartphone-narrow-shot-surprised-look-cellphone-screen-feel-shocked-online-stunned-mature-246045740.jpg"
        optionThreea.style.display= "none"
        optionFoura.style.display = "none"
        optionGameEndBad1.style.display= "block"
;
      } else {
        story1.innerHTML = "You begin posting jokes on the White House's front page appealing to the youth of the nation. Your approval ratings go up and a monument is erected of you in the White House garden"
        openingImage.src ="https://th.bing.com/th/id/R.892ebd2063d9d7e5baba63db30d73420?rik=%2b20LOT47XLQhag&riu=http%3a%2f%2fmy.newbenefits.com%2fmybenefitswork%2fimg%2fimg_oldBoombox.png&ehk=E%2fNNd%2bSK9pps34YnTDCnV5vdSC9BFo%2bktVtBYVDV%2bdE%3d&risl=&pid=ImgRaw&r=0"
        optionThreea.style.display= "none"
        optionFoura.style.display = "none"
        optionGameEndGood1.style.display= "block"

      }
})
function play() {
    var audio = new Audio("sousa.mp3");
    audio.play();

}


// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });