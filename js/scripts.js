// Back end logic
var translate = function(sentence){
  var words = sentence.split(" ");

  // console.log(words);

  words.forEach(function(word,index){
    console.log(word);
    while(startsWithVowel(word)=== false){
      console.log(startsWithVowel(word));
      word = moveConsonant(word);
    }

    words[index] = addAy(word);;
    console.log(words[index]);
  });
  console.log(words);
  return words.join(" ");
}

//Add "ay" at the end
var addAy = function(word){
  var letters = word.split("");
  letters.push('a','y');
  return letters.join("");
}

//moves the 1st consonant to the end
var moveConsonant= function(word){
  var letters = word.split("");
  letters.push(letters.splice(0,1)[0]);
  return letters.join("");
}


//if the word starts with a vowel
var startsWithVowel = function(word){
    var vowels =['a','e','i','o','u','y'];
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
