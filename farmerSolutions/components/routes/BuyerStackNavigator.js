import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BuyerLogin from '../auth/BuyerLogin'
import BuyerRegister from '../auth/BuyerRegister'
import ShowFarmers from '../screens/buyerScreens/ShowFarmers'
import FarmerDetails from '../screens/buyerScreens/FarmerDetails'

const MainNavigator = createStackNavigator({
    BuyerLogin: {
        screen: BuyerLogin,
        navigationOptions: () => ({ headerShown: false })
    },
    BuyerRegister: {
        screen: BuyerRegister,
        navigationOptions: () => ({ headerShown: false })
    },
    ShowFarmers: {
        screen: ShowFarmers,
        navigationOptions: () => ({ headerShown: false })
    },
    FarmerDetails: {
        screen: FarmerDetails,
        navigationOptions: () => ({ headerShown: false })
    },

});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;