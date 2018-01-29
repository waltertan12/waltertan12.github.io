;(function () {
    'use strict';

    var links = document.getElementById('links');
    var contacts = document.getElementById('contacts');

    Typing.type('hi', 'Hi, I\'m Walter Tan!', Typing.randomize(500, 750))
        .then(function () {
            return Typing.type('about-me', 'I write things for the web', Typing.randomize(500, 750));
        })
        .then(function () {
            return Typing.type('links-intro', 'Here are some links about me:');
        })
        .then(function () {
            return new Promise (function (fulfill) {
                links.className = 'show';
                return fulfill();
            });
        })
        .then(function () {
            return new Promise(function (fulfill) {
                var keyListener = document.addEventListener('keypress', function (event) {
                    document.removeEventListener('keypress', keyListener);
                    return fulfill();                
                });

                setTimeout(function () {
                    fulfill();
                }, 1000);
            });
        })
        .then(function () {
            return Typing.type('contacts-intro', 'And here\'s my contact information:');
        })
        .then(function () {
            return new Promise(function (fulfill) {
                contacts.className = 'show';
                return fulfill();
            });
        })
        .then(function () {
            return new Promise(function (fulfill) {
                var keyListener = document.addEventListener('keypress', function (event) {
                    document.removeEventListener('keypress', keyListener);
                    return fulfill();                
                });

                setTimeout(function () {
                    fulfill();
                }, 1000);
            });
        })
        .then(function () {
            return Typing.type('outro', 'Hope to hear from you soon :)');
        })
        .catch(function (errors) {
            console.warn(errors);
        });
})();
