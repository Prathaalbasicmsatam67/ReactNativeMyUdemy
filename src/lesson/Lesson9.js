
/**
 * 
 *  Here we are importing native-base lib 
 *  and using Card View component sample example for
 *  testing
 * 
 */
import React from 'react';

import { Image, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default class Lesson9 extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    isLoading: true
  }
  }

  

  async componentWillMount()  {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isLoading: false })
  }


  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator />;
    }

    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2019/08/46ed6f328a62a580a973f152c8a-300x221.jpg" }} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2019/08/best-whatsapp-life-dp-pic-i-300x300.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>)
  }
}