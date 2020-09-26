nlp = window.nlp_compromise;

var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'マイサプリ', //name of the chatbot
  talking = true; //when false the speach function doesn't work
  age = "";
  sex = "";
  weight = "";
  temperature = "";
  bp = "";
  arr = "";
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
function chatbotResponse() {
  botMessage = "申し訳ございません、これから習います"; //the default message
  lastUserMessage = lastUserMessage.toLowerCase();
  switch(true) {
    case /こんにちは/.test(lastUserMessage):
        botMessage = '年齢は?';
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        document.getElementById("chatbox").value = "年齢 : ";
        break;
    case /年齢/.test(lastUserMessage):
        arr = lastUserMessage.split(":");
        age = arr[1].trim().toUpperCase();
        console.log(age);
        botMessage = '性別は?';
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        document.getElementById("chatbox").value = "性別 : ";
        break;
    case /性別/.test(lastUserMessage):
        arr = lastUserMessage.split(":");
        sex = arr[1].trim().toUpperCase();
        console.log(sex);
        botMessage = '体重は?';
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        document.getElementById("chatbox").value = "体重 : ";
        break;
    case /体重/.test(lastUserMessage):
        arr = lastUserMessage.split(":");
        weight = arr[1].trim().toUpperCase();
        console.log(weight);
        botMessage = '体温は?';
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        document.getElementById("chatbox").value = "体温 : ";
        break;  
    case /体温/.test(lastUserMessage):
        arr = lastUserMessage.split(":");
        temperature = arr[1].trim().toUpperCase();
        console.log(temperature);
        botMessage = '血圧は?';
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        document.getElementById("chatbox").value = "血圧 : ";
        break;
    case /血圧/.test(lastUserMessage):
        arr = lastUserMessage.split(":");
        bp = arr[1].trim().toUpperCase();
        console.log(bp);
        botMessage = 'お悩みはなんですか？';
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        break;
    case /ダイエット/.test(lastUserMessage):
        //calculate
        botMessage = 'お悩みは？ <br> ダイエットまたは美肌';
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        document.getElementById("chatbox").value = "血圧 : ";
        break; 
    case /美肌/.test(lastUserMessage):
        //calculate
        botMessage = 'お悩みは？ <br> ダイエットまたは美肌';
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        document.getElementById("chatbox").value = "血圧 : ";
        break; 
    case /その他/.test(lastUserMessage):
        //calculate
        botMessage = 'ログイン';
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        document.getElementById("chatbox").value = "携帯番号 : ";
        break;                                          
    case /静かに|黙れ/.test(lastUserMessage):
        talking = false;
        botMessage = 'screenreader is turned off now!'
        messages.push("<b>" + botName + ":</b> " + botMessage);
        break;
    default:
        botMessage
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        break;
  }

}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
function newEntry() {
  //if the message from the user isn't empty then run 
  if (document.getElementById("chatbox").value != "") {
    lastUserMessage = document.getElementById("chatbox").value;
    document.getElementById("chatbox").value = "";
    messages.push(lastUserMessage);
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }else{
      //do nothing
    }
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    utterance.volume = 0.5; // 0 to 1
    utterance.rate = 1; // 0.1 to 10
    utterance.pitch = 1.5; //0 to 2
    //utterance.text = 'Hello World';
    utterance.lang = 'ja-JP';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}