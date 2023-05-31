import "./style.css";

import vk from './../../img/icons/vk.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<p>Мои странички в:</p>
					<ul className="social">
						<li className="social__item">
							<a rel="noreferrer noopener" target="_blank" href="https://vk.com/id10175513">
								<img src={vk} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a rel="noreferrer noopener" target="_blank" href="https://github.com/Sergey-web-lab">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;