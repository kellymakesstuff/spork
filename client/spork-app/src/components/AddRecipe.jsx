import React, { Component } from 'react'

export default class AddRecipe extends Component {
    render() {
        return (
            <div>
                <form>
                <input placeholder="Dish name" type="text"/>
                <input placeholder="img URL" type="text"/>
                <input placeholder="Brief description" type="text"/>
                <h3>ingredients</h3>
                <input type="text" placeholder="ingredient amount"/> <input placeholder="ingredient 1" type="text"/>
                <input type="text" placeholder="ingredient amount"/> <input placeholder="ingredient 2" type="text"/>
                <input type="text" placeholder="ingredient amount"/> <input placeholder="ingredient 3" type="text"/>
                <input placeholder="Instructions" type="text"/>
                <input placeholder="Prep time" type="text"/>
                </form>
                
            </div>
        )
    }
}
