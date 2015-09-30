Ext.define("Verizon.controller.LoginController",{
	extend:"Ext.app.Controller",
	views:["LoginPanel"],
	models:[],
	stores:[],
	refs:[
	      {ref:"userName",  selector:"#name"},
	      {ref:"passWord", selector:"#pass"}
	      ],     

	init:function(){
		console.log('Initialized Users! This happens before the Application launch function is called');
		 this.control({
	            'viewport > panel': {
	                //render: this.clicked
	            },
	            'loginpanel button': {
	            	click: this.clicked
	            	
	            }
	        });
	},
	clicked:function(){
		console.log("panel renderss");
		window.open("Graph.html","_self");
	}
});