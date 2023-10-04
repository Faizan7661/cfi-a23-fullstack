import PropTypes from 'prop-types'
const Button = ({color,text}) => {
    const onclick = ()=>{
        console.log("click");
    }
    return <button onClick={onclick} style={{backgroundColor : color}} className="btn" >{text}</button>
         
}

Button.defaultProps = {
    color : 'steelblue'
}

Button.propTypes = {
    text:PropTypes.string,
    color:PropTypes.string,
}

export default Button