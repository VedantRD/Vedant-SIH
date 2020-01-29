import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import StarRating from 'react-native-star-rating'
import WarehouseCard from './WarehouseCard';
import { StyleSheet } from 'react-native'


export default class ShowWarehouses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress = (rating) => {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <WarehouseCard></WarehouseCard>
    );
  }
}