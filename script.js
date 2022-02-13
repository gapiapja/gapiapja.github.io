  function nonTo() {document.getElementById('tombo').style.display = "none";} function showTo() {document.getElementById('tombo').style.display = "block";}
  function nonDiv() {document.getElementById('Content').style.display = "none";} function showDiv() {document.getElementById('Content').style.display = "block";}
  function nonDiva() {document.getElementById('Contenti').style.display = "none";} function showDiva() {document.getElementById('Contenti').style.display = "block";}
  function trm() {document.getElementById('trm').style.margin = "0";}
  function whs() {document.getElementById('whs').style.margin = "12px 12px 12px 0";} function nowhs() {document.getElementById('whs').style.margin = "0 0 0 -500%";}
  function iloveu() {if(a==textakhir.length){document.getElementById('sp1').style.display = "none";document.getElementById('sp2').style.display = "block";}}
  function ilove() {if(k==tekok.length){document.getElementById('sp4').style.display = "none";document.getElementById('sp5').style.display = "block";}}
  function fotoKt() {document.getElementById('ftKm').style.opacity = "0";document.getElementById('ftAk').style.opacity = "1";var e1 = document.getElementById('ftAk');e1.classList.add("lopdeg");}
  async function would() {var { isConfirmed: mine } = await swals.fire({title: `Would you be mine?`, confirmButtonText: 'Yes', cancelButtonText: 'No', allowOutsideClick: false, showCancelButton: true,
    });if(mine){kal3();document.getElementById('text').style.display = "none";document.getElementById('text2').style.display = "none";document.getElementById('kata3').style.display = "block";
    nowhs();document.getElementById('sp2').style.display = "none";document.getElementById('sp3').style.display = "block";
    } else {text4 = "Thank you ";nowhs();document.getElementById('text').style.display = "none";document.getElementById('text2').style.display = "none";document.getElementById('kata4').style.display = "block";duar();document.getElementById('sp2').style.display = "none";document.getElementById('sp3').style.display = "block";}
    }
    
  var i=0,text;
  text = ""
  var p=0,texi;
  texi = ""
  var y=0,texi2;
  texi2 = ""
  var u=0,text2;
  text2 = ""
  var o=0,text3;
  text3 = "...                                     "
  var a=0,textakhir;
  var k=0,tekok;

  function ketik() {
    if(i<text.length){
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(ketik,100);
    }
    if(i==text.length){
    ketikk();}
  }
  function ketikk() {
    if(u<text2.length){
      document.getElementById("text2").innerHTML += text2.charAt(u);
      u++;
      setTimeout(ketikk,200);
    }
    if(u==text2.length){
    ketikakhir();}
  }
  function ketikakhir() {
    if(a<textakhir.length){
      document.getElementById("textakhir").innerHTML += textakhir.charAt(a);
      a++;
      setTimeout(ketikakhir,300);
    }
    if(a==textakhir.length){
    document.getElementById("textakhir").innerHTML = "I Love You &#10084;";
    iloveu();siap();}
  }
 function ketek() {
    if(p<texi.length){
      document.getElementById("texi").innerHTML += texi.charAt(p);
      p++;
      setTimeout(ketek,100);
    }
    if(p==texi.length){
    ketekk();}
  }
  function ketekk() {
    if(y<texi2.length){
      document.getElementById("texi2").innerHTML += texi2.charAt(y);
      y++;
      setTimeout(ketekk,200);
    }
    if(y==texi2.length){
    ketikakhiri();}
  }
 function ketikakhiri() {
    if(k<tekok.length){
      document.getElementById("tekok").innerHTML += tekok.charAt(k);
      k++;
      setTimeout(ketikakhiri,300);
    }
    if(k==tekok.length){
    document.getElementById("tekok").innerHTML = "Nice Try &#10084;";
    ilove();siap();}
  }
  async function siap() {
    if(o<text3.length){
      document.getElementById("text3").innerHTML += text3.charAt(o);
      o++;
      setTimeout(siap,80);
    }
    if(o==text3.length){
    fotoKt();
    document.getElementById("text3").innerHTML = "&#10084;&#10084;&#10084;"}   
  }
  function duar() {
    if(a<text4.length){
      document.getElementById("text4").innerHTML += text4.charAt(a);
      a++;
      setTimeout(duar,270);
    }
    if(a==text4.length){
    document.getElementById("text4").innerHTML = "I LOVE YOU, my another half❤️"
    fotoKt();}
  }
