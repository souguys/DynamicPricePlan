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
			  xtype: 'panel',
			  region: 'north',
			  height: 70,
			  html: '<img align="left" src="images/verizonlogo.jpeg" alt="Verizon" height="70" width="150"><font size="10" face="verdana" color="black"><b><center>Verizon Price Plan Automation</center></b></font>',
			  },
			  {

			   xtype: 'panel',
			   region: 'west',
			   width: 250,
			   title: 'Western Region',
			   collapseDirection: 'left',
			   collapsible: true,
			   split: true,
			   items: [
			           {
			        	   
			        	   xtype:'container',
			        	   height: 10
			           },
			          {
			        	  xtype: 'container',
			        	  height: 40,
			        	  layout: 'hbox',
			        	  items: [
			        	         {
			        	        	 xtype: 'container',
			        	        	 width: 20
			        	         },
			        	         {
			        	        	 xtype: 'button',
			        	        	 action: 'triggerplanchange',
			        	        	 flex: .5,
			        	        	 text: 'trigger plan change'
			        	         },
			        	         {
			        	        	 xtype: 'container',
			        	        	 flex: .25
			        	         }
			        	        ]
			          }
			        ]

			  },

			  {

			   xtype: 'panel',
			   itemId: 'centerregion',
			   region: 'center',
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
			   html: '<body bgcolor="#E6E6FA"><font size="4" face="verdana" color="black"><b>Verizon Copy Right</b></font><img align="right" src="images/verizonlogo.jpeg" alt="Verizon" height="50" width="150"></body>',
			   height: 50
			  }

			 ]


			});
		}	
		});