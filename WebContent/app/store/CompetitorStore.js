Ext.define('Verizon.store.CompetitorStore', {
		extend : 'Ext.data.Store',
        fields: ['plansize', 'att', 'sprint', 'tmobile'],
        proxy: {
            type: 'ajax',
            url: 'DataServlet',
            reader: {
                type: 'json',
                root: 'data'
            }
        }
        /*data: [
                {plansize: 'S', att: 24, sprint: 26, tmobile: 27},
                {plansize: 'M', att: 35, sprint: 37, tmobile: 34},
                {plansize: 'L', att: 42, sprint: 44, tmobile: 46},
                {plansize: 'XL', att: 58, sprint: 62, tmobile: 60}
              ]*/
    });