import classes from './Logo.module.scss'
const Logo = () => {
    return (
        <span className={classes.logoBackground}>
            <span className={classes.logoAirplane}></span>
        </span>
    )
}
export default Logo