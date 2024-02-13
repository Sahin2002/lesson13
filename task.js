const tasks=()=>{
    
const customers = [
    { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
    { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
   
  ];
    const orders = [
        { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
        { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
        
      ];
    
    //   map
    customers.map(users=> {
        console.log(users);
    })
      //filter 
     const filters =orders.filter(product=> (product.quantity * product.price) >=1000)
     console.log(filters);
    //   findindex
   const index= orders.findIndex((user)=>{
        return user.orderId === 102
    })
    console.log(index);
//   find  
    customers.find(user=>{
       return user.name ==='Alice' ? console.log(user) : false
    })
//   location
 const users=customers.find(user=> user.location.country === 'USA')
orders.forEach(products=>{
    if(products.customerId === users.id){
        console.log('Order Sum');
    }
})
}
tasks()