import styled from "@emotion/styled"
import React from "react"
import { useNavigate } from "react-router-dom"
import PokeMarkChip from "../Common/PokeMarkChip"
import PokeNameChip from "../Common/PokeNameChip"

const TempImgUrl =
	"https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800"

const PokeCard = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/pokemon/피카츄`)
	}
	return (
		<Item onClick={handleClick}>
			<Header>
				<PokeNameChip />
			</Header>
			<Body>
				<Image src={TempImgUrl} alt="이상해씨 이미지" />
			</Body>
			<Footer>
				<PokeMarkChip />
			</Footer>
		</Item>
	)
}

const Item = styled.li`
	display: flex;
	flex-direction: column;

	padding: 8px;

	width: 250px;
	height: 300px;

	border: 1px solid #c0c0c0;
	box-shadow: 1px 1px 3px 1px #c0c0c0;

	cursor: pointer;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}

	&:active {
		background-color: yellow;
		opacity: 0.8;
		transition: background-color 0s;
	}
`

const Header = styled.section`
	display: flex;
	flex-direction: row;
	margin: 8px 0;
`

const Body = styled.section`
	display: flex;
	flex: 1 1 auto;
	justify-content: center;
	align-items: center;
	margin: 8px;
`

const Image = styled.img`
	width: 180px;
	height: 180px;
`

const Footer = styled.section`
	display: flex;
	flex-direction: row;
	margin: 8px 0;
`

export default PokeCard
