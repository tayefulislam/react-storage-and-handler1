// fake database to manage local storage data


const addToDb = (id) => {

    let shopingCart = {};

    // get the cart shoping cart form local storage
    const storedCart = localStorage.getItem('shoping-cart');

    if (storedCart) {
        shopingCart = JSON.parse(storedCart)
    }

    // check item by id is this avabiable or not
    // add quantity
    const quantity = shopingCart[id];
    if (quantity) {
        // const newQuantity = +quantity + 1;
        const newQuantity = quantity + 1;

        shopingCart[id] = newQuantity;


    }
    else {

        shopingCart[id] = 1;

        console.log(shopingCart[id])


    }


    console.log(shopingCart)
    // update value and set
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart))




}

const removeFromDb = (id) => {

    // get shping cart items
    const storedCart = localStorage.getItem('shoping-cart');
    // check item avalaibe or not
    if (storedCart) {

        // parse stored cart and remove item
        const shopingCart = JSON.parse(storedCart)

        if (id in shopingCart) {

            delete shopingCart[id]
            localStorage.setItem('shoping-cart', JSON.stringify(shopingCart))
        }


    }




}



// remove all item function

const removeCart = () => {
    localStorage.removeItem('shoping-cart')
}



export { addToDb, removeFromDb, removeCart }