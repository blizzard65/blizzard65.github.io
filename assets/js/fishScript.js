
// Blizzard intro---------------------------------
/*
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=> {

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        })

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            },2000)
        })

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2300)



    })
}) */
//below this is the code to load the iframemain which was to hopefuly fix the lag problem, but it did not:((
/*setTimeout(()=>{
  document.getElementById('iframeMain').innerHTML = '<iframe src="indexIframeOfficial.html" ' + 
  'id="mainiframe" width=100% height=95%  title="box" allowfullscreen="true" ' +
  'style="border: 0; height: 95%; left: 0; position: absolute; bottom: 0; width: 100%;"></iframe>'
},5000) */

//--------------------------------------------------------

// crits popup menu js------------------------------------

dragElement(document.getElementById("mydiv"));
      
      
      function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
          /* if present, the header is where you move the DIV from:*/
          document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          elmnt.onmousedown = dragMouseDown;
        }
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
      
        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
        }
        function changeSrc(loc) {
          document.getElementById('skibframe').src = loc;
        }
      }

      function gameSrcChange() {
          document.getElementById('mainiframe').src = document.getElementById('assets/games + id');
      }

      function openDiv(){
        document.getElementById('skibframe').src = 'https://www.google.com?igu=1';
        document.getElementById('mydiv').style.visibility = 'visible';
      }

      function changeURL(){
        document.getElementById('skibframe').src = document.getElementById('urlinput').value;
      }

      function changeURLMain(){
        document.getElementById('mainiframe').src = 'darkIndexIframe.html';
      }

      function changeURLGames(){
        document.getElementById('mainiframe').src = 'allgames.html';
      }

      function changeURLCustom(){
        document.getElementById('mainiframe').src = document.getElementById('urlinput').value;
      }

      function changeURLBlankgen(){
        document.getElementById('mainiframe').src = 'Adminmain.html';
      }

      function changeURLEncrypt(){
        document.getElementById('mainiframe').src = 'encypter.html';
      }

      function changeURLPreview(){
        document.getElementById('mainiframe').src = 'https://htmlpreview.github.io/';
      }

      function closeDiv(){
        document.getElementById('skibframe').src = 'about:blank';
        document.getElementById('mydiv').style.visibility = 'hidden';
      }

      function iGoogle() {
    var url = 'https://www.google.com?igu=1'
    var win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
}

function blankcreate() {
    var url = document.getElementById('urlinput').value;
    var win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
}

function aboutHome() {
    var url = 'index.html'
    var win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
}

function windowOpener(){
      var url = document.getElementById('urlinput').value;
      var myWindow = window.open("", "iFrame", "width=800,height=600");
      myWindow.document.body.style.margin = '0';
      myWindow.document.body.style.height = '100vh';
      var iframe = myWindow.document.createElement('iframe');
      iframe.style.border = 'none';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.margin = '0';
      iframe.src = url;
      myWindow.document.body.appendChild(iframe);
      }

      function handleGo() {
            var action = document.getElementById("actionSelect").value;

            if (action === "iWindow") {
                changeURL();
            } else if (action === "window") {
                windowOpener();
            } else if (action === "main") {
                changeURLCustom();
            } else if (action === "blank") {
                blankcreate();
            }
        }

//---------------------------------------------------