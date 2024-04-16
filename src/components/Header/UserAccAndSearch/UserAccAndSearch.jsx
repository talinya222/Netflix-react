import './UserAccAndSearch.css'
import React from 'react';
import Image from 'components/Common/Image/Image';
import Button from 'components/Common/Button/Button';
import acc from 'assets/img/acc-icon.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function UserAccAndSearch(props) {
	return (
		<>
			<div className="header-wrap-acc-and-search">
				<Button
					className="header-search"
					style=""
					children={<FontAwesomeIcon icon={faMagnifyingGlass} />}
				></Button>
				<Button
					href="#"
					className="header-acc"
					style=""
					children={
						<Image
							src={acc}
							alt="user profile photo"
							className="header-acc-icon"
							circle={true}
						></Image>
					}
				></Button>
			</div>
		</>
	);
}

export default UserAccAndSearch;