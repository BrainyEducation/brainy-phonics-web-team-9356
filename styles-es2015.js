(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n:root {\n  --light-blue: #a7d8e8;\n  --blue: #6abad7;\n  --brown: #bc8f75;\n  --gray: #c3c3c3;\n  --light-green: #96e4a2;\n  --yellow-green: #bfe54e;\n  --green: #66cf69;\n  --indigo: #9d9df8;\n  --light-red: #e0696b;\n  --red: #d93831;\n  --light-orange: #f3b88c;\n  --orange: #ee8640;\n  --hot-pink: #ee7af8;\n  --pink: #f3b2c8;\n  --light-purple: #cda1d2;\n  --purple: #b87cbe;\n  --light-violet: #ddc0e1;\n  --light-yellow: #fdf885;\n  --yellow: #fcf351;\n  --orange-yellow: #f6cb47;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\nbutton {\n  cursor: pointer;\n}\n#background {\n  width: 100vw;\n  height: 100vh;\n  background-color: #6ec7d4;\n  margin: auto;\n  overflow: hidden;\n}\n#side-menu {\n  width: 17vh;\n  height: 91vh;\n  background-color: #c4e8e6;\n  padding: 4.5vh 0;\n  position: relative;\n}\n.icon {\n  width: 9.5vh;\n  height: 9.5vh;\n  display: block;\n  position: absolute;\n  margin-left: 3.8vh;\n  cursor: pointer;\n  margin-bottom: 3.5vh;\n  border: none;\n}\n/* Side Menu Icons */\n#home {\n  background: url('home.png') no-repeat scroll 0 0\n    transparent;\n  background-size: 9.5vh 9.5vh;\n  top: 16.5vh;\n}\n#back {\n  background: url('back.png') no-repeat scroll 0 0\n    transparent;\n  background-size: 9.5vh 9.5vh;\n}\n#forward {\n  background: url('forward.png') no-repeat scroll 0 0\n    transparent;\n  background-size: 9.5vh 9.5vh;\n}\n#quiz {\n  background: url('quiz.png') no-repeat scroll 0 0\n    transparent;\n  background-size: 9.5vh 9.5vh;\n  bottom: 39.5vh;\n}\n#repeat {\n  background: url('repeat.png') no-repeat scroll 0 0\n    transparent;\n  background-size: 9.5vh 9.5vh;\n  bottom: 26.5vh;\n}\n#bank {\n  background: url('bank.png') no-repeat scroll 0 0\n    transparent;\n  background-size: 9.5vh 9.5vh;\n  bottom: 13.5vh;\n}\n#puzzle {\n  background: url('puzzle.png') no-repeat scroll 0 0\n    transparent;\n  background-size: 9.5vh 9.5vh;\n  bottom: 0.5vh;\n}\n/* Text */\n@font-face {\n  font-family: 'ComicSans';\n  src: url('comic-sans.ttf');\n}\nhtml * {\n  font-family: 'ComicSans' !important;\n}\n.quiz-animation {\n  -webkit-animation: pulsate-fwd 1.5s ease-in-out infinite both;\n  animation: pulsate-fwd 1.5s ease-in-out infinite both;\n}\n@-webkit-keyframes pulsate-fwd {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.07);\n    transform: scale(1.07);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes pulsate-fwd {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.07);\n    transform: scale(1.07);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwic3JjL3N0eWxlcy9jb2xvcnMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQ0E5RTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7QURsQkE7O0VBRUUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRTtlQUNhO0VBQ2IsNEJBQTRCO0VBQzVCLFdBQVc7QUFDYjtBQUNBO0VBQ0U7ZUFDYTtFQUNiLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0U7ZUFDYTtFQUNiLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0U7ZUFDYTtFQUNiLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRTtlQUNhO0VBQ2IsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEI7QUFDQTtFQUNFO2VBQ2E7RUFDYiw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQjtBQUNBO0VBQ0U7ZUFDYTtFQUNiLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7QUFFQSxTQUFTO0FBQ1Q7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQXlDO0FBQzNDO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLDhCQUE4QjtJQUM5QixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgJy4vc3R5bGVzL2NvbG9ycy5jc3MnO1xuXG5odG1sLFxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNiYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmVjN2Q0O1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNzaWRlLW1lbnUge1xuICB3aWR0aDogMTd2aDtcbiAgaGVpZ2h0OiA5MXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRlOGU2O1xuICBwYWRkaW5nOiA0LjV2aCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDkuNXZoO1xuICBoZWlnaHQ6IDkuNXZoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMy44dmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMy41dmg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLyogU2lkZSBNZW51IEljb25zICovXG4jaG9tZSB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvaW1nL2J1dHRvbnMvaG9tZS5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAgMFxuICAgIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDkuNXZoIDkuNXZoO1xuICB0b3A6IDE2LjV2aDtcbn1cbiNiYWNrIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy9pbWcvYnV0dG9ucy9iYWNrLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgMCAwXG4gICAgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogOS41dmggOS41dmg7XG59XG4jZm9yd2FyZCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvaW1nL2J1dHRvbnMvZm9yd2FyZC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAgMFxuICAgIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDkuNXZoIDkuNXZoO1xufVxuI3F1aXoge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL2ltZy9idXR0b25zL3F1aXoucG5nJykgbm8tcmVwZWF0IHNjcm9sbCAwIDBcbiAgICB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1zaXplOiA5LjV2aCA5LjV2aDtcbiAgYm90dG9tOiAzOS41dmg7XG59XG4jcmVwZWF0IHtcbiAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy9pbWcvYnV0dG9ucy9yZXBlYXQucG5nJykgbm8tcmVwZWF0IHNjcm9sbCAwIDBcbiAgICB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1zaXplOiA5LjV2aCA5LjV2aDtcbiAgYm90dG9tOiAyNi41dmg7XG59XG4jYmFuayB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvaW1nL2J1dHRvbnMvYmFuay5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAgMFxuICAgIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDkuNXZoIDkuNXZoO1xuICBib3R0b206IDEzLjV2aDtcbn1cbiNwdXp6bGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL2ltZy9idXR0b25zL3B1enpsZS5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAgMFxuICAgIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDkuNXZoIDkuNXZoO1xuICBib3R0b206IDAuNXZoO1xufVxuXG4vKiBUZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb21pY1NhbnMnO1xuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvY29taWMtc2Fucy50dGYnKTtcbn1cbmh0bWwgKiB7XG4gIGZvbnQtZmFtaWx5OiAnQ29taWNTYW5zJyAhaW1wb3J0YW50O1xufVxuXG4ucXVpei1hbmltYXRpb24ge1xuICAtd2Via2l0LWFuaW1hdGlvbjogcHVsc2F0ZS1md2QgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xuICBhbmltYXRpb246IHB1bHNhdGUtZndkIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzYXRlLWZ3ZCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHB1bHNhdGUtZndkIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiIsIjpyb290IHtcbiAgLS1saWdodC1ibHVlOiAjYTdkOGU4O1xuICAtLWJsdWU6ICM2YWJhZDc7XG4gIC0tYnJvd246ICNiYzhmNzU7XG4gIC0tZ3JheTogI2MzYzNjMztcbiAgLS1saWdodC1ncmVlbjogIzk2ZTRhMjtcbiAgLS15ZWxsb3ctZ3JlZW46ICNiZmU1NGU7XG4gIC0tZ3JlZW46ICM2NmNmNjk7XG4gIC0taW5kaWdvOiAjOWQ5ZGY4O1xuICAtLWxpZ2h0LXJlZDogI2UwNjk2YjtcbiAgLS1yZWQ6ICNkOTM4MzE7XG4gIC0tbGlnaHQtb3JhbmdlOiAjZjNiODhjO1xuICAtLW9yYW5nZTogI2VlODY0MDtcbiAgLS1ob3QtcGluazogI2VlN2FmODtcbiAgLS1waW5rOiAjZjNiMmM4O1xuICAtLWxpZ2h0LXB1cnBsZTogI2NkYTFkMjtcbiAgLS1wdXJwbGU6ICNiODdjYmU7XG4gIC0tbGlnaHQtdmlvbGV0OiAjZGRjMGUxO1xuICAtLWxpZ2h0LXllbGxvdzogI2ZkZjg4NTtcbiAgLS15ZWxsb3c6ICNmY2YzNTE7XG4gIC0tb3JhbmdlLXllbGxvdzogI2Y2Y2I0Nztcbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/brainy-phonics-web/brainy-phonics-web/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map