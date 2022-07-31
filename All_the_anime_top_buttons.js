var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

$.noConflict();
jQuery(document).ready(function($) {
  $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtnBoxThing {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  height: fit-content;
  width: fit-content;
}

#topBtn {
  min-height: 51px;
  min-width: 40.52px;
  border-radius: 4px;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-family: "Open Sans", "Hiragino Sans", Arial, sans-serif;
}

#topBtnWithMal {
  display: none;
  position: fixed;
  bottom: 100px;
  right: 47px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
}

#HideTopBtnButton {
  display: none;
  height: 40.52px;
  width: 51px;
  border-radius: 4px;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  background: rgba(158,158,158,.2);
  position: fixed;
  right: 26px;
  bottom: 70px;
  transition: 0.3s;
}

#topBtnWithMal2 {
  display: none;
  height: 40.52px;
  width: 51px;
  border-radius: 4px;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  background: rgba(158,158,158,.2);
  position: fixed;
  right: 43px;
  bottom: 150px;
  transition: 0.3s;
}

#HideTopBtnButton:hover {
    background-color: rgb(63,81,181);
}

#HideTopBtnButton:hover img {
    filter: invert(1);
}

#topBtnWithMal2:hover {
    background-color: rgb(63,81,181) !important;
}

#topBtnWithMal2:hover img {
    filter: invert(1);
}

</style>
        <div id="topBtnBoxThing">
        <button id="HideTopBtnButton" onclick="HidetopBtn();"><img width="100%" src="https://static.thenounproject.com/png/445666-200.png"></img></button>
        <button id="topBtn" title="Go to top" style="-ms-transform: rotate(90deg); /* IE 9 */-moz-transform: rotate(90deg); /* Firefox */-webkit-transform: rotate(90deg); /* Safari and Chrome */-o-transform: rotate(90deg); /* Opera */">&lt;</button>
        </div>
<script>
//Get the button
var mybutton = document.getElementById("topBtnBoxThing");
var topBtn = document.getElementById("topBtn");
var HideTopBtnButton = document.getElementById("HideTopBtnButton");
var HideTopBtnButtonX = "0";

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  var x = document.getElementById("floatbutton");
  if ($( ".floatbutton" ).css("visibility") === "visible") {
    document.getElementById("topBtnBoxThing").id = "topBtnWithMal";
  }
  if ($( ".floatbutton" ).css("visibility") === "visible") {
    document.getElementById("HideTopBtnButton").id = "topBtnWithMal2";
  }

if (/myanimelist\.net/.test (location.hostname) ) {
var topBtnn = document.getElementById("topBtn");
var topBtn = $('#topBtn')
var Headr = $('.list-unit .list-status-title')
var bg = Headr.css('background-color')
topBtn.css({
  backgroundColor: bg,
})
if (topBtnn.style.backgroundColor == "rgba(0, 0, 0, 0)") {
topBtnn.style.backgroundColor = "#2e51a2";
}
}
if (window.location.href.indexOf('https://anilist.co/user/') == 0) {
    var bg = $('.user-page-unscoped').css('--color-blue')
    $('#topBtn').css({
        backgroundColor: $('.list .title').css('color'),
    });
} else if (window.location.href.indexOf('https://anilist.co/') == 0) {
    $('#topBtn').css({
        backgroundColor: '#3db4f2',
    });
}
if (window.location.href.indexOf('https://readmanganato.com/') == 0 && $("body").css("backgroundColor") == "rgb(90, 84, 84)" || window.location.href.indexOf('https://manganato.com/') == 0 && $("body").css("backgroundColor") == "rgb(90, 84, 84)" ) {
    $('#topBtn').css({
        backgroundColor: '#2a524a',
    });
} else if (window.location.href.indexOf('https://readmanganato.com/') == 0 || window.location.href.indexOf('https://manganato.com/') == 0) {
   $('#topBtn').css({
        backgroundColor: '#ff530d',
    });
}
}


// When the user clicks on the button, scroll to the top of the document
$('#topBtn').click(function(e) {
    if (e.shiftKey) {
        window.scrollTo(0, document.body.scrollHeight)
    } else {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }
});

$(document).keydown(function (e) {
    if (e.shiftKey) {
        $('#topBtn').css('transform', 'rotate(270deg)');
        $('#topBtn').prop('title', 'Go to bottom')
    }

});

$(document).keyup(function (e) {
    if (e.which == 16) {
        $('#topBtn').css('transform', 'rotate(90deg)');
        $('#topBtn').prop('title', 'Go to top')
    }
});


function HidetopBtn() {
  document.getElementById("topBtn").style.display = "none";
  if (HideTopBtnButtonX == 0) {
  HideTopBtnButtonX = 1;
  } else {
   HideTopBtnButtonX = 0;
   }

  if (HideTopBtnButtonX == 1) {
  topBtn.style.display = "none";
  if (document.getElementById("HideTopBtnButton")) {
  document.getElementById("HideTopBtnButton").style.bottom = "25px";
  } else if (document.getElementById("topBtnWithMal2")) {
  document.getElementById("topBtnWithMal2").style.bottom = "100px";
  }
  } else if (HideTopBtnButtonX == 0) {
  topBtn.style.display = "none";
  if (document.getElementById("HideTopBtnButton")) {
  document.getElementById("HideTopBtnButton").style.bottom = "70px";
  } else if (document.getElementById("topBtnWithMal2")) {
  document.getElementById("topBtnWithMal2").style.bottom = "150px";
  }
  HideTopBtnButton.style.display = "none";
  }
}

