Ext.define('Verizon.view.LoginPanel', {
	extend:"Ext.panel.Panel",
	xtype:"loginpanel",
	title: 'Price Plan',
    height: 200,
    width: 400,
    items:[
	       {
	    	   xtype: 'textfield',
	    	   fieldLabel: 'User Name',	    	   
	    	   id: 'username'
	       },
	       {
	    	   
	    	   xtype:'textfield',
	    	   fieldLabel: 'Password',
	    	   id: 'password'
	       },
	       {
	    	   xtype: 'button',
	    	   text:'Submit',
	    	   id: 'login'
	    	   
	       }
	       
	]
});
