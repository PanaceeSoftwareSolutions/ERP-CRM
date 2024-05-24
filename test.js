import mongoose from 'mongoose'
import { type } from 'os';

const userschema = mongoose.Schema({
    name: {
        type : String
    },
    Roll : {
          type : Number
    },
    destiation : {
        type : String
    }
})






  
const userschema = mongoose.model( 'user' , userschema);
export default userschema;

