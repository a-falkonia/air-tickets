import classes from './Sideblock.module.scss'

const Sideblock = (props) => {
    return (
        <div className={classes.sideblock}>
            {props.children}
        </div>
    )
}

export default Sideblock