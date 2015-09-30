Ext.define("Verizon.view.PricePlan",{
	extend : "Ext.panel.Panel",
	layout: "border",
	xtype : "priceplan",
	title : "Welcome home",
	items:[
	       		{
	       			xtype : "northpanel",
	       			region : "north",
	       			id : "northhomepanel"
	       		},
	       		{
	       			xtype : "centerhomepanel",
	       			region : "center",
	       			id : "centerhomepanel"
				},
				{
					xtype : "westhomepanel",
					region : "west",
						id : "westhomepanel"
				}


	       ]
});