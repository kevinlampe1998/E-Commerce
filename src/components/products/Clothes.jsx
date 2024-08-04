import { useContext } from "react";
import { TheContext } from "../../App";

const Clothes = () => {
    const { picPaths } = useContext(TheContext);

    return (
        <main className="clothes">
            <h2>Clothes</h2>
            <section className="clothe-products">
                {
                    picPaths?.categorized?.clothes?.map((clothe, index) => (
                        <div key={index} className="card-container">
                            <div>
                                <h3>{clothe.replace(".jpg", "")}</h3>
                                <h3>{Math.round(Math.random() * 100) + 100.99} $</h3>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <img src={`/images/clothes/${clothe}`} alt={clothe} />
                        </div>
                    ))
                }
            </section>
        </main>
    );
}

export default Clothes;
