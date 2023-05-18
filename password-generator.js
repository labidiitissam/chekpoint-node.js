const generator = require('generate-password');
var password =generator.generatorgenerate({
    length :10,
    numbers : true
});
console.log(password);