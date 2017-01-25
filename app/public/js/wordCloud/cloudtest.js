'use strict';

// var Canvas = require("../canvas");

// var cloud = require("../");

var fakeSkills = ['agile', 'github', 'css', 'angularjs', 'react', 'nodeJS', 'postgresql', 'mongodb', 'bootstrap', 'javascript', 'materialize', 'es6', 'html5'];

var fakeJobDescription = "Job Description Successful candidates will be familiar with JavaScript or Java—especially AngularJS and Dropwizard. We’re looking for a developer who writes clean, logical, high-quality code and has familiarity with automated testing and agile practices. As a Developer, you would be expected to accept input from other developers, change your practices according to feedback and be open to pair programming & code review. Our developers aren’t assigned labels like back or front end; we’re looking for a team player who contributes proactively wherever they’re needed. This job is permanent. We are not interested in contractors or moonlighters. About Campspot Campspot crafts reservation software for resort owners that delivers their customers the perfect camping experience. We are a team of motivated people who use our talents to solve tough problems and build tested software. Founded in early 2015, Campspot is looking to grow with people who embody our culture of continuous learning, innovation, and respectful collaboration. We’re made up of smart and innovative individuals who work together. Each of us adds value to our product with proven skills, ingenuity, and creativity, and we expand these qualities in a cycle of teaching and learning. We value employee flexibility—from work schedule to dress code. This looser management style is paired with our expectation that employees hold themselves accountable for doing what needs to be done and to pitch in when a coworker needs help. On our small, self-managed team, initiative is a must.";

var words = {};

words = generateWordsObject(fakeSkills, fakeJobDescription);

console.log(words);

var wordsArray = [];

wordsArray = generateWordsArray(words);
console.log(wordsArray);

function convertDescriptionToCommaSeparatedWords (description) {
  var commaSeparatedString = '';
  var processStr = description.toLowerCase();

  for (let i = 0; i < processStr.length; i++) {
    if ((processStr[i] === '.') || (processStr[i] === ';') || (processStr[i] === ':') || (processStr[i] === "'") || (processStr[i] === '"') || (processStr[i] === '/') || (processStr[i] === '(') || (processStr[i] === ')') || (processStr[i] === '!')) {
      console.log('removed by not writing');
    } else {
      if (processStr[i] === ' ') {
        commaSeparatedString += ',';

      } else {
        commaSeparatedString += (processStr[i]);
      }
    }

  }
  console.log(commaSeparatedString);
  return (commaSeparatedString);
}


function generateWordsObject (skillsArr, jobDescriptionStr) {

  var wordsObj = {};



  if (!Array.isArray(skillsArr)) {
    return ('ERROR');
  }
  if (typeof(jobDescriptionStr) !== 'string') {
    return ('ERROR');
  }

  var commaSeparatedDescription = convertDescriptionToCommaSeparatedWords(jobDescriptionStr);

  var descriptionArr = [];
  descriptionArr = commaSeparatedDescription.split(',');

  for (let i = 0; i < skillsArr.length; i++) {
    if (wordsObj[skillsArr[i].toLowerCase()] === undefined) {
      wordsObj[skillsArr[i].toLowerCase()] = 3 + (skillsArr.length - i);
    } else {
      console.log (skillsArr[i] + ' is a duplicated skill');
    }

  }

  for (let j = 0; j < descriptionArr.length; j++) {
    if (wordsObj[descriptionArr[j]] === undefined) {
      wordsObj[descriptionArr[j]] = 6;
    } else {
      wordsObj[descriptionArr[j]] += 6;
    }
  }

  return (wordsObj);


}

function arraySwap (referenceArray, index1, index2) {
  [referenceArray[index1], referenceArray[index2]] = [referenceArray[index2], referenceArray[index1]];
}

function scrambleArrayOrder (inputArray) {
  var val1 = 0;
  var val2 = 0;

  for (let i = 0; i < inputArray.length; i++) {
    val1 = (Math.floor(Math.random() * inputArray.length));
    val2 = (Math.floor(Math.random() * inputArray.length));
    arraySwap(inputArray, val1, val2);
  }
  return (inputArray);
}

function getWordHoverState (size) {
  if (size <= 12) {
    return('rotate(0deg)');
  }
  if (size <= 24){
    return('rotate(30deg)');
  }
  if (size <= 36) {
    return('rotate(60deg)');
  }
  if (size <= 48) {
    return('rotate(90deg)');
  }
  if (size <= 60) {
    return('rotate(120deg)');
  }
  return('rotate(150deg)');
}

