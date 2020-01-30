import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, InputGroup, Input, Form, Item } from 'native-base';
import StarRating from 'react-native-star-rating'
import WarehouseCard from './WarehouseCard';
import { StyleSheet } from 'react-native'

const warehouseData = require('./farmerData/WarehouseData.json')

export default class ShowWarehouses extends Component {
  render() {
    return (
      <Container>
        <Header searchBar >
          <Form>
            <Item>
              <InputGroup>
                <Icon name='search' style={{ color: 'white' }} />
                <Input placeholder='search' placeholderTextColor='white' />
                <Icon name='ios-people' style={{ color: "white" }} />
              </InputGroup>
            </Item>
          </Form>
        </Header>
        <Content>
          {warehouseData.map((item) => {
            return (<WarehouseCard data={item} key={item.id}></WarehouseCard>)
          })}
        </Content>
      </Container>
    );
  }
}