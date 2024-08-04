import { useContext } from "react";
import { TheContext } from "../../App";

const Electronics = () => {
    const { picPaths } = useContext(TheContext);

    return (
        <main className="electronics">
            <h2>Electronics</h2>
            <section className="electronic-products">
                {
                    picPaths?.categorized?.electronics?.map((electronic, index) => (
                        <div key={index} className="card-container">
                            <div>
                                <h3>{electronic.replace(".jpg", "")}</h3>
                                <h3>{Math.round(Math.random() * 100) + 100.99} $</h3>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <img src={`/images/electronics/${electronic}`} alt={electronic} />
                        </div>
                    ))
                }
            </section>
        </main>
    );
}

export default Electronics;
