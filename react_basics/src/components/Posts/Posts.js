import {Component} from 'react'
import SinglePost from '../SinglePost/SinglePost';

class Posts extends Component{
    state={
        posts:[
            {title:'post 1',description:'post 1 description'},
            {title:'post 2',description:'post 2 description'},
            {title:'post 3',description:'post 3 description'}
        ],

        postTitle: 'Posts List',
        showPosts: true
    };

    togglePostsHandler = () => {
        this.setState({
            showPosts: !this.state.showPosts
        })
    }

    getPosts(){
        if(!this.state.showPosts) return null;

        // 1. first way of looping an array
        // let posts = this.state.posts.map((post,id) => (
        //     <SinglePost
        //         key={id}
        //         title = {post.title}
        //         description = {post.description}
        //     />
        // ));

        // 2. second way of looping an array using for loop

        let posts = [];
        for(let post of this.state.posts){
            posts.push(
                <SinglePost
                
                title = {post.title}
                description = {post.description}
            />
            )
        }
        return(
            <div className='flex my-3'>{posts}</div>
        )
    }
    render(){
        
        return(
            <div>
            <h2 className='text-2xl my-3'>{this.state.postTitle}</h2>
            <div>
                <button className='px-5 py-3 text-white bg-red-500' onClick={this.togglePostsHandler}>
                    {
                        this.state.showPosts ? 'Hide Posts' : 'Show Posts'
                    }
                </button>
            </div>
            <hr />
            {this.getPosts()}
            </div>
        );
    }
}

export default Posts;