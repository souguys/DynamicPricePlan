Ext.define("Verizon.controller.LoginController",{
	extend:"Ext.app.Controller",
	views:["LoginPanel"],
	models:[],
	stores:[],
	refs:[
	      {ref:"userName",  selector:"textfield [id=login_user]"},
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
		if(Ext.getCmp('login_user').value == 'admin' && Ext.getCmp('login_password').value == 'admin'){
			window.open("Graph.html","_self");
		}else{
			Ext.Msg.show({
			     title:'Bad Credentials',
			     msg: 'Invalid Credentials',
			     buttons: Ext.MessageBox.OK,
			     icon: Ext.Msg.ERROR
			});
		}
	}
});