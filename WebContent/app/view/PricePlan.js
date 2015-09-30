Ext.define("Verizon.view.PricePlan",{
	extend:"Ext.panel.Panel",
	xtype:"priceplan",
	title:"Price Plan Automation",
	height:500,width:500,
	pack:'center',
	items:[
	       {
	    	   xtype : "textfield",
	    	   fieldLabel:"UserName",
	    	   id:"name"
	    		   
	       },
	       {
	    	   xtype : "textfield",
	    	   fieldLabel:"Password",
	    	   id:"pass"
	       },
	       {
	    	   xtype : "button",
	    	   text:"Login",
	    	   id:"login"
	       }
	       
	       ]

	
});