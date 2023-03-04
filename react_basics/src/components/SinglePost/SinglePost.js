import {Component} from 'react'

class SinglePost extends Component{
    render(){
        return(
            <div className='flex border border-gray-400 shadow m-4 p-3'>
                <div className='text-xl font-bold text-blue-600'>{this.props.title}</div>
                <div>{this.props.description}</div>
            </div>
        )
    }
}

export default SinglePost;