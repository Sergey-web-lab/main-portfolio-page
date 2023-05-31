import './index.css';

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills__mainTitle">Мои навыки</h1>
      <div className="skills__blockWrapper">

        <div className="skills__block">
          <h2 className="skills__title">Вёрстка и стилизация:</h2>
          <ul className="skills__text">
            <li>HTML</li>
            <li>CSS/CSS-Modules</li>
            <li>SCSS</li>
            <li>БЭМ</li>
            <li>Figma</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div className="skills__block">
          <h2 className="skills__title">Язык программирования:</h2>
          <ul className="skills__text">
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </div>

        <div className="skills__block">
          <h2 className="skills__title">Библиотека React:</h2>
          <ul className="skills__text">
            <li>React</li>
            <li>React Router</li>
            <li>React Redux</li>
            <li>Redux Toolkit и createAsyncThunk</li>
          </ul>
        </div>

        <div className="skills__block">
          <h2 className="skills__title">Сборщики и инструмменты командной разработки:</h2>
          <ul className="skills__text">
            <li>Git</li>
            <li>Webpack</li>
            <li>Node.js и NPM</li>
            <li>Gulp</li>
          </ul>
        </div>

        <div className="skills__block">
          <h2 className="skills__title">Взаимодействие с бэкендом:</h2>
          <ul className="skills__text">
            <li>Fetch + Axios</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Skills;