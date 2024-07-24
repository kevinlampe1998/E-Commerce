import { useContext } from "react";
import { TheContext } from "../../App";

const Clothes = () => {
    const { picPaths } = useContext(TheContext);

    return (
        <main className="clothes">
            <section className="clothe-products">
                {
                    picPaths?.categorized?.clothes?.map((clothe, index) => (
                        <div key={index}>
                            <img src={`/images/clothes/${clothe}`} alt={clothe} />
                        </div>
                    ))
                }
            </section>
        </main>
    );
}

export default Clothes;
