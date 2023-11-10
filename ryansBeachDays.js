var lives = 3;
var score = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var wear1 = 0;
var wear2 = 0;
var wear3 = 0;
var wear4 = 0;
var totalcoins = 0;
var totalwins = 0;
var outfit1_URL = "https://i.ya-webdesign.com/images/kakao-friends-ryan-png-17.png";
var outfit2_URL = "https://i.ya-webdesign.com/images/kakao-friends-ryan-png.png";
var outfit3_URL = "https://i.ya-webdesign.com/images/kakao-friends-ryan-png-2.png";
var outfit4_URL = "https://www.elsetge.cat/myimg/f/156-1565528_kakao-friends-ryan-png-kakao-friend-gif.png";


//all functions

//Tells player how many coins they got from game
function goUpdate() {
  if (lives == 1) {
      setText("win_coinsearned", "20");
    } else if (lives == 2) {
      setText("win_coinsearned", "50");
    } else if (lives == 3) {
      setText("win_coinsearned", "100");
    } else {
      setText("go_coinsearned", "0");
    }
  setText("go_livesleft", lives);
  setText("win_livesleft", lives);
}

//Adds the coins earned to totalcoins
function gohUpdate() {
  setScreen("homeSn");
  if (lives == 1) {
      totalcoins = totalcoins + 20;
    } else if (lives == 2) {
      totalcoins = totalcoins + 50;
    } else if (lives == 3) {
      totalcoins = totalcoins + 100;
    }
  totalwins = totalwins + 1;
  update();
}

//PARENT FUNCTION
function buy() {
  update();
  onEvent("st_price2", "click", function( ) {
    if (totalcoins >= 100) {
      if (count2 == 0) {
        setImageURL("cl_outfit2", outfit2_URL);
        setScreen("buySn");
        setText("st_price2", " ");
        totalcoins = totalcoins - 100;
        count2 = count2 + 1;
        update();
        setImageURL("st_outfit2", "icon://fa-gratipay");
        setImageURL("by_outfit2", "icon://fa-gratipay");
        setImageURL("er_outfit2", "icon://fa-gratipay");
      }
    } else {
      error();
    }
  });
  onEvent("st_price3", "click", function( ) {
    if (totalcoins >= 200) {
      if (count3 == 0) {
        setImageURL("cl_outfit3", outfit3_URL);
        setScreen("buySn");
        setText("st_price3", " ");
        totalcoins = totalcoins - 200;
        count3 = count3 + 1;
        update();
        setImageURL("st_outfit3", "icon://fa-gratipay");
        setImageURL("by_outfit3", "icon://fa-gratipay");
        setImageURL("er_outfit3", "icon://fa-gratipay");
      }
    } else {
      error();
    }
  });
  onEvent("st_price4", "click", function( ) {
    if (totalcoins >= 300) {
      if (count4 == 0) {
        setImageURL("cl_outfit4", outfit4_URL);
        setScreen("buySn");
        setText("st_price4", " ");
        totalcoins = totalcoins - 300;
        count4 = count4 + 1;
        update();
        setImageURL("st_outfit4", "icon://fa-gratipay");
        setImageURL("by_outfit4", "icon://fa-gratipay");
        setImageURL("er_outfit4", "icon://fa-gratipay");
      }
    } else {
      error();
    }
  });
  update();
}

//CHILD FUNCTION 1
function update() {
  onEvent("win_nxt_btn", "click", function( ) {
    if (totalwins == 1) {
      totalcoins = totalcoins + 200;
      setScreen("hidSn");
      onEvent("h_exit_btn", "click", function( ) {
        setScreen("homeSn");
        setText("hm_totalwins", totalwins);
        setText("hm_totalcoins", totalcoins);
      });
    }
  });
  setText("hm_totalwins", totalwins);
  setText("hm_totalcoins", totalcoins);
  setText("cl_totalcoins", totalcoins);
  setText("cl_totalwins", totalwins);
  setText("st_totalwins", totalwins);
  setText("st_totalcoins", totalcoins);
  setText("by_totalwins", totalwins);
  setText("by_totalcoins", totalcoins);
  setText("er_totalwins", totalwins);
  setText("er_totalcoins", totalcoins);
  setText("cl_count2", count2);
  setText("cl_count3", count3);
  setText("cl_count4", count4);
  setText("hd_totalwins", totalwins);
  setText("hd_totalcoins", totalcoins);
  setText("er2_totalcoins", totalcoins);
  setText("er2_totalwins", totalwins);
  setText("ch_totalwins", totalwins);
  setText("ch_totalcoins", totalcoins);
  
}

