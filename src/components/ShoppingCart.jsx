import { useContext } from "react";
import { TheContext } from "../App";

const ShoppingCart = () => {
    const { picPaths } = useContext(TheContext);

    return (
        <main className="shopping-cart">
            <h2>Shopping Cart</h2>
            {
                    picPaths && picPaths.all &&

                    Array(5).fill(1).map(() => 
                        Math.round(Math.random() * picPaths.all.length - 1))

                    .map((num, index) => (
                        <section className="shopping-item" key={index}>
                            <img src={picPaths.all[num]} alt={picPaths.all[num]} />
                            <div>
                                <h3>Lorem ipsum</h3>
                                <h4>dolor sit consectetur dicta plus</h4>
                                <p>{Math.round(Math.random() * 100) + 0.99} $</p>

                            </div>
                        </section>
                    ))
                }
                <section>
                    <div className="buy-button">Buy</div>
                </section>
        </main>
    );
}

export default ShoppingCart;
