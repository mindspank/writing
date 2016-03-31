var qsocks = require('qsocks');

qsocks.Connect().then(function(global) {
    return global.openDoc('Pivot.qvf');
})
.then(function(app) {
    
    app.getObject('yHuKXV').then(function(obj) {
       
        obj.getLayout().then(function(layout) {
            
            var data = layout.qHyperCube.qPivotDataPages[0];
            console.log(data.qData)
            
        })
        
        
    })
    
})
.catch(function(error) {
    console.log(error)
})