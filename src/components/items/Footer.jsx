import React from 'react';

const Footer = () => {
	return (
		<footer class='text-center text-lg-start bg-dark text-muted'>
			<section class='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'></section>

			<section class=''>
				<div class='container text-center text-md-light mt-5'>
					<div class='row mt-3'>
						<div class='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
							<h6 class='text-uppercase fw-bold mb-4 text-light' />
							<i class='fas fa-gem me-3 text-light'></i>
							<h3 class='text-light'>Наши соцсети:</h3>
							<div>
								<a
									href='https://www.facebook.com/reglatconstruct/'
									class='me-9 text-light'
								>
									<i class='fa fa-facebook-f fa-2x facebook'></i>
								</a>
								<a
									href='https://www.instagram.com/reglatconstruct/'
									class='me-9 text-light'
								>
									<i class='fa fa-instagram fa-2x instagram'></i>
								</a>
							</div>
						</div>

						<div class='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
							<h4 class='text-uppercase fw-bold mb-4 text-light'>
								Меню
							</h4>
							<p>
								<a href='index.html' class='text-light a'>
									Услуги
								</a>
							</p>
							<p>
								<a href='produse.html' class='text-light a'>
									Товары
								</a>
							</p>
							<p>
								<a href='about.html' class='text-light a'>
									О нас
								</a>
							</p>
						</div>
						<div class='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
							<h4 class='text-uppercase fw-bold mb-4 text-light'>
								Свяжитесь С Нами
							</h4>
							<p class='text-light'>
								<i class='fa fa-home me-3 text-light'></i>{' '}
								Chișinău, Str. Sarmizegetusa 92
							</p>
							<p class='text-light'>
								<i class='fa fa-envelope me-3 text-light'></i>
								reglat.cons@gmail.com
							</p>
							<p class='text-light'>
								<i class='fa fa-phone me-3 text-light'></i>{' '}
								+(373) 79 792 425
							</p>
						</div>
					</div>
				</div>
			</section>

			<div
				class='text-center p-4 text-light'
				style='background-color: rgba(0, 0, 0, 0.05);'
			>
				© 2021 Copyright:
				<a class='text-reset fw-bold' href='https://mdbootstrap.com/'>
					MDBootstrap.com
				</a>
			</div>
		</footer>
	);
};

export default Footer;
