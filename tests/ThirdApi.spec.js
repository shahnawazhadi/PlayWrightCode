const{test,expect,request}=require('@playwright/test')

test('Testing Post location',async({request})=>
{
    const response=await request.post("https://rahulshettyacademy.com/maps/api/place/add/json",
        {
        data:{
            
  "location": {
    "lat": -38.383494,
    "lng": 33.427362
  },
  "accuracy": 50,
"name": "Frontline house",
  "phone_number": "(+91) 983 893 3937",
  "address": "29, side layout, cohen 09",
  "types": [
    "shoe park",
    "shop"
  ],
  "website": "http://google.com",
  "language": "French-IN"
},
params:{key:"qaclick123"}
        
        });
       const rsp=await response.json();
       console.log(rsp);
      const st= rsp.status;
      const placeid=rsp.place_id;
      const scp=rsp.scope;
     const ref= rsp.reference;
      const finalid=rsp.id;
      console.log(st);
      console.log(placeid);
      console.log(scp);
      console.log(ref);
      console.log(finalid);
expect(st).toBe("OK");

})