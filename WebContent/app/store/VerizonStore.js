Ext.define('Verizon.store.VerizonStore', {
	extend: 'Ext.data.JsonStore',
    fields: ['name', 'data'],
    data: [
        { 'name': 'S',   'data':25 },
        { 'name': 'M',   'data':35 },
        { 'name': 'L', 'data':45 },
        { 'name': 'XL',  'data':60 }
    ]
});