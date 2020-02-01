import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Header, Left, Button, Icon, Body, Title, Content, Footer, FooterTab, Container, Form, Item, Label, Input, Text, View } from 'native-base';
import FarmerNavigator from './FarmerStackNavigator'
import BuyerNavigator from './BuyerStackNavigator'


export default class MainRouter extends Component {

    state = {
        role: ""
    }

    render() {
        return (
            this.state.role === "" ?
                <>
                    <Container style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginVertical: 200
                    }}>
                        {/* <Content padder> */}
                        <Button rounded danger onPress={() => this.setState({ role: 'farmer' })} style={{ margin: 25, justifyContent: 'center', marginHorizontal: 60 }}>
                            <Text style={{ fontSize: 19 }}>Farmer</Text>
                        </Button>
                        <Button rounded danger onPress={() => this.setState({ role: 'buyer' })} style={{ margin: 25, justifyContent: 'center', marginHorizontal: 60 }}>
                            <Text style={{ fontSize: 19 }}>Buyer</Text>
                        </Button>
                        <Button danger rounded onPress={() => this.setState({ role: 'warehouseOwner' })} style={{ margin: 25, justifyContent: 'center', marginHorizontal: 60 }}>
                            <Text style={{ fontSize: 19 }}>Warehouse Owner</Text>
                        </Button>
                        {/* </Content> */}
                    </Container>
                </> :
                this.state.role === "farmer" ?
                    <FarmerNavigator></FarmerNavigator> :
                    this.state.role === "buyer" ?
                        <BuyerNavigator></BuyerNavigator> :
                        <FarmerNavigator></FarmerNavigator>
        )
    }
}

const styles = StyleSheet.create({})
