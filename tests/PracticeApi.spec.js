const{test,request,expect}=require('@playwright/test');

let email_id ;
let  token_dt ;
let orgemail='abvnklmmnnm@example.com';
let orgpwd='secret123';
test('Post API',async({request})=>{
const res=await request.post('https://api.eventhub.rahulshettyacademy.com/api/auth/register/',{

    data:{
  "email": "abvnklmmnnm@example.com",
  "password": "secret123"
},
    headers:{
        "Accept":"application/json"
       
    }
   
});
 expect(res.status()).toBe(201);
 const wholeresp = await res.json();
console.log(wholeresp);
 email_id = wholeresp.user.email;
 token_dt = wholeresp.token;

console.log(email_id);
console.log(token_dt);
expect(email_id).toBe(orgemail);

});