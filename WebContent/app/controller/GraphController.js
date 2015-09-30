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
		var verizonStore = this.getVerizonChart().getStore();
		console.log(verizonStore);
		var widget = Ext.widget("comparepriceplancontainer");
		
	}
});