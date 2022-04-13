import React, { useEffect, useState } from 'react';
import { addToDb, removeFromDb, removeCart } from '../../utilities/fakedb';

import './Cosmetic.css'


const Cosmetic = () => {


    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {

        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setCosmetics(data))

    }, [])



    return (

        <div>
            <h1>Cosmetic Deler</h1>
            {
                cosmetics.map(cosmetic => <ShowCosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></ShowCosmetic>)

            }

        </div>
    );
};

const addToCart = (id) => {
    // console.log('item added', id)
    addToDb(id)

}

const removeItem = id => {
    console.log(id)
    removeFromDb(id)
}

const removeDB = () => {

    removeCart()
}



function ShowCosmetic(props) {

    const { id, name, price } = props.cosmetic

    // const addToCartPera = () => addToCart(id)

    return (<div className='cosmetic'>

        <h1>{name}</h1>
        <h4>{price}</h4>
        <p>{id}</p>

        <button onClick={() => addToCart(id)}>Add To Cart</button>
        <button onClick={() => removeItem(id)}>Remove</button>
        <button onClick={() => removeDB()}>remove DB</button>

        {/* <button onClick={addToCartPera}>Add To Cart</button> */}





    </div>)
}

export default Cosmetic;

