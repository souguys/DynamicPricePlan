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
			   title: 'Automation Dashboard',
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
			        	        	 width: 50,
			        	        	 text: '<b>Trigger Plan Change</b>'
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
							xtype:'container',
							layout:'hbox',
							items:[
								{
									xtype: 'verizonchart',
									flex: 1
								},
								{
									xtype:'label',
									margin: '100 0 0 50',
									html: '<font size="5" face="verdana" color="black"><b>Verizon Current Pricing</b></font>',
									flex : 1
								}
							]
			            },
			            { 
			            	xtype: 'tbspacer',
			            	border: 2,
			            	style: {
			            	    borderColor: 'black',
			            	    borderStyle: 'solid'
			            	},
			            	width: 1000 
			            },
			            {
							xtype:'container',
							layout:'hbox',
							margin: '0 0 0 33',
							items:[
								{
					            	xtype: 'competitorchart',
					            	flex: 1
					            },
								{
									xtype:'label',
									margin: '100 0 0 27',
									html: '<font size="5" face="verdana" color="black"><b>Competitors Pricing</b></font>',
									flex : 1
								}
							]
			            }
			     ]
			  },
			  {
			   xtype: 'panel',
			   region: 'south',
			   bodyStyle: 'background:#DCDCDC; padding:10px;',
			   html: '<body bgcolor="#E6E6FA"><font size="2" face="verdana" color="black"><b>Proprietary and Confidential. Not for disclosure outside of Verizon</b></font><img align="right" src="images/verizonlogo.jpeg" alt="Verizon" height="50" width="150"></body>',
			   height: 50
			  }

			 ]


			});
		}	
		});