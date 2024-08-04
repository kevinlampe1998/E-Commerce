import { useContext } from "react";
import { TheContext } from "../../App";

const FamilyAndFriends = () => {
    const { picPaths } = useContext(TheContext);

    return (
        <main className="family-and-friends">
            <h2>For Family and Friends</h2>
            <section className="family-and-friends-products">
                {
                    picPaths?.categorized?.familyAndFriends?.map((faf, index) => (
                        <div key={index} className="card-container">
                            <div>
                                <h3>{faf.replace(".jpg", "")}</h3>
                                <h3>{Math.round(Math.random() * 100) + 0.99} $</h3>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <img src={`/images/familyAndFriends/${faf}`} alt={faf} />
                        </div>
                    ))
                }
            </section>
        </main>
    );
}

export default FamilyAndFriends;
