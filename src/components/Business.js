import React from 'react';
import './Business.css'

class Business extends React.Component {
    render() {
        const { address1, city, state, zip_code } = this.props.business.location;
        return (
            <div className="Business">
                    <div className="image-container">
                        <a href={this.props.business.url} target='_blank' rel='noreferrer'>
                            <img src={this.props.business.image_url} alt=''/>
                        </a>
                    </div>
                <h2>{this.props.business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{address1}</p>
                        <p>{city}</p>
                        <p>`{state} {zip_code}`</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.business.categories[0].title}</h3>
                        <h3 className="rating">{this.props.business.rating}</h3>
                        <p>`{this.props.business.review_count} reviews`</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business;