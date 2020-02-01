import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, View } from 'native-base';
import FarmerCard from './FarmerCard.js';

const FarmersData = require('./buyerData/AvailableFarmers.json')

export default class ShowFarmers extends Component {
    render() {
        // const path = FarmersData[0].goods.Onion.src
        return (
            <Content padder>
                <Container>
                    <FarmerCard></FarmerCard>
                    <FarmerCard></FarmerCard>
                    <FarmerCard></FarmerCard>
                    <FarmerCard></FarmerCard>
                    <FarmerCard></FarmerCard>
                    <FarmerCard></FarmerCard>
                </Container>
            </Content>
        )
    }
}

const styles = StyleSheet.create({})
