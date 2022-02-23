import React from 'react';

const AboutPage = () => {
	return (
		<>
			<div className='logo'>
				<a href='index.html'>
					{/* <!-- <img src="./assets/logo/main_logo.png" alt=""> --> */}
					<p>Reglat-Construct</p>
				</a>
				{/* <!-- <img src="./assets/logo/main_logo.png" alt=""> --> */}
			</div>
			<div className='navigation'>
				<input
					type='checkbox'
					className='navigation__checkbox'
					id='nav-toggle'
				/>
				<label htmlFor='nav-toggle' className='navigation__button'>
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
									<a
										href='index.html'
										className='navigation__link'
									>
										Услуги
									</a>
								</div>
							</div>
							<div className='navigation__item  col-md-4 bg2'>
								<div className='card card-block card-text navcard'>
									<a
										href='produse.html'
										className='navigation__link'
									>
										Товары
									</a>
								</div>
							</div>
							<div className='navigation__item  col-md-4 bg3'>
								<div className='card card-block card-text navcard'>
									<a
										href='about.html'
										className='navigation__link'
									>
										О нас
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>

			<div className='colorlib-about'>
				<div className='colorlib-narrow-content'>
					<div className='row row-bottom-padded-md'>
						<div className='col-md-6'>
							<div
								className='about-img animate-box'
								data-animate-effect='fadeInLeft'
								// style='background-image: url(assets/images/Picture1.png);'
							></div>
						</div>
						<div
							className='col-md-6 animate-box'
							data-animate-effect='fadeInLeft'
						>
							<div className='about-desc'>
								<span className='heading-meta'>
									Добро пожаловать
								</span>
								<h2 className='colorlib-heading'>
									О НАШЕЙ СТРОИТЕЛЬНОЙ КОМПАНИИ
								</h2>
								<p>
									Наша команда профессионалов "REGLAT-CONS"
									готова предоставить вам верное и надежное
									дружеское плечо. Для нас не существует
									невыполнимых задач, будь то работа на высоте
									или большая территориальная отдаленность.
								</p>
							</div>
							<div className='row padding'>
								<div
									className='col-md-4 no-gutters animate-box'
									data-animate-effect='fadeInLeft'
								>
									<a href='#' className='steps active'>
										<p className='icon'>
											<span>
												<i className='icon-check'></i>
											</span>
										</p>
										<h3>Мы Страстные</h3>
									</a>
								</div>
								<div
									className='col-md-4 no-gutters animate-box'
									data-animate-effect='fadeInLeft'
								>
									<a href='#' className='steps'>
										<p className='icon'>
											<span>
												<i className='icon-check'></i>
											</span>
										</p>
										<h3>Честные Надёжные</h3>
									</a>
								</div>
								<div
									className='col-md-4 no-gutters animate-box'
									data-animate-effect='fadeInLeft'
								>
									<a href='#' className='steps'>
										<p className='icon'>
											<span>
												<i className='icon-check'></i>
											</span>
										</p>
										<h3>Всегда Улучшаемся</h3>
									</a>
								</div>
							</div>
							<div className='ac'>
								<button className='accordion'>Section 1</button>
								<div className='panel'>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris
										nisi ut aliquip ex ea commodo consequat.
									</p>
								</div>

								<button className='accordion'>Section 2</button>
								<div className='panel'>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris
										nisi ut aliquip ex ea commodo consequat.
									</p>
								</div>
							</div>
						</div>
					</div>

					<section className='section section-default mt-none mb-none'>
						<div className='container partners'>
							<h2 className='mb-sm'>
								Наши <strong>партнёры</strong>
							</h2>
							<strong>
								<div className='row'>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src='./assets/logo/logo1.png'
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src='./assets/logo/logo2.png'
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src='./assets/logo/logo3.png'
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src='./assets/logo/logo4.png'
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src='./assets/logo/logo5.jpg'
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src='./assets/logo/logo6.png'
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src='./assets/logo/logo7.png'
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src='./assets/logo/logo8.png'
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src='./assets/logo/logo9.png'
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src='./assets/logo/logo10.png'
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src='./assets/logo/logo11.png'
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src='./assets/logo/logo12.png'
											/>
										</div>
									</div>
								</div>
							</strong>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
