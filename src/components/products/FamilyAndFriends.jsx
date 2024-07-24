import { useContext } from "react";
import { TheContext } from "../../App";

const FamilyAndFriends = () => {
    const { picPaths } = useContext(TheContext);

    return (
        <main className="family-and-friends">
            <section className="family-and-friends-products">
                {
                    picPaths?.categorized?.familyAndFriends?.map((faf, index) => (
                        <div key={index}>
                            <img src={`/images/familyAndFriends/${faf}`} alt={faf} />
                        </div>
                    ))
                }
            </section>
        </main>
    );
}

export default FamilyAndFriends;
