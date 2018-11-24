import React from 'react'
import { Accordion } from 'apparch-core'
import { Container } from 'native-base'
import { Header } from 'apparch-core'

class AboutScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header {...this.props} title="About" />
        <Accordion
          data={[
            { title: 'First Element', content: 'Lorem ipsum dolor sit amet' },
            { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
            { title: 'Third Element', content: 'Lorem ipsum dolor sit amet' }
          ]}
        />
      </Container>
    )
  }
}

export default AboutScreen
