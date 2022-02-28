import React from 'react';
import "../../assets/balay/css/animate.css"
import "../../assets/balay/css/flexslider.css"
// import "../../assets/balay/js/modernizr-2.6.2.min.js"
//import "../../assets/balay/css/owl.carousel.min.css"

import "../../assets/balay/css/icomoon.css"
import "../../assets/balay/css/bootstrap.css"
import "../../assets/balay/css/style.css"
import Footer from '../items/Footer';
import Accordion from '../items/Accordion';
import { accordionData } from '../../utils/_accordionData';
import picture_1 from '../../assets/images/Picture1.png'
import logo_1 from '../../assets/logo/logo1.png'
import logo_2 from '../../assets/logo/logo2.png'
import logo_3 from '../../assets/logo/logo3.png'
import logo_4 from '../../assets/logo/logo4.png'
import logo_5 from '../../assets/logo/logo5.jpg'
import logo_6 from '../../assets/logo/logo6.png'
import logo_7 from '../../assets/logo/logo7.png'
import logo_8 from '../../assets/logo/logo8.png'
import logo_9 from '../../assets/logo/logo9.png'
import logo_10 from '../../assets/logo/logo10.png'
import logo_11 from '../../assets/logo/logo11.png'
import logo_12 from '../../assets/logo/logo12.png'


// import "../../assets/balay/fonts/flaticon/font/flaticon.css"
// import "../../assets/balay/css/owl.carousel.min.css"
// import "../../assets/balay/css/owl.theme.default.min.css"
// import "../../assets/font-awesome-4.7.0/css/font-awesome.min.css"
// import "../../assets/balay/js/respond.min.js"
// import "../../assets/balay/css/nav.css"


const AboutPage = () => {
	return (
		<>
			<div className='logo'>
				<a href='/'>
					<p>Reglat-Construct</p>
				</a>
			</div>

			<div className='colorlib-about'>
				<div className='colorlib-narrow-content'>
					<div className='row row-bottom-padded-md'>
						<div className='col-md-6'>
							<img 
								className='about-img animate-box'
								//data-animate-effect='fadeInLeft'
								alt="should be something here"
								src={picture_1}
							/>
							
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
								{accordionData.map(data => {
									return <Accordion key={data.name} {...data} />
								})}
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
												src={logo_1}
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src={logo_2}											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src={logo_3}											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src={logo_4}
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src={logo_5}
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src={logo_6}
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src={logo_7}
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src={logo_8}
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src={logo_9}
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src={logo_10}
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src={logo_11}
											/>
										</div>
									</div>
									<div className='col-md-2 col-sm-4 col-xs-6 my-2'>
										<div className='square-holder'>
											<img
												alt=''
												src={logo_12}											/>
										</div>
									</div>
								</div>
							</strong>
						</div>
					</section>
				</div>
			<Footer/>
			</div>
		</>
	);
};

export default AboutPage;





