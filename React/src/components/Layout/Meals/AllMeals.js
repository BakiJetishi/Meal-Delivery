import { useEffect, useState } from 'react';
import axios from 'axios';

import MealItem from './MealItem'

import classes from './Meals.module.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [httpError, setHttpError] = useState();
    const [category, setCategory] = useState('All')
    const categories = ['All', 'Burgers', 'Pizza', 'Chicken', 'Drinks', 'Desserts', 'Fish', 'Fruits']

    /* Fetching data from the firebase database. */
    useEffect(() => {
        const fetchMeals = async () => {
            await axios.get('http://localhost/React-PHP/PHP/api/products/read.php').then(async response => {

                const responseData = await response.data;

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

            }).catch((error) => {
                setHttpError(error.message);
            });
        };
        fetchMeals()
    }, []);

    /* Return if there is an error in the fetching of data from the database. */
    if (httpError) {
        return (
            <section className={classes['meals-error']}>
                <p>{httpError}</p>
            </section>
        );
    }
    const changeHandle = (props) => {
        setCategory(props)
    }

    /* Filtering the meals array and returning a new array with the items that have the same type as
    the category. */
    let filteredMeals = meals.filter(item => item.meal_type === category)


    /* Checking if the category is equal to 'All' and if it is, it is setting the filteredMeals array to
    the meals array. */
    if (category === 'All') {
        filteredMeals = meals.map(item => item)
    }

    /* Mapping through the filteredMeals array and returning a MealItem component for each item in the
    array. */
    let mealsList = filteredMeals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            img_url={meal.img_url}
            title={meal.title}
            body={meal.body}
            price={meal.price}
        />
    ));

    /* Checking if the mealsList array is empty and if it is, it is setting the mealsList variable to a
    paragraph tag with the text 'No Food Items Available'. */
    if (mealsList.length === 0) {
        mealsList = <p>No Food Items Available</p>
    }

    return (
        <div className={classes['popular-dishes']} style={{ paddingTop: 80 }}>
            <div className={classes.inner}>
                <h2 className={classes.title}><span className={classes['box-title-inner']}>Products</span></h2>
                <div className={classes.food}>
                    {categories.map((category) => <button key={category} onClick={() => changeHandle(category)}>{category}</button>)}
                </div>
                <div className={classes.boxs}>{mealsList}</div>
            </div>
        </div>
    )
}

export default Meals