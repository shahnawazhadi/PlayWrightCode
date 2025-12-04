const{test,expect}=require('@playwright/test')


test('Get the dummy request',async({request})=>
{
const response=await request.get("https://reqres.in/api/users/2");
console.log(await response.json());
})
test('Post request',async({request})=>
{
const createres= await request.post('https://reqres.in/api/users',
        {
            data:{
    "name": "morpheus",
    "job": "leader"
},
            headers:{
                "Accept":"application/json"
            }

        });
        console.log(await createres.json());

})