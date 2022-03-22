module.exports = (fullName) => {
  if (typeof fullName !== 'string' || fullName.length <= 0) return 'Error';
  const nameArr = fullName.split(' ');
  const [ firstName, lastName ] = nameArr;
  if (nameArr.length != 2) return 'Error';

  if(!firstName || !lastName) return false;
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() ;
};
