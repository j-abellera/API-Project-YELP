import React from 'react';
import './BusinessList.css';

import Business from '../Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business business={business} key={Math.random() * 100} />
          })
        }
      </div>
    );
  }
}

export default BusinessList;