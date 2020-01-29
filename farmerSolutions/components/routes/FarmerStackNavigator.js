import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FarmerLoginScreen from '../auth/FarmerLogin'
import FarmerRegisterScreen from '../auth/FarmerRegister'
import ShowWarehouses from '../screens/farmerScreens/ShowWarehouses'

const MainNavigator = createStackNavigator({
    FarmerLogin: {
        screen: FarmerLoginScreen,
        navigationOptions: () => ({ headerShown: false })
    },
    FarmerRegister: {
        screen: FarmerRegisterScreen,
        navigationOptions: () => ({ headerShown: false })
    },
    ShowWarehouses: {
        screen: ShowWarehouses,
        navigationOptions: () => ({ headerShown: false })
    }
});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;