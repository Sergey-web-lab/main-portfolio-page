import logo from '../../img/logo.svg';
import "./style.css";

const AboutMe = () => {
  return (
    <main className="section">
      <h1 className="title-1">Добрый день!</h1>
      <p className='aboutMe__text'>Меня зовут Сергей Лопатин и&nbsp;я&nbsp;фронтенд разработчик. <br />
        Это моя страничка портфолио с&nbsp;которой можно перейти и&nbsp;просмотреть мои проекты, <br />
        а&nbsp;также на&nbsp;ней есть мои контакты. <br />
        Спасибо, что зашли! :)
      </p>
      <div className="aboutMe__block">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </main>
  );
}

export default AboutMe;