;(function () {
    /* global typePhrase, pauseSync, pauseAsync, console */
    'use strict';
    var links = document.getElementById('links'),
        contacts = document.getElementById('contacts');

    typePhrase('hi', 'Hi, I\'m Walter Tan!', pauseSync())
        .then(() => {
            return typePhrase('aboutme', 'I write things for the web', pauseSync());
        })
        .then(() => {
            return typePhrase('linksIntro', 'Here are some links about me:');
        })
        .then(() => {
            return new Promise ((fulfill) => {
                links.className = 'show';
                return fulfill();
            });
        })
        .then(() => {
            return pauseAsync(1000);
        })
        .then(() => {
            return typePhrase('contactsIntro', 'And here\'s my contact information:');
        })
        .then(() => {
            return new Promise((fulfill) => {
                contacts.className = 'show';
                return fulfill();
            });
        })
        .then(() => {
            return pauseAsync(1000);
        })
        .then(() => {
            return typePhrase('outro', 'Hope to hear from you soon :)');
        })
        .catch(() => {
            console.warn('ERRORS!!!!!! wowowowowow');
        });
})();