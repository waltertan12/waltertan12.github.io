'use strict';
var typePhrase = (id, phrase, pause) => {
    var element = document.getElementById(id);

    return new Promise ((fulfill, reject) => {
        if (!element) reject();
        if (!pause) pause = 0;

        var len = phrase.length,
            timeOut,
            letter = 0;

        element.textContent = '|';

        var _typePhrase = () => {
            var humanize = Math.round(Math.random() * (150 - 30)) + 30;

            timeOut = setTimeout(() => {
                letter++;
                var type = phrase.substring(0, letter);
                element.textContent = type + '|';
                _typePhrase();

                if (letter === len) {
                    // remove the '|'
                    element.textContent = element.textContent.slice(0, -1);
                    clearTimeout(timeOut);
                    setTimeout(() => {
                        return fulfill();
                    }, pause);
                }

            }, humanize);
        };

        _typePhrase();
    });
},
pauseSync = (wait) => {
        if (typeof wait === 'undefined') {
            var max = 750, min = 500; 
            wait = Math.floor(Math.random() * (max - min + 1) + min);
        }

        return wait;
    },
pauseAsync = (wait) => {
    if (typeof wait === 'undefined') {
        var max = 750, min = 500; 
        wait = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return new Promise((fulfill) => {
        setTimeout(() => {
            fulfill();
        }, wait);
    })
};