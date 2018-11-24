import React from "react";
import { Container } from "native-base";
import { Header } from "apparch-core";

class AboutScreen extends React.Component {
	render() {
		return (
			<Container>
				<Header {...this.props} title="About"/>
			</Container>
		);
	}
}

export default AboutScreen;

