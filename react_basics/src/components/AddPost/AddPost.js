import React,{Component} from "react"

class AddPost extends Component{
    state = {
        title:'',
        description:'',
        status:''
    }
    addPostHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    textChange = (title,e) => {
        this.setState({
            [title]: e.target.value,
        })
    }
    render(){
        return <div>
            <h2 className="text-2xl font-bold">Add Post</h2>
            <form onSubmit={this.addPostHandler}>
                <div className="my-3">
                    <label className="block">Title</label>
                    <input type="text" value={this.state.title} className="px-3 py-1 block w-1/4 border border-gray-600 focus:outline-none focus:border-red-600"  
                        onChange={this.textChange.bind(this,'title')}
                    />
                </div>
                <div className="my-3">
                    <label className="block">Description</label>
                    <textarea value={this.state.description} className="px-3 py-1 block w-1/4 border border-gray-600 focus:outline-none focus:border-red-600"
                        onChange={this.textChange.bind(this,'description')}
                    />
                </div>
                <div className="my-3">
                    <label className="block">Status</label>
                    <select value={this.state.status} className="px-3 py-1 block w-1/4 border border-gray-600 focus:outline-none focus:border-red-600"
                        onChange={this.textChange.bind(this,'status')}
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <div className="my-3">
                    <button type="submit" className="bg-indigo-900 text-white px-5 py-2" >Add Post</button>
                </div>
            </form>
        </div>
    }
}

export default AddPost;