document.getElementById("topBtnBoxThing").addEventListener("mouseover", mouseOver);
document.getElementById("topBtnBoxThing").addEventListener("mouseout", mouseOut);

function mouseOver() {
  if (topBtn.style.display = "block") {
  HideTopBtnButton.style.display = "block";
  }

  if (HideTopBtnButtonX == 1) {
  topBtn.style.display = "none";
  }

}

function mouseOut() {
  if (topBtn.style.display = "block") {
    if (HideTopBtnButtonX == 0) {
  HideTopBtnButton.style.display = "none";
  topBtn.style.display = "block";
    }
  }
  if (HideTopBtnButtonX == 1) {
  topBtn.style.display = "none";
  }
}

</script>
    </div>
`);


  if (/vrv\.co/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #fd0;
  color: #1b1a26;
}
</style>
    </div>
`);
  } else if (/zoro\.to/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #cae962;
  color: #202125;
}
</style>
    </div>
`);
  } else if (/crunchyroll\.com/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #f78c25;
  color: #ffffff;
}
button#HideTopBtnButton img {
    border: none;
}
button#topBtnWithMal2 img {
    border: none;
}
</style>
    </div>
`);
  } else if (/mangadex\.org/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #E6613E;
  color: #ffffff;
}
button#HideTopBtnButton img {
    border: none;
}
button#topBtnWithMal2 img {
    border: none;
}
</style>
    </div>
`);
  } else if (/9anime\.ru/.test(location.hostname) || /9anime\.me/.test(location.hostname) || /9anime\.pl/.test(location.hostname) || /9anime\.to/.test(location.hostname) || /9anime\.id/.test(location.hostname) || /9anime\.is/.test(location.hostname) || /9anime\.ch/.test(location.hostname) || /9anime\.nl/.test(location.hostname) || /9anime\.live/.test(location.hostname) || /9anime\.one/.test(location.hostname) || /9anime\.page/.test(location.hostname) || /9anime\.video/.test(location.hostname) || /9anime\.life/.test(location.hostname) || /9anime\.love/.test(location.hostname) || /9anime\.tv/.test(location.hostname) || /9anime\.id/.test(location.hostname) || /9anime\.club/.test(location.hostname) || /9anime\.center/.test(location.hostname) || /animelab\.com/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #31bff9;
  color: #ddd;
}
</style>
    </div>
`);
  } else if (/kissmanga\.com/.test(location.hostname) || /anilist\.co/.test(location.hostname) || /anichart\.net/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #3db4f2;
  color: black;
}
body.site-theme-dark #topBtn {
    color: white;
  }
</style>
    </div>
`);
  } else if (/kitsu\.io/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
   background-color: #997d78;
   color: inherit;
   filter: contrast(5);
}
</style>
    </div>
`);
  } else if (/kissanime\.ru/.test(location.hostname) || /kissanime\.pro/.test(location.hostname) || /kissanime\.to/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #81cc03;
  color: #fff;
}
</style>
    </div>
`);
  } else if (/myanimelist\.net/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #2e51a2;
  color: white;
}
</style>
    </div>
`);
  } else if (/gogoanime\.io/.test(location.hostname) || /gogoanime\.video/.test(location.hostname) || /gogoanime\.sk/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #ffc119;
  color: #fdfcfc;
}

.icongec-backtop {
  display: none;
}
</style>
    </div>
`);
  } else if (/animekisa\.tv/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #e61d2f;
  color: white;
}

.css-1j77ejl{
  right: 83px !important;
}
</style>
    </div>
`);
  } else if (/animesuge\.to/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #ff0000;
  color: white;
}

.css-1j77ejl{
  right: 83px !important;
}
</style>
    </div>
`);
  } else if (/animeflv\.net/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #01cfff;
  color: white;
}
</style>
    </div>
`);
  } else if (/animension\.to/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #2387bd;
  color: white;
}
</style>
    </div>
`);
  } else if (/jkanime\.net/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #DF9700;
  color: white;
}
</style>
    </div>
`);
  } else if (/turkanime\.net/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: black;
  color: white;
}
</style>
    </div>
`);
  } else if (/4anime\.to/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #e61d2f;
  color: white;
}
</style>
    </div>
`);
  } else if (/animeultima\.to/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #3273dc;
  color: white;
}

.css-1j77ejl {
  right: 83px !important;
}
</style>
    </div>
`);
  } else if (/animesimple\.com/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #4ecdc4;
  color: black;
}

body.dark #topBtn {
  background-color: #4ecdc4;
  color: white;
}
</style>
    </div>
`);
  } else if (/yugen\.to/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #07bf67;
  color: black;
}

html.site-theme-dark #topBtn {
  background-color: #07bf67;
  color: white;
}
</style>
    </div>
`);
  } else if (/hidive\.com/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #00aef0;
  color: white;
}
</style>
    </div>
`);
  } else if (/funimation\.com/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #410099;
  color: white;
  border: solid white;
  border-width: 0.1px;
}
.slider-control.prev, .slider-control.next {
  z-index: 99 !IMPORTANT;
}
</style>
    </div>
`);
  } else if (/animixplay\.to/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #178be6;
  color: white;
}
#backtotopbtn {
  display: none;
}
</style>
    </div>
`);
  } else if (/mangareader\.to/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #7b36ce;
  color: white;
}
</style>
    </div>
`);
  } else if (/readmanganato\.com/.test(location.hostname) || /manganato\.com/.test(location.hostname)) {
    $("body").append(`
    <div id="gmSomeID">
        <style>
#topBtn {
  background-color: #ff530d;
  color: white;
}
#top {
  display: none !IMPORTANT;
}
</style>
    </div>
`);
  }

});