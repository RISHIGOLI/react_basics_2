import {Component} from 'react'
import Button from '../button/Button';
class HelloWorld extends Component{
    render(){
        return(
            <div className='container mx-auto'>
                {this.props.text}
            </div>
        )
    }
}
export default HelloWorld;