import { StackNavigationProp } from "@react-navigation/stack";
import { Screens, StackParamList } from "@client_types/Stack";

export interface HomeScreenProp {
    navigation: StackNavigationProp<StackParamList, Screens.Home>;
}