Ext.define("Verizon.controller.GraphController",{
	extend:"Ext.app.Controller",	
	views:["home.VerizonChart","home.CompetitorChart","home.ComparePricePlanContainer","home.ComparePricePlanChart"],
	models:[],
	stores:["VerizonStore","CompetitorStore","CompetitorPricePlanStore"],
	refs: [{
	    ref: 'verizonChart',
	    selector: 'verizonchart'
	},{
		ref: 'competitorChart',
		selector: 'competitorchart'
	},{
		ref: 'comparePricePlanChart',
		selector:'comparepriceplanchart'
	}],
	init:function(){
		console.log('Graph Users!');
		 this.control({
	            'viewport > panel': {
	               // render: this.graphRendered
	            },
	            'container button[action=triggerplanchange]':{	            	
	            	click: this.executePlanChange
	            },
	            'verizonchart': {
	            	beforerender: this.renderVerizonChart
	            },
	            'competitorchart': {
	            	beforerender: this.renderCompetitorChart
	            },
	            'comparepriceplanchart':{
	            	beforerender: this.renderProposedChart
	            }
	        });
	},
	renderVerizonChart:function(){
		console.log("Graph renderss");
		var me = this;
		var verizonStore = this.getVerizonChart().getStore();
		verizonStore.load({
			   params:{"dataType": "verizoncurrentdata"},
			   callback: function(records, operation, success) {
				   me.getVerizonChart().redraw();
			    }

		});
	},
	renderCompetitorChart:function(){
		console.log("Competitor Chart renderss");
		var me = this;
		var competitorStore = this.getCompetitorChart().getStore();
		console.log("Comperrr" , competitorStore);
		competitorStore.load({
			   params:{"dataType": "competitordata"},
			   callback: function(records, operation, success) {
				   me.getCompetitorChart().redraw();
			    }
		});
	},
	
	executePlanChange: function(){
		alert('Execute Plan change');
		var widget = Ext.widget("comparepriceplancontainer");
	},
	renderProposedChart: function(){
		var me = this;
		var verizonStore = this.getComparePricePlanChart().getStore();
		console.log(verizonStore);
		verizonStore.load({
			   params:{"dataType": "newMarketData"},
			   callback: function(records, operation, success) {
				   me.getCompetitorChart().redraw();
			    }
		});
		/*Ext.Ajax.request({
			url: 'DataServlet',
		    params: {
		    	"dataType": "newMarketData"
		    },
		    success: function(response){
		    	console.log('response',response);
		        var text = response.responseText;
		    	var resObj=Ext.JSON.decode(text);
		        console.log(text);
		        verizonStore.load(resObj.proposedList);
		        //me.getComparePricePlanChart().redraw();
		        //console.log(obj1);
		    }
		});*/
	}
});