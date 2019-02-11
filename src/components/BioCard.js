import React from 'react'
import { withPrefix } from 'gatsby'
import siteConfig from '../../data/siteConfig'
import styled from 'styled-components'
import { Text } from './Commons'
import { BioWrapper, BioText, BioTitle, Avatar } from './BioCard.css'
import { SmallP } from './Typography'


class BioCard extends React.Component {
  render() {
    const prefixedImg = withPrefix(siteConfig.authorAvatar)
    return (
      <BioWrapper {...this.props}>
        <Avatar>
          <img
            // src={siteConfig.authorAvatar}
            src='https://res.cloudinary.com/practicaldev/image/fetch/s--kgPHAJ5U--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/70827/5fc527d8-a5a7-496d-b078-7f007a18dd41.jpeg'
            alt={siteConfig.authorName}
            // style={{ backgroundImage: `url("${prefixedImg}")` }}
            width='80'
          />
        </Avatar>
        <BioText>
          <BioTitle>hello there!</BioTitle>
          <SmallP
            dangerouslySetInnerHTML={{ __html: siteConfig.authorDescription }}
          />
        </BioText>
      </BioWrapper>
    )
  }
}

export default BioCard
