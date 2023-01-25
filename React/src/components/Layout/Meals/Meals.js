import { useEffect, useState } from 'react';

import MealItem from './MealItem'

import classes from './Meals.module.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [httpError, setHttpError] = useState();

    /* Fetching data from firebase and setting it to the state. */
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('http://localhost/React-PHP/PHP/api/products/read.php?limit=8');

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedMeals = [];

            /* Looping through the responseData and pushing the data into the loadedMeals array. */
            for (const key in responseData) {
                loadedMeals.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    body: responseData[key].body,
                    img_url: responseData[key].img_url,
                    price: responseData[key].price,
                    meal_type: responseData[key].meal_type
                });
            }

            /* Taking the last 8 meals and reversing the order. */
            setMeals(loadedMeals);
        };

        /* Catching the error and setting it to the state. */
        fetchMeals().catch((error) => {
            setHttpError(error.message);
        });
    }, []);

    /* Checking if there is an error and if there is it will return the error message. */
    if (httpError) {
        return (
            <section className={classes['meals-error']}>
                <p>{httpError}</p>
            </section>
        );
    }

    /* Mapping through the meals array and returning a MealItem component for each item in the array. */
    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            img_url={meal.img_url}
            title={meal.title}
            body={meal.body}
            price={meal.price}
        />
    ));

    return (
        <div className={classes['popular-dishes']}>
            <div className={classes.inner}>
                <h2 className={classes.title}><span>Latest products</span></h2>
                <div className={classes.boxs}>{mealsList}</div>
            </div>
        </div>
    )
}

export default Meals