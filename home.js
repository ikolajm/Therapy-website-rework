// Nav Menu Click Function
  //Drop Menu Icon
  var icon = $('#drop-main');
  // Nav Menu (Small)
  var snav = $('.nav-sm');
  // Nav Menu (Large)
  var lnav = $('.nav-lg');
  // Treatment Nav (Small)
  var streatMenu = $('.treatment-menu-sm');
  // Treatment Nav (Large)
  var ltreatMenu = $('.treatment-menu-lg');
  // Treatment Menu Dropdown (Small)
  var streatDrop = $('.treatment-drop-sm');
  // Treatment Menu Dropdown (Large)
  var ltreatDrop = $('.treatment-drop-lg');
  // Treatment Menu Icon (Small)
  var sarrow = $('#icon-treatment-sm');
  // Treatment Menu Icon (Large)
  var larrow = $('#icon-treatment-lg');

  // Hide On Load
  $( document ).ready(function() {
      snav.hide();
      streatMenu.hide();
      ltreatMenu.hide();
  });

  // Open Main Navigation (Mobile)
    //Toggle nav menu on Click
    icon.click(function() {
      snav.toggle();
        //Rotate Icon
        icon.toggleClass('spin');
    });

  //Open Treatment (Small)
  streatDrop.click(function() {
    streatMenu.toggle();
      //Rotate Icon
      sarrow.toggleClass('spin2');
  });


  // Treatment Nav (Large)
  ltreatDrop.click(function() {
    ltreatMenu.toggle();
      //Rotate Icon
      larrow.toggleClass('spin2');
  });

// End Menu Click

//Showing and Removing Content With "Active" Class

  //Small Navigation Variables
    var aboutBtnSm = $('#about-btn-sm');
    var cnpBtnSm = $('#cnp-btn-sm');
    var treatmentBtnSm = $('#treatment-btn-sm');
    var appBtnSm = $('#app-btn-sm');
    var ctBtnSm = $('#ct-btn-sm');
    var childBtnSm = $('#child-btn-sm');
    var infantBtnSm = $('#infant-btn-sm');
  // ---

  //Large Navigation Variables
    var aboutBtnLg = $('#about-btn-lg');
    var cnpBtnLg = $('#cnp-btn-lg');
    var treatmentBtnLg = $('#treatment-btn-lg');
    var appBtnLg = $('#app-btn-lg');
    var ctBtnLg = $('#ct-btn-lg');
    var childBtnLg = $('#child-btn-lg');
    var infantBtnLg = $('#infant-btn-lg');
  // ---

  // All Buttons
  var allBtn = $('#about-btn-sm, #cnp-btn-sm, #treatmentBtnSm, #app-btn-sm, #ct-btn-sm, #child-btn-sm, #infant-btn-sm, #about-btn-lg, #cnp-btn-lg, #treatmentBtnLg, #app-btn-lg, #ct-btn-lg, #child-btn-lg, #infant-btn-lg');
  //---

  // Content Div Variables
    var about = $('#about');
    var contact = $('#cnp');
    var approach = $('#approach');
    var couples = $('#couples');
    var playT = $('#play-t');
    var infant = $('#infant');
    var all = $('#about, #cnp, #approach, #couples, #play-t, #infant');
  //---

  // Function (Small)
    aboutBtnSm.click(function() {
      allBtn.removeClass('active-txt');
      aboutBtnSm.addClass('active-txt');
      aboutBtnLg.addClass('active-txt');
      all.removeClass('active');
      about.addClass('active');
    });

    cnpBtnSm.click(function() {
      allBtn.removeClass('active-txt');
      cnpBtnSm.addClass('active-txt');
      cnpBtnLg.addClass('active-txt');
      all.removeClass('active');
      contact.addClass('active');
    });

    appBtnSm.click(function() {
      allBtn.removeClass('active-txt');
      treatmentBtnSm.addClass('active-txt');
      treatmentBtnLg.addClass('active-txt');
      appBtnSm.addClass('active-txt');
      appBtnLg.addClass('active-txt');
      all.removeClass('active');
      approach.addClass('active');
    });

    ctBtnSm.click(function() {
      allBtn.removeClass('active-txt');
      treatmentBtnSm.addClass('active-txt');
      treatmentBtnLg.addClass('active-txt');
      ctBtnSm.addClass('active-txt');
      ctBtnLg.addClass('active-txt');
      all.removeClass('active');
      couples.addClass('active');
    });

    childBtnSm.click(function() {
      allBtn.removeClass('active-txt');
      treatmentBtnSm.addClass('active-txt');
      treatmentBtnLg.addClass('active-txt');
      childBtnSm.addClass('active-txt');
      childBtnLg.addClass('active-txt');
      all.removeClass('active');
      playT.addClass('active');
    });

    infantBtnSm.click(function() {
      allBtn.removeClass('active-txt');
      treatmentBtnSm.addClass('active-txt');
      treatmentBtnLg.addClass('active-txt');
      infantBtnSm.addClass('active-txt');
      infantBtnLg.addClass('active-txt');
      all.removeClass('active');
      infant.addClass('active');
    });
  //---

  // Function (Large)
    aboutBtnLg.click(function() {
      allBtn.removeClass('active-txt');
      aboutBtnSm.addClass('active-txt');
      aboutBtnLg.addClass('active-txt');
      all.removeClass('active');
      about.addClass('active');
    });

    cnpBtnLg.click(function() {
      allBtn.removeClass('active-txt');
      cnpBtnSm.addClass('active-txt');
      cnpBtnLg.addClass('active-txt');
      all.removeClass('active');
      contact.addClass('active');
    });

    appBtnLg.click(function() {
      allBtn.removeClass('active-txt');
      treatmentBtnSm.addClass('active-txt');
      treatmentBtnLg.addClass('active-txt');
      appBtnSm.addClass('active-txt');
      appBtnLg.addClass('active-txt');
      all.removeClass('active');
      approach.addClass('active');
    });

    ctBtnLg.click(function() {
      allBtn.removeClass('active-txt');
      treatmentBtnSm.addClass('active-txt');
      treatmentBtnLg.addClass('active-txt');
      ctBtnSm.addClass('active-txt');
      ctBtnLg.addClass('active-txt');
      all.removeClass('active');
      couples.addClass('active');
    });

    childBtnLg.click(function() {
      allBtn.removeClass('active-txt');
      treatmentBtnSm.addClass('active-txt');
      treatmentBtnLg.addClass('active-txt');
      childBtnSm.addClass('active-txt');
      childBtnLg.addClass('active-txt');
      all.removeClass('active');
      playT.addClass('active');
    });

    infantBtnLg.click(function() {
      allBtn.removeClass('active-txt');
      treatmentBtnSm.addClass('active-txt');
      treatmentBtnLg.addClass('active-txt');
      infantBtnSm.addClass('active-txt');
      infantBtnLg.addClass('active-txt');
      all.removeClass('active');
      infant.addClass('active');
    });
  //---

//End Show/Hide
