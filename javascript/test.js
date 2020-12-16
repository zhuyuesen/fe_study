function test({name = 'sb'}){
    console.log('name',name)
}

test() // error Cannot read property 'name' of undefined

test({}) // undefined