//CHILD FUNCTION 2
//ABSTRACTION
function error() {
  onEvent("st_price2", "click", function( ) {
    if (totalcoins >= 100) {
      if (count2 == 1) {
        setScreen("errorSn");
      }
    } else if (totalcoins < 100) {
      setScreen("errorSn");
    }
  });
  onEvent("st_price3", "click", function( ) {
    if (totalcoins >= 200) {
      if (count3 == 1) {
        setScreen("errorSn");
      }
    } else if (totalcoins < 200) {
      setScreen("errorSn");
    }
  });
  onEvent("st_price4", "click", function( ) {
    if (totalcoins >= 300) {
      if (count4 == 1) {
        setScreen("errorSn");
      }
    } else if (totalcoins < 300) {
      setScreen("errorSn");
    }
  });
}

//changes outfit
function wear() {
  onEvent("cl_wear_btn1", "click", function( ) {
    if (wear1 == 0) {
      setImageURL("character", "https://i.ya-webdesign.com/images/kakao-friends-ryan-png-17.png");
      setScreen("changeSn");
      wear1 = 1;
      wear2 = 0;
      wear3 = 0;
      wear4 = 0;
    } else {
      setScreen("errorSn2");
    }
  });
  onEvent("cl_wear_btn2", "click", function( ) {
    if (count2 == 1) {
      if (wear2 == 0) {
        setImageURL("character", "https://i.ya-webdesign.com/images/kakao-friends-ryan-png.png");
        setScreen("changeSn");
        wear1 = 0;
        wear2 = 1;
        wear3 = 0;
        wear4 = 0;
      }
    } else {
      setScreen("errorSn2");
    }
  });
  onEvent("cl_wear_btn3", "click", function( ) {
    if (count3 == 1) {
      if (wear3 == 0) {
        setImageURL("character", "https://i.ya-webdesign.com/images/kakao-friends-ryan-png-2.png");
        setScreen("changeSn");
        wear1 = 0;
        wear2 = 0;
        wear3 = 1;
        wear4 = 0;
      }
    } else {
      setScreen("errorSn2");
    }
  });
  onEvent("cl_wear_btn4", "click", function( ) {
    if (count4 == 1) {
      if (wear4 == 0) {
        setImageURL("character", "https://www.elsetge.cat/myimg/f/156-1565528_kakao-friends-ryan-png-kakao-friend-gif.png");
        setScreen("changeSn");
        wear1 = 0;
        wear2 = 0;
        wear3 = 0;
        wear4 = 1;
      }
    } else {
      setScreen("errorSn2");
    }
  });
}


//all game code

//Start Game
onEvent("welcomeSn", "click", function( ) {
  setScreen("giftSn");
});


//goes to MAIN screen
onEvent("nextBtn", "click", function( ) {
  setScreen("homeSn");
  setImageURL("character", outfit1_URL);
  update();
});


//MAIN GAME
onEvent("hm_start_btn", "click", function( ) {
  setScreen("gameSn");
  lives = 3;
  score = 0;
  setText("gm_livesleft", lives);
  setText("gm_pointsearned", score);
});
onEvent("character", "click", function( ) {
  setPosition("character", randomNumber(10,260), randomNumber(35, 350));
});
onEvent("gm_image", "click", function( ) {
  lives = lives - 1;
  if (lives == 0) {
    setScreen("gameOverSn");
    goUpdate();
  }
  setText("gm_livesleft", lives);
});
onEvent("go_nxt_btn", "click", function( ) {
  setScreen("homeSn");
});
onEvent("character", "click", function( ) {
  score = score + 1;
  if (score == 6) {
    setScreen("winSn");
    goUpdate();
  }
  setText("gm_pointsearned", score);
});
onEvent("win_nxt_btn", "click", function( ) {
  gohUpdate();
});


