import React from 'react';

class Article extends React.Component {
    render() {
         return (
            <div class="container">
                <div class="jumbotron text-center">
                     <h1>{this.props.title}</h1>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article;
