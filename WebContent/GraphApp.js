Ext.Loader.setConfig({enabled:true});

Ext.application({
	name:"Verizon",
	appFolder: "app",//default
	controllers:["GraphController"],
		launch:function(){
			//alert("************");
			//this.mainPanel=	Ext.create("Ext.panel.Panel",{
			this.viewport=	Ext.create("Ext.container.Viewport",{ //resize panel  (scroll bar)
			renderTo:  Ext.getBody(),
			layout: 'border',
			items: [
			 {
			  xtype: 'toolbar',
			  region: 'north',
			  height: 30,
			   html: 'toolbar'
			  },
			  {

			   xtype: 'panel',
			   region: 'west',
			   html: 'Western Region',
			   width: 250,
			   title: 'Western Region',
			   collapseDirection: 'left',
			   collapsible: true,
			   split: true

			  },

			  {

			   xtype: 'panel',
			   itemId: 'centerregion',
			   region: 'center',
			   html: 'Center region',
			   pack : 'center',
			   layout : 'vbox',
			   items : [
			            {
			            	xtype: 'verizonchart',
			            	flex: 1
			            },
			            {
			            	xtype: 'competitorchart',
			            	flex: 1
			            	
			            }
			     ]
			  },
			  {
			   xtype: 'panel',
			   region: 'south',
			   html: 'Southern region',
			   height: 30
			  }

			 ]


			});
		}	
		});