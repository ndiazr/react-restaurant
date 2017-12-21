//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './Footer.scss';

class Footer extends Component {
  static proptypes = {
      copyrigth: PropTypes.string  };

  render() {
      const {copyrigth = '&copy; React 2017'} = this.props;
      const {authors = ' by Nelson Diaz - Roberto Robles'} = this.props;

    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{ __html: copyrigth }} />
        <p dangerouslySetInnerHTML={{ __html: authors }} />
      </div>
    );
  }
}

export default Footer;
