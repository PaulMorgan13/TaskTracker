import PropTypes from 'prop-types'

const Button = ({color,text, onClick}) => { 




    return (
        <button  onClick={onClick} className="btn" style={{background:color}}>{text}</button> 

    )
} 

Button.defaultProps = { 
    color:"#688358"
} 

Button.propTypes ={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
}

export default Button
