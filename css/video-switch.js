(function () {
    'use strict';
    /*Az aktivált listaelemek listája. */
    var activateds = document.getElementsByClassName('activevid');
    /*1. videó lejátszó*/
    var vidi1= document.getElementById('video1');
    var fekvo= document.getElementById('simafekvő');
    var tolo = document.getElementById('tolódzkodás');
    var archi = document.getElementById('archerfekvő');
    
    /*2. videó lejátszó*/
    var vidi2= document.getElementById('video2');
    var exc21= document.getElementById('pikepu');
    var exc22 = document.getElementById('planchepu');
    var exc23 = document.getElementById('shoulderrow');
    /*3. videó lejátszó*/
    var vidi3= document.getElementById('video3');
    var exc31= document.getElementById('crunch');
    var exc32 = document.getElementById('sideplank');
    var exc33 = document.getElementById('swimmer');

    /*4. videó lejátszó*/
    var vidi4= document.getElementById('video4');
    var exc41= document.getElementById('squat');
    var exc42 = document.getElementById('sittinglegraise');
    var exc43 = document.getElementById('gluteusraise');

    /*5. videó lejátszó*/
    var vidi5= document.getElementById('video5');
    var exc51= document.getElementById('bodyrow');
    var exc52 = document.getElementById('pullup');
    var exc53 = document.getElementById('activehang');

/*Első videó lejátszónak a gombjainak beállítása */
  fekvo.onclick=function () {
    switchVideo('videok/simafekvő.mp4','kepek/simafekvő.png',vidi1);
    activateds[0].classList.remove('activevid');
    fekvo.classList.add('activevid');
    activateds=  document.getElementsByClassName('activevid');
    return false;
  };

  tolo.onclick=function () {
    switchVideo('videok/tolódzkodás.mp4','kepek/tolódzkodás.png',vidi1);
    activateds[0].classList.remove('activevid');
    tolo.classList.add('activevid');
    activateds=  document.getElementsByClassName('activevid');
    return false;
  };

  archi.onclick=function () {
    switchVideo('videok/archerfekvő.mp4','kepek/archerfekvő.png',vidi1);
    activateds[0].classList.remove('activevid');
    archi.classList.add('activevid');
    activateds=  document.getElementsByClassName('activevid');
    return false;
  };
  
  /*Második videó lejátszónak gombjainak beállítása */
  
  exc21.onclick=function () {
    switchVideo('videok/pikepu.mp4','kepek/pikepu.png',vidi2);
    activateds[1].classList.remove('activevid');
    exc21.classList.add('activevid');
    activateds=  document.getElementsByClassName('activevid');
    return false;
  };

  exc22.onclick=function () {
    switchVideo('videok/planchepu.mp4','kepek/planchepu.png',vidi2);
    activateds[1].classList.remove('activevid');
    exc22.classList.add('activevid');
    activateds=  document.getElementsByClassName('activevid');
    return false;
  };

  exc23.onclick=function () {
    switchVideo('videok/shoulderrow.mp4','kepek/shoulderrow.png',vidi2);
    activateds[1].classList.remove('activevid');
    exc23.classList.add('activevid');
    activateds=  document.getElementsByClassName('activevid');
    return false;
  };

  /*Harmadik videó lejátszó gombjainak beállítása */
  exc31.onclick=function () {
    switchVideo('videok/'+ exc31.id +'.mp4','kepek/'+ exc31.id +'.png',vidi3);
    activateds[2].classList.remove('activevid');
    exc31.classList.add('activevid');
    activateds=  document.getElementsByClassName('activevid');
    return false;
  };

  exc32.onclick=function () {
    switchVideo('videok/'+ exc32.id +'.mp4','kepek/'+ exc32.id +'.png',vidi3);
    activateds[2].classList.remove('activevid');
    exc32.classList.add('activevid');
    activateds=  document.getElementsByClassName('activevid');
    return false;
  };

  exc33.onclick=function () {
    switchVideo('videok/'+ exc33.id +'.mp4','kepek/'+ exc33.id +'.png',vidi3);
    activateds[2].classList.remove('activevid');
    exc33.classList.add('activevid');
    activateds=  document.getElementsByClassName('activevid');
    return false;
  };

  /*Negyedik videó lejátszó gombjainak beállítása */
  exc41.onclick=function () {
    switchVideo('videok/'+ exc41.id +'.mp4','kepek/'+ exc41.id +'.png',vidi4);
    activateds[3].classList.remove('activevid');
    exc41.classList.add('activevid');
    activateds=  document.getElementsByClassName('activevid');
    return false;
  };

  exc42.onclick=function () {
    switchVideo('videok/'+ exc42.id +'.mp4','kepek/'+ exc42.id +'.png',vidi4);
    activateds[3].classList.remove('activevid');
    exc42.classList.add('activevid');
    activateds=  document.getElementsByClassName('activevid');
    return false;
  };

  exc43.onclick=function () {
    switchVideo('videok/'+ exc43.id +'.mp4','kepek/'+ exc43.id +'.png',vidi4);
    activateds[3].classList.remove('activevid');
    exc43.classList.add('activevid');
    activateds=  document.getElementsByClassName('activevid');
    return false;
  };

  /*Ötödik videó lejátszó gombjainak beállítása */
  exc51.onclick=function () {
    switchVideo('videok/'+ exc51.id +'.mp4','kepek/'+ exc51.id +'.png',vidi5);
    activateds[4].classList.remove('activevid');
    exc51.classList.add('activevid');
    activateds=  document.getElementsByClassName('activevid');
    return false;
  };

  exc52.onclick=function () {
    switchVideo('videok/'+ exc52.id +'.mp4','kepek/'+ exc52.id +'.png',vidi5);
    activateds[4].classList.remove('activevid');
    exc52.classList.add('activevid');
    activateds=  document.getElementsByClassName('activevid');
    return false;
  };

  exc53.onclick=function () {
    switchVideo('videok/'+ exc53.id +'.mp4','kepek/'+ exc53.id +'.png',vidi5);
    activateds[4].classList.remove('activevid');
    exc53.classList.add('activevid');
    activateds=  document.getElementsByClassName('activevid');
    return false;
  };

  function switchVideo(newSource,newPoster,video) {
    video.pause();
    video.src=newSource;
    video.poster=newPoster;
    video.load();
  }
})();