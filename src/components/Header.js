import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({title}) => { 
    const onClick= () =>{
        console.log("click")
    }



    return (
        <header className="header">
            <h1 style={headingstyle}>
               {title}
            </h1> 

            <Button  color="green" text="add" onClick={onClick}/> 
            
        </header>
    )
} 



Header.defaultProps = {
    title:"task tracker",
}

Header.prototype ={
    title: PropTypes.string.isRequired,
}
 


let headingstyle = {
    color:"grey" ,
    background:"#ADD8E6",
    padding:"10px 5px"

}

export default Header
