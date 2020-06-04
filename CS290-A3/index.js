//add twit elements
var createTwitBackdrop = document.getElementById('modal-backdrop');
var createTwitActivity = document.getElementById('create-twit-modal');

//button to add twit
var twitButton = document.getElementById('create-twit-button');
twitButton.addEventListener('click', toggleTwitActivity);

// createTwitBackdrop.addEventListener('click', function(){
//     createTwitBackdrop.classList.add("hidden");
//     createTwitActivity.classList.add("hidden");
// });

//add twit modal elements
var createTwitCloseButton = document.getElementsByClassName('modal-close-button');
var createTwitCancelButton = document.getElementsByClassName('modal-cancel-button');
var createTwitAcceptButton = document.getElementsByClassName('modal-accept-button');
var twitSectionUserMessage = document.getElementById('twit-text-input');
var twitSectionUserAuthor = document.getElementById('twit-attribution-input');

//adds listener to modal elements
createTwitCloseButton[0].addEventListener('click', toggleTwitActivity);
createTwitCancelButton[0].addEventListener('click', toggleTwitActivity);
createTwitAcceptButton[0].addEventListener('click', addTwit);


function toggleTwitActivity(){
    createTwitBackdrop.classList.toggle("hidden");
    createTwitActivity.classList.toggle("hidden");

    //clears text from modal
    twitSectionUserMessage.value = "";
    twitSectionUserAuthor.value = "";
}

function addTwit(){
    // console.log("message = "  + twitSectionUserText[0] + " author = " + twitSectionUserText[1]);
    // console.log(twitSectionUserMessage.value);
    // console.log(twitSectionUserAuthor.value);

    if(twitSectionUserMessage.value === ""){
        alert("Your Twit Cannot Be Empty!!");
    }
    else if(twitSectionUserAuthor.value === ""){
        alert("Your Twit needs an Author!!");
    }
    else{
        //creates twit
        twitCreator(twitSectionUserMessage.value, twitSectionUserAuthor.value);
        //saves all twits everytime a new twit is added
        saveOriginalTwits();
        //hides twit modal and clears text
        toggleTwitActivity();
    }
}

function twitCreator(tweet, author){
    var twitContainer = document.getElementsByClassName('twit-container');
    //link variables with elements
    var twitSectionArticle = document.createElement('article');
    var twitSectionDivIcon = document.createElement('div');
    var twitSectionIICon = document.createElement('i');
    var twitSectionDivContent = document.createElement('div');
    var twitSectionText = document.createElement('p');
    var twitSectionAuthor = document.createElement('p');
    var twitSectionAuthorA = document.createElement('a');
    

    //build twit
    twitSectionArticle.appendChild(twitSectionDivIcon);
    twitSectionArticle.appendChild(twitSectionDivContent);
    twitSectionDivIcon.appendChild(twitSectionIICon);
    twitSectionDivContent.appendChild(twitSectionText);
    twitSectionDivContent.appendChild(twitSectionAuthor);
    twitSectionAuthor.appendChild(twitSectionAuthorA);
    twitContainer[0].appendChild(twitSectionArticle);


    //add text
    twitSectionText.appendChild(document.createTextNode(tweet));
    twitSectionAuthorA.appendChild(document.createTextNode(author));

    
    //add classes
    twitSectionArticle.classList.add("twit");
    twitSectionDivIcon.classList.add("twit-icon");
    twitSectionIICon.classList.add("fas");
    twitSectionIICon.classList.add("fa-bullhorn");
    twitSectionDivContent.classList.add("twit-content");
    twitSectionText.classList.add("twit-text");
    twitSectionAuthor.classList.add("twit-author");
    twitSectionAuthorA.href = '#';
}

//enables search on type
var searchTwitInput = document.getElementById('navbar-search-input');
searchTwitInput.addEventListener('input', searchTwits)
//enables search on button click
var searchTwitbutton = document.getElementById('navbar-search-button');
searchTwitbutton.addEventListener('click', searchTwits);

//creating global arrays with twits
var originalList;
var originalListLength;
var originalArrayTwit = [];
var originalArrayAuthor = [];
saveOriginalTwits();


//removes all twits from the DOM
function removeAllTwits(){
    var remainingTwits = document.getElementsByClassName("twit");
    console.log("starting removeAllLengths | l=" + remainingTwits.length);
    for(var i = remainingTwits.length - 1; i > -1 ; i--){
        console.log("removing twit- t=" + remainingTwits[i].innerText + " a=" + remainingTwits[i].innerText);
        remainingTwits[i].remove();
    }
}


//re-adds all the twits at the last saved point
function reCreateAllTwits(){
    console.log("starting reAddAllTwits | l=" + originalListLength);
    for(var i = 0; i < originalListLength; i++){
        console.log("creating twit- t=" + originalArrayTwit[i] + " a=" + originalArrayAuthor[i]);
        twitCreator(originalArrayTwit[i], originalArrayAuthor[i]);
    }
}


function searchTwits(){
    //before you search re-add the original ones (also need to remove all)
    removeAllTwits();
    reCreateAllTwits();

    // lowercase search term to check with lists
    var searchTerm = searchTwitInput.value.toLowerCase();
    
    //if user searches for blank string, they shoudl all appear again
    if(searchTerm !== ""){
        console.log("searching");
        for(var i = originalListLength-1; i > -1; i--){
            if(!(originalArrayTwit[i].toLowerCase().includes(searchTerm) || originalArrayAuthor[i].toLowerCase().includes(searchTerm))){
                originalList[i].remove();
            }
        }
    }
}


function saveOriginalTwits(){
    //re-saves all the current twits
    originalList = document.getElementsByClassName("twit");
    originalListLength = originalList.length;
    var tempListTwits = document.getElementsByClassName("twit-text");
    var tempListAuthors = document.getElementsByClassName("twit-author");

    //reset the arrays
    originalArrayTwit = [];
    originalArrayAuthor = [];

    for(var i = 0; i < originalListLength; i++){
        originalArrayTwit.push(tempListTwits[i].innerText.toString());
        originalArrayAuthor.push(tempListAuthors[i].innerText.toString());
    }

    // console.log(originalArrayTwit);
    // console.log(originalArrayAuthor);
}