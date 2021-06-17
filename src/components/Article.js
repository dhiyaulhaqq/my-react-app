import React from 'react';

class Article extends React.Component {
    render() {
        return (
            <div class="col-md-4" >
                <h1>{ this.props.title }</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
            </div>
        )
    }
}

export default Article;
