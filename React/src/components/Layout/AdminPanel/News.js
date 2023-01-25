import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'

import RemoveNews from './RemoveNews'

import classes from './News.module.css'

const News = () => {
    const [News, setNews] = useState([]);
    const [httpError, setHttpError] = useState();

    /* Fetching data from the firebase database. */
    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch('http://localhost/React-PHP/PHP/api/news/read.php');

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedNews = [];

            /* Looping through the responseData and pushing the data into the loadedNews array. */
            for (const key in responseData) {
                loadedNews.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    body: responseData[key].body,
                    img_url: responseData[key].img_url,
                });
            }
            setNews(loadedNews);
        };

        fetchNews().catch((error) => {
            setHttpError(error.message);
        });
    }, []);


    const filterNews = (id) => {
        const newNews = News.filter(meal => meal.id !== id)
        setNews(newNews)
    }

    /* Return if there is an error in the fetching of data from the database. */
    if (httpError) {
        return (
            <section className={classes['News-error']}>
                <p>{httpError}</p>
            </section>
        );
    }

    /* Mapping through the filteredNews array and returning a MealItem component for each item in the array. */
    let NewsList = News.map((meal) => (
        <div className={classes.box} key={meal.id}>
            <div className={classes.img}>
                <img src={meal.img_url} alt="" className={classes.box} />
            </div>
            <div className={classes.text}>
                <div className={classes.title}>{meal.title}</div>
                <div className={classes.title2}>{meal.body}</div>
                <div className={classes.button}>
                    <NavLink to={`/admin/updatenews/${meal.id}`}><button>Update</button></NavLink>
                    <RemoveNews id={meal.id} name={meal.img_url} News={News} onRemove={filterNews} />
                </div>
            </div>
        </div>
    ));

    return (
        <div className={classes['popular-dishes']} style={{ paddingTop: 80 }}>
            <div className={classes.inner}>
                <h2 className={classes.title}><span className={classes['box-title-inner']}>News</span></h2>
                <div className={classes.boxs}>{NewsList}</div>
            </div>
        </div>
    )
}

export default News