console.log("memeGen.js");

let memeCount = 0;
const form = document.querySelector("#memeForm");
const memes = document.querySelector("#container");
form.addEventListener("submit", function(evt){
    evt.preventDefault();
    if(!form.elements["imgUrl"].value.startsWith("https://") && !form.elements["imgUrl"].value.startsWith("http://")){
        alert("Please enter a valid img url");
        form.reset();
        return;
    }
    memeCount++;


    let newMeme = createContainer();
    let top = "top";
    let bottom = "bottom";
    let imgWidth = 0;
    newMeme.append(createText(form.elements["topText"].value, top));
    newMeme.append(createImage(form.elements["imgUrl"].value));
    newMeme.append(createText(form.elements["bottomText"].value, bottom));
    newMeme.append(createDeleteOverlay());
    newMeme.addEventListener("click", function(){
        console.log("clicky");
    }, false);

    memeCount++;

    memes.append(newMeme);

    form.reset();

});

function createContainer(){
    let divContainer = document.createElement("div");
    divContainer.setAttribute("id", "meme" + memeCount);
    divContainer.setAttribute("class", "meme");

    return divContainer;
}

function createText(str,position){
    console.log("createText()" + " " + str + " " + position);
    let text = document.createElement("p");
    text.setAttribute("id", "meme"+memeCount);

    if(position === "top"){
        text.setAttribute("class", "memeText textTop");
    }
    else{
        text.setAttribute("class", "memeText textBottom");
    }

    text.addEventListener("click", function(){
        let meme = document.querySelector("div#" + text.getAttribute("id"));
        meme.remove();
    })

    text.innerText = str.toUpperCase();

    return text;
}

function createImage(str){
    console.log("createImg()" + " " + str);
    let image = document.createElement("img");
    image.setAttribute("id","meme"+memeCount);
    image.setAttribute("src", str);

    image.addEventListener("click", function(){
        let meme = document.querySelector("div#" + image.getAttribute("id"));
        meme.remove();
    })

    return image;
}

function createDeleteOverlay(){
    let container = document.createElement("div");
    container.setAttribute("id","meme"+memeCount);
    container.setAttribute("class", "deleteOverlay");
    container.innerText = "REMOVE";

    container.addEventListener("click", function(){
        let meme = document.querySelector("div#" + container.getAttribute("id"));
        meme.remove();
    })

    return container;
}
