import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (
    <header className ='heading'>
        <h1>{title}</h1> 
        <Button  text='Add' color ='green'/>
        
    </header>

  )
}

Header.defaultProps ={
    title : 'Task Tracker',
}

Header.propTypes ={
    title : PropTypes.string.isRequired,
}
export default Header