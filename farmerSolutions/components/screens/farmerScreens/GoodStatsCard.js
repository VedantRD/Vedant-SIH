import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Title, View, Right } from 'native-base';
export default class GoodStatsCard extends Component {
  render() {
    const danger = '#D9534f'
    const success = '#069e31'
    const item = this.props.item
    return (
      <Card style={{}}>
        <CardItem header bordered>
          <Body>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{item.goodname}</Text>
          </Body>
          <Right>
            <Text style={{ fontSize: 18, textAlign: 'right' }}>
              {item.rent} Rs/50Kg
          </Text>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={{ fontSize: 18 }}>
              Stored At : {item.whereStored}
            </Text>
            <Text style={{ fontSize: 18 }}>
              Address : {item.address}
            </Text>
            <Text style={{ fontSize: 18 }}>
              Quantity : {item.quantity} Quintal
            </Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Left>
            <Text style={{ fontSize: 18 }}>
              {item.staus ?
                <Text style={{ color: success, fontWeight: 'bold' }}>Open For Sell</Text> :
                <Text style={{ color: danger, fontWeight: 'bold' }}>Not Open For Sell</Text>}
            </Text>
          </Left>
          {/* <Right> */}
          <Button success bordered>
            <Text style={{}}>Make Available</Text>
          </Button>
          {/* </Right> */}
        </CardItem>
        {/* <CardItem>
          
        </CardItem> */}
      </Card>
    );
  }
}