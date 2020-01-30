import React, { Component } from 'react'
import { Image, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, View } from 'native-base';
import StarRating from 'react-native-star-rating'
import { StyleSheet } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

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
        // const nav =   
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("WarehouseDetails", { item: item })}>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require(`../../assets/warehouses/ware2.jpg`)} />
                            <Body style={{ marginLeft: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                                <Text style={{ fontSize: 16 }} note>{item.address}</Text>
                            </Body>
                            {/* <Icon name="dots-vertical"></Icon> */}
                            <Text style={{ fontWeight: 'bold', marginRight: 10, fontSize: 18 }}>{item.distance} Km</Text>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <StarRating disabled={false} maxStars={5} starSize={18}
                                    fullStarColor={'orange'}
                                    rating={this.state.starCount}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                />
                            </Button>

                        </Left>
                        <Right>
                            <Text style={{ textAlign: 'left' }}>Total Space : {item.space} sq ft</Text>
                            <Text>
                                <Text style={{ textAlign: 'right' }}>Available : </Text>
                                <Text style={{ textAlign: 'right', fontWeight: 'bold', color: 'green', fontSize: 16 }}>{item.availableSpace} Sq Ft</Text>
                            </Text>
                        </Right>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    }
}

export default WarehouseCard
