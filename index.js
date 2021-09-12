for (var i = 0; i < 7; i++) {
    document.addEventListener("keypress", function (event) {
        var x = event.key;
        switch (x) {
            case "w":
                var sound = new Audio("https://art-apurv.github.io/Keyboard-Drums/sounds/tom-1.mp3");
                sound.play();
                break;
            case "a":
                var sound = new Audio("https://art-apurv.github.io/Keyboard-Drums/sounds/tom-2.mp3");
                sound.play();
                break;
            case "s":
                var sound = new Audio("https://art-apurv.github.io/Keyboard-Drums/sounds/tom-3.mp3");
                sound.play();
                break;
            case "d":
                var sound = new Audio("https://art-apurv.github.io/Keyboard-Drums/sounds/tom-4.mp3");
                sound.play();
                break;
            case "j":
                var sound = new Audio("https://art-apurv.github.io/Keyboard-Drums/sounds/snare.mp3");
                sound.play();
                break;
            case "k":
                var sound = new Audio("https://art-apurv.github.io/Keyboard-Drums/sounds/crash.mp3");
                sound.play();
                break;
            case "l":
                var sound = new Audio("https://art-apurv.github.io/Keyboard-Drums/sounds/kick-bass.mp3");
                sound.play();
                break;
            default:console.log(x);
                break;
        }
        addAnimation(x);
    }); 
}

function addAnimation(x){
    document.querySelector("." + x).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("." + x).classList.remove("pressed");  
    }, 100);
}