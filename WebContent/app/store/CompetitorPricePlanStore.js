Ext.define('Verizon.store.CompetitorPricePlanStore', {
		extend : 'Ext.data.Store',
        fields: ['data1', 'data2', 'name'],
        proxy: {
            type: 'ajax',
            url: 'DataServlet',
            reader: {
                type: 'json',
                root: 'data'
            }
        }
        /*data: [
               { 'name': 'S', 'data1':25 ,'data2':30 },
               { 'name': 'M', 'data1':40,'data2':45 },
               { 'name': 'L', 'data1':60,'data2':65 },
               { 'name': 'XL','data1':80,'data2':85 }
              ]*/
    });