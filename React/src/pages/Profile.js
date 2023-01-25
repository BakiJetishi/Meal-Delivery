import { NavLink } from 'react-router-dom'

import classes from './Profile.module.css'

const Profile = () => {

    return (
        <section style={{ paddingTop: 100 }}>
            <div className={classes.wrapper}>
                <NavLink to='/admin/addnewproduct'>Add New Product</NavLink>
                <NavLink to='/admin/products'>Update or Remove Product</NavLink>
                <NavLink to='/admin/addnews'>Add News</NavLink>
                <NavLink to='/admin/news'>Update or Remove News</NavLink>
            </div>
        </section>
    )
}

export default Profile