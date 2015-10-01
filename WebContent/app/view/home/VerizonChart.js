Ext.define('Verizon.view.home.VerizonChart', {
	extend: 'Ext.chart.Chart',
	xtype: "verizonchart",
    renderTo: Ext.getBody(),
    width: 500,
    height: 225,
    animate: true,
    store: "VerizonStore",
    axes: [
        {
            type: 'Numeric',
            position: 'left',
            fields: ['data'],
            label: {
                renderer: Ext.util.Format.numberRenderer('0,0')
            },
            title: 'Price in $',
            grid: true,
            minimum: 0
        },
        {
            type: 'Category',
            position: 'bottom',
            fields: ['name'],
            title: 'Plan Size'
        }
    ],
    series: [
        {
            type: 'column',
            axis: 'left',
            highlight: true,
            tips: {
              trackMouse: true,
              width: 140,
              height: 28,
              renderer: function(storeItem, item) {
                this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data') + ' $');
              }
            },
            label: {
              display: 'insideEnd',
              'text-anchor': 'middle',
                field: 'data',
                renderer: Ext.util.Format.numberRenderer('0'),
                orientation: 'vertical',
                color: '#333'
            },
            xField: 'name',
            yField: 'data'
        }
    ]
});