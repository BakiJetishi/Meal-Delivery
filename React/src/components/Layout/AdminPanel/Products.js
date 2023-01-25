import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'

import RemoveProduct from './RemoveProduct'

import classes from './Products.module.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [httpError, setHttpError] = useState();

    /* Fetching data from the firebase database. */
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('http://localhost/React-PHP/PHP/api/products/read.php');

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
            setMeals(loadedMeals);
        };

        fetchMeals().catch((error) => {
            setHttpError(error.message);
        });
    }, []);


    const filterMeals = (id) => {
        const newMeals = meals.filter(meal => meal.id !== id)
        setMeals(newMeals)
    }

    /* Return if there is an error in the fetching of data from the database. */
    if (httpError) {
        return (
            <section className={classes['meals-error']}>
                <p>{httpError}</p>
            </section>
        );
    }

    /* Mapping through the filteredMeals array and returning a MealItem component for each item in the array. */
    let mealsList = meals.map((meal) => (
        <div className={classes.box} key={meal.id}>
            <div className={classes.img}>
                <img src={meal.img_url} alt="" className={classes.box} />
            </div>
            <div className={classes.text}>
                <div className={classes.title}>{meal.title}</div>
                <div className={classes.title2}>{meal.body}</div>
                <div>
                    <NavLink to={`/admin/updateproduct/${meal.id}`}><button>Update</button></NavLink>
                    <RemoveProduct id={meal.id} name={meal.img_url} meals={meals} onRemove={filterMeals} />
                </div>
            </div>
        </div>
    ));

    return (
        <div className={classes['popular-dishes']} style={{ paddingTop: 80 }}>
            <div className={classes.inner}>
                <h2 className={classes.title}><span className={classes['box-title-inner']}>Products</span></h2>
                <div className={classes.boxs}>{mealsList}</div>
            </div>
        </div>
    )
}

export default Meals