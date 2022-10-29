const mongoose = require('mongoose')

const msgSchema = mongoose.Schema({
    msg:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Msg', msgSchema)