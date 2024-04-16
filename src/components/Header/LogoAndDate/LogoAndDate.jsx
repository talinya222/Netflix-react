import React from 'react';
import './LogoAndDate.css'
import Image from 'components/Common/Image/Image';
import Button from 'components/Common/Button/Button';
import logo from 'assets/img/logo-netflix.png';

function LogoAndDate(props) {
	return (
		<>
			<div className="header-wrap-logo-and-date">
				<Button
					href="index.html"
					className="header-logo"
					style=""
					children={
						<Image
							src={logo}
							alt="netflix logotype"
							className="header-logotype-icon"
						></Image>
					}
				></Button>
				<div className="header-publication-date"><time dateTime="07-08">Friday&nbsp;July&nbsp;8th</time></div>
			</div>
		</>
	);
}

export default LogoAndDate;