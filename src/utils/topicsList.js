import React from 'react';
import footballIcon from 'assets/topicIcons/footballIcon.png';
import travelIcon from 'assets/topicIcons/travelIcon.png';
import politicsIcon from 'assets/topicIcons/politicsIcon.png';
import artIcon from 'assets/topicIcons/artIcon.png';
import datingIcon from 'assets/topicIcons/datingIcon.png';
import musicIcon from 'assets/topicIcons/musicIcon.png';
import moviesIcon from 'assets/topicIcons/moviesIcon.png';
import seriesIcon from 'assets/topicIcons/seriesIcon.png';
import foodIcon from 'assets/topicIcons/foodIcon.png';

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

export const getIconFileByTopic = (topic) => {
  switch (topic) {
    case 'football':
      return footballIcon;

    case 'travel':
      return travelIcon;

    case 'politics':
      return politicsIcon;

    case 'art':
      return artIcon;

    case 'dating':
      return datingIcon;

    case 'music':
      return musicIcon;

    case 'movies':
      return moviesIcon;

    case 'series':
      return seriesIcon;

    default:
      return foodIcon;
  }
};