function getWordPadding (size) {
  if (size <= 24) {
    return ('18px');
  }
  return ('30px');
}

function getWordRotation () {
  var rotationValues = ['rotate(0deg)', 'rotate(20deg)', 'rotate(40deg)', 'rotate(60deg)', 'rotate(60deg)', 'rotate(80deg)', 'rotate(100deg)', 'rotate(120deg)', 'rotate(140deg)', 'rotate(160deg)', 'rotate(180deg)', 'rotate(200deg)', 'rotate(220deg)', 'rotate(240deg)', 'rotate(260deg)', 'rotate(280deg)', 'rotate(300deg)', 'rotate(320deg)', 'rotate(340deg)', 'rotate(0deg)', 'rotate(0deg)', 'rotate(0deg)', 'rotate(0deg)', 'rotate(0deg)', 'rotate(0deg)', 'rotate(0deg)'];

  var value = (Math.floor(Math.random() * rotationValues.length));

  return (rotationValues[value]);
}

function getFontColor () {
  var colourArray = ['#BC440', '#2F637B', '#5C668A', '#080E40', '#D8CB5D'];
  var value = (Math.floor(Math.random() * colourArray.length));

  return (colourArray[value]);
}

function getFontWeight(size) {
  if (size <= 6) {
    return('lighter');
  }
  if (size <= 24) {
    return('normal');
  }
  if (size <= 56) {
    return('bold');
  }
  return('bolder');
}

function getWordObject(size, key) {
  var singleWordObject = {};

  singleWordObject.text = key;
  singleWordObject.fontSize = size * 3;
  singleWordObject.fontWeight = getFontWeight(size);
  singleWordObject.fontColor = getFontColor();
  singleWordObject.rotation = getWordRotation();
  singleWordObject.padding = getWordPadding(size);
  singleWordObject.hoverState = getWordHoverState(size);

  return (singleWordObject);
}

function generateWordsArray (wordsObj) {
  //This is where the words object gets converted into an array of objects to store styling information for each word.

  var arrayOfWords = [];
  var excludedWords = [ '', 'the', 'a', 'to', 'and', 'of', 'and', 'an', 'are', 'in', 'with', 'as', 'for', 'or', 'at', 'your', 'our', 'yours', 'is', 'if', 'this', 'be', 'that', 'has', 'you', 'we', 'by', "you'll", 'got', "you're", 'when', "that's", "you'll", 'but', 'than', "that's", 'youll', 'us', 'how', 'weve', "we've", 'what', 'why', 'will', "it's", 'where', 'those', "there's", 'its', 'youd', "you're", 'were', "you've", "there's", 'they', 'so', 'ok...as', 'like', 'etc', 'any', 'given', 'after', 'been', 'within', 'get', 'dont', 'brings', 'do', 'should', 'not', 'well', 'some', 'from', 'using', 'on', 'needing', 'very', '&', 'every', 'it', 'other', 'into', 'eg', 'more', 'all', 'throuh', 'above' , "we're", 'who', 'would', "aren't", 'their', 'these' ];

  for (let key in wordsObj) {

    if (!excludedWords.includes(key)) {

      arrayOfWords.push(getWordObject(wordsObj[key], key));
    }

  }

  arrayOfWords = scrambleArrayOrder(arrayOfWords);
  return arrayOfWords;
}

function makeMouseExit (node, rotationQuantity, wordlyObject) {
  var newRotateValue = '';

  switch (rotationQuantity) {
    case ('rotate(0deg)'):
      newRotateValue = 'rotate(220deg)';
      break;
    case ('rotate(20deg)'):
      newRotateValue = 'rotate(200deg)';
      break;
    case ('rotate(40deg)'):
      newRotateValue = 'rotate(180deg)';
      break;
    case ('rotate(60deg)'):
      newRotateValue = 'rotate(140deg)';
      break;
    case ('rotate(80deg)'):
      newRotateValue = 'rotate(120deg)';
      break;
    case ('rotate(100deg)'):
      newRotateValue = 'rotate(100deg)';
      break;
    case ('rotate(120deg)'):
      newRotateValue = 'rotate(80deg)';
      break;
    case ('rotate(140deg)'):
      newRotateValue = 'rotate(60deg)';
      break;
    case ('rotate(160deg)'):
      newRotateValue = 'rotate(40deg)';
      break;
    case ('rotate(180deg)'):
      newRotateValue = 'rotate(20deg)';
      break;
    case ('rotate(200deg)'):
      newRotateValue = 'rotate(0deg)';
      break;
    case ('rotate(220deg)'):
      newRotateValue = 'rotate(340deg)';
      break;
    case ('rotate(240deg)'):
      newRotateValue = 'rotate(320deg)';
      break;
    case ('rotate(260deg)'):
      newRotateValue = 'rotate(300deg)';
      break;
    case ('rotate(280deg)'):
      newRotateValue = 'rotate(280deg)';
      break;
    case ('rotate(300deg)'):
      newRotateValue = 'rotate(260deg)';
      break;
    case ('rotate(320deg)'):
      newRotateValue = 'rotate(240deg)';
      break;
    case ('rotate(340deg)'):
      newRotateValue = 'rotate(220deg)';
      break;
    default:
      newRotateValue = 'rotate(180deg)';
  }
  wordlyObject.rotation = newRotateValue;
  node.onmouseout = function () {
    this.style.transform = newRotateValue;

  };

}

