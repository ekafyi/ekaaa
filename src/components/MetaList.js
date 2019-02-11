import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  MetaListWrapper,
  MetaListItem,
  MetaKey,
  MetaValue,
  MetaIcon,
} from './MetaList.css'

class MetaList extends Component {
  render() {
    const { data, doesShowIcon } = this.props

    return (
      <MetaListWrapper>
        {data.map((item, i) => {
          return (
            <MetaListItem key={`meta-list-${i}`}>
              <MetaKey>
                {doesShowIcon &&
                  (<MetaIcon>{(item.icon ? item.icon : '🔸') + ` `}&nbsp;</MetaIcon>)
                }
                {item.key}:{` `}
              </MetaKey>
              <MetaValue>{item.value}</MetaValue>
            </MetaListItem>
          )
        })}
      </MetaListWrapper>
    );
  }
}

MetaList.propTypes = {
  /** key-value pairs to be printed in the list (eg. "Drinking: coffee") */
  data: PropTypes.array,
  /** show optional icon before item */
  doesShowIcon: PropTypes.bool,
};

export default MetaList;