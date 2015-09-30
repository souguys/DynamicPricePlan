Ext.define("Verizon.view.LoginPanel",{
	extend:"Ext.panel.Panel",
	xtype:"loginpanel",
	title:"Login",
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
