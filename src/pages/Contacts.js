const Contacts = () => {
	return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Контакты</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Местонахождение</h2>
						<p>Москва, Россия</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<p>
							<a href="tel:+79051234567">+7 (925) 486-37-76</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:aid.94@mail.ru">
								aid.94@mail.ru
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;