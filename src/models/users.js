const validate = require('validator')
const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const userSchema = new mongoose.Schema(
    {
      name : {
          type: String,
          required : true,
          trim: true
      },
      surname : {
          type: String,
          required : true,
          trim : true
      },
      login_name : {
          type : String,
          required: true,
          unique : true,
          trim: true,
          minlength : 8,
          unique : true,
          validate(value) {
            if(value.includes('ğ' || 'ş' || 'ü'||' ç') ){
                throw new Error ('Can not include turkish letters')
            }
        }
      },
      email : {
        type: String,
        required: true,
        trim : true,
        validate(value) {
        if(!value.includes('@'))
        {
            throw new Error ('This is not a valid e-mail')
        }
      }
    },
    age : {
        type : Number,
        min:  18,
        max : 70,
        required: true,
        validate(value){
            if(value < 0) {
                throw new Error ('Age can not be less than 0')
            }
        }

    },
    password : {
        type: String,
        minlength : 7,
        validate(value) {
           if(value.length < 8) {
               throw new Error ('Password can be longer than 8 digits')
           }
            if(value.toLowerCase().includes('password')) {
                throw new Error ('Password can not contains "password"')
            }
 
        }
    },
    ownedGames : [
        {
              ownedPSGames : {
                  gameID : {


                  },
                  gameName : {

                  }
              },
              ownedPCGames : {
                   gameID : {

                   },
                   gameName : {

                   }

              }
        }
    ]

}
)

userSchema.statics.findByCredentials = async (login_name, password) => {
        const user = await User.findOne({login_name})
        
        if(!user){
            throw new Error ('Unable to login')
        }

        const isMatch = await bcryptjs.compare(password, user.password)
        
        console.log(isMatch)

        if(!isMatch){
            throw new Error('Unable to login')
        }

        return user
}

userSchema.pre('save', async function (next) {
    const user = this
    console.log('Ati')

    if(user.isModified('password')){
        user.password = await bcryptjs.hash(user.password,8)
    }

    next()

})

const User = mongoose.model('User', userSchema )


module.exports = User