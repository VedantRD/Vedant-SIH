import React, { Component } from 'react'
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, View } from 'native-base';
import StarRating from 'react-native-star-rating'
import { StyleSheet } from 'react-native'

// const warehouseData = require('./farmerData/WarehouseData.json')


export class WarehouseCard extends Component {
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
        const item = this.props.data
        return (
            <Card style={{}}>
                <CardItem>
                    <Left>
                        <Thumbnail source={require(`../../assets/warehouses/ware2.jpg`)} />
                        <Body style={{ marginLeft: 20 }}>
                            <Text>{item.name}</Text>
                            <Text note>{item.address}</Text>
                        </Body>
                        {/* <Icon name="dots-vertical"></Icon> */}
                        <Text style={{ fontWeight: 'bold', marginRight: 10 }}>1 km</Text>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <StarRating disabled={false} maxStars={5} starSize={15}
                                fullStarColor={'orange'}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                            />
                        </Button>

                    </Left>
                    <Right>
                        <Text style={{ textAlign: 'left' }}>Total Space : {item.space} sq ft</Text>
                        <Text style={{ textAlign: 'right' }}>Available : {item.availableSpace} sq ft</Text>
                    </Right>
                </CardItem>
            </Card >
        )
    }
}

export default WarehouseCard
