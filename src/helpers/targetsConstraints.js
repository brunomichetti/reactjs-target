export const radiusConstraints = {
  radius: {
    presence: true,
    exclusion: {
      within: [''],
    },
    numericality: {
      greaterThan: 0,
    },
  },
};

export const titleConstraints = {
  title: {
    presence: true,
    exclusion: {
      within: [''],
    },
  },
};

export const topicConstraints = {
  topic: {
    presence: true,
    exclusion: {
      within: [''],
    },
  },
};

export const createTargetConstraints = {
  radius: radiusConstraints.radius,
  title: titleConstraints.title,
  topic: topicConstraints.topic,
};
