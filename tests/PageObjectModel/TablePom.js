class TablePom{
 constructor(page){
    this.page = page;
this.fixedheader=page.locator('.tableFixHead table thead tr th')
 }
 async validlog(){
    return this.fixedheader;
 }
}
module.exports={TablePom};