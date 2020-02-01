import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, View } from 'native-base';

export class FarmerCard extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../../assets/logo.jpg')} />
                        <Body>
                            <Text style={{ fontSize: 20, marginLeft: 3 }}>Kishanlal</Text>
                            <Text note style={{ marginLeft: 3 }}>From Mukhed</Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>
        )
    }
}

export default FarmerCard
