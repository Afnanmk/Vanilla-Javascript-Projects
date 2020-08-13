var ctx = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';



var chart = new Chart(ctx, {
    type:'line',
    data: {
       labels: ['March','April','May','June'],
       datasets:[
           {
               label: 'Total Confirmed',
               data:[
                  854039,
                  3303850,
                  6259533,
                  7131859
               ],

               fill: false,
               backgroundColor: [
                   'blue',
                   'blue',
                   'blue',
                   'blue',
                   'blue'
    
                ],
               
               borderWidth:4,
               borderColor:'blue',
               hoverBorderWidth:15,
               hoverBorderColor:'blue',
               borderCapStyle:'butt',
               lineTension:0.4,
               order:0,
               pointBorderColor:'black',
               pointBorderWidth:1,
               pointHoverBorderColor:'black',
               pointHoverBorderWidth:2,
               pointHitRadius:8,
               showlines:true
           },

           {
               label:'Total Deaths',
               data:[
                   37781,
                   228252,
                   370506,
                   406107
               ],
             
               
               fill:false,
               backgroundColor: [
                   'red',
                   'red',
                   'red',
                   'red',
                   'red'
                   
               ],
               borderColor:'red',
               borderWidth:4,
               hoverBorderWidth:7,
               hoverBorderColor:'red',
               borderCapStyle:'butt',
               lineTension:0.4,
               order:0,
               pointBorderColor:'black',
               pointBorderWidth:1,
               pointHoverBorderColor:'black',
               pointHoverBorderWidth:2,
               pointHitRadius:8,
               showlines:true
           },
           {
            label:'Total Recovered',
            data:[
                165387,
                1005079,
                2734548,
                3459969,
                
            ],
            fill:false,
            backgroundColor: [
                'green',
                'green',
                'green',
                'green',
                'green'
                
            ],
            borderColor:'green',
            borderWidth:4,
            hoverBorderWidth:14,
            hoverBorderColor:'green',
            borderCapStyle:'butt',
            lineTension:0.4,
            order:0,
            pointBorderColor:'black',
            pointBorderWidth:1,
            pointHoverBorderColor:'black',
            pointHoverBorderWidth:2,
            pointHitRadius:8,
            showlines:true
           }
       ]
    },
    options: {
        responsive: true,
        title:{
            display: true,
            text:'Outbreak trend over time'
        },
        tooltips:{
            mode: 'nearest',
            intersect:false,
            position: 'average',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            titleFontSize:15,
            titleMarginBottom:8,
            bodyFontSize:15,
            xPadding:6,
            borderColor:'grey',
            borderWidth:2


        },
        hover:{
            mode:'nearest',
            intersect:true
        },
        scales: {
           xAxes: [
               {
                   display: true,
                   scaleLabel: {
                       display:true,
                      
                       fontColor: '#000'

                       
                   }
               }
           ],
           yAxes: [
               {
                   display:true,
                   scaleLabel: {
                       display: true,
                       labelString:'Confirmed / Deaths / Recovered',
                       fontColor: 'rgb(82, 79, 79)',
                       fontSize: 16,
                      fontStyle: 'bold'
                      
                   },
                  
               }
           ]
        },
        
        legend:{
           display:true,
           labels: {
               fontColor: 'grey',
               usePointStyle: true,
               boxWidth: 6,
               fontSize:15,
               fontStyle: 'bold'
           
           
           },
           rtl: true // for rendering the legends from right to left
        },
        layout: {
           
        }
    }
});