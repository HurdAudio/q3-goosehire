(function() {
  'use strict';

  function wordCLoudObjectGen (skills, jobPosting) {

    var words = {};
    words = generateWordsObject(skills, bigConcatonate(jobPosting));

    // console.log(words);

    function bigConcatonate(jobData) {
      var jobDescriptionString = '';

      for (let k = 0; k < jobData.length; k++) {
        jobDescriptionString += ` ${jobData[k].text}`;
      }
      return(jobDescriptionString);
    }

    function convertDescriptionToCommaSeparatedWords (description) {
      var commaSeparatedString = '';
      var processStr = description.toLowerCase();

      for (let i = 0; i < processStr.length; i++) {
        if ((processStr[i] === '.') || (processStr[i] === ';') || (processStr[i] === ':') || (processStr[i] === "'") || (processStr[i] === '"') || (processStr[i] === '/') || (processStr[i] === '(') || (processStr[i] === ')') || (processStr[i] === '!')) {
        } else {
          if (processStr[i] === ' ') {
            commaSeparatedString += ',';

          } else {
            commaSeparatedString += (processStr[i]);
          }
        }

      }
      // console.log(commaSeparatedString);
      return (commaSeparatedString);
    }

    function takeOutHTMLTags (descriptionString) {
      var filteredDescription = '';
      var write = true;

      for (let i = 0; i < descriptionString.length; i++) {
        if (descriptionString[i] === "<") {
          write = false;
          filteredDescription += ' ';
        }
        if (descriptionString[i] === ">") {
          write = true;
        } else {
          if (write) {
            filteredDescription += descriptionString[i];
          }
        }

      }
      // console.log(filteredDescription);
      return (filteredDescription);
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

    function getWordPadding (size) {
      var paddingString = '';
      var paddingSize = 0;
      if (size <= 24) {
        paddingSize = (Math.floor(Math.random()*31)) + 15;
      } else {
        paddingSize = (Math.floor(Math.random()*31)) + 20;
      }
      paddingString = paddingSize + "px";
      return (paddingString);
    }

    function getWordRotation () {
      var rotationValues = ['rotate(0deg)', 'rotate(20deg)', 'rotate(40deg)', 'rotate(320deg)', 'rotate(340deg)', 'rotate(0deg)'];

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
        return('normal');
      }
      if (size <= 24) {
        return('bold');
      }
      if (size <= 56) {
        return('bolder');
      }
      return('bolder');
    }

    function getWordObject(size, key) {
      var singleWordObject = {};

      singleWordObject.text = key.trim();
      singleWordObject.fontSize = size * 3.5;
      singleWordObject.fontWeight = getFontWeight(size);
      singleWordObject.fontColor = getFontColor();
      singleWordObject.rotation = getWordRotation();
      singleWordObject.padding = getWordPadding(size);
      singleWordObject.hoverState = getWordHoverState(size);

      return (singleWordObject);
    }

    function shiftBigWordsToCentre (arrayToOrganize) {
      var midArrayPointIndex = Math.floor(arrayToOrganize.length/2);
      // for (let i = 0; i < midArrayPointIndex; i++){
      //   arraySwap(arrayToOrganize, i, (midArrayPointIndex - i + 1));
      // }
      for (let i = midArrayPointIndex; i > 0; i--) {
        for (let j = 0; j < i; j++) {
          if (arrayToOrganize[j].fontSize > arrayToOrganize[i].fontSize) {
            arraySwap(arrayToOrganize, i, j);
          }
        }
      }
      for (let k = (midArrayPointIndex+1); k < arrayToOrganize.length; k++) {
        for (let l = (arrayToOrganize.length - 1); l > (midArrayPointIndex+1); l--) {
          if (arrayToOrganize[l].fontSize > arrayToOrganize[k].fontSize) {
            arraySwap(arrayToOrganize, k, l);
          }
        }
      }
      arrayToOrganize.pop();
      return (arrayToOrganize);
    }

    function tripLargeResults (cloudWordsArray) {
      var upperCap = 135;

      if (cloudWordsArray.length > upperCap) {
        while (cloudWordsArray.length > upperCap) {
          cloudWordsArray.shift();
          cloudWordsArray.pop();
        }
      }
      return(cloudWordsArray);
    }


    function generateWordsArray (wordsObj) {
      //This is where the words object gets converted into an array of objects to store styling information for each word.

      var arrayOfWords = [];
      var index = 0;
      var excludedWords = [ '', 'the', 'a', 'to', 'and', 'of', 'and', 'an', 'are', 'in', 'with', 'as', 'for', 'or', 'at', 'your', 'our', 'yours', 'is', 'if', 'this', 'be', 'that', 'has', 'you', 'we', 'by', "you'll", 'got', "you're", 'when', "that's", "you'll", 'but', 'than', "that's", 'youll', 'us', 'how', 'weve', "we've", 'what', 'why', 'will', "it's", 'where', 'those', "there's", 'its', 'youd', "you're", 'were', "you've", "there's", 'they', 'so', 'ok...as', 'like', 'etc', 'any', 'given', 'after', 'been', 'within', 'get', 'dont', 'brings', 'do', 'should', 'not', 'well', 'some', 'from', 'using', 'on', 'needing', 'very', '&', 'every', 'it', 'other', 'into', 'eg', 'more', 'all', 'throuh', 'above' , "we're", 'who', 'would', "aren't", 'their', 'these', 'come', 'bs', 'theyre', 'sex', 'get', 'andor', '•', '*', 'through', 'experience', 'please', '000', 'development', '￧', 'o', '⿢', '-', '&', '⿢', 'business', 'work', 'application' , '–', '00000', 'require', 'web', 'new', 'need', 'open', 'oral', 'good', 'big', 'about', 'also', 'about', 'full', 'able', 'while', 'sh', 'about', 'open', 'past', 'such', 'google', 'based', 'out', 'app', 'use', 'day', 'can', 'staff', 'across', 'basis', 'just', 'used', 'time','off','live', 'even', 'bring', 'how', 'we', 'how', 'youve', 'looking', 'goal', 'yr', 'etc', 'oriented', 'today', 'tdd', 'shop', 'done','shop', 'edit', 'understand', 'up', 'set', 'food', 'right', 'large', 'place', 'old', 'really', 'have', 'few', 'great', 'way', 'things', 'stay', 'date', 'stuff', 'build', 'built', 'recent', 'take', 'add', 'site', 'www', 'week', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'asap', 'start', 'notice', 'co', 'growing', 'separate', 'seeking', 'company', 'level', 'help', 'spec', 'join', 'own', 'dev', 'years', 'own', 'then', 'hit', 'fast', 'solve', 'drive', 'duty', 'something', 'files', 'load', 'both', 'looks', 'features' ];

      for (let key in wordsObj) {

        if (!excludedWords.includes(key)) {

          arrayOfWords[index] = (getWordObject(wordsObj[key], key));
          ++index;
        }

      }

      // arrayOfWords = scrambleArrayOrder(arrayOfWords);
      arrayOfWords = shiftBigWordsToCentre(arrayOfWords);
      arrayOfWords = tripLargeResults(arrayOfWords);
      return arrayOfWords;
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
    var wordsArray = [];

    wordsArray = generateWordsArray(words);
    // console.log(wordsArray);
    return (wordsArray);
  }

  function wordCloudGen (wordObject) {

    function makeMouseExit (node, rotationQuantity, wordlyObject) {
      var newRotateValue = '';

      switch (rotationQuantity) {
        case ('rotate(0deg)'):
          newRotateValue = 'rotate(340deg)';
          break;
        case ('rotate(20deg)'):
          newRotateValue = 'rotate(320deg)';
          break;
        case ('rotate(40deg)'):
          newRotateValue = 'rotate(0deg)';
          break;
        case ('rotate(320deg)'):
          newRotateValue = 'rotate(20deg)';
          break;
        case ('rotate(340deg)'):
          newRotateValue = 'rotate(40deg)';
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
          newRotateValue = 'rotate(40deg)';
          break;
        case ('rotate(20deg)'):
          newRotateValue = 'rotate(3200deg)';
          break;
        case ('rotate(40deg)'):
          newRotateValue = 'rotate(340deg)';
          break;
        case ('rotate(320deg)'):
          newRotateValue = 'rotate(0deg)';
          break;
        case ('rotate(340deg)'):
          newRotateValue = 'rotate(20deg)';
          break;
        default:
          newRotateValue = 'rotate(40deg)';
      }
      wordlyObject.rotation = newRotateValue;
      node.onmouseover = function () {
        this.style.transform = newRotateValue;

      };
      makeMouseExit (node, newRotateValue, wordlyObject);

    }


    function clearCloudContainer (nodeForClear) {
      if (nodeForClear.hasChildNodes()) {
        while (nodeForClear.firstChild) {
          nodeForClear.removeChild(nodeForClear.firstChild);
        }
      }
    }

    function renderWordCloud (currentWords) {
      var container = document.getElementById("cloudContainer");
      clearCloudContainer(container);
      var newWord;
      var font = '"Roboto Slab", serif;';

      for (let i = 0; i < currentWords.length; i++) {
        newWord = document.createElement("div");
        container.appendChild(newWord);
        newWord.innerHTML = currentWords[i].text;
        newWord.setAttribute("style", "font-family: " + font + "; width: auto;" + "font-weight: " + currentWords[i].fontWeight + ";" + "color: " + currentWords[i].fontColor + ";" + "font-size: " + currentWords[i].fontSize + "px;" + "padding: " + currentWords[i].padding + ";" + "transform: " + currentWords[i].rotation + ";" + "display: inline-block;" + "-webkit-transition: 1s ease-in-out;" + "-moz-transition: 1s ease-in-out;" + "-o-transition: 1s ease-in-out;" + "transition: 1s ease-in-out;");
        makeMouseOver(newWord, currentWords[i].rotation, currentWords[i]);


      }

    }
    renderWordCloud(wordObject);
  }


  angular.module('app')
    .component('wordCloud', {
      controller: WordCloudController,
      templateUrl: '/js/wordCloud/wordCloud.template.html',
      bindings: {
        skills: "<",
        jobPosting: "<"
      }
    });

    function WordCloudController(){
      const vm = this;


      vm.$onInit = function() {

        wordCloudGen(wordCLoudObjectGen(vm.skills.split(', '), vm.jobPosting));

      };

      vm.$onChanges = function(boundVarsObj) {

        wordCloudGen(wordCLoudObjectGen(boundVarsObj.skills.currentValue.split(', '), vm.jobPosting));
      };


    }
}());
