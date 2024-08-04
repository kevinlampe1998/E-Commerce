import { useContext } from "react";
import { TheContext } from "../../App";

const HouseAndGarden = () => {
    const { picPaths } = useContext(TheContext);

    return (
        <main className="house-and-garden">
            <h2>House and Garden</h2>
            <section className="house-and-garden-products">
                {
                    picPaths?.categorized?.houseAndGarden?.map((hag, index) => (
                        <div key={index} className="card-container">
                            <div>
                                <h3>{hag.replace(".jpg", "")}</h3>
                                <h3>{Math.round(Math.random() * 100) + 100.99} $</h3>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <img src={`/images/houseAndGarden/${hag}`} alt={hag} />
                        </div>
                    ))
                }
            </section>
        </main>
    );
}

export default HouseAndGarden;
