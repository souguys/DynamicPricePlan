Ext.define('Verizon.view.home.ComparePricePlanContainer', {
	extend:'Ext.window.Window',
	xtype:"comparepriceplancontainer",
	alias: 'widget.comparepriceplancontainer',
	autoShow: true,
	layout: 'fit',
	title: 'Current Vs Proposed Comparsion',
    height: 500,
    width: 700,
    bbar: ['-',{
        text: 'Apply Changes'
    }, '-',{
        text: 'Cancel'
    }],
    items:[
	       {
	    	   xtype:'comparepriceplanchart'
	       }
	       
	]
});
