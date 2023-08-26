const formatSec = (inputNumber) => {
   let number = parseInt(inputNumber);

   let minute = Math.floor((number % 3600) / 60);
   let second = Math.floor((number % 3600) % 60);

   return (
      (minute.toString().length < 2 ? '0' + minute : minute) +
      ':' +
      (second.toString().length < 2 ? '0' + second : second)
   );
};

export { formatSec };
