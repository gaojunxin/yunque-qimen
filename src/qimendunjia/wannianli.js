const TIAN_GAN = [ '', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸' ];
const NIAN_ZHI = [ '', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑' ];
const YUE_ZHI = NIAN_ZHI;
const WU_XING = {
  甲: '木', 乙: '木', 丙: '火', 丁: '火', 戊: '土', 己: '土',
  庚: '金', 辛: '金', 壬: '水', 癸: '水',
  寅: '木', 卯: '木', 辰: '土', 巳: '火', 午: '火', 未: '土',
  申: '金', 酉: '金', 戌: '土', 亥: '水', 子: '水', 丑: '土',
};
const JIA_ZI = [
  undefined,
  '甲子','乙丑','丙寅','丁卯','戊辰','己巳','庚午','辛未','壬申','癸酉',
  '甲戌','乙亥','丙子','丁丑','戊寅','己卯','庚辰','辛巳','壬午','癸未',
  '甲申','乙酉','丙戌','丁亥','戊子','己丑','庚寅','辛卯','壬辰','癸巳',
  '甲午','乙未','丙申','丁酉','戊戌','己亥','庚子','辛丑','壬寅','癸卯',
  '甲辰','乙巳','丙午','丁未','戊申','己酉','庚戌','辛亥','壬子','癸丑',
  '甲寅','乙卯','丙辰','丁巳','戊午','己未','庚申','辛酉','壬戌','癸亥',
];
const SHI_GAN_ZHI = {
  '-1': '子', 0: '丑', 1: '寅', 2: '卯', 3: '辰', 4: '巳', 5: '午', 6: '未', 7: '申', 8: '酉', 9: '戌', 10: '亥', 11: '子',
};

let WanNianLi = (function () {
  // 计算两个日期之间的天数
  function daysBetweenDate(date1, date2) {
    return Math.floor((date2.getTime() - date1.getTime()) / 86400000);
  }
  // 判断是否闰年
  function isLeapYear(year) {
    year = Number(year);
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }
  // 获取月份基数
  function getMonthBase(month) {
    const base = [undefined, 0, 31, -1, 30, 0, 31, 1, 32, 3, 33, 4, 34];
    return base[Number(month)];
  }
  // 获取指定年份所属的世纪
  function getCenturyByYear(year) {
    year = Number(year);
    return year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
  }
  // 计算世纪常数
  function getCenturyConst(century) {
    century = Number(century);
    return (44 * (century - 17) + Math.floor((century - 17) / 4) + 3) % 60;
  }
  // 高氏日柱公式，获取指定日期的天干地支序号
  function getRiGan(year, month, date, hour, checkZishi) {
    year = Number(year);
    let s = (year % 100) - 1,
      u = s % 4,
      m = getMonthBase(month),
      d = date,
      x = getCenturyConst(getCenturyByYear(year));
    let r = Math.floor(s / 4) * 6 + 5 * (Math.floor(s / 4) * 3 + u) + m + d + x;
    if (isLeapYear(year) && month > 2) r += 1;
    r %= 60;
    if (r === 0) r = 60;
    if (checkZishi && hour >= 23) return r + 1;
    return r;
  }
  // 年干
  function getNianGanIndex(year) {
    let index = Number(year.toString().slice(-1));
    if (index <= 3) index += 10;
    return index - 3;
  }
  // 年支
  function getNianZhiIndex(year) {
    return (Number(year) + 7) % 12 || 12;
  }
  // 月干
  function getYueGanIndex(nianGanIndex, lMonth) {
    let index = Number(nianGanIndex) * 2 + Number(lMonth);
    index %= 10;
    if (index === 0) index = 10;
    return index;
  }
  // 月支
  function getYueZhiIndex(lMonth) {
    return Number(lMonth);
  }
  // 时支
  function getShiZhiIndex(hour) {
    hour = Number(hour);
    return hour % 2 === 0 ? hour / 2 - 1 : (hour + 1) / 2 - 1;
  }
  // 时干
  function getShiGanIndex(riGanIndex, shiZhiIndex) {
    let index = (riGanIndex * 2 + shiZhiIndex) % 10;
    if (index === 0) index = 10;
    return index;
  }
  // 五行统计
  function getWuxingResult(wuxing) {
    const temp = { 金: 0, 木: 0, 水: 0, 火: 0, 土: 0 };
    for (const key in wuxing) {
      for (const v of wuxing[key]) {
        temp[v]++;
      }
    }
    return temp;
  }
  return {
    getResult: function (date) {
      const bazi = { year: '', month: '', date: '', hour: '' };
      const wuxing = { year: '', month: '', date: '', hour: '' };
      // 年干支
      const nianGanIndex = getNianGanIndex(date.cYear);
      const nianGan = TIAN_GAN[nianGanIndex];
      bazi.year = nianGan;
      wuxing.year = WU_XING[nianGan];
      const nianZhiIndex = getNianZhiIndex(date.cYear);
      const nianZhi = NIAN_ZHI[nianZhiIndex];
      bazi.year += nianZhi;
      wuxing.year += WU_XING[nianZhi];
      // 月干支
      const yueGanIndex = getYueGanIndex(nianGanIndex, date.lMonth);
      const yueGan = TIAN_GAN[yueGanIndex];
      bazi.month = yueGan;
      wuxing.month = WU_XING[yueGan];
      const yueZhiIndex = getYueZhiIndex(date.lMonth);
      const yueZhi = YUE_ZHI[yueZhiIndex];
      bazi.month += yueZhi;
      wuxing.month += WU_XING[yueZhi];
      // 日干支
      const serial = getRiGan(date.cYear, date.cMonth, date.cDay, date.hour, true);
      const riGanStr = JIA_ZI[serial];
      const riGanIndex = TIAN_GAN.indexOf(riGanStr[0]);
      bazi.date = riGanStr;
      wuxing.date = WU_XING[riGanStr[0]] + WU_XING[riGanStr[1]];
      // 时支
      const shiZhiIndex = getShiZhiIndex(date.hour);
      bazi.hour = SHI_GAN_ZHI[shiZhiIndex];
      wuxing.hour = WU_XING[bazi.hour];
      // 时干
      const serial1 = getRiGan(date.cYear, date.cMonth, date.cDay, date.hour, false);
      const riGan1 = JIA_ZI[serial1];
      const riGanIndex1 = TIAN_GAN.indexOf(riGan1[0]);
      const shiGanIndex = getShiGanIndex(riGanIndex1, shiZhiIndex);
      bazi.hour = TIAN_GAN[shiGanIndex] + bazi.hour;
      wuxing.hour = WU_XING[TIAN_GAN[shiGanIndex]] + wuxing.hour;
      return {
        bazi,
        wuxing,
        wuxingResult: getWuxingResult(wuxing),
        jiazi: JIA_ZI,
      };
    },
  };
})();

export default WanNianLi;