//all closet screens
onEvent("hm_closet_btn", "click", function( ) {
  setScreen("closetSn");
  wear();
});
onEvent("cl_back_btn", "click", function( ) {
  setScreen("homeSn");
});
onEvent("er2_exit_btn", "click", function( ) {
  setScreen("closetSn");
});
onEvent("ch_exit_btn", "click", function( ) {
  setScreen("closetSn");
});

//all store screens
onEvent("hm_store_btn", "click", function( ) {
  setScreen("storeSn");
  update();
  buy();
});
onEvent("st_back_btn", "click", function( ) {
  setScreen("homeSn");
});

onEvent("st_exit_btn", "click", function( ) {
  setScreen("storeSn");
});
onEvent("er_exit_btn", "click", function( ) {
  setScreen("storeSn");
});

//all rules screens
onEvent("hm_rules_btn", "click", function( ) {
  setScreen("rulesSn");
});
onEvent("rl_back_btn", "click", function( ) {
  setScreen("homeSn");
});


//all help screens
onEvent("hm_help_btn", "click", function( ) {
  setScreen("helpSn");
});
onEvent("hp_back_btn", "click", function( ) {
  setScreen("homeSn");
});


//ALL PHOTOS USED
//Ryan with a basket: https://i.ya-webdesign.com/images/kakao-friends-ryan-png-17.png
//Ryan in a suit: https://i.ya-webdesign.com/images/kakao-friends-ryan-png.png
//Ryan in a hoodie: https://i.ya-webdesign.com/images/kakao-friends-ryan-png-2.png
//Ryan with surfboard: https://www.elsetge.cat/myimg/f/156-1565528_kakao-friends-ryan-png-kakao-friend-gif.png
//arrow on the welcome screen: http://www.pngmart.com/files/9/Curved-Arrow-PNG-Free-Download.png
//store picture: https://image.flaticon.com/icons/png/512/123/123403.png
//closet picture: https://cdn.clipart.email/3ab3ecb56bf5a73af44097671f0bc009_closet-clipart-closet-transparent-free-for-download-on-_512-512.png
//coin image: https://www.iconpacks.net/icons/2/free-coin-icon-2159-thumb.png
//crown image: https://www.freeiconspng.com/uploads/clipart-crown-png-2.png
//helpSn: arrow pointing to games won: http://www.pngmart.com/files/9/Red-Arrow-Background-PNG.png
//helpSn: arrow point to current coins: https://i.ya-webdesign.com/images/hand-drawn-red-arrow-png-2.png
//helpSn: arrow pointing from store: https://hubpng.com/download/t8fuCyiJSH4OyETZxtGpYYAUGgTapWwqVQ1sIWYheD3GTUvB0atY4jska9dV9YIQ1szvslAyUaOQ3Z6213g2SrZdJ7xJS8utw6KozEtdelGJiEvxVtXoUDIwYzobKHD7ZnKqUBMm31Y6x07TOYhzHsfFphTCW5YYSNpdMjBsqyztpKJPL5s7o7NSrNT7IUSSArg9cvwI/large
//helpSn: arrow pointing from closet: https://www.pinclipart.com/picdir/big/43-431580_download-clip-transparent-stock-inspection-icon-free-curved.png
//helpSn: arrow pointing from rules/start: https://i.ya-webdesign.com/images/hand-drawn-red-arrow-png-9.png
//gif on rules screen: https://media.giphy.com/media/YnHd3mELw7KMShu4Kh/giphy.gif
//gif on win screen: https://i.giphy.com/media/TFNbcscr9JUUigDzrZ/source.gif
//gif on game over screen: https://thumbs.gfycat.com/GiganticFailingGiraffe-max-1mb.gif
//beach on game screen: https://i.pinimg.com/originals/21/94/82/219482b14912615ad3e0336ec4f9f1ee.jpg

