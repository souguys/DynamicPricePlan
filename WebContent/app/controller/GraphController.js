Ext.define("Verizon.controller.GraphController",{
	extend:"Ext.app.Controller",
	
	views:["home.VerizonChart","home.CompetitorChart"],
	models:[],
	stores:["VerizonStore","CompetitorStore"],
	refs:[
	     
	      ],     

	init:function(){
		console.log('Graph Users!');
		 this.control({
	            'viewport > panel': {
	                render: this.graphRendered
	            }
	        });
	},
	graphRendered:function(){
		console.log("Graph renderss");
	}
});