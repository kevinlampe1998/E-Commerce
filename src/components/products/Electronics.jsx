import { useContext, useEffect } from "react";
import { TheContext } from "../../App";

const Electronics = () => {
    const { picPaths } = useContext(TheContext);

    useEffect(() => {
        console.log('picPaths', picPaths);
    });

    return (
        <main className="electronics">
            <section className="electronic-products">
                {
                    picPaths?.categorized?.electronics?.map((electronic, index) => (
                        <div key={index}>
                            <img src={`/images/electronics/${electronic}`} alt={electronic} />
                        </div>
                    ))
                }
            </section>
        </main>
    );
}

export default Electronics;
