// @flow

import React from 'react';

import { LinkButton } from '../../ui';

import hero from '../../../img/hero.svg';

import './Hero.scss';

const Hero = () => (
  <div className="c-hero">
    <div>
      <h1 className="u-color-primary">Jargon.ist</h1>
      <p className="u-gap-bottom">
        Jargon.ist, bilgisayar bilimleri alanında kullanılan bazı jargonların topluluk tarafından
        Türkçe olarak açıklanmasını sağlayan bir web uygulamasıdır.
      </p>

      <LinkButton to="/dizin" primary>
        Dizini Görüntüle
        <span className="u-pad-left-2xsmall">⟶</span>
      </LinkButton>
    </div>

    <img src={hero} alt="jargon.ist" className="c-hero__img" />
  </div>
);

export default Hero;