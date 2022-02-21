import { Fragment } from "react";
import MealPic from "../../assets/meals.jpg";
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes["main-image"]}>
                <img src={MealPic} alt="Menu Img" />
            </div>
        </Fragment>
    );
};
export default Header