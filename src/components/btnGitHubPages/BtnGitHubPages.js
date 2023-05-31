import gitHubIcon from './gitHub-black.svg';

const BtnGitHubPages = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="GitHub icon" />
      Запустить проект
    </a>
  );
};

export default BtnGitHubPages;