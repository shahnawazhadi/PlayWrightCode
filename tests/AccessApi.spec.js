const { test, expect } = require('@playwright/test');
const { request } = require('http');

let actk;
let reftkn;
let singleid;


test('Auth Test case', async ({ request }) => {
    
  const response = await request.post("https://dummyjson.com/auth/login", {
    data: {
  "username": "emilys",
  "password": "emilyspass",
  "expiresInMins": 30
}
  });

  console.log("Status:", response.status());

  const bodyText = await response.json(); // SAFE
  console.log(bodyText);
   actk=await bodyText.accessToken;
  console.log(actk);
  reftkn=await bodyText.refreshToken;
  console.log(reftkn);


});
test('get the data via accessToken',async({request})=>
{
    const getreq= await request.get("https://dummyjson.com/auth/me",{
        headers:{
              "Authorization": `Bearer ${actk}`
        }
    });
    const gre=await getreq.json();
    console.log(gre);
    
});
test('referesh access token',async({request})=>
{
   const reff= await request.post("https://dummyjson.com/auth/refresh",{
        data:{
             "refreshToken": reftkn, 
    "expiresInMins": 30
        }
    });
    const kbc =await reff.json();
    console.log(kbc);

});

test('get all products',async({request})=>
{
const productlist=await request.get("https://dummyjson.com/products");
const prodlistjson= await productlist.json();
console.log(prodlistjson);
 singleid = prodlistjson.products[1].id;
console.log(singleid);
});
test('get a single product',async({request})=>
{
const oneprod=await request.get("https://dummyjson.com/products/"+singleid);
const onprodjs=await oneprod.json();
console.log(onprodjs);
expect(singleid).toBe(onprodjs.id);

});
test('search products',async({request})=>
{
const sc=await request.get("https://dummyjson.com/products/search?q=phone");
const scone=await sc.json();
console.log(scone);
})

test('get all product categories',async({request})=>
{
    const allcat=await request.get("https://dummyjson.com/products/categories");
   const alljscat= await allcat.json();
   console.log(alljscat);

});
test('get product category list',async({request})=>
{
const catlist=await request.get("https://dummyjson.com/products/category-list");
const catlistjson=await catlist.json();
console.log(catlistjson);
});
test('get products by category',async({request})=>
{
    const getbyct=await request.get("https://dummyjson.com/products/category/smartphones");
    const getbyctjson=await getbyct.json();
    console.log(getbyctjson);
});
test.only('Add new product',async({request})=>
{
    const addnewprod=await request.post("https://dummyjson.com/products/add",{
        data:{
            "title": "BMW Pencil"
        }
    });
    const adpd= await addnewprod.json();
    console.log(adpd);

});
