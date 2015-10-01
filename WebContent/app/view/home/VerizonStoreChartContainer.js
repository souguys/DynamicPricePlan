Ext.define('Verizon.view.home.VerizonStoreChartContainer', {
	extend:'Ext.window.Window',
	xtype:"verizonstorechartcontainer",
	alias: 'widget.verizonstorechartcontainer',
	autoShow: true,
	layout: 'fit',
	title: 'Store Chart Container',
    height: 500,
    width: 700,
    items:[
           {
	    	   xtype:'verizonstorechart'
	       }
	       
	]
});
