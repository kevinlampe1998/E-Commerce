import { useContext } from "react";
import { TheContext } from "../../App";

const Business = () => {
    const { picPaths } = useContext(TheContext);

    return (
        <main className="business" >
            <h2>Business</h2>
            <section className="business-products">
                {
                    picPaths?.categorized?.business?.map((business, index) => (
                        <div key={index} className="card-container">
                        <div>
                            <h3>{business.replace(".jpg", "")}</h3>
                            <h3>{Math.round(Math.random() * 100) + 100.99} $</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                            <img src={`/images/business/${business}`} alt={business} />
                        </div>
                    ))
                }
            </section>
        </main>
    );
}

export default Business;
