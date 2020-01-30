import React, { Component } from 'react'
import { Image, Alert } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, InputGroup, Input, Form, Item, View, Footer, FooterTab } from 'native-base';
import StarRating from 'react-native-star-rating'



export class WarehouseDetails extends Component {
    render() {
        const item = this.props.navigation.getParam('item')
        return (
            <Container>
                <Header style={{ backgroundColor: '#D9534f' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                            <Text>Back</Text>
                        </Button>
                    </Left>
                    <Body style={{ justifyContent: 'center' }}>
                        <Title style={{ fontSize: 22 }}>{item.name}</Title>
                    </Body>
                </Header>

                {/* ====================== Info ========================== */}

                <Content>
                    <Card>
                        <Image source={require('../../assets/warehouses/ware2.jpg')} style={{ height: 250, width: '100%' }} />
                        <CardItem bordered style={{ justifyContent: 'flex-end' }}>
                            <Left>
                                <Button transparent>
                                    <StarRating disabled={true} maxStars={5} starSize={25}
                                        fullStarColor={'orange'}
                                        rating={item.rating}
                                    />
                                </Button>
                            </Left>
                            <Right>
                                <Button block danger onPress={() => Alert.alert('Under Development', 'this feature is coming soon, Please stay tuned')}>
                                    <Text style={{ fontSize: 17 }}>Book</Text>
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem header bordered style={{ justifyContent: 'flex-end', borderBottomWidth: 2, }}>
                            <Text>
                                {/* <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#069e31' }}>Rent : </Text> */}
                                <Text style={{ color: '#069e31', fontWeight: 'bold', fontSize: 20, marginRight: 10 }}>{item.rent} Rs/50kg/month</Text>
                            </Text>
                        </CardItem>
                        <CardItem header bordered style={{}}>
                            <Text style={{ fontSize: 22, color: '#D9534f', fontWeight: 'bold' }}>Details</Text>
                        </CardItem>
                        <CardItem bordered style={{ borderBottomWidth: 2 }}>
                            <Body style={{}}>
                                <Text style={{ fontSize: 18, paddingBottom: 4 }}>Space : {item.availableSpace} sqft</Text>
                                <Text style={{ fontSize: 18, paddingVertical: 4 }}>Height : {item.height} feet</Text>
                                <Text style={{ fontSize: 18, paddingVertical: 4 }}>Address : {item.address}</Text>
                            </Body>
                        </CardItem>
                        <CardItem header bordered style={{}}>
                            <Text style={{ fontSize: 22, color: '#D9534f', fontWeight: 'bold' }}>Construction Details</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={{ fontSize: 18, paddingBottom: 4 }}>Flooring : {item.flooring} sqft</Text>
                                <Text style={{ fontSize: 18, paddingVertical: 4 }}>Roof Type : {item.roofType}</Text>
                                <Text style={{ fontSize: 18, paddingTop: 4 }}>Cold Storage : {item.coldStorage ? <Text style={{ fontSize: 18 }}>Yes</Text> : <Text style={{ fontSize: 18 }}>No</Text>}</Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default WarehouseDetails
