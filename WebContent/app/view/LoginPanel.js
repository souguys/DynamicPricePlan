Ext
		.define(
				'Verizon.view.LoginPanel',
				{
					extend : "Ext.window.Window",
					xtype : 'loginpanel',
					layout : 'fit',
					closable : false,
					draggable : false,
					resizable : false,
					width : 425,
					height : 400,
					plain : true,
					border : false,
					autoShow : true,
					bbar : [ {
						xtype : 'tbtext',
						text : ' ©    2011 - present. verizon'
					} ],
					items : [ {
						xtype : 'form',
						labelWidth : 80,
						//bodyStyle : "background-image:url('images/verizonlogo.jpeg')",
						frame : true,
						id : 'login_form',
						iconCls : 'itrinegy',
						title : 'Welcome to Verizon Price Plan',
						height : 282,
						width : 425,
						defaultType : 'textfield',
						labelAlign : 'top',
						layout : 'absolute',
						// Login form elements
						items : [
								{
									xtype : 'component',
									autoEl : {
										tag : 'a',
										target : 'itrinegy',
										href : 'http://www.verizon.com',
										//html : '<font color="#006ba5"><b>v</b></font><font color="black">Erizon</font>'
										html: '<img align="center" src="images/verizonlogo.jpeg" alt="Verizon" height="70" width="100"/>'
									},
									style : 'font-size: 20px; text-decoration:none; font-family: sans-serif, helvetica, "aria black"',
									x : 300,
									y : 8
								},
								{
									xtype : 'label',
									style : 'color: #FFF; font-weight: bold; font-size: 12px',
									text : 'Username:',
									x : 110,
									y : 80
								},
								{
									name : 'loginUsername',
									id : 'login_user',
									//xtype: 'textfield',
									x : 105,
									y : 98,
									height : 28,
									width : 200
								},
								{
									xtype : 'label',
									style : 'color: #FFF; font-weight: bold; font-size: 12px',
									text : 'Password:',
									x : 110,
									y : 136
								}, {
									name : 'loginPassword',
									id : 'login_password',
									inputType : 'password',
									height : 28,
									width : 200,
									x : 105,
									y : 154,
								}, {
									xtype : 'checkbox',
									name : 'remember_me',
									boxLabel : 'Remember Me',
									inputValue : 1,
									x : 160,
									y : 192,
									id : 'remember_me'
								}, {
									xtype : 'button',
									id : 'login_button',
									text : 'Log In',
									width : 80,
									x : 290,
									y : 210,
									formBind : true,
								} ]
					}

					]

				});
