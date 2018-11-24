import React from "react";
import { Container } from "native-base";
import { Header } from "apparch-core";

class HomeScreen extends React.Component {
	render() {
		return (
			<Container>
				<Header {...this.props} title="Home"/>
			</Container>
		);
	}
}

export default HomeScreen;

