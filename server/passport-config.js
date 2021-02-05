const LocalStrategy = require('passport-local').Strategy


function initialize(passport) {
    const authenticateUser = (numero_documento,password,done) =>{
      const user = getUserByNumeroDocumento(numero_documento)
      if(user == null){
          return done(null,false, {message: 'No hay ningún usuario con esa número de documento'})
      }


    }
    passport.use(new LocalStrategy({usernameField: 'numero_documento'}),authenticateUser)
    passport.serializeUser((user,done)=> {})
    passport.deserializeUser((id,done)=> {})
}