import { useEffect, useState } from "react"
import LoadedNews from './LoadedNews'

import classes from './LatestNews.module.css'

const News = () => {

    const [news, setNews] = useState([]);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('http://localhost/React-PHP/PHP/api/news/read.php?limit=3');

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedNews = [];



            for (const key in responseData) {
                loadedNews.push({
                    key: responseData[key].id,
                    id: responseData[key].id,
                    title: responseData[key].title,
                    desc: responseData[key].body,
                    img: responseData[key].img_url,
                });
            };
            setNews(loadedNews);
        }



        fetchMeals().catch((error) => {
            setHttpError(error.message);
        });
    }, []);


    const newsList = news.map((item) => (
        <LoadedNews
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
        />
    ))


    if (httpError) {
        return (
            <section className={classes.error}>
                <p>{httpError}</p>
            </section>
        );
    }
    return (
        <div className={classes.news}>
            <div className={classes.inner}>
                <h2 className={classes.title}><span>Latest News</span></h2>
                <div className={classes.boxs}>
                    {newsList}
                </div>
            </div>
        </div>
    )
}

export default News