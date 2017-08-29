
function someFunction(arg1) {

    return new Promise((resolve, reject) => {
        
        if (arg1 === 'YES') {
            return resolve('GOOD VALUE');
        }else {
            return reject('BAD VALUE - EXPECTING.. YES');
        }

    });

}


        someFunction('YES')    // 'YES' will go into arg1, of someFunction
                .then(function (result) {                    
                    console.error('good result');   // this will be triggered
                })
                .catch(function (err) {
                    console.error('bad error');
                });
                
        someFunction('NO')   // 'NO' will go into arg1, of someFunction
                .then(function (result) {                    
                    console.error('good result');
                })
                .catch(function (err) {
                    console.error('bad error');     // this will be triggered
                });

