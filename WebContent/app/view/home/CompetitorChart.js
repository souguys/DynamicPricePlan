Ext.define('Verizon.view.home.CompetitorChart', {
		extend: 'Ext.chart.Chart',
		xtype: 'competitorchart',
		 width: 500,
		 height: 300,
        animate: true,
        shadow: true,
        store: 'CompetitorStore',
        legend: {
            position: 'right'
        },
        axes: [{
            type: 'Numeric',
            position: 'bottom',
            fields: ['att', 'sprint', 'tmobile'],
            title: false,
            grid: true,
            label: {
                renderer: function(v) {
                    return String(v);
                }
            }
        }, {
            type: 'Category',
            position: 'left',
            fields: ['plansize'],
            title: false
        }],
        series: [{
            type: 'bar',
            axis: 'bottom',
            gutter: 80,
            xField: 'plansize',
            yField: ['att', 'sprint', 'tmobile'],
            stacked: true,
            tips: {
                trackMouse: true,
                renderer: function(storeItem, item) {
                    this.setTitle('$'+ String(item.value[1]));
                }
            }
        }]
    });