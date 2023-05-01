var Typing = (function () {
    'use strict';

    var randomize = function randomize(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    var type = function type(id, phrase, pause) {
        var element = document.getElementById(id);

        return new Promise (function (fulfill, reject) {
            if (!element) {
                reject('Cannot find element with id ' + id);
            }
            if (!pause) {
                pause = 0;
            }

            var len = phrase.length;
            var letter = 0;
            var shouldStop = false;
            var keyListener = function (event) {
                shouldStop = true;
                document.removeEventListener('keypress', keyListener);
            };
            var timeOut;

            document.addEventListener('keypress', keyListener);

            element.textContent = '|';

            var recurse = function recurse() {
                timeOut = setTimeout(function () {
                    if (shouldStop) {
                        element.textContent = phrase;
                        return fulfill();
                    }

                    var currentPhrase = phrase.substring(0, ++letter);
                    element.textContent = currentPhrase + '|';
                    recurse();

                    if (letter === len) {
                        // remove the '|'
                        element.textContent = element.textContent.slice(0, -1);
                        clearTimeout(timeOut);
                        setTimeout(function () {
                            return fulfill();
                        }, pause);
                    }

                }, randomize(30, 100));
            };

            recurse();
        });
    };

    return Object.freeze({
        type: type,        
        randomize: randomize
    });
})();
