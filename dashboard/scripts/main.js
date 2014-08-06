$(function(){
  $(window).load(function(){
    setTimeout(function(){
      $('#loading').hide().next('#content').css('visibility','visible').fadeTo(750,1)
    }, 1500);
  });

  // google.load('visualization', '1.0', {'packages':['corechart']});  
  // Define Gridster for later use
  var gridster = $(".gridster ul").gridster({
    widget_margins: [10,10],
    widget_base_dimensions: [100,100],
    avoid_overlapped_widgets: true,
    resize: {
      enabled:true,
      start: function(e,ui,$widget){
        $widget.find('.title').next('div').css('opacity','.2');
      },
      stop: function(e, ui, $widget){
        var a = $widget.height() - $widget.find('.title').height();
        $widget.find('.title').next('div').height(a.toString());
        $widget.find('.title').next('div').css('opacity','1');
        refreshThis($widget.data('li'));
        serialize();
      }
    },
    draggable: {
      stop: function(event, ui){
        serialize();
      }
    },
    serialize_params: function($w, wgd){
      return {
        col: wgd.col,
        row: wgd.row,
        size_x: wgd.size_x,
        size_y: wgd.size_y,
        HTML: $($w).find('.title').clone().wrap('<p>').parent().html(),
        chartDiv: $($w).find('.title').next('div').attr('id'),
        data: $($w).data('li'),
        refresh: $($w).data('refresh')
      }
    }
  }).data('gridster');
    // Storage method to store the serialized gridster object array and retrieve it later
  Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
  }

  Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
  }
  var loadGrid = function(){
    gridster.remove_all_widgets();
    var a = localStorage.getObject('cloudWidgetArray')
    for (var i = 0; i < a.length; i++) {
      gridster.add_widget("<li class='no-dots' data-refresh="+a[i].refresh+" data-li="+a[i].data+">"+a[i].HTML+"<div style='height:160px' id='"+a[i].chartDiv+"'></div></li>", a[i].size_x, a[i].size_y, a[i].col, a[i].row) ;
    };
  };
  if(localStorage.cloudWidgetArray){
    loadGrid();
  }
  var chartheight = function(){
    var widgetArr = $('.gridster li').length;
    for (var i = 0; i < widgetArr; i++) {
      var a = $('.gridster li:eq('+i+')').height() - $('.gridster li:eq('+i+') .title').height();
      $('.gridster li:eq('+i+')').find('.title').next('div').height(a.toString()-10).next('div').height(a.toString());
    };
  };

  // Set Intervals for each widget to redraw. Works with globalClick
  // var setAllIntervals = function(globalClick, time){
  //   var time = parseInt($('#set-interval').find('.slider-label-active').attr('for'));
  //   if(globalClick===1){
  //     setInterval(function(){
  //       drawImpressionsWidget($('[data-li=1]').data('refresh')||"daily");
  //     }, time*60000)
  //   }  
  //   if(globalClick===5){
  //     setInterval(function(){
  //       drawHotspotMapsWidget()
  //     }, time*60000)
  //   } 
  //    if(globalClick===6){
  //     setInterval(function(){
  //       drawPieChartWidget()
  //     }, time*60000)
  //   }  
  //   if(globalClick===4){
  //     setInterval(function(){
  //       drawTableWidget()
  //     }, time*60000)
  //   }
  // };
  // Make sure the foundation reveal modal gets focus when it is opened
  $(document).foundation('reveal', {
    opened: function(){
      $(this).find('input').focus();
    }
  });
  // Set a global variable on the window object to know which anchor tag fired the event and should be edited/deleted
  $('body').on('click', '.anchor-click', function(e){
    var x = e.currentTarget;
    window.globalClick = $(x).data('anchor-click');
    $('#edit-delete-modal').foundation('reveal', 'open');
    var ph = $(x).closest('span').prev().text();
    $('#name-change').attr('placeholder', ph)
  });
  var serialize = function(){
    var something = gridster.serialize();
    localStorage.setObject('cloudWidgetArray', something);
  };
  var ddCheck = function(){
    var arr = [];
    $('[data-li]').each(function(){
      arr.push($(this).data('li'));
    });
    for (var i = 0, _x=arr.length; i < _x; i++) {
      $('[data-dd='+arr[i]+']').hide();
    };
    if($('#add-widget li:visible').length<1){
      $('#add-widget').css('visibility','hidden');
    } else {
      $('#add-widget').css('visibility', 'visible');
    }
  };
  setTimeout(function(){
    ddCheck();
  }, 1000);
  // Section for adding widgets with proper data IDs
  $('#widget-type li a').click(function(type){
    var a = $('.gridster li').length+1;
    var b = $(this).attr('id');
    if(b==="add-impressions-widget"){
      var a = 1;
      var c = "impressions-widget";
    }
    if(b==="add-online-users-widget"){
      var c = "online-users-widget";
      var a = 3;
    }
    if(b==="add-new-users-widget"){
      var c = "new-users-widget";
      var a = 2;
    }
    if(b==="add-table-widget"){
      var c = "table-widget";
      var a = 4;
    }
    if(b==="add-hotspot-maps-widget"){
      var c = "hotspot-maps-widget";
      var a = 5;
    }
    if(b==="add-pie-chart-widget"){
      var c = "pie-chart-widget";
      var a = 6;
    }
    if(b==="add-wifi-area-widget"){
      var c = "wifi-area-widget";
      var a = 10;
      gridster.add_widget("<li class='no-dots' data-li="+a+"><div class='title'><span class='left' data-name='10'>Wifi Area</span><span class='right'><button class='tiny operational-button'>Add New</button><a href='#' data-anchor-click='10' data-reveal-id='edit-delete-modal' class='anchor-click'><i class='fa fa-cog'></i></a></span></div><div id="+c+"></div>",3,2);
      serialize();
      refreshAll();
      setTimeout(function(){
      ddCheck();
      }, 1000);
      return;
    }
    if(b==="add-comparison-widget"){
      var c = "comparison-widget";
      var a = 11;
      gridster.add_widget("<li class='no-dots' data-li="+a+"><div class='title'><span data-name="+a+" class='left'>Comparison Widget</span><span class='right'><a href='#' data-reveal-id='base-compare-modal' class='button tiny operational-button'>Compare</a><a href='#' data-anchor-click="+a+" data-reveal-id='edit-delete-modal' class='anchor-click'><i class='fa fa-cog'></i></a></span></div><div id="+c+"></div>",3,2);
      serialize();
      refreshAll();
      setTimeout(function(){
      ddCheck();
      }, 1000);
      return;
    }
    gridster.add_widget('<li class="no-dots" data-li="'+a+'"><div class="title"><span class="left" data-name="'+a+'">App Name</span><span class="right"><a href="#" data-anchor-click="'+a+'" data-reveal-id="edit-delete-modal" class="anchor-click"><i class="fa fa-cog"></i></a></span></div><div id="'+c+'"></div>',3,2);
    serialize();
    refreshAll();
    setTimeout(function(){
    ddCheck();
    }, 1000);


  });
  // Click Handler for changing the name of a widget
  $('.submit-name-change').click(function(){
    var name = $('#name-change').val();
    if(name){
      $('[data-name=' + globalClick + ']').html(name);
    };
    var radioSelected = $('#sort-by-input ins.slider-level:hidden').data('radio');
    console.log(radioSelected)
    chartDraw(globalClick, radioSelected);
    $('[data-li='+globalClick+']').data({refresh: radioSelected});
    $('#sort-by-modal').foundation('reveal', 'close');
    $('#name-change').val("");
    $('#edit-delete-modal').foundation('reveal', 'close');
    serialize();
  });
  // Alternate handler to deal with enter in input field instead of button click
  $('form').submit(function(event){
    $('.submit-name-change').trigger('click');
    return false
  });
  // Widget removal click handler
  $('.remove-widget').click(function(){
    $('#edit-delete-modal').foundation('reveal', 'close');
    gridster.remove_widget($('[data-li='+globalClick+']'), function(){
      $('[data-li='+globalClick+']').remove();
      $('[data-dd='+globalClick+']').show();
    });
    serialize();
    setTimeout(function(){
      ddCheck();
    }, 1000);
  });
  // Reset Widgets Handler
  $('#reset-widgets').click(function(){
    localStorage.removeItem('cloudWidgetArray');
    window.location.reload();
    });
  // Hide the radio slider on page load
  if($('#no-radios.active')){
    $('#radios').hide();
  }
  // Add Sum method to array constructor for calculation in google.js
  Array.prototype.sum = function(selector) {
    if (typeof selector !== 'function') {
        selector = function(item) {
            return item;
        }
    }
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += selector(this[i]);
    }
    return sum;
  };
  // Function to draw all charts based on click handlers below
  var chartDraw = function(globalClick, radioSelected){
    if(globalClick===1){
      drawImpressionsWidget(radioSelected);
    }
    
  };
  // $(window).resize(function (event) {
  //   var radioSelected = $('ins.slider-level:hidden').data('radio');
  //   var tabSelected = $('.tabs li.active a').attr('href');
  //   chartDraw(tabSelected);
  // });
  $('.operational-button').click(function(){
    window.globalClick = $(this).closest('li').data('li');
  });

  // // Redraw/Draw chart on radio click
  // $('#radios').click(function(){
  //   var tabSelected = $('.tabs li.active a').attr('href');
  //   chartDraw(globalClick, tabSelected);
  // });
  // // Redraw/Draw chart on tab click
  // $('.tab-title').click(function(){
  //   $(this).find('.text').hide().next('.icon').fadeIn(350);
  //   var tabSelected = $(this).children().attr('href');
  //   if(tabSelected==='#overview'){
  //     $('#radios').hide();
  //     $('#widget-buttons-row').show();
  //   }
  //   else if(tabSelected==="#traffic"){
  //     $('#radios').hide();
  //   }
  //   else {
  //     $('#radios').show();
  //     $('#widget-buttons-row').hide();
  //   }
    // Set Timeout to deal with buggy tab behavior
  //    setTimeout(function(){
  //     chartDraw(tabSelected);
  //   }, 5);
  // });
  // Initialize the radio slider
  // $('#radios').radiosToSlider();
  $('#set-interval').radiosToSlider();
  $('#sort-by-input').radiosToSlider();
  $('#compare-sort').radiosToSlider();
  // Initialize Foundation  
  $(document).foundation();
  // DOM Ready end
  // Call the function to set chart heights
  setTimeout(function(){
    chartheight();
    drawImpressionsWidget();
  }, 500)
  var refreshAll = function(){
    chartheight();
    if($('#impressions-widget').length>0){
      var sortBy = $('[data-li=1]').data('refresh')
      drawImpressionsWidget(sortBy || "daily");
    }    
    if($('#new-users-widget').length>0){
      var sortBy = $('[data-li=2]').data('refresh')
      drawImpressionsWidget2(sortBy || "daily");
    }     
    if($('#online-users-widget').length>0){
      var sortBy = $('[data-li=3]').data('refresh')
      drawImpressionsWidget3(sortBy || "daily");
    }    
    if($('#table-widget').length>0){
      var sortBy = $('[data-li=4]').data('refresh')
      drawTable(sortBy || "daily");
    }    
    if($('#hotspot-maps-widget').length>0){
      var sortBy = $('[data-li=5]').data('refresh')
      drawHotspotMapsWidget(sortBy || "daily");
    }    
    if($('#pie-chart-widget').length>0){
      var sortBy = $('[data-li=6]').data('refresh')
      drawPieChartWidget(sortBy || "daily");
    }    
    if($('#chart7').length>0){
      var sortBy = $('[data-li=7]').data('refresh')
      drawPieChartWidget2(sortBy || "daily");
    }    
    if($('#chart8').length>0){
      var sortBy = $('[data-li=8]').data('refresh')
      drawTable2(sortBy || "daily");
    } 
    if($('#chart9').length>0){
      var sortBy = $('[data-li=9]').data('refresh')
      drawHotspotMapsWidget2(sortBy || "daily");    
    }
    if($('#wifi-area-widget').length>0){
      var sortBy = $('[data-li=10]').data('refresh')
      drawWifiArea(sortBy || "daily");    
    }
    if($('#comparison-widget').length>0){
      var sortBy = $('[data-li=11]').data('refresh')
      drawComparisonWidget("impressions","new-users","daily");    
    }
    if($('#customer-loyalty-widget').length>0){
      var sortBy = $('[data-li=13]').data('refresh')
      drawCustomerLoyaltyWidget();    
    }
    if($('#daily-average-session-time-widget').length>0){
      var sortBy = $('[data-li=19]').data('refresh')
      drawDailyAverageSessionTimeWidget();    
    }
    if($('#new-customer-sources-widget').length>0){
      var sortBy = $('[data-li=20]').data('refresh')
      drawNewCustomerSourcesWidget();    
    }
    if($('#live-view-widget').length>0){
      var sortBy = $('[data-li=18]').data('refresh')
      drawLiveViewWidget();    
    }
    if($('#daytime-loyalty-widget').length>0){
      var sortBy = $('[data-li=17]').data('refresh')
      drawDaytimeLoyaltyWidget();    
    }
    if($('#demographics-widget').length>0){
      var sortBy = $('[data-li=14]').data('refresh')
      drawDemographicsWidget();    
    }
    if($('#customer-sources-widget').length>0){
      var sortBy = $('[data-li=16]').data('refresh')
      drawCustomerSourcesWidget();    
    }
    if($('#customer-devices-widget').length>0){
      var sortBy = $('[data-li=15]').data('refresh')
      drawCustomerDevicesWidget();    
    }
    if($('#customer-devices-widget-table').length>0){
      drawCustomerDevicesWidgetTable();    
    }

  };
  // Submit Handler for Comparison Widget with base data, comparison data, and interval
  $('#submit-compare').click(function(){
    var base = $('select[name=base]').val();
    var compare = $('select[name=compare]').val();
    var radioSelected = $('#compare-sort ins.slider-level:hidden').data('radio');
    $('[data-li='+globalClick+']').data({refresh: radioSelected});
    drawComparisonWidget(base,compare,radioSelected);
    $('#base-compare-modal').foundation('reveal', 'close');
  });
  setTimeout(function(){
    refreshAll();
  }, 500);
  setInterval(function(){
    refreshAll();
  }, 300000);
  var refreshThis = function(wid){
    chartheight();
    if(wid===1){
      drawImpressionsWidget($('[data-li=1]').data('refresh')||"daily");
    }
    if(wid===2){
      drawImpressionsWidget2($('[data-li=2]').data('refresh')||"daily");
    }
    if(wid===3){
      drawImpressionsWidget3($('[data-li=3]').data('refresh')||"daily");
    }
    if(wid===4){
      drawTable($('[data-li=4]').data('refresh')||"daily");
    }
    if(wid===5){
      drawHotspotMapsWidget($('[data-li=5]').data('refresh')||"daily");
    }
    if(wid===6){
      drawPieChartWidget($('[data-li=6]').data('refresh')||"daily");
    }
    if(wid===7){
      drawPieChartWidget2($('[data-li=7]').data('refresh')||"daily");
    }
    if(wid===8){
      drawTable2($('[data-li=8]').data('refresh')||"daily");
    }
    if(wid===9){
      drawHotspotMapsWidget2($('[data-li=9]').data('refresh')||"daily");
    }
    if(wid===10){
      drawWifiArea($('[data-li=10]').data('refresh')||"daily");
    }
    if(wid===11){
      drawComparisonWidget("impressions", "new-users", $('[data-li=11]').data('refresh')||"daily")
    }
    
  };

});
