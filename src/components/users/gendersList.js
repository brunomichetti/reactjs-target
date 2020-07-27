export const genders = [
  { value: 'male', label: 'MALE' },
  { value: 'female', label: 'FEMALE' },
  { value: 'not_specified', label: 'NOT SPECIFIED' },
];

export const getGenderByValue = (value) => {
  switch (value) {
    case 'male':
      return { value: 'male', label: 'MALE' };
    case 'female':
      return { value: 'female', label: 'FEMALE' };
    default:
      return { value: 'not_specified', label: 'NOT SPECIFIED' };
  }
};
