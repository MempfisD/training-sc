import React from 'react';
import './App.css';
import {Card} from './components/Card.styled';
import {Title} from './components/Title.styled';
import {Text} from './components/Text.styled';
import {Button} from './components/Button.styled';
import {Wrapper} from './components/Wrapper.styled';


function App() {
	return (
			<Card>
				<img src="/img.png" alt="img"/>
				<Wrapper>
					<Title>Headline</Title>
					<Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
					<Button primary>See more</Button>
					<Button outlined>Save</Button>
				</Wrapper>
			</Card>
	);
}

export default App;
