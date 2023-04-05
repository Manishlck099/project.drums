let button = document.getElementsByTagName("button");


//event listner:-
// * taking two parameters 1=>event, and 2=>function on event
//array:-to loop through all button and to add eventL.individually
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML;//this refers to the button element itself here

        switch (buttonInnerHTML) {
            case "w":
                 let audio1 = new Audio("kick-bass.mp3");
                audio1.play();
                break;
                
            case "a":
                let audio2 = new Audio("kick-bass.mp3");
                audio2.play();
                break;

            case "s":
                let audio3 = new Audio("snare.mp3");
                audio3.play();
                break;

            case "d":
                let audio4 = new Audio("tom-1.mp3");
                audio4.play();
                break;

            case "j":
                let audio5 = new Audio("tom-2.mp3");
                audio5.play();
                break;

            case "k":
                let audio6 = new Audio("tom-3.mp3");
                audio6.play();
                break;

            case "l":
                let audio7 = new Audio("tom-4.mp3");
                audio7.play();
                break;
            default: console.log(buttonInnerHTML)
        }
    })
}


















//     //let data={
//         name:"manish",
//         age:23,
//         profession:"web developer",
//         about:function(){
//          console.log(this.name,this.age,this.profession)
//         }
//  }//
//  data.about()


     //    let audio=new Audio("sounds/tom-1.mp3");
    //    audio.play()