function makeMouseOver (node, rotationQuantity, wordlyObject) {
  var newRotateValue = '';

  switch (rotationQuantity) {
    case ('rotate(0deg)'):
      newRotateValue = 'rotate(20deg)';
      break;
    case ('rotate(20deg)'):
      newRotateValue = 'rotate(0deg)';
      break;
    case ('rotate(40deg)'):
      newRotateValue = 'rotate(340deg)';
      break;
    case ('rotate(60deg)'):
      newRotateValue = 'rotate(320deg)';
      break;
    case ('rotate(80deg)'):
      newRotateValue = 'rotate(300deg)';
      break;
    case ('rotate(100deg)'):
      newRotateValue = 'rotate(280deg)';
      break;
    case ('rotate(120deg)'):
      newRotateValue = 'rotate(260deg)';
      break;
    case ('rotate(140deg)'):
      newRotateValue = 'rotate(240deg)';
      break;
    case ('rotate(160deg)'):
      newRotateValue = 'rotate(220deg)';
      break;
    case ('rotate(180deg)'):
      newRotateValue = 'rotate(200deg)';
      break;
    case ('rotate(200deg)'):
      newRotateValue = 'rotate(180deg)';
      break;
    case ('rotate(220deg)'):
      newRotateValue = 'rotate(160deg)';
      break;
    case ('rotate(240deg)'):
      newRotateValue = 'rotate(140deg)';
      break;
    case ('rotate(260deg)'):
      newRotateValue = 'rotate(120deg)';
      break;
    case ('rotate(280deg)'):
      newRotateValue = 'rotate(100deg)';
      break;
    case ('rotate(300deg)'):
      newRotateValue = 'rotate(80deg)';
      break;
    case ('rotate(320deg)'):
      newRotateValue = 'rotate(60deg)';
      break;
    case ('rotate(340deg)'):
      newRotateValue = 'rotate(40deg)';
      break;
    default:
      newRotateValue = 'rotate(0deg)';
  }
  wordlyObject.rotation = newRotateValue;
  node.onmouseover = function () {
    this.style.transform = newRotateValue;

  };
  makeMouseExit (node, newRotateValue, wordlyObject);

}

// wordsArray

function renderWordCloud (currentWords) {
  var container = document.getElementById("cloudContainer");
  var newWord;
  var font = '"Garamond", Times, serif';

  for (let i = 0; i < currentWords.length; i++) {
    newWord = document.createElement("div");
    container.appendChild(newWord);
    newWord.innerHTML = currentWords[i].text;
    newWord.setAttribute("style", "font-family: " + font + "; width: auto;" + "font-weight: " + currentWords[i].fontWeight + ";" + "color: " + currentWords[i].fontColor + ";" + "font-size: " + currentWords[i].fontSize + "px;" + "padding: " + currentWords[i].padding + ";" + "transform: " + currentWords[i].rotation + ";" + "display: inline-block;" + "-webkit-transition: 1s ease-in-out;" + "-moz-transition: 1s ease-in-out;" + "-o-transition: 1s ease-in-out;" + "transition: 1s ease-in-out;");
    makeMouseOver(newWord, currentWords[i].rotation, currentWords[i]);
    // newWord.setAttibute("style", "display: block;");

    // newWord.setAttribute("style", "font-weight: " + currentWords[i].fontWeight + ";");
    // newWord.setAttribute("style", "color: " + currentWords[i].fontColor + ";");
    // newWord.setAttibute("transform", currentWords[i].rotation);
    // newWord.setAttribute("padding", currentWords[i].padding);
    // newWord.setAttribute("style", "font-size: " + currentWords[i].fontSize + "px;");

  }

}

renderWordCloud(wordsArray);
