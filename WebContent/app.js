Ext.Loader.setConfig({enabled:true});

Ext.application({
	name:"Verizon",
	appFolder: "app",//default
	controllers:["LoginController"],
		launch:function(){
			//alert("************");
			//this.mainPanel=	Ext.create("Ext.panel.Panel",{
			this.viewport=	Ext.create("Ext.container.Viewport",{ //resize panel  (scroll bar)
			renderTo:  Ext.getBody(),
			items:[
			       {xtype:"loginpanel"}
			       ]
			});
		}	
		});