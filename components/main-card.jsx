import "../src/main-card.css";
import Card from "../components/card.jsx";
import data from "../src/data.jsx";
import globe from "../src/assets/globe-.svg";

export default function MainCard() {
	const details = data.map((item) => {
		return (
			<Card
				key={item.id}
				location={item.location}
				startDate={item.startDate}
				endDate={item.endDate}
				description={item.description}
				title={item.title}
				img={item.img}
			/>
		);
	});
	return (
		<div className="container">
			<div className="header">
				<img src={globe} alt="" />
				<p>my travel journal</p>
			</div>
			<div className="body">{details}</div>
			<p className="footer">Developed by Joshua '289Volts' Roland</p>
		</div>
	);
}
