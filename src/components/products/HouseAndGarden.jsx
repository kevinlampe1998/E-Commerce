import { useContext } from "react";
import { TheContext } from "../../App";

const HouseAndGarden = () => {
    const { picPaths } = useContext(TheContext);

    return (
        <main className="house-and-garden">
            <section className="house-and-garden-products">
                {
                    picPaths?.categorized?.houseAndGarden?.map((hag, index) => (
                        <div key={index}>
                            <img src={`/images/houseAndGarden/${hag}`} alt={hag} />
                        </div>
                    ))
                }
            </section>
        </main>
    );
}

export default HouseAndGarden;
