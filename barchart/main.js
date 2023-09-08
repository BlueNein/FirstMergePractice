let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.type = "bar";
trace1.name = "108年";
trace1.x = [];
trace1.y = [];
trace1.x[0] = "機場捷運1月人流_A1站";
trace1.x[1] = "機場捷運1月人流_A12站";
trace1.x[2] = "機場捷運1月人流_A18站";
trace1.y[0] = AirPortMRT_A1_Jan[0]['count'];
trace1.y[1] = AirPortMRT_A12_Jan[0]['count'];
trace1.y[2] = AirPortMRT_A18_Jan[0]['count'];
trace1.text = trace1.y;
trace1.textfont = {
    color: 'yellow',
    size: 20
};
trace1.marker = {
    color: 'blue'
};

let trace2 = {};
trace2.type = "bar";
trace2.name = "109年";
trace2.x = [];
trace2.y = [];
trace2.x[0] = "機場捷運1月人流_A1站";
trace2.x[1] = "機場捷運1月人流_A12站";
trace2.x[2] = "機場捷運1月人流_A18站";
trace2.y[0] = AirPortMRT_A1_Jan[1]['count'];
trace2.y[1] = AirPortMRT_A12_Jan[1]['count'];
trace2.y[2] = AirPortMRT_A18_Jan[1]['count'];
trace2.text = trace2.y;
trace2.textfont = {
    color: 'yellow',
    size: 20
};
trace2.marker = {
    color: 'purple'
};


let trace3 = {};
trace3.type = "bar";
trace3.name = "110年";
trace3.x = [];
trace3.y = [];
trace3.x[0] = "機場捷運1月人流_A1站";
trace3.x[1] = "機場捷運1月人流_A12站";
trace3.x[2] = "機場捷運1月人流_A18站";
trace3.y[0] = AirPortMRT_A1_Jan[2]['count'];
trace3.y[1] = AirPortMRT_A12_Jan[2]['count'];
trace3.y[2] = AirPortMRT_A18_Jan[2]['count'];
trace3.text = trace3.y;
trace3.textfont = {
    color: 'red',
    size: 20
};
trace3.marker = {
    color: 'green'
};



let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);


let layout = {
    margin: {
        t: 50
    },
    barmode: 'stack',
    title: '機場捷運各站點一月人流量'
};

Plotly.newPlot(myGraph, data, layout);