 Ext.define('Verizon.view.home.ComparePricePlanChart', {
	 	extend: 'Ext.chart.Chart',
	 	xtype: 'comparepriceplanchart',
        style: 'background:#fff',
        animate: true,
        shadow: true,
        store: "CompetitorPricePlanStore",
        legend: {
            position: 'right'
        },
        axes: [{
            type: 'Numeric',
            position: 'bottom',
            fields: ['data1', 'data2'],
            minimum: 0,
            label: {
                renderer: Ext.util.Format.numberRenderer('0,0')
            },
            grid: true,
            title: 'Plan Price'
        }, {
            type: 'Category',
            position: 'left',
            fields: ['name'],
            title: 'Plan Size'
        }],
        series: [{
            type: 'bar',
            axis: 'bottom',
            xField: 'name',
            yField: ['data1', 'data2'],
            title: ['Current','Proposed'],
            tips: {
                trackMouse: true,
                renderer: function(storeItem, item) {
                    this.setTitle('$'+ String(item.value[1]));
                }
            }
        }]
    });