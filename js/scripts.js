// Back end logic
var translate = function(sentence){
  var words = sentence.split(" ");
  words.forEach(function(word,index){
    //if NaN
    if (isNaN(word)) {
    //if it starts with a consonant
    while(startsWithVowel(word)=== false){
      word = moveConsonant(word);
    }
    //add "ay" anyway
    words[index] = addAy(word);
  }
  else {
    //do somethimg with numbers
    words[index] = addNumber(word);
  }
  });

  return words.join(" ");
}

var addNumber = function (word) {
  return word + "---";
}

//Add "ay" at the end
var addAy = function(word){
  return word+"ay";
}

//moves the 1st consonant to the end
var moveConsonant= function(word){
  var letters = word.split("");

  if ((letters[0].toLowerCase()) === 'q' && letters[1] === 'u'){
    letters.push(letters.splice(0,1)[0],letters.splice(0,1)[0]);
  }else{
  letters.push(letters.splice(0,1)[0]);
  }

  return letters.join("");
}


//if the word starts with a vowel
var startsWithVowel = function(word){
    var vowels =['a','e','i','o','u'/*,'y'*/]; //removed 'y' because it should be treated as a consonant
    var letters = word.split("");
    for (var i=0; i<vowels.length; i++){
      if (letters[0].toLowerCase() === vowels[i]){
        return true;
      }
    }
return false;
}

//Front end logic
$(function(){
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();


    $("#result").text(translate(sentence));

  });
});
