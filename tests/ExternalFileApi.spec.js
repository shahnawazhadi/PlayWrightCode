const{test,expect,request}=require('@playwright/test');
const fs = require('fs');
test('External Json File',async()=>{

const res=JSON.parse(
 fs.readFileSync('./tests/data.json','utf-8')
);
const nm=res.name;
console.log(nm);
const ll=res.location.lat;
console.log(ll);
});