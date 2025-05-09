const address = {
    street: '123 Street',
    city: 'Chicago',
    zipCode: 98144,
}

function showAddress(getAddress) {
    for (let key in getAddress){
        console.log(key, getAddress[key]);
    }
}

showAddress(address);