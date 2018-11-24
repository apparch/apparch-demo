import { createDrawerNavigator } from "react-navigation";
import HomeScreen from "./_screens/HomeScreen";
import AboutScreen from "./_screens/AboutScreen";
import ContactUsScreen from "./_screens/ContactUsScreen";

const Screens = {
	Home: HomeScreen,
	About: AboutScreen,
	ContactUs: ContactUsScreen,
};

export default createDrawerNavigator(Screens);
