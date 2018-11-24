/*
 * Build Main App navigator.
 * Currently we use Drawer Navigator.
 * @TODO support all Navigators.
 */
import { createDrawerNavigator } from 'react-navigation';

/*
 * Screens Examples.
 * Comment { import and export } the following if you don't like
 * See the examples and feel free to create your own.
 */
import {
  ExampleHomeScreen,
  ExampleAccordionScreen
} from 'apparch-core';

const Screens = {
  //Home: ExampleHomeScreen,
  Accordion: ExampleAccordionScreen
};

export default createDrawerNavigator(Screens);
