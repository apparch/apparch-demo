import React from "react";
import { Container } from "native-base";
import { Header } from "apparch-core";

class ContactUsScreen extends React.Component {
	render() {
		return (
			<Container>
				<Header {...this.props} title="ContactUs"/>
			</Container>
		);
	}
}

export default ContactUsScreen;

