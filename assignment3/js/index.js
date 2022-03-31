// javascript

window.onload = function() {
	// style
	var tit = document.querySelector('#about h2');
	console.log(tit)
	tit.style.color = '#C7000A';
	tit.style.setProperty("font-size", "32px");
	tit.setAttribute("class","underline");

	// Create an empty paragraph and add some content with Javascript.
	var str = 'I treat people honestly, never rhetoric, but sincerity and kindness make me always win the trust of my friends. I am a solid professional, reading is my greatest enjoyment, and studying the computer makes me feel a lot of fun. I work hard, no matter how small things are, I have to complete them meticulously. The important thing is that I have a spirit of persistent research <br>I have participated in some volunteer activities, and I think I am willing to help others, and I am good at communicating with others and solving some problems quickly.';
	var box = document.querySelector('#pro');
	var p = document.createElement('p');
	p.innerHTML = str;
	box.appendChild(p);

	// Create an array and display the content on the page
	var arr = [
		{'url': 'https://www.facebook.com/', 'class': 'fa-facebook'},
		{'url': 'https://www.instagram.com/', 'class': 'fa-instagram'},
		{'url': 'https://weibo.com/', 'class': 'fa-weibo'}
	];
	var share = document.querySelector('#share');
	var html = '';
	for(var i = 0; i < arr.length; i++) {
		html += '<a href="'+arr[i].url+'"><span class="fa '+arr[i].class+'" aria-hidden="true"></span></a>'
	}
	share.innerHTML = html;

	//  Create a button and add an event listener to change the background of a section or div
	var header = document.querySelector('#header');
	var button = document.createElement('button');
	button.id = 'btn';
	button.innerHTML = 'backgroundColor';
	header.appendChild(button);

	var btn = document.querySelector('#btn');
	btn.addEventListener("click", function() {

		var body = document.querySelector('body');
		body.style.background = 'gray';

	});

	// jquery
	$('#replace').click(function() {
		$(tit).html('Hello, everyone. Welcome to my website')
	})

	$('#add').click(function() {
		$('#pro p').prepend('Hello, everyone. Welcome to my website. <br>')
	})

	// Libraries
	 var options = {
        
          series: [{
          name: 'Class days',
          data: [10, 15, 12, 7, 11]
        }],
          chart: {
          type: 'bar',
          height: 350,
          events: {
            dataPointSelection: function (event, chartContext, config) {
	            	console.log(event);
	            	console.log(chartContext);
	                console.log(config);
					alert(config.w.config.labels[config.seriesIndex] + " " +
					 config.w.config.series[config.seriesIndex].name + " " +
					 config.w.config.series[config.seriesIndex].data[config.dataPointIndex]);
	            }
        	}
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
          },
        },
        dataLabels: {
          enabled: true
        },
        xaxis: {
          type:'datetime',
          labels:{
            format:"yyyy-MM"
          }
        },
        yaxis: {
          title: {
            text: 'Class days'
          }
        },
        //设置X轴的时间
        labels:[
          
          '2021-11', '2021-12', '2022-01', '2022-02', '2022-03'
        ],

        fill: {
          opacity: 1
        },
        tooltip: {
          x:{
            format:"yyyy年MM月"
          },
          y: {
            formatter: function (val) {
              return val + " Day"
            }
          }
        }
        };
        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();



}