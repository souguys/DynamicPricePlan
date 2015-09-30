Ext.define('Verizon.store.VerizonStore', {
	extend: 'Ext.data.Store',
	//autoLoad: true,
    fields: ['name', 'data'],
    proxy: {
        type: 'ajax',
        url: 'DataServlet',
        reader: {
            type: 'json',
            root: 'data'
        }
    }/*,
    data: [
        { 'name': 'S',   'data':25 },
        { 'name': 'M',   'data':35 },
        { 'name': 'L', 'data':45 },
        { 'name': 'XL',  'data':60 }
    ]*/
});