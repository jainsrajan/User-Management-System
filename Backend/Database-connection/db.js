const mongoose = require('mongoose')

const connect_to_db = async()=>{
     mongoose.connect(process.env.mongoURL)

    .then((conn)=>{
        console.log(`Database is connected to ${conn.connection.host}`)
    })
    .catch((error)=>{
        console.log(error)
        process.exist(1)
    })
}

module.exports = connect_to_db