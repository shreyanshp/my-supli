nlp = window.nlp_compromise;

var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'マイサプリ', //name of the chatbot
  talking = true, //when false the speach function doesn't work
  age = "",
  sex = "",
  weight = "",
  temperature = "",
  bp = "",
  arr = "",
  phonenumber = "",
  ecommerceUrl = "https://rakuten_webservice-rakuten-marketplace-product-search-v1.p.rapidapi.com/services/api/Product/Search/20170426?keyword=",
  me = "14478f483amshce21a80cf4fc7f8p1e1f28jsn1a007f1c3c58",
  productUrl_result = document.querySelector("#detected-producturl");
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
function chatbotResponse() {
  botMessage = "申し訳ございません。入力内容については確認いたします。"; //the default message
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
        if(weight>30 && weight<90){
          resultOut("クリストファン", "エクストラストレングス");
        } else if(weight>90 && sex==="女"){
          resultOut("リボアラン", "植物性カプセル");
        } else if(age>40 && sex==="女"){
          resultOut("ノイロトロピン", "きなり配合");
        } else if(age>40 && weight>90){
          resultOut("シーバラ", "ロースドレス");
        } else {
          resultOut("メチコバール", "メチル スルフォニル メタン");
        }
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        break; 
    case /美肌|美白|しわ|たるみ|くすみ|毛はな|イボ|しみ/.test(lastUserMessage):
        //calculate
        if(age>10 && age<40){
          resultOut("クリストファン", "エクストラストレングス");
        } else if(temperature<40 && temperature>35 && sex==="女"){
          resultOut("プラセンタ", "純粋生プラセンタ");
        } else if(age>40 && sex==="女"){
          resultOut("シーバラ", "ロースドレス");
        } else {
          resultOut("ビオチン", "ビオチン チュワブル");
        }
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        break; 
    case /肌荒れ/.test(lastUserMessage):
        //calculate
        if(age>10 && age<40){
          resultOut("トランサミン", "トラネキサム酸");
        } else if(temperature<40 && temperature>35 && sex==="女"){
          resultOut("プラセンタ", "純粋生プラセンタ");
        } else if(age>40 && sex==="女"){
          resultOut("シーバラ", "ロースドレス");
        } else {
          resultOut("ビオチン", "ビオチン チュワブル");
        }
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        break;  
    case /疲労回復/.test(lastUserMessage):
        //calculate
        if(age>10 && age<40){
          resultOut("クリストファン", "エクストラストレングス");
        } else if(temperature<40 && temperature>35 && sex==="女"){
          resultOut("プラセンタ", "純粋生プラセンタ");
        } else if(age>40 && sex==="女"){
          resultOut("リボアラン", "植物性カプセル");
        } else if(bp>40){
          resultOut("タチオン", "ミルコラ");
        } else {
          resultOut("トランサミン", "トラネキサム酸");
        }
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        break;
    case /二日酔い/.test(lastUserMessage):
        //calculate
        if(age>10 && age<40){
          resultOut("リボアラン", "植物性カプセル");
        } else if(temperature<40 && temperature>35 && sex==="女"){
          resultOut("タチオン", "ミルコラ");
        } else {
          resultOut("メチコバール", "メチル スルフォニル メタン");
        }
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        break;     
    case /不眠/.test(lastUserMessage):
        //calculate
        if(age>10 && age<40){
          resultOut("クリストファン", "エクストラストレングス");
        } else if(temperature<40 && temperature>35 && sex==="女"){
          resultOut("プラセンタ", "純粋生プラセンタ");
        } else {
          resultOut("ビオチン", "ビオチン チュワブル");
        }
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        break; 
    case /抜け毛/.test(lastUserMessage):
        //calculate
        if(age>10 && age<40){
          resultOut("クリストファン", "エクストラストレングス");
        } else if(temperature<40 && temperature>35 && sex==="女"){
          resultOut("エントミン", "オーラルクリアSS-K12");
        } else if(age>40 && sex==="女"){
          resultOut("シーバラ", "ロースドレス");
        } else if(bp>40){
          resultOut("ビオチン", "ビオチン チュワブル");
        } else {
          resultOut("トランサミン", "トラネキサム酸");
        }
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        break;                 
    case /頭痛い|喉痛い/.test(lastUserMessage):
        botMessage = '携帯番号を入れてください';
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        document.getElementById("chatbox").value = "携帯番号 : ";
        break;  
    case /携帯番号/.test(lastUserMessage):
        arr = lastUserMessage.split(":");
        phonenumber = arr[1].trim().toUpperCase();
        console.log(phonenumber);
        botMessage = '';
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
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

function resultOut(category, searchterm){
  console.log(category);
  console.log(searchterm);
  botMessage = "こちらを使ってください : " + category;
  sendRequest(ecommerceUrl + searchterm, "GET", "", me).then(function(product){
    console.log(
      JSON.parse(product.responseText).Products[0].Product.reviewUrlPC
    );
    productUrl_result.innerHTML =
      "<a href='" +
      JSON.parse(product.responseText).Products[0].Product.productUrlPC +
      "'target='_blank'> <img src='" +
      JSON.parse(product.responseText).Products[0].Product.mediumImageUrl +
      "'></a>";
  });
}

var sendRequest = function(url, method, data, apikey) {
  // Create the XHR request
  var request = new XMLHttpRequest();

  // Return it as a Promise
  return new Promise(function(resolve, reject) {
    // Setup our listener to process compeleted requests
    request.onreadystatechange = function() {
      // Only run if the request is complete
      if (request.readyState !== 4) return;

      // Process the response
      if (request.status >= 200 && request.status < 300) {
        // If successful
        resolve(request);
      } else {
        // If failed
        reject({
          status: request.status,
          statusText: request.statusText
        });
      }
    };

    // Setup our HTTP request
    request.open(method || "POST", url, true);

    request.setRequestHeader("X-RapidAPI-Key", apikey);
    // Send the request
    request.send(data);
  });
};