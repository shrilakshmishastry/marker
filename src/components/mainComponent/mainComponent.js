import React, { useEffect } from 'react';
import Link from 'next/link';
import { Card } from 'react-bootstrap';

const MainComponent = ({ data }) => {
	return (
		<Card className="mainComponent-card rounded shadow-sm">
			<img className="rounded-top mainComponent-card-img" src={data.img} />
			<Card.Body>
				<p className="mb-0 fw-bold">{data.title}</p>
				<Link href={data.socialMediaLink}>
					<a className="mainComponent-card-link">{data.domain.split('.com')[0]}</a>
				</Link>
				<div className="small text-secondary mainComponent-card-content">
					<p className="mb-0 ">{data.dateOfAdd}</p>
					<p className="mb-0 ">{data.author}</p>
				</div>
			</Card.Body>
		</Card>
	);
};

export default MainComponent;
