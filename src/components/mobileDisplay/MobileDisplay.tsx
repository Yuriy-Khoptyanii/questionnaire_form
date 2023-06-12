import './MobileDisplay.scss';

import { clock, date, gift, logo, planet, speakerImg } from '../../icons';
import RegistrationForm from '../registrationForm/RegistrationForm';

function MobileDisplay() {
  return (
    <div className="mobile">
      <div className="header">
        <img src={logo} alt="logo" />
        <div className="header__info">
          <div className="header__info--style">
            <img src={date} alt="date" /> 28 декабря
          </div>
          <div className="header__info--style header__info--duration">
            <img src={clock} alt="clock" /> 3,5 часа
          </div>
        </div>
      </div>
      <div className="main">
        <div className="header__info--style main__classification">
          <img src={planet} alt="date" /> Вебинар
        </div>
        <div className="main__title">front-end</div>
        <div className="main__explanation">
          <div className="main__explanation--part1">
            <div className="main__explanation--part1--text">c нуля</div>
          </div>
          <p className="main__explanation--part2">легкий старт в IT профессии</p>
        </div>
        <div className="main__article">
          Узнайте какими навыками должен обладать фронтенд разработчик в 2022 году и как
          начать карьеру в востребованной профессии
          <br />
          <span className="main__article--selection">c зарплатой от 1000$</span>
        </div>
        <RegistrationForm />
      </div>
      <div className="footer">
        <div className="footer__bonus">
          <img className="footer__bonus__icon" src={gift} alt="gift" />
          <div className="footer__bonus__text">
            <span className="footer__bonus--title">Бонус за регистрацию</span>
            <br />
            PDF-файл &quot;5 преимуществ
            <br />
            профессии веб-дизайнера&quot;
          </div>
        </div>
        <div className="footer__infoSpeaker">
          <img className="footer__infoSpeaker__img" src={speakerImg} alt="speakerImg" />
          <div className="footer__infoSpeaker__text">
            <span className="footer__infoSpeaker--title">
              Кирилл <span style={{ color: '#4252D1' }}>КАСАТОНОВ</span>
            </span>
            <br />
            6 лет коммерческого опыта
            <br />
            с такими компаниями как
            <br />
            Mercedes-Benz и другими
            <br />
            крупными корпорациями
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileDisplay;
