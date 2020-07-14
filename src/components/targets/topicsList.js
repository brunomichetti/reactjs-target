import React from 'react';
import footballIcon from '../../assets/icons/footballIcon.png';
import travelIcon from '../../assets/icons/travelIcon.png';
import politicsIcon from '../../assets/icons/politicsIcon.png';
import artIcon from '../../assets/icons/artIcon.png';
import datingIcon from '../../assets/icons/datingIcon.png';
import musicIcon from '../../assets/icons/musicIcon.png';
import moviesIcon from '../../assets/icons/moviesIcon.png';
import seriesIcon from '../../assets/icons/seriesIcon.png';
import foodIcon from '../../assets/icons/foodIcon.png';

export const topics = [
  {
    value: 'football',
    label: 'Football',
    icon: <img src={footballIcon} alt="icon" />,
    hr: true,
  },
  {
    value: 'travel',
    label: 'Travel',
    icon: <img src={travelIcon} alt="icon" />,
    hr: true,
  },
  {
    value: 'politics',
    label: 'Politics',
    icon: <img src={politicsIcon} alt="icon" />,
    hr: true,
  },
  {
    value: 'art',
    label: 'Art',
    icon: <img src={artIcon} alt="icon" />,
    hr: true,
  },
  {
    value: 'dating',
    label: 'Dating',
    icon: <img src={datingIcon} alt="icon" />,
    hr: true,
  },
  {
    value: 'music',
    label: 'Music',
    icon: <img src={musicIcon} alt="icon" />,
    hr: true,
  },
  {
    value: 'movies',
    label: 'Movies',
    icon: <img src={moviesIcon} alt="icon" />,
    hr: true,
  },
  {
    value: 'series',
    label: 'Series',
    icon: <img src={seriesIcon} alt="icon" />,
    hr: true,
  },
  {
    value: 'food',
    label: 'Food',
    icon: <img src={foodIcon} alt="icon" />,
    hr: false,
  },
];
