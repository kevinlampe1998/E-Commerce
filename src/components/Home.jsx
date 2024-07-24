import { useContext, useEffect, useState } from "react";
import { TheContext } from "../App";

const Home = () => {
    const { picPaths } = useContext(TheContext);
    // const randomNum = useRef(Math.round(Math.random() * picPaths.all.length));
    const [advert, setAdvert] = useState();
    const [letters, setLetters] = useState();

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
    });

    useEffect(() => {
        if (picPaths && letters) {

            const randomNum = Math.round(Math.random() * picPaths.all.length);

            const advertLink = picPaths.all[randomNum];
            let removeImages = advertLink && advertLink.replace('/images/', '');

            let advertTopic = removeImages.slice(0, removeImages.indexOf('/'));
            advertTopic = `${advertTopic[0].toUpperCase()}${advertTopic.slice(1, advertTopic.length)}`.split('');
            advertTopic = advertTopic.map((advertLetter) => 
                letters.includes(advertLetter) ? ` ${advertLetter}` : advertLetter).join('');

            let advertName = removeImages.slice(removeImages.indexOf('/') + 1, removeImages.indexOf('.jpg'))
                .replace(/-/g, ' ').replace(/\b[a-z]/g, (match) => match.toUpperCase());

            const fullAdvert = {
                link: advertLink,
                topic: advertTopic,
                name: advertName
            };
            setAdvert(fullAdvert);
        }
    }, [picPaths]);

    return (
        <main>
                {
                    advert &&
                        <section className="advertisement">
                            <h2>{advert.topic}</h2>
                            <h3>{advert.name}</h3>
                            <img src={advert.link} alt={advert.name}/>
                        </section>
                }
        </main>
    );
}

export default Home;
