import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from 'components/LoadingIndicator';

import Tips from './views/Tips';
import Card from './views/Card';
import Cover from './views/Cover';

import './style.scss';

class VenueDetail extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      seeAllTips: false,
    };
  }

  componentDidMount() {
    const {
      fetchVenueDetail,
      match: { params: { id } }
    } = this.props;

    fetchVenueDetail({
      id
    });
  }

  onChange(value) {
    this.setState(value);
  }

  render() {
    const { seeAllTips } = this.state;
    const {
      tips,
      venue,
      photos,
      loading,
    } = this.props;

    return (
      <div className="venue-detail-page">
        { loading && (
          <LoadingIndicator />
        )}
        <Cover
          venue={venue}
        />
        <div className="page-content">
          <div className="container">
            <div className="content">
              { photos && photos.items.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
            <Tips
              tips={tips}
              seeAllTips={seeAllTips}
              onChange={this.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

VenueDetail.propTypes = {
  tips: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  venue: PropTypes.object.isRequired,
  photos: PropTypes.object.isRequired,
  fetchVenueDetail: PropTypes.func.isRequired,
};

export default VenueDetail;
