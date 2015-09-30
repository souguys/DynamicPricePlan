Ext.define("Verizon.controller.LoginController",{
	extend:"Ext.app.Controller",
	views:["LoginPanel"],
	models:[],
	stores:[],
	refs:[
	      {ref:"userName",  selector:"#name"},
	      {ref:"passWord", selector:"#pass"}
	      ],
	      /*[
       	{ref:"userName",selector:"loginpanel textfield[id=usernametext]"},
       	{ref:"password",selector:"loginpanel textfield[id=passwordtext]"},
       	{ref:"loginButton",selector:"loginpanel button[text=Submit]"}
      ],*/

	init:function(){
		this.control({
			"#login":{
			click:this.clicked
			}
		});
	},
	clicked:function(){
		/*this.application.viewport.add({xtype:"homepanel",id:"homepanel",height:600,width:600});
		this.application.viewport.getLayout().setActiveItem("homepanel");

		alert(this.getUserName().getValue());
		alert(this.getPassWord().getValue());*/
		
		alert('Hi');
	}
});