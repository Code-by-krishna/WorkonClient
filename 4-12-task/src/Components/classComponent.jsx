import React, { Component } from 'react';
import axios from "axios";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    console.log("componentDidMoun.....");
    
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    // console.log(response.data.slice(0,20));
    this.setState({posts: response.data.slice(0,20)})
    
    //   .then((res) => res.json())
    //   .then((resp) => this.setState({ posts: resp.slice(0,20) }));
  }

  componentDidUpdate() {
    console.log(this.state.posts);
    console.log("componentDidUpdate.....")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount......");
    
  }

  render() {
    return (
      <div>
        <table className="table-auto w-full border-collapse border border-gray-400 mt-6">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">UserId</th>
              <th className="border border-gray-400 px-4 py-2">Id</th>
              <th className="border border-gray-400 px-4 py-2">Title</th>
              <th className="border border-gray-400 px-4 py-2">Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td className="border border-gray-400 px-4 py-2">{post.userId}</td>
                <td className="border border-gray-400 px-4 py-2">{post.id}</td>
                <td className="border border-gray-400 px-4 py-2">{post.title}</td>
                <td className="border border-gray-400 px-4 py-2">{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClassComponent;
