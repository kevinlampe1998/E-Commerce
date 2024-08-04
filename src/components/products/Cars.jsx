import { useContext } from "react";
import { TheContext } from "../../App";

const Cars = () => {
    const { picPaths} = useContext(TheContext);

    return (
        <main className="cars">
            <h2>Cars</h2>
            <section className="car-products">
                {
                    picPaths?.categorized?.cars?.map((car, index) => (
                        <div key={index} className="card-container">
                            <div>
                                <h3>{car.replace(".jpg", "")}</h3>
                                <h3>{Math.round(Math.random() * 100) + 100.99} $</h3>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <img src={`/images/cars/${car}`} alt="" />
                        </div>
                    ))
                }
            </section>
        </main>
    );
}

export default Cars;
