import React, { Component } from 'react'
import { Image, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, View } from 'native-base';
import StarRating from 'react-native-star-rating'
import { StyleSheet } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

export class WarehouseCard extends Component {
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
                                    rating={item.rating}
                                />
                            </Button>
                        </Left>
                        <Right>
                            <Text>
                                <Text style={{}}>Available : </Text>
                                <Text style={{ fontWeight: 'bold', color: 'green', fontSize: 16 }}>{item.availableSpace} Sq Ft</Text>
                            </Text>
                            <Text style={{}}>Total Area : {item.space} sq ft</Text>
                        </Right>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    }
}

export default WarehouseCard
