import styled from "@emotion/styled"
import React from "react"
import PokeMarkChip from "../Common/PokeMarkChip"

const TempImgUrl =
	"https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800"

const PokemonDetail = () => {
	return (
		<Container>
			<ImageContainer>
				<Image src={TempImgUrl} alt="포켓몬 이미지" />
			</ImageContainer>
			<Divider />
			<Body>
				<h2>기본정보</h2>
				<Table>
					<tbody>
						<TableRow>
							<TableHeader>번호</TableHeader>
							<td>1</td>
						</TableRow>
						<TableRow>
							<TableHeader>이름</TableHeader>
							<td>이상해씨</td>
						</TableRow>
					</tbody>
				</Table>
				<h2>능력치</h2>
				<Table>
					<tbody>
						<TableRow>
							<TableHeader>hp</TableHeader>
							<td>45</td>
						</TableRow>
						<TableRow>
							<TableHeader>attack</TableHeader>
							<td>49</td>
						</TableRow>
					</tbody>
				</Table>
			</Body>
			<Footer>
				<PokeMarkChip />
			</Footer>
		</Container>
	)
}

const Container = styled.section`
	border: 1px solid #c0c0c0;
	margin: 16px 32px;
	border-radius: 16px;
	box-shadow: 1px 1px 3px 1px #c0c0c0;
`

const ImageContainer = styled.section`
	display: flex;
	flex: 1 1 auto;
	justify-content: center;
	align-items: center;
	margin: 8px 0;
`

const Image = styled.img`
	width: 350px;
	height: 350px;
`

const Divider = styled.hr`
	margin: 32px;
	border-style: none;
	border-top: 1px dashed #d3d3d3;
`

const Body = styled.section`
	margin: 0 32px;
`

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
	margin: 0 auto 16px;

	th,
	td {
		padding: 6px 12px;
	}
`

const TableRow = styled.tr`
	border-width: 1px 0;
	border-style: solid;
	border-color: #f0f0f0;
`

const TableHeader = styled.th`
	width: 1px;
	white-space: nowrap;
	text-align: left;
	font-weight: normal;
	font-size: 14px;
	color: #a0a0a0;
`

const Footer = styled.section`
	display: flex;
	flex-direction: row;
	margin: 32px 16px;
`

export default PokemonDetail
