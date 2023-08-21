const PORT = 5000 || process.env.PORT
const app = require('./app.js')


app.listen(PORT , ()=>{
     console.log(`Server is listening on port ${PORT}`)
 })
 
