import { useContext } from "react";
import { TheContext } from "../../App";

const Business = () => {
    const { picPaths } = useContext(TheContext);

    return (
        <main className="business" >
            <section className="business-products">
                {
                    picPaths?.categorized?.business?.map((business, index) => (
                        <div key={index}>
                            <img src={`/images/business/${business}`} alt={business} />
                        </div>
                    ))
                }
            </section>
        </main>
    );
}

export default Business;
