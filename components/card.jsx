import React from "react";
import "../src/card.css";
import location from "../src/assets/location.svg";

export default function Card(props) {

	return (
		<div className="card flex">
			<img className="main-img" src={props.img} alt="Card" />
			<div className="right-side">
				<div className="location">
					<div className="country flex">
						<div className="country-title flex">
							<img src={location} alt="location" />
							<h3>{props.location}</h3>
						</div>
						<a href={props.map} className="google-maps">
							View on Google Maps
						</a>
					</div>
					<h2 className="location-interest">{props.title}</h2>
				</div>
				<div className="right-side__text-content">
					<div className="date">{`${props.startDate} - ${props.endDate}`}</div>
					<p className="description">{props.description}</p>
				</div>
			</div>
		</div>
	);
}
