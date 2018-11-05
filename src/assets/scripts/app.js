var ready = function ( fn ) {

    // Sanity check
    if ( typeof fn !== 'function' ) return;

    // If document is already loaded, run method
    if ( document.readyState === 'complete'  ) {
        return fn();
    }

    // Otherwise, wait until document is loaded
    document.addEventListener( 'DOMContentLoaded', fn, false );

};


ready(function() {
  console.log("conected to js")

  function heartPump() {
    var a;
    a = document.getElementById("heart");
    a.innerHTML = "&#xf004;";
    setTimeout(function () {
      a.innerHTML = "&#xf21e;";
    }, 1000);
    setTimeout(function () {
      a.innerHTML = "&#xf004;";
    }, 2000);
    setTimeout(function () {
      a.innerHTML = "&#xf004;";
    }, 3000);
    setTimeout(function () {
      a.innerHTML = "&#xf21e;";
    }, 4000);
    setTimeout(function () {
      a.innerHTML = "&#xf004;";
    }, 6000);
  }
  heartPump();
  setInterval(heartPump, 7000);


  // Start Animation on Click

  let button = document.getElementById("animate-button");
  button.addEventListener("click", () => {
    console.log("Button clicked.");
  });


});//end ready function
