Ext.define('Verizon.view.home.VerizonStoreChart', {
	extend: 'Ext.chart.Chart',
	xtype: "verizonstorechart",
    width: 500,
    height: 225,
    animate: true,
    store: "VerizonStore",
    animate: true,
    shadow: true,
    legend: {
        position: 'right'
    },
    insetPadding: 60,
    theme: 'Base:gradients',
    series: [{
        type: 'pie',
        field: 'data',
        showInLegend: true,
        //donut: donut,
        tips: {
            trackMouse: true,
            renderer: function(storeItem, item) {
                //calculate percentage.
                var total = 0;
              /*  store1.each(function(rec) {
                    total += rec.get('data');
                });*/
               // this.setTitle(storeItem.get('name') + ': ' + Math.round(storeItem.get('data') / total * 100) + '%');*/
                this.setTitle(storeItem.get('data'));
            }
        },
        highlight: {
            segment: {
                margin: 20
            }
        },
        label: {
            field: 'name',
            display: 'rotate',
            contrast: true,
            font: '18px Arial'
        }
    }]
});