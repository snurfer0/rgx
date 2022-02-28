import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

	const [visible, setVisible] = useState(false);

	return (
		<div className='navigation'>
			<input
				onClick={() => setVisible(!visible)}
				checked={visible}
				onChange={(e) => console.log(e)}
				type='checkbox'
				className='navigation__checkbox'
				id='nav-toggle'
			/>
			<label
				htmlFor='nav-toggle'
				className='navigation__button'
			>
				<span
					className='navigation__icon'
					aria-label='toggle navigation menu'
				></span>
			</label>
			<div className='navigation__background'></div>

			<nav className='navigation__nav' role='navigation'>
				<div className='container-fluid'>
					<div className='row flex-nowrap navb'>
						<div className='navigation__item col-md-4 bg1'>
							<div className='card card-block card-text navcard'>
								<Link
									to='/'
									onClick={() => setVisible(!visible)}
									className='navigation__link'
								>
									Услуги
								</Link>
							</div>
						</div>
						<div className='navigation__item  col-md-4 bg2'>
							<div className='card card-block card-text navcard'>
								<Link
									to='/products'
									className='navigation__link'
									onClick={() => setVisible(!visible)}
								>
									Товары
								</Link>
							</div>
						</div>
						<div className='navigation__item  col-md-4 bg3'>
							<div className='card card-block card-text navcard'>
								<Link
									to='/about'
									className='navigation__link'
									onClick={() => setVisible(!visible)}
								>
									О нас
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
