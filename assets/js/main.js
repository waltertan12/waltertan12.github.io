(function () {
  var links = document.getElementById("links");
  var contacts = document.getElementById("contacts");
  var waitOrKeypress = function waitOrKeypress() {
    return new Promise(function (fulfill) {
      var keyListener;
      var timeout = setTimeout(function () {
        document.removeEventListener("keypress", keyListener);
        fulfill();
      }, 1000);

      keyListener = function (event) {
        clearTimeout(timeout);
        document.removeEventListener("keypress", keyListener);
        fulfill();
      };
      document.addEventListener("keypress", keyListener);
    });
  };

  Typing.type("hi", "Hi, I'm Walter Tan!", Typing.randomize(500, 750))
    .then(function () {
      return Typing.type(
        "about-me",
        "I write things for the web",
        Typing.randomize(500, 750)
      );
    })
    .then(function () {
      return Typing.type("links-intro", "Here are some links about me:");
    })
    .then(function () {
      return new Promise(function (fulfill) {
        links.className = "show";
        return fulfill();
      });
    })
    .then(waitOrKeypress)
    .then(function () {
      return Typing.type("outro", "Hope to hear from you soon :)");
    })
    .catch(function (errors) {
      console.warn(errors);
    });
})();
