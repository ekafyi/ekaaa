import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ShareCardWrapper,
  // ShareCardTitle,
  TweetButton,
  CopyButton,
  RssButton,
} from './ShareCard.css'

class ShareCard extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isCopied: false,
      canCopy: true
    }
  }

  componentDidMount() {
    if (!document.queryCommandSupported('copy')) {
      this.setState({ canCopy: false })
    }
  }

  // copy post URL to clipboard
  // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
  handleCopyText = (e) => {
    var tempInput = document.createElement("input");
    tempInput.value = this.props.postUrl;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    this.setState({ isCopied: true });
    this.copyBtnEl.focus(); // retain focus after copying link (for keyboard users)
  }

  render() {
    const { postUrl, postTitle, rssUrl } = this.props

    const twitterShareText = '"' + postTitle + '" ' + postUrl + ' #ekaaame';
    const twitterShareUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(twitterShareText) + '&source=webclient';

    return (
      <ShareCardWrapper>
        {/* <ShareCardTitle>share</ShareCardTitle> */}
        <TweetButton href={twitterShareUrl} target="_blank">Tweet this post</TweetButton>,<br/>{' '}
        {this.state.canCopy && (
          <React.Fragment>
            <CopyButton 
              className="has-js"
              onClick={this.handleCopyText} 
              ref={(element) => { this.copyBtnEl = element }} 
            >
              copy link
            </CopyButton>
            {this.state.isCopied && (
              <span role="alert" aria-label="Post link copied successfully!"> ✔ </span>
            )} 
            {' '}for sharing,<br/>{' '}
          </React.Fragment>
        )}
        or{' '}
        <RssButton href={rssUrl}>subscribe via RSS</RssButton>
        <noscript>
          {`<style>.has-js { display: 'none'; }</style>`}
        </noscript>
      </ShareCardWrapper>
    );
  }
}

ShareCard.propTypes = {
  /** post URL for sharing */
  postUrl: PropTypes.string.isRequired,
  /** post title for Twitter body text */
  postTitle: PropTypes.string.isRequired,
  /** my RSS feed URL (same for all posts) */
  rssUrl: PropTypes.string.isRequired,
};

// remove `postUrl` and `postTitle` dummy data in production
ShareCard.defaultProps = {
  // postUrl: 'https://ekaaa.me/post/blah', 
  // postTitle: 'Adding SVG to your Gatsby site', 
  rssUrl: 'https://ekaaa.me/rss', 
};

export default ShareCard;