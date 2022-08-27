var txtInput = document.querySelector("#txt-input")
var btnTranslate = document.querySelector("#btn-translate")
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function constructURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("Error occured ",error)
    alert("Something went wrong with server! please try again after some time.")
}

function clickEventHandler() {
    var inputText = txtInput.value
    
    fetch(constructURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText
    })
    .catch(errorHandler)
}


btnTranslate.addEventListener("click",clickEventHandler)