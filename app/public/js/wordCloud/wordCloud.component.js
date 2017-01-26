(function() {
  'use strict';




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
        var fakeJobForParse = "<p><b>Cook: </b> Part time position working a varied schedule. Schedule will include 20-25 hours a week which will consist of days, afternoon and evening hours as well as weekend shifts. Prior experience working as a cook in a health care setting or other cook experience is a must. Apply online or to learn about additional employment opportunities, please visit our website at www.sunshine.org. Drug Free Workplace. EOE</p><p>Job Type: Part-time</p><p>Required experience:</p><ul><li>Cooking: 1 year</li></ul>";

        // console.log(takeOutHTMLTags(fakeJobForParse));


        var fakeSkills = ['agile', 'github', 'css', 'angularjs', 'react', 'nodeJS', 'postgresql', 'mongodb', 'bootstrap', 'javascript', 'materialize', 'es6', 'html5'];

        var fakeJobDescription = "Job Description As a Gogo Business Aviation Full Stack Web developer JAVA and JavaScript you will contribute to a development team creating a media server/entertainment system for the aviation industry. Think Netflix streaming on airplanes! COME ON BOARD THE GOGO BUSINESS AVIATION ENGINEERING TEAM! How will you make a difference? Full stack software developer who can contribute to client side and server side technologies. Developing web services consumable by single page web application and mobile devices Hands on Development Position – 80% of time coding Provide Level of Effort estimates for requirements Track project tasks, provide status and ensure tasks completed on schedule Troubleshoot defects and code resolutions Contribute to process improvements, including researching and introducing new development tools Guide implementation of best practices for application design/development Strong XP/SCRUM/Agile work ethic – Ability to contribute productively to a fast paced development team, delivering demonstrable code in 2 week increments Ability to comprehensively unit tests your code Contribute to a healthy and collaborative development team with a “Get it Done” work ethic Proven ability to negotiate timeline and architecture across functional teams We connect the aviation industry and its travelers with innovative technology and applications, and we do it all in a high-energy environment that welcomes the next challenge. Be prepared for a dynamic ride with people who are passionate about what they're building. Gogo Business Aviation is an equal opportunity employer and works in compliance with both federal and state laws. We are committed to the concept regarding Equal Employment opportunity. Qualified candidates will be considered for employment regardless of race, color, religion, age, sex, national origin, marital status, medical condition or disability.? The EEO is the law and is available here.Gogo Business Aviation? participates in E-Verify. Details in English and Spanish. Right to Work Statement in English and Spanish. Skills & Requirements Qualifications BS in Computer Science or equivalent work experience 2+ years of experience with software development 1+ years of experience with Java 1+ years of experience with JavaScript Required Skills, Experience and Talents Strong skill in designing and consuming RESTful APIs and building applications with concurrency. Experience with Java, Spring, and Jersey Experience developing with HTML5, CSS, JavaScript, and general Web 2.0 techniques like Angular, Backbone/Marionette, and Node.js Proficient using CSS preprocessors like Stylus, SASS or Less Unit testing experience with tools like Junit, Mockito Mocha, Chai, and Sinon Familiarity with build tools like Maven, Gradle, Brunch, Grunt, and Gulp Experience using SCM tools such as Git. Understanding of the Gitflow workflow Desirable Skills, Experience and Talents Experience with video streaming technologies like Adobe Primetime or Google Widevine Knowledge of Spring Components Has developed single page JavaScript application Comfortable using Intellij based Java development IDE to perform daily development tasks Experience and/or interest in the Airline and/or Telecommunications";

        var words = {};

        words = generateWordsObject(fakeSkills, takeOutHTMLTags(fakeJobForParse));

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
          var excludedWords = [ '', 'the', 'a', 'to', 'and', 'of', 'and', 'an', 'are', 'in', 'with', 'as', 'for', 'or', 'at', 'your', 'our', 'yours', 'is', 'if', 'this', 'be', 'that', 'has', 'you', 'we', 'by', "you'll", 'got', "you're", 'when', "that's", "you'll", 'but', 'than', "that's", 'youll', 'us', 'how', 'weve', "we've", 'what', 'why', 'will', "it's", 'where', 'those', "there's", 'its', 'youd', "you're", 'were', "you've", "there's", 'they', 'so', 'ok...as', 'like', 'etc', 'any', 'given', 'after', 'been', 'within', 'get', 'dont', 'brings', 'do', 'should', 'not', 'well', 'some', 'from', 'using', 'on', 'needing', 'very', '&', 'every', 'it', 'other', 'into', 'eg', 'more', 'all', 'throuh', 'above' , "we're", 'who', 'would', "aren't", 'their', 'these', 'come', 'bs', 'theyre', 'sex', '"get', 'andor' ];

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
          var font = '"Sans serif", Times, serif';

          for (let i = 0; i < currentWords.length; i++) {
            newWord = document.createElement("div");
            container.appendChild(newWord);
            newWord.innerHTML = currentWords[i].text;
            newWord.setAttribute("style", "font-family: " + font + "; width: auto;" + "font-weight: " + currentWords[i].fontWeight + ";" + "color: " + currentWords[i].fontColor + ";" + "font-size: " + currentWords[i].fontSize + "px;" + "padding: " + currentWords[i].padding + ";" + "transform: " + currentWords[i].rotation + ";" + "display: inline-block;" + "-webkit-transition: 1s ease-in-out;" + "-moz-transition: 1s ease-in-out;" + "-o-transition: 1s ease-in-out;" + "transition: 1s ease-in-out;");
            makeMouseOver(newWord, currentWords[i].rotation, currentWords[i]);


          }

        }

        renderWordCloud(wordsArray);
      };
    }
}());
