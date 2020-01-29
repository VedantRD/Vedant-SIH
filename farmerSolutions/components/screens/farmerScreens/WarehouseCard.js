import React, { Component } from 'react'
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import StarRating from 'react-native-star-rating'
import { StyleSheet } from 'react-native'


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
        return (
            <Container>
                <Header />
                <Content padder>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../assets/logo.jpg')} />
                                <Body>
                                    <Text>Rohan's Ware-House</Text>
                                    <Text note>Anand Nagar,Nanded</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../../assets/21.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <StarRating disabled={false} maxStars={5} starSize={15}
                                        StarColor={'gold'}
                                        rating={this.state.starCount}
                                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    />
                                </Button>
                            </Left>
                            <Text>Capacity:70 sq.ft</Text>
                            <Right>
                                <Text>1km</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default WarehouseCard
