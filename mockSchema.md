User
    ObjectId
    firstName
    lastName
    email
    password
    userType [user, admin] #enum
    createdOn    

Product
    objectId
    description{admin}
    files[{
        file,
        fileType
    }] 
    user{admin}
    createdOn

Cart
   objectId
   order{user}
   comment{user}
   payment{user}
   review{user}

