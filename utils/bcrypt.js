import bcrypt from 'bcrypt';

const password = '123Segura';

bcrypt.hash(password, 5, function (err, hash) {
    console.log(hash),

        bcrypt.compare(password, hash, function (err, res) {
            console.log(res)
        })
})