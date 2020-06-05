const getSleepHours = day => {

  switch(day) {
    case 'monday':
    return 8
    break;
    case 'tuesday':
    return 7
    break;
    case 'wednesday':
    return 8
    break;
    case 'thursday':
    return 5
    break;
    case 'friday':
    return 8
    break;
    case 'saturday':
    return 7
    break;
    case 'sunday':
    return 8
    break;
    default:
    return 'Error!'
  }
};
const getActualSleepHours = () => 
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
  console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You have got ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep this week.');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest because you have slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you should have this week');
  } else {
    console.log('Error! Something went wrong, check your code.')
  }
};
calculateSleepDebt();
