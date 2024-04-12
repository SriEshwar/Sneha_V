var products=["mobilephone","laptop","keychain","dolls","charger"];
products.map((product)=>{

   console.log(product)

})

var productDescription=[

   {
      pid:"P101",
      pName:"Samsung F5",
      price:13000
   },
   {
      pid:"P102",
      pName:"Samsung F9",
      price:26000
   },
   {
      pid:"P103",
      pName:"OPPO F5",
      price:12000
   }
   
   ]
   
    productDescription.map((product,i)=>{
      console.log(" Description of Product:"+(i+1));
      console.log(product.pid);
      console.log(product.pName);
      console.log(product.price);
   
   })
   