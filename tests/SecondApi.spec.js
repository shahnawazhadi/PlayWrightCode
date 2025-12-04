const{test,expect,request}=require('@playwright/test')
let idd;

test ('Post Rahul API',async({request})=>
{
const response=await request.post("https://rahulshettyacademy.com/Library/Addbook.php",

    {
         data:{
            "name":"Learn Appium Automation with Java",
"isbn":"bcd",
"aisle":"891",
"author":"John foe",


         },
         timeout: 5000 // 5 seconds
    });
       console.log("Status:", response.status);
     
     const jps=await response.json()
      console.log(jps)
      const actualmessage = jps.Msg;
       idd=jps.ID;

  console.log("Extracted Msg:", actualmessage); 
  console.log("Extracted Id:", idd); 
 
  //expect(actualmessage).toBe("successfully added")
  //expect(actualmessage).toBe("Book Already Exists")


    
    
  
});
test('Get Rahul API',async({request})=>
{
 const getreq=await request.get("https://rahulshettyacademy.com/Library/GetBook.php?ID="+idd);
 console.log(await getreq.json());
  // Extract values
  const data = await getreq.json();
  const isbn = data[0].isbn;
  const aisle = data[0].aisle;

  // Concatenate
  const combined = isbn + aisle;

  console.log("ISBN:", isbn);
  console.log("Aisle:", aisle);
  console.log("Concatenated ID:", combined);

  // Assertion
  expect(combined).toBe(idd);
//const gtget=await getreq.json();
 //const idget=gtget.isbn+gtget.aisle;
 //console.log(idget)
 
   //expect(idd).toBe("bcd227")


});

test('delete rahulshetty api',async({request})=>
{
const dltmsg=await request.post("https://rahulshettyacademy.com/Library/DeleteBook.php",
    {
        data: {
            "ID":idd
        }
    

    });

const msst=await dltmsg.json();
console.log(msst);
const actmsg=msst.msg;
console.log(actmsg);
expect(actmsg).toBe("book is successfully deleted")
})