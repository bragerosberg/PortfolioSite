import React from 'react';
import { useTranslation } from 'react-i18next';
import Techstack from './Techstack';
import portrait from "../../assets/portrait.png";
import './styles/Home.css';

const Home = () => {
  const { t } = useTranslation();
  return (
    <main>
      <section className="homepage__wrapper">
        <img className="portrait" src={portrait} alt="portrait brage røsberg bragerøsberg bragerosberg" />
        <div className="homepage__info__wrapper">
          <h1 className="homepage__name">Brage Røsberg</h1>
          <Techstack />
          <p className="homepage__location">{t('home:CurrentPosition')}</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
