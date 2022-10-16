import React from 'react';
import './Header.css';

export default function Header() {
	return (
		<header className='header'>
			<a href='./' className='header__link'>
				<img
					className='header__topimg'
					src='	https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/ad-top.jpg'
					alt='header top image'
				/>
			</a>
			<div className='container'>
				<div className='header__inner'>
					<div className='header__innerabout'>
						<a href='./'>
							<img
								className='logo'
								src='	https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/12/logo.svg'
								alt='site logo'
							/>
						</a>
						<ul className='header__innerlist'>
							<li className='header__inneritem'>
								<a href='#' className='header__inneritemlink'>
									Home
								</a>
							</li>
							<li className='header__inneritem'>
								<a href='#' className='header__inneritemlink'>
									Politics
								</a>
							</li>
							<li className='header__inneritem'>
								<a href='#' className='header__inneritemlink'>
									Technology
								</a>
							</li>
							<li className='header__inneritem'>
								<a href='#' className='header__inneritemlink'>
									Posts
								</a>
							</li>
							<li className='header__inneritem'>
								<a href='#' className='header__inneritemlink'>
									Bookmarks
								</a>
							</li>
							<li className='header__inneritem'>
								<a href='#' className='header__inneritemlink'>
									Pages
								</a>
							</li>
						</ul>
					</div>
					<div className='header__innerinfo'>
						<button className='header__innerinfosignbtn'>Sign in</button>
						<button className='header__innerinfonotificationbtn'>
							<img
								src='https://cdn-icons-png.flaticon.com/16/3602/3602145.png'
								alt=''
							/>
						</button>
						<button className='header__innerinfosearchbtn'>
							<img
								src='https://cdn-icons-png.flaticon.com/16/2811/2811806.png'
								alt=''
							/>
						</button>
					</div>
				</div>
			</div>
			<div className='header__bottom'>
				<div className='container'>
					<div className="header__bottomcurrent">
					<div className='header__bottominfo'>
						<span className='header__bottomspan'>Hot news</span>
						<span className='header__bottomtext'>
							Google Must Allow Developers to Use Other Payment Systems
						</span>
					</div>
					<ul className='header__bottomlist'>
						<li className='header__bottomitem'>
							<span className='header__bottomitemlink1'>
								Quick links
							</span>
						</li>
						<li className='header__bottomitem'>
							<a href='https://foxiz.themeruby.com/default/category/technology/' target='_blank' className='header__bottomitemlink'>
								Technology
							</a>
						</li><li className='header__bottomitem'>
							<a href='https://foxiz.themeruby.com/default/category/business/' target='_blank' className='header__bottomitemlink'>
								Business
							</a>
						</li><li className='header__bottomitem'>
							<a href='https://foxiz.themeruby.com/default/category/science/' target='_blank' className='header__bottomitemlink'>
								Science
							</a>
						</li><li className='header__bottomitem'>
							<a href='https://covid19.who.int/' target='_blank' className='header__bottomitemlink'>
								Covid-19 statics
							</a>
						</li>
					</ul>
					</div>
				</div>
			</div>
		</header>
	);
}
