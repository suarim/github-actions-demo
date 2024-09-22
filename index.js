const express = require('express');
app=express();
app.get('/',(req,res)=>{
 res.send('Hello World');   
})
app.get('/about',(req,res)=>{
res.send('About Page');    
})
if (require.main === module) {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  }
module.exports = app