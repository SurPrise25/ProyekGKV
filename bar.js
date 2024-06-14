BAR = document.getElementById('barplot');

var jagung = [274181,273919,332179,344242,336014,426430,418314,412020,361061,464264,443729,549442,587186,573263,577513,639822,787599,923962,945104,1028653,1101998,1047077,959933];
var padi = [10820862,9860375,10722717,10747659,10352650,9795638,9993014,10749868,9237593,9166872,8776889,9602302,9787217,9418572,9914019,10111069,11322681,11737070,11633891,11271861,12083162,11644899,11373144];
var kedelai = [125559,94908,95670,81296,75239,70976,85988,55075,34603,29790,19822,29090,23845,24495,17438,32921,60257,55823,56166,47426,51172,115261,98938];
var years = ['1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'];

var padiLog = [];
var jagungLog = [];
var kedelaiLog = [];

for(let i = 0; i < jagung.length; i++){
    jagungLog.push(Math.log10(jagung[i]));
}

for(let i = 0; i < padi.length; i++){
    padiLog.push(Math.log10(padi[i]));
}

for(let i = 0; i < kedelai.length; i++){
    kedelaiLog.push(Math.log10(kedelai[i]));
}

var data = [
    {
        x: years,
        y: jagungLog,
        name: 'Jagung',
        type: 'bar',
        width: 0.15
        
    },
    {
        x: years,
        y: padiLog,
        name: 'Padi',
        type: 'bar',
        width: 0.15
    },
    {
        x: years,
        y: kedelaiLog,
        name: 'Kedelai',
        type: 'bar',
        width: 0.15
    }
];

var layout = {
    font: {size: 18},
    title: 'Produksi Pangan Provinsi Jawa Barat (Dalam Skala Logaritmik)',
    barmode: 'group',  
    xaxis: {
        tickvals: years,
        ticktext: years
    },
    yaxis: {
        title: 'Dalam Log10'
    },
    shapes: [{
        type: 'line',
        x0: '1993',
        y0: 0,
        x1: '2015',
        y1: 0,
        line: {
            color: 'rgb(50, 171, 96)',
            width: 2,
            dash: 'dot'
        },
        draggable: 'x'
    },
]
};
function showCornGraph() {
    Plotly.restyle(BAR, 'visible', ['legendonly', 'legendonly', 'legendonly'], [0, 1, 2]);  
    Plotly.restyle(BAR, 'visible', true, 0);  
}
function showRiceGraph() {
    Plotly.restyle(BAR, 'visible', ['legendonly', 'legendonly', 'legendonly'], [0, 1, 2]);  
    Plotly.restyle(BAR, 'visible', true, 1);  
}
function showKedelaiGraph() {
    Plotly.restyle(BAR, 'visible', ['legendonly', 'legendonly', 'legendonly'], [0, 1, 2]);  
    Plotly.restyle(BAR, 'visible', true, 2);  
}
function showAll() {
    Plotly.restyle(BAR, 'visible', true, [0, 1, 2]);  
}

var config = {responsive: true};
Plotly.newPlot(BAR, data, layout, config);
