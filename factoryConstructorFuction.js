//Factory Function

function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    }
}

const address = createAddress('a', 'b', 'c')

//Constructor Function

function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};

const address2 = new Address('a', 'b', 'c')