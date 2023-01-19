(function() {
  const defaultOptions = {
    chartName : 'My Chart',
    barColor : 'blue',
    dataName : "My Data",
  };

  function drawBarChart(data, option, element) {
    options = $.extend({}, defaultOptions, options);

    function changeChartName(newTitle) {
      $('.title').text(options.ChartName);
    }
  }


})