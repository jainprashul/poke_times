import React, { Component } from 'react'
import M from 'materialize-css'


class Category extends Component {

    componentDidMount(){
        var elems = document.querySelector('.drpdown');
        console.log(elems);
        
        M.Dropdown.init(elems, {
            hover : true,
            coverTrigger: false,
        })
        
    }

    render() {

        const categories = [
            {
                key: 1,
                text: "Business",
                value: "business"
            },
            {
                key: 2,
                text: "Entertainment",
                value: "entertainment"
            },
            {
                key: 3,
                text: "General",
                value: "general"
            },
            {
                key: 4,
                text: "Health",
                value: "health"
            },
            {
                key: 5,
                text: "Science",
                value: "science"
            },
            {
                key: 6,
                text: "Sports",
                value: "sports"
            },
            {
                key: 7,
                text: "Technology",
                value: "technology"
            }
        ]

        const Cat = categories.map(c => {
            return (
                <li className='center collection-item' key={c.key} onClick={() => {this.props.getCategory(c.value) }}>{c.text}</li>
            )
        })

        return (
            <div>
            {Cat}
            </div>
        )
    }



}
export default Category