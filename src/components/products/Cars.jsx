import { useContext } from "react";
import { TheContext } from "../../App";

const Cars = () => {
    const { picPaths} = useContext(TheContext);

    return (
        <main className="cars">
            <section className="car-products">
                {
                    picPaths?.categorized?.cars?.map((car, index) => (
                        <div key={index}>
                            <img src={`/images/cars/${car}`} alt="" />
                        </div>
                    ))
                }
            </section>
        </main>
    );
}

export default Cars;
