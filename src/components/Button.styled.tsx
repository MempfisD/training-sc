import styled, {css} from 'styled-components';

type ButtonPropsType = {
	primary?: boolean
	outlined?: boolean
	color?: string
}

export const Button = styled.button<ButtonPropsType>`
	border: none;
	width: 86px;
	height: 30px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 10px;
	font-weight: 700;
	line-height: 20px;


	${props => props.primary && css<ButtonPropsType>`
		background-color: ${props => props.color || '#4e71fe'};
		margin-right: 12px;
		color: #fff;

		&:hover {
			background-color: transparent;
			border: 1px solid #4e71fe;
			color: #000;
			transition: all .5s;
		}
	`}

	${props => props.outlined && css<ButtonPropsType>`
		background-color: transparent;
		border: 1px solid #4e71fe;
		color: #4e71fe;

		&:hover {
			background-color: ${props => props.color || '#4e71fe'};
			color: #fff;
			transition: all .5s;
	`}
`