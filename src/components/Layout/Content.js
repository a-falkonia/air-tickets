import classes from './Content.module.scss'
const Content = (props) => {
    return (
        <div className={classes.content}>{props.children}</div>
    )
}

export default Content