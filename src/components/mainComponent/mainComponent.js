import React, { useEffect } from 'react';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import chainImg from '../../../images/link.png';
import Image from 'next/image';
import moment from 'moment';

const MainComponent = ({ data }) => {
	console.log(data.socialMediaLink.split('.com')[0].split('https://www.')[1]);
	return (
		<Card className=" mainComponent-card rounded shadow-sm">
			{/* {data.img && !data.img.includes('undefined') ? (
				<img className="rounded-top mainComponent-card-img" src={data.img} />
			) : (
				<div className="d-flex justify-content-center">
					<Image layout="fixed" className="" height={150} width={100} src={chainImg} />
				</div>
			)} */}

			<Card.Body className="bg-light">
				{data && data.title ? (
					<p className="mb-0 fw-bold">{data.title}</p>
				) : (
					<p className="mb-0 fw-bold">{data.socialMediaLink.split('.com')[0]}</p>
				)}

				{data && data.domain ? (
					<Link href={data.socialMediaLink}>
						<a target={'_blank'} className="mainComponent-card-link">
							{data.domain.split('.com')[0]}
						</a>
					</Link>
				) : (
					<Link href={data.socialMediaLink}>
						{data.socialMediaLink.includes('linkedin') ? (
							<a target={'_blank'} className="mainComponent-card-link">
								{data.socialMediaLink.split('.com')[0].split('https://www.')[1]}
							</a>
						) : (
							<a target={'_blank'} className="mainComponent-card-link">
								{data.socialMediaLink.split('.com')[0].split('https://')[1]}
							</a>
						)}
					</Link>
				)}

				<div className="small mt-2 text-secondary mainComponent-card-content">
					<p className="mb-0 ">{moment().format('l')}</p>
					<p className="mb-0 ">{data.author}</p>
				</div>
			</Card.Body>
		</Card>
	);
};

export default MainComponent;
