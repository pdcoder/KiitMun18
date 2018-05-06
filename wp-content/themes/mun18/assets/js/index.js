//Countdown Timer
var countDownDate = new Date("Sep 30, 2018 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days<10){
  	days = "0"+days;
  }
  if (hours<10){
  	hours = "0"+hours;
  }
  if (minutes<10){
  	minutes = "0" + minutes;
  }
  if (seconds<10){
  	seconds = "0" + seconds;
  }

  jQuery('#beta-first .layer .timer .days').html("<div class='time'>" + days + "</div><p>days</p>");
  jQuery('#beta-first .layer .timer .hours').html("<div class='time'>" + hours + "</div><p>hours</p>");
  jQuery('#beta-first .layer .timer .minutes').html("<div class='time'>" + minutes + "</div><p>mins</p>");
  jQuery('#beta-first .layer .timer .seconds').html("<div class='time'>" + seconds + "</div><p>secs</p>");

}, 1000);


//Navbar Show and Hide
/*jQuery(document).ready(function(){
  var height = jQuery(window).height();

  jQuery(window).scroll(function(){
    if (jQuery(window).scrollTop() > height*3/4){
      jQuery(".navbar").show();
    }else{
      jQuery(".navbar").hide();
    }  
  })
  
})*/

jQuery(".navbar").hide();


//Registration Form Select Delegation Type
jQuery('button#single-delegation').click(function(){
  jQuery('div.single-delegation').show();
  jQuery('div.double-delegation').hide();
  jQuery('div.international-press').hide();
})
jQuery('button#double-delegation').click(function(){
  jQuery('div.single-delegation').hide();
  jQuery('div.double-delegation').show();
  jQuery('div.international-press').hide();
})
jQuery('button#international-press').click(function(){
  jQuery('div.single-delegation').hide();
  jQuery('div.double-delegation').hide();
  jQuery('div.international-press').show();
})


//Registration Form Show Countries

jQuery(document).ready(function(){
  var x1 = jQuery('#committee1').val();
  jQuery('#country1 option').each(function(){
    var y1 = jQuery(this).attr('id');
    if (x1 === y1 || y1 === 'all'){
      jQuery(this).show();
    }else{
      jQuery(this).hide();
    }
  });

  var x2 = jQuery('#committee2').val();
  jQuery('#country2 option').each(function(){
    var y2 = jQuery(this).attr('id');
    if (x2 === y2 || y2 === 'all'){
      jQuery(this).show();
    }else{
      jQuery(this).hide();
    }
  });

  var x3 = jQuery('#committee3').val();
  jQuery('#country3 option').each(function(){
    var y3 = jQuery(this).attr('id');
    if (x3 === y3 || y3 === 'all'){
      jQuery(this).show();
    }else{
      jQuery(this).hide();
    }
  });

  var x4 = jQuery('#committee4').val();
  jQuery('#country4 option').each(function(){
    var y4 = jQuery(this).attr('id');
    if (x4 === y4 || y4 === 'all'){
      jQuery(this).show();
    }else{
      jQuery(this).hide();
    }
  });

  var x5 = jQuery('#committee5').val();
  jQuery('#country5 option').each(function(){
    var y5 = jQuery(this).attr('id');
    if (x5 === y5 || y5 === 'all'){
      jQuery(this).show();
    }else{
      jQuery(this).hide();
    }
  });

  var x6 = jQuery('#committee6').val();
  jQuery('#country6 option').each(function(){
    var y6 = jQuery(this).attr('id');
    if (x6 === y6 || y6 === 'all'){
      jQuery(this).show();
    }else{
      jQuery(this).hide();
    }
  });

  var x7 = jQuery('#committee7').val();
  jQuery('#country7 option').each(function(){
    var y7 = jQuery(this).attr('id');
    if (x7 === y7 || y7 === 'all'){
      jQuery(this).show();
    }else{
      jQuery(this).hide();
    }
  });

  var x8 = jQuery('#committee8').val();
  jQuery('#country8 option').each(function(){
    var y8 = jQuery(this).attr('id');
    if (x8 === y8 || y8 === 'all'){
      jQuery(this).show();
    }else{
      jQuery(this).hide();
    }
  });

  var x9 = jQuery('#committee9').val();
  jQuery('#country9 option').each(function(){
    var y9 = jQuery(this).attr('id');
    if (x9 === y9 || y9 === 'all'){
      jQuery(this).show();
    }else{
      jQuery(this).hide();
    }
  });

  jQuery('#committee1').change(function(){
    var x1 = jQuery('#committee1').val();
    jQuery('#country1 option').each(function(){
      var y1 = jQuery(this).attr('id');
      if (x1 === y1 || y1 === 'all'){
        jQuery(this).show();
      }else{
        jQuery(this).hide();
      }
    });
  });

  jQuery('#committee2').change(function(){
    var x2 = jQuery('#committee2').val();
    jQuery('#country2 option').each(function(){
      var y2 = jQuery(this).attr('id');
      if (x2 === y2 || y2 === 'all'){
        jQuery(this).show();
      }else{
        jQuery(this).hide();
      }
    });
  });

  jQuery('#committee3').change(function(){
    var x3 = jQuery('#committee3').val();
    jQuery('#country3 option').each(function(){
      var y3 = jQuery(this).attr('id');
      if (x3 === y3 || y3 === 'all'){
        jQuery(this).show();
      }else{
        jQuery(this).hide();
      }
    });
  });

  jQuery('#committee4').change(function(){
    var x4 = jQuery('#committee4').val();
    jQuery('#country4 option').each(function(){
      var y4 = jQuery(this).attr('id');
      if (x4 === y4 || y4 === 'all'){
        jQuery(this).show();
      }else{
        jQuery(this).hide();
      }
    });
  });

  jQuery('#committee5').change(function(){
    var x5 = jQuery('#committee5').val();
    jQuery('#country5 option').each(function(){
      var y5 = jQuery(this).attr('id');
      if (x5 === y5 || y5 === 'all'){
        jQuery(this).show();
      }else{
        jQuery(this).hide();
      }
    });
  });

  jQuery('#committee6').change(function(){
    var x6 = jQuery('#committee6').val();
    jQuery('#country6 option').each(function(){
      var y6 = jQuery(this).attr('id');
      if (x6 === y6 || y6 === 'all'){
        jQuery(this).show();
      }else{
        jQuery(this).hide();
      }
    });
  });

  jQuery('#committee7').change(function(){
    var x7 = jQuery('#committee7').val();
    jQuery('#country7 option').each(function(){
      var y7 = jQuery(this).attr('id');
      if (x7 === y7 || y7 === 'all'){
        jQuery(this).show();
      }else{
        jQuery(this).hide();
      }
    });
  });

  jQuery('#committee8').change(function(){
    var x8 = jQuery('#committee8').val();
    jQuery('#country8 option').each(function(){
      var y8 = jQuery(this).attr('id');
      if (x8 === y8 || y8 === 'all'){
        jQuery(this).show();
      }else{
        jQuery(this).hide();
      }
    });
  });

  jQuery('#committee9').change(function(){
    var x9 = jQuery('#committee9').val();
    jQuery('#country9 option').each(function(){
      var y9 = jQuery(this).attr('id');
      if (x9 === y9 || y9 === 'all'){
        jQuery(this).show();
      }else{
        jQuery(this).hide();
      }
    });
  });
})

//Clear Post methods to resubmit on refresh
if ( window.history.replaceState ) {
      window.history.replaceState( null, null, window.location.href );
  }