import React from 'react'
import { Container } from 'native-base'
import { Header } from 'apparch-core'
import { Content } from 'native-base'
import { Accordion } from 'apparch-core'

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header {...this.props} title="Some title" />
        <Content padder>
          <Accordion
            data={[
              { title: 'First Element', content: 'Lorem ipsum dolor sit amet' },
              { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' }
            ]}
            setting={{ icon: 'ios-add', expandedIcon: 'ios-remove' }}
          />
        </Content>
      </Container>
    )
  }
}

export default HomeScreen
