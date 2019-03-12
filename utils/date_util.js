
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()

/**
 * [getDate 获取当前日期]
 * @return {[type]} [形如2018-12-16的日期]
 */
function getDate(){
  // 返回的时间
  let nowDate = ''
  nowDate += year
  nowDate += '-'+(month<=9 ? '0'+month : month)
  nowDate += '-'+(day<=9 ? '0'+day : day)

  // console.log("当前日期----------",nowDate)
  return nowDate
};

/**
 * [getDateTime 获取当前时间]
 * @return {[type]} [形如2018-12-16 15:36:58的时间]
 */
function getDateTime(){
  // 返回的时间
  let nowDate = getDate()

  nowDate += ' '+(hour<=9 ? '0'+hour : hour)
  nowDate += ':'+(minute<=9 ? '0'+minute : minute)
  nowDate += ':' +(second<=9 ? '0'+second : second)

  // console.log("当前时间----------",nowDate)
  return nowDate
};

function plusTwoDay(date){
  let mili = new Date(date.replace(/-/g, '/')).getTime() + 48*60*60*1000
  let plused = new Date(mili)

  let year1 = plused.getFullYear()
  let month1 = plused.getMonth()+1
  let day1 = plused.getDate()
  let hour1 = plused.getHours()
  let minute1 = plused.getMinutes()
  let second1 = plused.getSeconds()

  let nowDate = ''
  nowDate += year1
  nowDate += '-' + (month1 <= 9 ? '0' + month1 : month1)
  nowDate += '-' + (day1 <= 9 ? '0' + day1 : day1)
  nowDate += ' ' + (hour1 <= 9 ? '0' + hour1 : hour1)
  nowDate += ':' + (minute1 <= 9 ? '0' + minute1 : minute1)
  nowDate += ':' + (second1 <= 9 ? '0' + second1 : second1)
  return nowDate
}

module.exports = {
	getDate: getDate,
	getDateTime: getDateTime,
  plusTwoDay: plusTwoDay
}