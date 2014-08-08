 // google.load("visualization", "1", {packages:["corechart", "geochart"]}); 
  // var updateSpans = function(min, avg, max){
  //   $('.content.active').find('#min').fadeOut(0, function(){
  //     $('.content.active').find("#min").text(min).fadeIn(500);
  //   });$('.content.active').find('#avg').fadeOut(0, function(){
  //     $('.content.active').find("#avg").text(avg).fadeIn(500);
  //   });$('.content.active').find('#max').fadeOut(0, function(){
  //     $('.content.active').find("#max").text(max).fadeIn(500);
  //   });
  // };
    // function drawImpressionsVar(radioSelected){
    //   var radioSelected = $('#radios ins.slider-level:hidden').data('radio');
    //   var dataDaily = google.visualization.arrayToDataTable([
    //     ['Hour', 'Impressions'],
    //     ['0',  0],
    //     ['1',  0],
    //     ['2',  0],
    //     ['3',  0],
    //     ['4',  0],
    //     ['5', 0],
    //     ['6', 0],
    //     ['7', 0],
    //     ['8', 0],
    //     ['9', 0],
    //     ['10', 0],
    //     ['11', 0],
    //     ['12', 0],
    //     ['13', 0],
    //     ['14', 0],
    //     ['15', 0],
    //     ['16', 0],
    //     ['17', 0],
    //     ['18', 0],
    //     ['19', 0],
    //     ['20', 0],
    //     ['21', 0],
    //     ['22', 0],
    //     ['23', 0],
    //     ['24', 0],
    //   ]);
    //   var dailyArray = [1,3,4,10,20,37,103,32,120,382,85,22,21,3,4,10,20,37,103,32,120,382,85,22,2];
    //   var dataWeekly = google.visualization.arrayToDataTable([
    //     ['Day', 'Impressions'],
    //     ['Mon', 0],
    //     ['Tue', 0],
    //     ['Wed', 0],
    //     ['Thu', 0],
    //     ['Fri', 0],
    //     ['Sat', 0],
    //     ['Sun', 0],
    //   ]);
    //   var weeklyArray = [1222,682,987,172,1042,2042,1529];
    //   var dataMonthly = google.visualization.arrayToDataTable([
    //     ['Week', 'Impressions'],
    //     ['Week 1', 0],
    //     ['Week 2', 0],
    //     ['Week 3', 0],
    //     ['Week 4', 0],
    //   ]);
    //   var monthlyArray = [5862,4209,2021,3673]
    //   var dataYearly = google.visualization.arrayToDataTable([
    //     ['Monthly', 'Impressions'],
    //     ['Jan', 0],
    //     ['Feb', 0],
    //     ['Mar', 0],
    //     ['Apr', 0],
    //     ['May', 0],
    //     ['Jun', 0],
    //     ['Jul', 0],
    //     ['Aug', 0],
    //     ['Sep', 0],
    //     ['Oct', 0],
    //     ['Nov', 0],
    //     ['Dec', 0],
    //   ]);
    //   var yearlyArray = [32000,12220,6820,9870,1720,10420,20420,1529,10293,9852,20482,45000]
    //   if(radioSelected==="daily"){
    //     var data = dataDaily;
    //     var arr = dailyArray;
    //     var calculatedMaxValue = Math.max.apply(null, dailyArray);
    //     var calculatedMinValue = Math.min.apply(null, dailyArray);
    //     var calculatedAvgValue = Math.round((arr.sum()/arr.length));
    //   }
    //   if(radioSelected==="weekly"){
    //     var data = dataWeekly;
    //     var arr = weeklyArray;
    //     var calculatedMaxValue = Math.max.apply(null, weeklyArray);
    //     var calculatedMinValue = Math.min.apply(null, weeklyArray);
    //     var calculatedAvgValue = Math.round((arr.sum()/arr.length));
    //   }
    //   if(radioSelected==="yearly"){
    //     var data = dataYearly;
    //     var arr =  yearlyArray;
    //     var calculatedMaxValue = Math.max.apply(null, yearlyArray); 
    //     var calculatedMinValue = Math.min.apply(null, yearlyArray);
    //     var calculatedAvgValue = Math.round((arr.sum()/arr.length)); 
    //   }
    //   if(radioSelected==="monthly"){
    //     var data = dataMonthly;
    //     var arr = monthlyArray;
    //     var calculatedMaxValue = Math.max.apply(null, monthlyArray); 
    //     var calculatedMinValue = Math.min.apply(null, monthlyArray);
    //     var calculatedAvgValue = Math.round((arr.sum()/arr.length)); 
    //   }
    //   var options = {
    //   title: 'Impressions',
    //   chartArea:{width:"80%",height:"80%"},
    //   vAxis: {minValue: 0, maxValue: calculatedMaxValue},
    //   hAxis: {minValue: 0},
    //   height: 600,
    //   colors: ["cornflowerblue"],
    //   legend: {position: 'none'},
    //   animation: {
    //     duration: 750,
    //     },
    //   };
    //   var chart = new google.visualization.ColumnChart(document.getElementById('impression-charts'));
    //   chart.draw(data, options);
    //   var row=0;
    //   for (var i = 0; i < arr.length; i++) {
    //     data.setValue(row, 1, arr[i]);
    //     row++;
    //   };
    //   chart.draw(data, options);
    //   $(function(){
    //   updateSpans(calculatedMaxValue,calculatedAvgValue,calculatedMinValue)
    //   });
    // }
  function drawImpressionsWidget(radioSelected){
    var dataDaily = google.visualization.arrayToDataTable([
      ['Hour', 'Impressions'],
      ['0',  0],
      ['1',  0],
      ['2',  0],
      ['3',  0],
      ['4',  0],
      ['5',  0],
      ['6',  0],
      ['7',  0],
      ['8',  0],
      ['9',  0],
      ['10',  0],
      ['11',  0],
      ['12',  0],
      ['13',  0],
      ['14',  0],
      ['15',  0],
      ['16',  0],
      ['17',  0],
      ['18',  0],
      ['19', 0],
      ['20', 0],
      ['21', 0],
      ['22', 0],
      ['23', 0],
      ['24', 0],
    ]);
    $.get('https://controlpaneleuprimary.cloud4wi.com/dashboardapi/charts.php',
      function(info, success){
        var ajaxData = [];
        var row = 0;
        for (var i = 0, x=info.length; i < x; i++) {
          ajaxData.push(info[i][1]);
        };
        var data = dataDaily;
        var arr = ajaxData;
        var calculatedMaxValue = Math.max.apply(null, ajaxData);
        var calculatedMinValue = Math.min.apply(null, ajaxData);
        var options = {
          chartArea:{width:"80%",height:"80%"},
          vAxis: {minValue: 0, maxValue: calculatedMaxValue},
          hAxis: {minValue: 0},
          colors: ["cornflowerblue"],
          legend: {position: 'none'},
          animation: {
          duration: 750,
          },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById('impressions-widget'));
        chart.draw(data, options);
        var weeklyArray = [1222,682,987,172,1042,2042,1529];
        var monthlyArray = [5862,4209,2021,3673];
        var yearlyArray = [32000,12220,6820,9870,1720,10420,20420,1529,10293,9852,20482,45000];
        if (radioSelected==="weekly"){
          data.removeRows(7,18);
          var calculatedMaxValue = Math.max.apply(null, weeklyArray);
          var calculatedMinValue = Math.min.apply(null, weeklyArray);
          for (var i = 0; i < weeklyArray.length; i++) {
            data.setValue(row, 1, weeklyArray[i]);
            row++;
          }
        } 
        else if (radioSelected==="monthly"){
          var calculatedMaxValue = Math.max.apply(null, monthlyArray);
          var calculatedMinValue = Math.min.apply(null, monthlyArray);
          data.removeRows(4, 21);
          for (var i = 0; i < monthlyArray.length; i++) {
            data.setValue(row, 1, monthlyArray[i]);
            row++;
          }
        }
        else if(radioSelected==="yearly"){
          var calculatedMaxValue = Math.max.apply(null, yearlyArray);
          var calculatedMinValue = Math.min.apply(null, yearlyArray);
          data.removeRows(12, 13);
          for (var i = 0; i < yearlyArray.length; i++) {
            data.setValue(row, 1, yearlyArray[i]);
            row++;
          }
        } else {
          for (var i = 0; i < ajaxData.length; i++) {
            data.setValue(row, 1, ajaxData[i]);
            row++;
          }
        }
        
        chart.draw(data, options);
      });
    };
      function drawImpressionsWidget2(){
        var dataDaily = google.visualization.arrayToDataTable([
          ['Hour', 'Impressions'],
          ['0',  0],
          ['1',  0],
          ['2',  0],
          ['3',  0],
          ['4',  0],
          ['5',  0],
          ['6',  0],
          ['7',  0],
          ['8',  0],
          ['9',  0],
          ['10',  0],
          ['11',  0],
          ['12',  0],
          ['13',  0],
          ['14',  0],
          ['15',  0],
          ['16',  0],
          ['17',  0],
          ['18',  0],
          ['19', 0],
          ['20', 0],
          ['21', 0],
          ['22', 0],
          ['23', 0],
          ['24', 0],
        ]);
        $.get('https://controlpaneleuprimary.cloud4wi.com/dashboardapi/charts.php',
          function(info, success){
            var ajaxData = [];
            var row = 0;
            for (var i = 0, x=info.length; i < x; i++) {
              ajaxData.push(info[i][1]);
            };
            var data = dataDaily;
            var arr = ajaxData;
            var calculatedMaxValue = Math.max.apply(null, ajaxData);
            var calculatedMinValue = Math.min.apply(null, ajaxData);
            var options = {
            chartArea:{width:"80%",height:"80%"},
            vAxis: {minValue: 0, maxValue: calculatedMaxValue},
            hAxis: {minValue: 0},
            colors: ["cornflowerblue"],
            legend: {position: 'none'},
            animation: {
              duration: 750,
              },
            };
            var chart = new google.visualization.ColumnChart(document.getElementById('new-users-widget'));
            chart.draw(data, options);
            for (var i = 0; i < ajaxData.length; i++) {
              data.setValue(row, 1, ajaxData[i]);
              row++;
            };
            chart.draw(data, options);
          });
        };
          function drawImpressionsWidget3(){
            var dataDaily = google.visualization.arrayToDataTable([
              ['Hour', 'Impressions'],
              ['0',  0],
              ['1',  0],
              ['2',  0],
              ['3',  0],
              ['4',  0],
              ['5',  0],
              ['6',  0],
              ['7',  0],
              ['8',  0],
              ['9',  0],
              ['10',  0],
              ['11',  0],
              ['12',  0],
              ['13',  0],
              ['14',  0],
              ['15',  0],
              ['16',  0],
              ['17',  0],
              ['18',  0],
              ['19', 0],
              ['20', 0],
              ['21', 0],
              ['22', 0],
              ['23', 0],
              ['24', 0],
            ]);
            $.get('https://controlpaneleuprimary.cloud4wi.com/dashboardapi/charts.php',
              function(info, success){
                var ajaxData = [];
                var row = 0;
                for (var i = 0, x=info.length; i < x; i++) {
                  ajaxData.push(info[i][1]);
                };
                var data = dataDaily;
                var arr = ajaxData;
                var calculatedMaxValue = Math.max.apply(null, ajaxData);
                var calculatedMinValue = Math.min.apply(null, ajaxData);
                var options = {
                chartArea:{width:"80%",height:"80%"},
                vAxis: {minValue: 0, maxValue: calculatedMaxValue},
                hAxis: {minValue: 0},
                colors: ["cornflowerblue"],
                legend: {position: 'none'},
                animation: {
                  duration: 750,
                  },
                };
                var chart = new google.visualization.ColumnChart(document.getElementById('online-users-widget'));
                chart.draw(data, options);
                for (var i = 0; i < ajaxData.length; i++) {
                  data.setValue(row, 1, ajaxData[i]);
                  row++;
                };
                chart.draw(data, options);
              });
            };
    //   function drawUserActivity(radioSelected){
    //     var radioSelected = $('#radios ins.slider-level:hidden').data('radio');
    //     var dataDaily = google.visualization.arrayToDataTable([
    //       ['Hour', 'Impressions'],
    //       ['0',  0],
    //       ['2',  0],
    //       ['4',  0],
    //       ['6',  0],
    //       ['8',  0],
    //       ['10', 0],
    //       ['12', 0],
    //       ['14', 0],
    //       ['16', 0],
    //       ['18', 0],
    //       ['20', 0],
    //       ['22', 0],
    //       ['24', 0],
    //     ]);
    //     var dailyArray = [1,3,4,10,20,37,103,32,120,382,85,22,2];
    //     var dataWeekly = google.visualization.arrayToDataTable([
    //       ['Day', 'Impressions'],
    //       ['Mon', 0],
    //       ['Tue', 0],
    //       ['Wed', 0],
    //       ['Thu', 0],
    //       ['Fri', 0],
    //       ['Sat', 0],
    //       ['Sun', 0],
    //     ]);
    //     var weeklyArray = [1222,682,987,172,1042,2042,1529];
    //     var dataMonthly = google.visualization.arrayToDataTable([
    //       ['Week', 'Impressions'],
    //       ['Week 1', 0],
    //       ['Week 2', 0],
    //       ['Week 3', 0],
    //       ['Week 4', 0],
    //     ]);
    //     var monthlyArray = [5862,4209,2021,3673]
    //     var dataYearly = google.visualization.arrayToDataTable([
    //       ['Monthly', 'Impressions'],
    //       ['Jan', 0],
    //       ['Feb', 0],
    //       ['Mar', 0],
    //       ['Apr', 0],
    //       ['May', 0],
    //       ['Jun', 0],
    //       ['Jul', 0],
    //       ['Aug', 0],
    //       ['Sep', 0],
    //       ['Oct', 0],
    //       ['Nov', 0],
    //       ['Dec', 0],
    //     ]);
    //     var yearlyArray = [32000,12220,6820,9870,1720,10420,20420,1529,10293,9852,20482,45000]
    //     if(radioSelected==="daily"){
    //       var data = dataDaily;
    //       var arr = dailyArray;
    //       var calculatedMaxValue = Math.max.apply(null, dailyArray)
    //       var calculatedMinValue = Math.min.apply(null, dailyArray);
    //       var calculatedAvgValue = Math.round((arr.sum()/arr.length)); 
    //     }
    //     if(radioSelected==="weekly"){
    //       var data = dataWeekly;
    //       var arr = weeklyArray;
    //       var calculatedMaxValue = Math.max.apply(null, weeklyArray)
    //       var calculatedMinValue = Math.min.apply(null, weeklyArray);
    //       var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
    //     }
    //     if(radioSelected==="yearly"){
    //       var data = dataYearly;
    //       var arr =  yearlyArray;
    //       var calculatedMaxValue = Math.max.apply(null, yearlyArray)
    //       var calculatedMinValue = Math.min.apply(null, yearlyArray);
    //       var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
    //     }
    //     if(radioSelected==="monthly"){
    //       var data = dataMonthly;
    //       var arr = monthlyArray;
    //       var calculatedMaxValue = Math.max.apply(null, monthlyArray)
    //       var calculatedMinValue = Math.min.apply(null, monthlyArray);
    //       var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
    //     }
    //     var options = {
    //     title: 'Online Users',
    //     chartArea:{width:"80%",height:"80%"},
    //     vAxis: {minValue: 0, maxValue: calculatedMaxValue},
    //     hAxis: {minValue: 0},
    //     height: 500,
    //     colors: ["#aaa"],
    //     legend: {position: 'none'},
    //     animation: {
    //       duration: 750,
    //       },
    //     };
    //     var chart = new google.visualization.ComboChart(document.getElementById('user-activity-charts'));
    //     chart.draw(data, options);
    //     var row=0;
    //     for (var i = 0; i < arr.length; i++) {
    //       data.setValue(row, 1, arr[i]);
    //       row++;
    //     };
    //     chart.draw(data, options);
    //     updateSpans(calculatedMaxValue,calculatedAvgValue,calculatedMinValue)
    // }
    //   function drawRegisteredUsers(radioSelected){
    //     var radioSelected = $('#radios ins.slider-level:hidden').data('radio');
    //     var dataDaily = google.visualization.arrayToDataTable([
    //       ['Hour', 'Impressions'],
    //       ['0',  0],
    //       ['2',  0],
    //       ['4',  0],
    //       ['6',  0],
    //       ['8',  0],
    //       ['10', 0],
    //       ['12', 0],
    //       ['14', 0],
    //       ['16', 0],
    //       ['18', 0],
    //       ['20', 0],
    //       ['22', 0],
    //       ['24', 0],
    //     ]);
    //     var dailyArray = [1,3,4,10,20,37,103,32,120,382,85,22,2];
    //     var dataWeekly = google.visualization.arrayToDataTable([
    //       ['Day', 'Impressions'],
    //       ['Mon', 0],
    //       ['Tue', 0],
    //       ['Wed', 0],
    //       ['Thu', 0],
    //       ['Fri', 0],
    //       ['Sat', 0],
    //       ['Sun', 0],
    //     ]);
    //     var weeklyArray = [1222,682,987,172,1042,2042,1529];
    //     var dataMonthly = google.visualization.arrayToDataTable([
    //       ['Week', 'Impressions'],
    //       ['Week 1', 0],
    //       ['Week 2', 0],
    //       ['Week 3', 0],
    //       ['Week 4', 0],
    //     ]);
    //     var monthlyArray = [5862,4209,2021,3673]
    //     var dataYearly = google.visualization.arrayToDataTable([
    //       ['Monthly', 'Impressions'],
    //       ['Jan', 0],
    //       ['Feb', 0],
    //       ['Mar', 0],
    //       ['Apr', 0],
    //       ['May', 0],
    //       ['Jun', 0],
    //       ['Jul', 0],
    //       ['Aug', 0],
    //       ['Sep', 0],
    //       ['Oct', 0],
    //       ['Nov', 0],
    //       ['Dec', 0],
    //     ]);
    //     var yearlyArray = [32000,12220,6820,9870,1720,10420,20420,1529,10293,9852,20482,45000]
    //     if(radioSelected==="daily"){
    //       var data = dataDaily;
    //       var arr = dailyArray;
    //       var calculatedMaxValue = Math.max.apply(null, dailyArray)
    //       var calculatedMinValue = Math.min.apply(null, dailyArray)
    //       var calculatedAvgValue = Math.round((arr.sum()/arr.length));  

    //     }
    //     if(radioSelected==="weekly"){
    //       var data = dataWeekly;
    //       var arr = weeklyArray;
    //       var calculatedMaxValue = Math.max.apply(null, weeklyArray)
    //       var calculatedMinValue = Math.min.apply(null, weeklyArray)
    //       var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
    //     }
    //     if(radioSelected==="yearly"){
    //       var data = dataYearly;
    //       var arr =  yearlyArray;
    //       var calculatedMaxValue = Math.max.apply(null, yearlyArray)
    //       var calculatedMinValue = Math.min.apply(null, yearlyArray)
    //       var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
    //     }
    //     if(radioSelected==="monthly"){
    //       var data = dataMonthly;
    //       var arr = monthlyArray;
    //       var calculatedMaxValue = Math.max.apply(null, monthlyArray)
    //       var calculatedMinValue = Math.min.apply(null, monthlyArray)
    //       var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
    //     }
    //     var options = {
    //     title: 'User Registration',
    //     chartArea:{width:"80%",height:"80%"},
    //     vAxis: {minValue: 0, maxValue: calculatedMaxValue},
    //     hAxis: {minValue: 0},
    //     height: 500,
    //     colors: ["#aaa"],
    //     legend: {position: 'none'},
    //     animation: {
    //       duration: 750,
    //       },
    //     };
    //     var chart = new google.visualization.ColumnChart(document.getElementById('registered-users-charts'));
    //     chart.draw(data, options);
    //     var row=0;
    //     for (var i = 0; i < arr.length; i++) {
    //       data.setValue(row, 1, arr[i]);
    //       row++;
    //     };
    //     chart.draw(data, options);
    //     updateSpans(calculatedMaxValue,calculatedAvgValue,calculatedMinValue);
    //   }
    //     function drawTraffic(radioSelected){
    //       var radioSelected = $('#radios ins.slider-level:hidden').data('radio');
    //       var dataDaily = google.visualization.arrayToDataTable([
    //         ['Hour', 'Impressions'],
    //         ['0',  0],
    //         ['2',  0],
    //         ['4',  0],
    //         ['6',  0],
    //         ['8',  0],
    //         ['10', 0],
    //         ['12', 0],
    //         ['14', 0],
    //         ['16', 0],
    //         ['18', 0],
    //         ['20', 0],
    //         ['22', 0],
    //         ['24', 0],
    //       ]);
    //       var dailyArray = [1,3,4,10,20,37,103,32,120,382,85,22,2];
    //       var dataWeekly = google.visualization.arrayToDataTable([
    //         ['Day', 'Impressions'],
    //         ['Mon', 0],
    //         ['Tue', 0],
    //         ['Wed', 0],
    //         ['Thu', 0],
    //         ['Fri', 0],
    //         ['Sat', 0],
    //         ['Sun', 0],
    //       ]);
    //       var weeklyArray = [1222,682,987,172,1042,2042,1529];
    //       var dataMonthly = google.visualization.arrayToDataTable([
    //         ['Week', 'Impressions'],
    //         ['Week 1', 0],
    //         ['Week 2', 0],
    //         ['Week 3', 0],
    //         ['Week 4', 0],
    //       ]);
    //       var monthlyArray = [5862,4209,2021,3673]
    //       var dataYearly = google.visualization.arrayToDataTable([
    //         ['Monthly', 'Impressions'],
    //         ['Jan', 0],
    //         ['Feb', 0],
    //         ['Mar', 0],
    //         ['Apr', 0],
    //         ['May', 0],
    //         ['Jun', 0],
    //         ['Jul', 0],
    //         ['Aug', 0],
    //         ['Sep', 0],
    //         ['Oct', 0],
    //         ['Nov', 0],
    //         ['Dec', 0],
    //       ]);
    //       var yearlyArray = [32000,12220,6820,9870,1720,10420,20420,1529,10293,9852,20482,45000]
    //       if(radioSelected==="daily"){
    //         var data = dataDaily;
    //         var arr = dailyArray;
    //         var calculatedMaxValue = Math.max.apply(null, dailyArray)
    //         var calculatedMinValue = Math.min.apply(null, dailyArray)
    //         var calculatedAvgValue = Math.round((arr.sum()/arr.length));  

    //       }
    //       if(radioSelected==="weekly"){
    //         var data = dataWeekly;
    //         var arr = weeklyArray;
    //         var calculatedMaxValue = Math.max.apply(null, weeklyArray)
    //         var calculatedMinValue = Math.min.apply(null, weeklyArray)
    //         var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
    //       }
    //       if(radioSelected==="yearly"){
    //         var data = dataYearly;
    //         var arr =  yearlyArray;
    //         var calculatedMaxValue = Math.max.apply(null, yearlyArray)
    //         var calculatedMinValue = Math.min.apply(null, yearlyArray)
    //         var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
    //       }
    //       if(radioSelected==="monthly"){
    //         var data = dataMonthly;
    //         var arr = monthlyArray;
    //         var calculatedMaxValue = Math.max.apply(null, monthlyArray)
    //         var calculatedMinValue = Math.min.apply(null, monthlyArray)
    //         var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
    //       }
    //       var options = {
    //       title: 'Traffic',
    //       chartArea:{width:"80%",height:"80%"},
    //       vAxis: {minValue: 0, maxValue: calculatedMaxValue},
    //       hAxis: {minValue: 0},
    //       colors: ["#aaa"],
    //       height: 500,
    //       legend: {position: 'none'},
    //       animation: {
    //         duration: 750,
    //         },
    //       };
    //       var chart = new google.visualization.BarChart(document.getElementById('traffic-charts'));
    //       chart.draw(data, options);
    //       var row=0;
    //       for (var i = 0; i < arr.length; i++) {
    //         data.setValue(row, 1, arr[i]);
    //         row++;
    //       };
    //       chart.draw(data, options);
    //       updateSpans(calculatedMaxValue,calculatedAvgValue,calculatedMinValue)
    //     }
    //     function drawLogin(radioSelected){
    //       var radioSelected = $('#radios ins.slider-level:hidden').data('radio');
    //       var dataDaily = google.visualization.arrayToDataTable([
    //         ['Hour', 'Impressions'],
    //         ['0',  0],
    //         ['2',  0],
    //         ['4',  0],
    //         ['6',  0],
    //         ['8',  0],
    //         ['10', 0],
    //         ['12', 0],
    //         ['14', 0],
    //         ['16', 0],
    //         ['18', 0],
    //         ['20', 0],
    //         ['22', 0],
    //         ['24', 0],
    //       ]);
    //       var dailyArray = [1,3,4,10,20,37,103,32,120,382,85,22,2];
    //       var dataWeekly = google.visualization.arrayToDataTable([
    //         ['Day', 'Impressions'],
    //         ['Mon', 0],
    //         ['Tue', 0],
    //         ['Wed', 0],
    //         ['Thu', 0],
    //         ['Fri', 0],
    //         ['Sat', 0],
    //         ['Sun', 0],
    //       ]);
    //       var weeklyArray = [1222,682,987,172,1042,2042,1529];
    //       var dataMonthly = google.visualization.arrayToDataTable([
    //         ['Week', 'Impressions'],
    //         ['Week 1', 0],
    //         ['Week 2', 0],
    //         ['Week 3', 0],
    //         ['Week 4', 0],
    //       ]);
    //       var monthlyArray = [5862,4209,2021,3673]
    //       var dataYearly = google.visualization.arrayToDataTable([
    //         ['Monthly', 'Impressions'],
    //         ['Jan', 0],
    //         ['Feb', 0],
    //         ['Mar', 0],
    //         ['Apr', 0],
    //         ['May', 0],
    //         ['Jun', 0],
    //         ['Jul', 0],
    //         ['Aug', 0],
    //         ['Sep', 0],
    //         ['Oct', 0],
    //         ['Nov', 0],
    //         ['Dec', 0],
    //       ]);
          
    //       var yearlyArray = [32000,12220,6820,9870,1720,10420,20420,1529,10293,9852,20482,45000]
    //       if(radioSelected==="daily"){
    //         var data = dataDaily;
    //         var arr = dailyArray;
    //         var calculatedMaxValue = Math.max.apply(null, dailyArray)
    //         var calculatedMinValue = Math.min.apply(null, dailyArray)
    //         var calculatedAvgValue = Math.round((arr.sum()/arr.length));  

    //       }
    //       if(radioSelected==="weekly"){
    //         var data = dataWeekly;
    //         var arr = weeklyArray;
    //         var calculatedMaxValue = Math.max.apply(null, weeklyArray) 
    //         var calculatedMinValue = Math.min.apply(null, weeklyArray) 
    //         var calculatedAvgValue = Math.round((arr.sum()/arr.length));  

    //       }
    //       if(radioSelected==="yearly"){
    //         var data = dataYearly;
    //         var arr =  yearlyArray;
    //         var calculatedMaxValue = Math.max.apply(null, yearlyArray) 
    //         var calculatedMinValue = Math.min.apply(null, yearlyArray)
    //         var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
    //       }
    //       if(radioSelected==="monthly"){
    //         var data = dataMonthly;
    //         var arr = monthlyArray;
    //         var calculatedMaxValue = Math.max.apply(null, monthlyArray) 
    //         var calculatedMinValue = Math.min.apply(null, monthlyArray)
    //         var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
    //       }
    //       var options = {
    //       title: 'User Logins',
    //       chartArea:{width:"80%",height:"80%"},
    //       vAxis: {minValue: 0, maxValue: calculatedMaxValue},
    //       hAxis: {minValue: 0},
    //       height: 500,
    //       colors: ["#aaa"],
    //       legend: {position: 'none'},
    //       animation: {
    //         duration: 750,
    //         },
    //       };
    //       var chart = new google.visualization.AreaChart(document.getElementById('login-charts'));
    //       chart.draw(data, options);
    //       var row=0;
    //       for (var i = 0; i < arr.length; i++) {
    //         data.setValue(row, 1, arr[i]);
    //         row++;
    //       };
    //       chart.draw(data, options);
    //       updateSpans(calculatedMaxValue,calculatedAvgValue,calculatedMinValue)
    //     }
    //     function drawMarkersMap() {
    //       var data = google.visualization.arrayToDataTable([
    //         ['Hotspot',   'Activity', 'Area'],
    //         ['Rome',      2761477,    1285.31],
    //         ['Milan',     1324110,    181.76],
    //         ['Naples',    959574,     117.27],
    //         ['Turin',     907563,     130.17],
    //         ['Palermo',   655875,     158.9],
    //         ['Genoa',     607906,     243.60],
    //         ['Bologna',   380181,     140.7],
    //         ['Florence',  371282,     102.41],
    //         ['Fiumicino', 67370,      213.44],
    //         ['Anzio',     52192,      43.43],
    //         ['Ciampino',  38262,      11]
    //       ]);

    //       var options = {
    //         region: 'IT',
    //         displayMode: 'markers',
    //         colorAxis: {colors: ['green', 'blue']}
    //       };

    //       var chart = new google.visualization.GeoChart(document.getElementById('traffic-charts'));
    //       chart.draw(data, options);
    //     };
      // function drawHotspotMapsWidget(){
      //   $.get('https://controlpaneleuprimary.cloud4wi.com/dashboardapi/map.php', function(info,success){
      //     if(!success){
      //       console.log('There was an error with the request')
      //     } else {
      //       var keys = Object.keys(info);
      //       var mapArray = [['Country', 'Hotspots']];
      //       for (var i = 0, x=keys.length; i < x; i++) {
      //         var val = info[keys[i]];
      //         mapArray.push([keys[i], parseInt(val)])
      //       };
      //       var data = google.visualization.arrayToDataTable(mapArray);
      //       var options = {
      //         chartArea:{width:"80%",height:"80%"},
      //         colorAxis: {
      //           colors: ['#a0bdf2', '#6495ED', '#055dfa']
      //         }
      //       };
      //       var chart = new google.visualization.GeoChart(document.getElementById('hotspot-maps-widget'))
      //       chart.draw(data,options)
      //     }
      //   });
      // }
      // function drawHotspotMapsWidget2(){
      //   $.get('https://controlpaneleuprimary.cloud4wi.com/dashboardapi/map.php', function(info,success){
      //     if(!success){
      //       console.log('There was an error with the request')
      //     } else {
      //       var keys = Object.keys(info);
      //       var mapArray = [['Country', 'Hotspots']];
      //       for (var i = 0, x=keys.length; i < x; i++) {
      //         var val = info[keys[i]];
      //         mapArray.push([keys[i], parseInt(val)])
      //       };
      //       var data = google.visualization.arrayToDataTable(mapArray);
      //       var options = {
      //         chartArea:{width:"80%",height:"80%"},
      //         colorAxis: {
      //           colors: ['#a0bdf2', '#6495ED', '#055dfa']
      //         }
      //       };
      //       var chart = new google.visualization.GeoChart(document.getElementById('chart9'))
      //       chart.draw(data,options)
      //     }
      //   });
      // }
      function drawPieChartWidget(){
        $.get('https://controlpaneleuprimary.cloud4wi.com/dashboardapi/pie.php', function(info, success){
          if(!success){
            console.log('There was an error with your request')
          } else {
            
            var data = [['name', 'percent']];
            for (var i = 0, x=info.length; i < x; i++) {
              data.push(info[i]);
            };
            var options = {
              legend: {position: 'none'},
              pieHole: 0.5,
              chartArea:{width:"90%",height:"100%"},
              colors: ['#a0bdf2', '#6495ED', '#055dfa']
            };
            var data = google.visualization.arrayToDataTable(data)
            var chart = new google.visualization.PieChart(document.getElementById('pie-chart-widget'));
            chart.draw(data, options);

          }
      });   
    }
      function drawPieChartWidget2(){
        $.get('https://controlpaneleuprimary.cloud4wi.com/dashboardapi/pie.php', function(info, success){
          if(!success){
            console.log('There was an error with your request')
          } else {
            
            var data = [['name', 'percent']];
            for (var i = 0, x=info.length; i < x; i++) {
              data.push(info[i]);
            };
            var options = {
              chartArea:{width:"80%",height:"80%"},
              colors: ['#a0bdf2', '#6495ED', '#055dfa']
            };
            var data = google.visualization.arrayToDataTable(data)
            var chart = new google.visualization.PieChart(document.getElementById('chart7'));
            chart.draw(data, options);

          }
      });   
    }
    function drawTable(){
      var someNum = $.get('https://controlpaneleuprimary.cloud4wi.com/dashboardapi/counters.php', function(info,success){
      var b = parseInt(info);  
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Data');
      data.addColumn('number', 'Amount');
      data.addRows([
        ['Total Users',  2925],
        ['Hotspots',   37],
        ['Wifi Areas', 4],
        ['Impressions',  b],
        ['First Time Users', 1600],
        ['Logins',  32892],
        ['Traffic(GB)',  962],
        ['Dwell Time',  8.32],
        ['Loyal Users',  742],
        ['Live Users',  394],
      ]);
      var options = {
        cssClassNames: {
        headerRow: 'google-table-header'
      },
        width: '100%'
      }
      var table = new google.visualization.Table(document.getElementById('table-widget'));
      table.draw(data, options);
      });  
  };
    function drawTable2(){
      var someNum = $.get('https://controlpaneleuprimary.cloud4wi.com/dashboardapi/counters.php', function(info,success){
      var b = parseInt(info);  
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Data');
      data.addColumn('number', 'Amount');
      data.addRows([
        ['Total Impressions',  b],
        ['Online Users',   37],
        ['Registered Users', 257],
        ['Sniffs',  32892]
      ]);
      var options = {
        cssClassNames: {
        headerRow: 'google-table-header'
      },
        width: '100%'
      }
      var table = new google.visualization.Table(document.getElementById('chart8'));
      table.draw(data, options);
      });  
  };
  function drawWifiAreaWidget(){
    var options = {
      cssClassNames: {
        headerRow: 'google-table-header'
      },
      allowHtml:true,
      width: '100%'
    };
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Wifi Area');
    data.addColumn('number', 'Hotspots');
    data.addColumn('string', 'Splash Portal');
    data.addColumn('number', 'Online Users');
    data.addRows([
      ['<a href="#">Jim\'s Wifi</a>', 27, '<a href="#">Metro UI</a>', 32],
      ['<a href="#">Westfield Mall</a>', 122, '<a href="#">Westfield</a>', 19],
      ['<a href="#">Starbucks</a>', 5, '<a href="#">Orinda Store</a>', 242],
      ['<a href="#">Roller Rink</a>', 12, '<a href="#">RollerWorld</a>', 98],
    ]);
    var table = new google.visualization.Table(document.getElementById('wifi-area-widget'));
    table.draw(data,options)
  }
  function drawComparisonWidget(base,compare,frame){
    var data = google.visualization.arrayToDataTable([
      // ['Year', 'Sales', 'Expenses'],
      // ['2004',  1000,    400],
      // ['2005',  1170,    460],
      // ['2006',  660,     1120],
      // ['2007',  1030,    540]
    ]);
    if(frame==="daily" && base==="impressions"){
      data.addColumn('number', 'Hour');
      data.addColumn('number', 'Impressions');
      data.addColumn('number', 'New Users');
      data.addRows([
        [0, 20, 1],
        [1, 18, 0],
        [3, 20, 1],
        [4, 18, 0],
        [5, 20, 1],
        [6, 18, 0],
        [7, 42, 1],
        [8, 65, 0],
        [9, 120, 1],
        [10,38, 0],
        [11,92, 1],
        [12,180, 12],
        [13,52, 2],
        [14,69, 6],
        [15,40, 8],
        [16,32, 10],
        [17,97, 3],
        [18,122, 0],
        [19,108, 0],
        [20,74, 4],
        [21,45, 0],
        [22,39, 0],
        [23,20, 0],
        [24,4, 0],
      ]);
    };
    var options = {
      legend: {
        position: 'top'
      },
      chartArea:{width:"80%",height:"80%"},
      hAxis:{
        minValue: 0,
        gridlines:{
          count:0,
          color: '#fff'
        },
        ticks: [2,4,6,8,10,12,14,16,18,20,22,24]
      },
      vAxis: {
        minValue: 0
      },
      colors: ['#a0bdf2', '#6495ED', '#055dfa'],
    };
   var chart = new google.visualization.AreaChart(document.getElementById('comparison-widget'));
   chart.draw(data, options);
  };
  function drawCustomerLoyaltyWidget(){
    var data = google.visualization.arrayToDataTable([
      ['Month', 'First Time Visitors', 'Second Visit','Third to Fifth Visit','> 5 Visits'],
      ['Jan', 17, 19, 22, 41],
      ['Feb', 25, 24, 26, 25],
      ['Mar', 80, 10, 10, 10],
      ['Apr', 50, 40, 10, 10],
      ['May', 10, 20, 30, 40],
      ['Jun', 10, 20, 30, 40],
      ['Jul', 40, 30, 20, 10],
      ['Aug', 12, 18, 30, 40],
      ['Sep', 10, 80, 5, 5],
      ['Oct', 100, 0, 0, 0],
      ['Nov', 20, 40, 15, 45],
      ['Dec', 30, 30, 40, 0],
    ]);


    var options = {
      legend: {
        position: 'top'
      },
      chartArea:{width:"80%",height:"80%"},
      hAxis:{
        minValue: 0,
        gridlines:{
          count:0,
          color: '#fff'
        },
      },
      vAxis: {
        minValue: 0
      },
      colors: ['#ddd', '#a0bdf2', '#6495ED', '#055dfa'],
    }
    var chart = new google.visualization.AreaChart(document.getElementById('customer-loyalty-widget'));
    chart.draw(data, options);
  }
  function drawDemographicsWidget(){
    var data = google.visualization.arrayToDataTable([
      ['Age Group', 'Men %', 'Women %'],
      ['16 to 29', 39, 61],
      ['30 to 35', 50, 50],
      ['36 to 40', 80, 20],
      ['41 to 50', 32, 68],
      ['51 to 60', 70, 30],
      ['65+', 30, 70],
    ]);
    var options = {
      legend: {
        position: 'top'
      },
      chartArea:{width:"70%",height:"100%"},
      hAxis:{
        minValue: 0,
        gridlines:{
          count:0,
          color: '#fff'
        },
      },
      vAxis: {
        gridlines:{
          count:0,
          color: '#fff'
        },
        minValue: 0
      },
      isStacked: true,
      colors: ['#3399FF', '#ff0080'],
    }
    var chart = new google.visualization.BarChart(document.getElementById('demographics-widget'));
    chart.draw(data, options);
  }
  function drawCustomerDevicesWidget(){
    var data = google.visualization.arrayToDataTable([
      ['Browser Type', '% Share'],
      ['Firefox', 16],
      ['Chrome', 30],
      ['IE', 12],
      ['Safari', 22],
      ['Other', 20],
    ]);
    var options = {
      title: 'Browser Share',
      legend: {position: 'none'},
      chartArea:{width:"90%",height:"90%"},
      colors: ['#a0bdf2', '#6495ED', '#055dfa']
    }
    var chart = new google.visualization.PieChart(document.getElementById('customer-devices-widget'))
    chart.draw(data,options);
  };
  function drawCustomerDevicesWidgetTable(){
    var options = {
      cssClassNames: {
        headerRow: 'google-table-header'
      },
      width: '100%',
      height: '100%'
    };
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Device Model');
    data.addColumn('number', 'Share');
    data.addRows([
      ['Galaxy S5', 25],
      ['iPhone 5', 30],
      ['iPhone 4s', 17],
      ['Galaxy S3', 33],
    ]);
    var table = new google.visualization.Table(document.getElementById('customer-devices-widget-table'));
    table.draw(data,options); 
  };
  function drawCustomerSourcesWidget(){
    var data = google.visualization.arrayToDataTable([
      ['Customer Source', '% Share'],
      ['Cloud4Wi', 16],
      ['Click Through', 30],
      ['Facebook', 12],
      ['Vkontakte', 22],
      ['LinkedIn', 20],
      ['Twitter', 20],
      ['Google', 20],
    ]);
    var options = {
      legend: {position: 'right'},
      chartArea:{width:"90%",height:"90%"},
      colors: ['#bbb','#a0bdf2', '#6495ED', '#055dfa']
    }
    var chart = new google.visualization.PieChart(document.getElementById('customer-sources-widget'));
    chart.draw(data,options);
  };
  function drawDaytimeLoyaltyWidget(){
    var data = google.visualization.arrayToDataTable([
      ['Time Slot', 'First Time Users', 'Returning Users'],
      ['12am-8am', 3, 6],
      ['8am-12pm', 122, 52],
      ['12pm-4pm', 36, 98],
      ['4pm-8pm', 22, 56],
      ['8pm-12am', 7, 23],
    ]);
    var options = {
      legend: {position: 'top'},
      chartArea:{width:"80%",height:"80%"},
      colors: ['#a0bdf2', '#6495ed']
    }
    var chart = new google.visualization.ColumnChart(document.getElementById('daytime-loyalty-widget'));
    chart.draw(data, options);
  };
  function drawLiveViewWidget(){
    var options = {
      cssClassNames: {
        headerRow: 'google-table-header'
      },
      allowHtml: true,
      width: '100%',
    }
    var data = new google.visualization.DataTable();
      data.addColumn('string', 'Hotspot');
      data.addColumn('number', 'Users')
      data.addRows([
        ['<a href="#">Jim\'s Wifi</a>', 27],
        ['<a href="#">Westfield Mall</a>', 122],
        ['<a href="#">Starbucks</a>', 5],
        ['<a href="#">Roller Rink</a>', 12],
      ]);
    var table = new google.visualization.Table(document.getElementById('live-view-widget'));
    table.draw(data, options);
  };
  function drawDailyAverageSessionTimeWidget(){
    var data = google.visualization.arrayToDataTable([
      ['Time Slot', '60min+', '45-60', '30-45', '15-30', '15-5', '>5'],
      ['12am-8am',  30, 12, 14, 16, 0, 2],
      ['8am-12pm',  28, 13, 5, 1, 12, 6 ],
      ['12pm-4pm',  8, 12, 15, 12, 8, 12],
      ['4pm-8pm', 32, 15, 16, 5, 4,   0 ],
      ['8pm-12am',  0, 5, 16, 20, 22, 30],
    ]);
    var options = {
      legend: {position: 'top'},
      chartArea:{width:"80%",height:"80%"},
      colors: ['#d6d6d6', '#abbbd1', '#5e8cd1', '#316fcc', '#0655cc', '#002863']
    }
    var chart = new google.visualization.ColumnChart(document.getElementById('daily-average-session-time-widget'));
    chart.draw(data, options);
  };
  function drawNewCustomerSourcesWidget(){
    var data = google.visualization.arrayToDataTable([
      ['Source', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      ['Cloud4Wi',  30, 12, 14, 16, 0, 2, 10],
      ['Google',  28, 13, 5, 1, 12, 6, 10 ],
      ['Facebook',  8, 12, 15, 12, 8, 12, 10],
      ['LinkedIn', 32, 15, 16, 5, 4,   0, 10 ],
      ['Vkontakte',  0, 5, 16, 20, 22, 30, 10],
      ['Twitter',  0, 5, 16, 20, 22, 30, 10]
    ]);
    var options = {
      legend: {position: 'top'},
      chartArea:{width:"80%",height:"80%"},
      colors: ['#d6d6d6', '#abbbd1', '#5e8cd1', '#316fcc', '#0655cc', '#002863', '#d3d3d3']
    }
    var chart = new google.visualization.ColumnChart(document.getElementById('new-customer-sources-widget'));
    chart.draw(data, options);
  };
  function drawHotspotMapsWidget() {
    var myLatlng = new google.maps.LatLng(43.7166667,10.3833333);
    var mapOptions = {
      zoom: 14,
      center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById('hotspot-maps-widget'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Hello World!'
    });
  }
      // function drawBaseChart() {
      // // var titleHeight = $('.gridster li:eq(1) .title').height();
      // // var liHeight = $('.gridster li:eq(1)').height();
      // // var divHeight = (liHeight - titleHeight);
      //   var data = google.visualization.arrayToDataTable([
      //     ['Year', 'Sales', 'Expenses'],
      //     ['2004',  1000,      400],
      //     ['2005',  1170,      460],
      //     ['2006',  660,       1120],
      //     ['2007',  1030,      540],
      //   ]);
      //   var options = {
      //     title: 'Company Performance',
      //     hAxis: {title: 'Year', titleTextStyle: {color: 'red'},
      //     }
      //   };
      //   var chart = new google.visualization.ColumnChart(document.getElementById('chart1'));
      //   chart.draw(data, options);
      //   console.log('called')
      // }