import { useContext, useEffect, useState } from "react";
import { TheContext } from "../App";

export const randomNumFunc = (array) => {
    return Math.round(Math.random() * array.length);
};

const Home = () => {
    const { picPaths } = useContext(TheContext);
    const [letters, setLetters] = useState();
    const [ranNum, setRanNum] = useState();

    useEffect(() => {
        try {
            const getLetters = async () => {
                const response = await fetch('/data/upperCaseLetters.txt');
                const data = await response.text();
                setLetters(data);
            };
            getLetters();
        } catch (error) {
            console.log(error);
        }

    }, []);

    useEffect(() => {
        picPaths.all && setRanNum(randomNumFunc(picPaths.all));
    }, [picPaths]);

    return (
        <main className="home" >
            <div>
                {
                    picPaths && ranNum && letters &&

                    <section className="advertisement">
                        <div>
                            <h2>{
                                    picPaths.all[ranNum].split('/')[2].replace(/\b[a-z]/g, (match) => match.toUpperCase())
                                    .split('').map(char => letters.includes(char) ? ` ${char}` : char).join('')
                                }
                            </h2>
                            <h3>
                                {
                                    picPaths.all[ranNum].split('/')[3].replace('.jpg', '').replace(/\b[a-z]/g, (match) => match.toUpperCase())
                                }
                            </h3>
                        </div>
                        <img src={picPaths.all[ranNum]} alt={picPaths.all[ranNum]} />
                    </section>
                }
                </div>

                <div>
                {
                    picPaths && picPaths.all && ranNum &&

                    Array(5).fill(1).map(() => 
                        Math.round(Math.random() * picPaths.all.length - 1))

                    .map((num, index) => (
                        <section className="advertisement-bottom" key={index}>
                            <img src={picPaths.all[num]} alt={picPaths.all[num]} />
                            <div>
                                <h3>Lorem ipsum</h3>
                                <h4>dolor sit consectetur dicta plus</h4>
                            </div>
                        </section>
                    ))
                }
                </div>

        </main>
    );
}

export default Home;
