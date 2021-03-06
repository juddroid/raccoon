export const getFormatDate = (date) => {
  let year = date.getFullYear(); //yyyy
  let month = 1 + date.getMonth(); //M
  month = month >= 10 ? month : '0' + month; //month 두자리로 저장
  let day = date.getDate(); //d
  day = day >= 10 ? day : '0' + day; //day 두자리로 저장
  return year + month + day;
};

export const getSmallDate = (date) => {
  const smallDateList = date.toString().split(' ');
  return `${smallDateList[1]} ${smallDateList[2]}, ${smallDateList[3]}`;
};
