import React from 'react';
import Article from '../components/Article';

class Featured extends React.Component {
    render() {
        const articles = [
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
        ].map(function (title, index) {
            return <Article key={index} title={title} />
        })
        
        return (
            <div class="container">
                <div class="jumbotron text-center">
                    <h1>Featured</h1>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="well text-center">
                            {"Ad spot #1"}
                        </div>
                    </div>
                </div>

                <div class='row'>{ articles }</div>
            </div>
        )
    }
}

export default Featured;
