import "../src/main-card.css";
import Card from "../components/card.jsx";
import data from "../src/data.jsx";


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
				<img src="../src/assets/globe-.svg" alt="" />
				<p>my travel journal</p>
            </div>
            <div className="body">
                {details}
            </div>
		</div>
	);
}
