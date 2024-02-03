// const bigInt = require("./BigInteger.min.js");
import bigInt from "big-integer";
Array.prototype.space = function (start, n) {
  let ret = [];
  let new_array = this;
  if (n < 0) {
    new_array = new_array.slice().reverse();
  }
  let real_array = new_array.slice(start, new_array.length - 1);
  real_array.map((item, index) => {
    if (index % n == 0) {
      ret.push(item);
    }
  });
  return ret;
};
export default class Config {
  static mod(n, m) {
    if (n > 0) {
      return n % m;
    } else {
      return ((n % m) + m) % m;
    }
  }
  //假如xs，ys不等，就是需要无限迭代的时候。比如xs太多的时候，ys需要跟上
  static zip_dict(xs, ys) {
    if (xs.length > ys.length) {
      let new_ys = [];
      for (let i of new Array(Math.ceil(xs.length / ys.length)).fill(1)) {
        new_ys = new_ys.concat(ys);
      }
      return xs.reduce((obj, cur, index) => {
        if (Object.prototype.toString.call(new_ys) == "[object Object]") {
          if (Object.prototype.toString.call(cur) == "[object Array]") {
            for (let o of cur) {
              obj[o] = new_ys[Object.keys(new_ys)[index]];
            }
            return obj;
          } else {
            return {
              ...obj,
              [cur]: {
                [Object.keys(new_ys)[index]]:
                  new_ys[Object.keys(new_ys)[index]],
              },
            };
          }
        } else {
          if (Object.prototype.toString.call(cur) == "[object Array]") {
            for (let o of cur) {
              obj[o] = new_ys[Object.keys(new_ys)[index]];
            }
            return obj;
          } else {
            return { ...obj, [cur]: new_ys[index] };
          }
        }
      }, {});
    } else {
      return xs.reduce((obj, cur, index) => {
        if (Object.prototype.toString.call(ys) == "[object Object]") {
          return {
            ...obj,
            [cur]: { [Object.keys(ys)[index]]: ys[Object.keys(ys)[index]] },
          };
        } else {
          return { ...obj, [cur]: ys[index] };
        }
      }, {});
    }
  }
  static range = (start, stop, step = 1) =>
    Array(Math.ceil((stop - start) / step))
      .fill(start)
      .map((x, y) => x + y * step);
  static len = (data) => data.length;
  static jiazi() {
    let tiangan = "甲乙丙丁戊己庚辛壬癸";
    let dizhi = "子丑寅卯辰巳午未申酉戌亥";
    return this.range(0, 60).map(
      (x) =>
        tiangan[this.mod(x, this.len(tiangan))] +
        dizhi[this.mod(x, this.len(dizhi))]
    );
  }

  static new_list_r(olist, o) {
    let zhihead_code = olist.findIndex((item) => item == o);
    let res1 = [];
    for (let i of this.range(0, this.len(olist))) {
      res1.push(olist[this.mod(zhihead_code, this.len(olist))]);
      zhihead_code = zhihead_code - 1;
    }
    return res1;
  }

  static new_list(olist, o) {
    let zhihead_code = olist.findIndex((item) => item == o);
    let res1 = [];
    for (let i of this.range(0, this.len(olist))) {
      res1.push(olist[this.mod(zhihead_code, this.len(olist))]);
      zhihead_code = zhihead_code + 1;
    }
    return res1;
  }

  static multi_key_dict_get(d, k) {
    for (let v in d) {
      if (v.indexOf(k) > -1) return d[v];
    }
    return null;
  }

  static ganzhiyear(year) {
    let year_gan_code = this.mod(year, 10) - 3 + 10;
    if (year_gan_code > 10) year_gan_code = year_gan_code - 10;
    let year_zhi_code = this.mod(year, 12) - 3 + 12;
    if (year_zhi_code > 12) year_zhi_code = year_zhi_code - 12;
    let year_ganzhi = Gan[year_gan_code - 1] + Zhi[year_zhi_code - 1];
    let result = year_ganzhi[0];
    if (result == "甲") result = hidden_jia.get(year_ganzhi);
    return result, year_ganzhi;
  }

  static START_YEAR = 1901;
  static month_DAY_BIT = 12;
  static month_NUM_BIT = 13;
  static stc =
    "小寒大寒立春雨水驚蟄春分清明穀雨立夏小滿芒種夏至小暑大暑立秋處暑白露秋分寒露霜降立冬小雪大雪冬至";
  static solarTermsNameList = [
    "小寒",
    "大寒",
    "立春",
    "雨水",
    "驚蟄",
    "春分",
    "清明",
    "穀雨",
    "立夏",
    "小滿",
    "芒種",
    "夏至",
    "小暑",
    "大暑",
    "立秋",
    "處暑",
    "白露",
    "秋分",
    "寒露",
    "霜降",
    "立冬",
    "小雪",
    "大雪",
    "冬至",
  ];

  static jieqidun_code = {
    冬至: "一七四",
    驚蟄: "一七四",
    小寒: "二八五",
    大寒: "三九六",
    春分: "三九六",
    立春: "八五二",
    雨水: "九六三",
    清明: "四一七",
    立夏: "四一七",
    穀雨: "五二八",
    小滿: "五二八",
    芒種: "六三九",
    夏至: "九三六",
    白露: "九三六",
    小暑: "八二五",
    大暑: "七一四",
    秋分: "七一四",
    立秋: "二五八",
    處暑: "一四七",
    霜降: "五八二",
    小雪: "五八二",
    寒露: "六九三",
    立冬: "六九三",
    大雪: "四七一",
  };

  // 1901-2100年二十节气最小公差数序列 向量压缩法
  static encryptionVectorList = [
    4,
    19,
    3,
    18,
    4,
    19,
    4,
    19,
    4,
    20,
    4,
    20,
    6,
    22,
    6,
    22,
    6,
    22,
    7,
    22,
    6,
    21,
    6,
    21,
  ];

  // 1901-2100年二十节气数据 每个元素的存储格式如下：
  // 1-24
  // 节气所在天（减去节气最小公约数）
  // 1901-2100年香港天文台公布二十四节气按年存储16进制，1个16进制为4个2进制
  static solarTermsData = [
    0x6aaaa6aa9a5a,
    0xaaaaaabaaa6a,
    0xaaabbabbafaa,
    0x5aa665a65aab,
    0x6aaaa6aa9a5a,
    0xaaaaaaaaaa6a,
    0xaaabbabbafaa,
    0x5aa665a65aab,
    0x6aaaa6aa9a5a,
    0xaaaaaaaaaa6a,
    0xaaabbabbafaa,
    0x5aa665a65aab,
    0x6aaaa6aa9a56,
    0xaaaaaaaa9a5a,
    0xaaabaabaaeaa,
    0x569665a65aaa,
    0x5aa6a6a69a56,
    0x6aaaaaaa9a5a,
    0xaaabaabaaeaa,
    0x569665a65aaa,
    0x5aa6a6a65a56,
    0x6aaaaaaa9a5a,
    0xaaabaabaaa6a,
    0x569665a65aaa,
    0x5aa6a6a65a56,
    0x6aaaa6aa9a5a,
    0xaaaaaabaaa6a,
    0x555665665aaa,
    0x5aa665a65a56,
    0x6aaaa6aa9a5a,
    0xaaaaaabaaa6a,
    0x555665665aaa,
    0x5aa665a65a56,
    0x6aaaa6aa9a5a,
    0xaaaaaaaaaa6a,
    0x555665665aaa,
    0x5aa665a65a56,
    0x6aaaa6aa9a5a,
    0xaaaaaaaaaa6a,
    0x555665665aaa,
    0x5aa665a65a56,
    0x6aaaa6aa9a5a,
    0xaaaaaaaaaa6a,
    0x555665655aaa,
    0x569665a65a56,
    0x6aa6a6aa9a56,
    0xaaaaaaaa9a5a,
    0x5556556559aa,
    0x569665a65a55,
    0x6aa6a6a65a56,
    0xaaaaaaaa9a5a,
    0x5556556559aa,
    0x569665a65a55,
    0x5aa6a6a65a56,
    0x6aaaa6aa9a5a,
    0x5556556555aa,
    0x569665a65a55,
    0x5aa665a65a56,
    0x6aaaa6aa9a5a,
    0x55555565556a,
    0x555665665a55,
    0x5aa665a65a56,
    0x6aaaa6aa9a5a,
    0x55555565556a,
    0x555665665a55,
    0x5aa665a65a56,
    0x6aaaa6aa9a5a,
    0x55555555556a,
    0x555665665a55,
    0x5aa665a65a56,
    0x6aaaa6aa9a5a,
    0x55555555556a,
    0x555665655a55,
    0x5aa665a65a56,
    0x6aa6a6aa9a5a,
    0x55555555456a,
    0x555655655a55,
    0x5a9665a65a56,
    0x6aa6a6a69a5a,
    0x55555555456a,
    0x555655655a55,
    0x569665a65a56,
    0x6aa6a6a65a56,
    0x55555155455a,
    0x555655655955,
    0x569665a65a55,
    0x5aa6a5a65a56,
    0x15555155455a,
    0x555555655555,
    0x569665665a55,
    0x5aa665a65a56,
    0x15555155455a,
    0x555555655515,
    0x555665665a55,
    0x5aa665a65a56,
    0x15555155455a,
    0x555555555515,
    0x555665665a55,
    0x5aa665a65a56,
    0x15555155455a,
    0x555555555515,
    0x555665665a55,
    0x5aa665a65a56,
    0x15555155455a,
    0x555555555515,
    0x555655655a55,
    0x5aa665a65a56,
    0x15515155455a,
    0x555555554515,
    0x555655655a55,
    0x5a9665a65a56,
    0x15515151455a,
    0x555551554515,
    0x555655655a55,
    0x569665a65a56,
    0x155151510556,
    0x555551554505,
    0x555655655955,
    0x569665665a55,
    0x155110510556,
    0x155551554505,
    0x555555655555,
    0x569665665a55,
    0x55110510556,
    0x155551554505,
    0x555555555515,
    0x555665665a55,
    0x55110510556,
    0x155551554505,
    0x555555555515,
    0x555665665a55,
    0x55110510556,
    0x155551554505,
    0x555555555515,
    0x555655655a55,
    0x55110510556,
    0x155551554505,
    0x555555555515,
    0x555655655a55,
    0x55110510556,
    0x155151514505,
    0x555555554515,
    0x555655655a55,
    0x54110510556,
    0x155151510505,
    0x555551554515,
    0x555655655a55,
    0x14110110556,
    0x155110510501,
    0x555551554505,
    0x555555655555,
    0x14110110555,
    0x155110510501,
    0x555551554505,
    0x555555555555,
    0x14110110555,
    0x55110510501,
    0x155551554505,
    0x555555555555,
    0x110110555,
    0x55110510501,
    0x155551554505,
    0x555555555515,
    0x110110555,
    0x55110510501,
    0x155551554505,
    0x555555555515,
    0x100100555,
    0x55110510501,
    0x155151514505,
    0x555555555515,
    0x100100555,
    0x54110510501,
    0x155151514505,
    0x555551554515,
    0x100100555,
    0x54110510501,
    0x155150510505,
    0x555551554515,
    0x100100555,
    0x14110110501,
    0x155110510505,
    0x555551554505,
    0x100055,
    0x14110110500,
    0x155110510501,
    0x555551554505,
    0x55,
    0x14110110500,
    0x55110510501,
    0x155551554505,
    0x55,
    0x110110500,
    0x55110510501,
    0x155551554505,
    0x15,
    0x100110500,
    0x55110510501,
    0x155551554505,
    0x555555555515,
  ];
  static Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
  static rGan = ["癸", "壬", "辛", "庚", "己", "戊", "丁", "丙", "乙", "甲"];
  static rhourgang_dict = {
    癸: 1,
    壬: 2,
    辛: 3,
    庚: 4,
    己: 5,
    戊: 6,
    丁: 7,
    丙: 8,
    乙: 9,
    甲: 10,
  };
  static hourgang_dict = {
    甲: 1,
    乙: 2,
    丙: 3,
    丁: 4,
    戊: 5,
    己: 6,
    庚: 7,
    辛: 8,
    壬: 9,
    癸: 10,
  };
  static Zhi = [
    "子",
    "丑",
    "寅",
    "卯",
    "辰",
    "巳",
    "午",
    "未",
    "申",
    "酉",
    "戌",
    "亥",
  ];
  static hidden_jia = {
    甲子: "戊",
    甲戌: "己",
    甲申: "庚",
    甲午: "辛",
    甲辰: "壬",
    甲寅: "癸",
  };

  static liuxun = ["甲子", "甲戌", "甲申", "甲午", "甲辰", "甲寅"];

  static golen_d = [
    "太乙",
    "攝提",
    "軒轅",
    "招搖",
    "天符",
    "青龍",
    "咸池",
    "太陰",
    "天乙",
  ];

  static gtw = [
    "地籥",
    "六賊",
    "五符",
    "天曹",
    "地符",
    "風伯",
    "雷公",
    "雨師",
    "風雲",
    "唐符",
    "國印",
    "天關",
  ];
  static cnumber = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];
  static nine_star = ["蓬", "芮", "沖", "輔", "禽", "心", "柱", "任", "英"];
  static eight_door = ["休", "死", "傷", "杜", "中", "開", "驚", "生", "景"];
  static eight_door2 = ["休", "死", "傷", "杜", "開", "驚", "生", "景"];
  static eight_gua = ["坎", "坤", "震", "巽", "中", "乾", "兌", "艮", "離"];
  static eight_gua2 = ["坎", "坤", "震", "巽", "乾", "兌", "艮", "離"];
  static god_dict = {
    陽: ["符", "蛇", "陰", "合", "勾", "雀", "地", "天"],
    陰: ["符", "蛇", "陰", "合", "虎", "玄", "地", "天"],
  };
  static zhi2gan = {
    子: "癸",
    丑: "己",
    寅: "甲",
    卯: "乙",
    辰: "戊",
    巳: "丙",
    午: "丁",
    未: "己",
    申: "庚",
    酉: "辛",
    戌: "戊",
    亥: "壬",
  };
  static gans_code = {
    甲: 0,
    乙: 1,
    丙: 2,
    丁: 3,
    戊: 4,
    己: 5,
    庚: 6,
    辛: 7,
    壬: 8,
    癸: 9,
  };
  static gans_code2 = {
    甲: 1,
    乙: 2,
    丙: 3,
    丁: 4,
    戊: 5,
    己: 6,
    庚: 7,
    辛: 8,
    壬: 9,
    癸: 10,
  };
  static cnumber_code = {
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
  };
  static stars_code = {
    一: "蓬",
    二: "芮",
    三: "沖",
    四: "輔",
    五: "禽",
    六: "心",
    七: "柱",
    八: "任",
    九: "英",
  };
  static doors_code = {
    一: "休",
    二: "死",
    三: "傷",
    四: "杜",
    五: "中",
    六: "開",
    七: "驚",
    八: "生",
    九: "景",
  };
  static gongs_code = {
    一: "坎",
    二: "坤",
    三: "震",
    四: "巽",
    五: "中",
    六: "乾",
    七: "兌",
    八: "艮",
    九: "離",
  };
  static stars_gong_code = {
    坎: "蓬",
    坤: "芮",
    震: "沖",
    巽: "輔",
    中: "禽",
    乾: "心",
    兌: "柱",
    艮: "任",
    離: "英",
  };
  static paiyinyang = {
    陽: {
      一: "九八七一二三四五六",
      二: "一九八二三四五六七",
      三: "二一九三四五六七八",
      四: "三二一四五六七八九",
      五: "四三二五六七八九一",
      六: "五四三六七八九一二",
      七: "六五四七八九一二三",
      八: "七六五八九一二三四",
      九: "八七六九一二三四五",
    },
    陰: {
      九: "一二三九八七六五四",
      八: "九一二八七六五四三",
      七: "八九一七六五四三二",
      六: "七八九六五四三二一",
      五: "六七八五四三二一九",
      四: "五六七四三二一九八",
      三: "四五六三二一九八七",
      二: "三四五二一九八七六",
      一: "二三四一九八七六五",
    },
  };

  static gong_dizhi = {
    坎: ["子"],
    艮: ["丑", "寅"],
    震: ["卯"],
    巽: ["辰", "巳"],
    離: ["午"],
    坤: ["未", "申"],
    兌: ["酉"],
    乾: ["戌", "亥"],
  };

  static clockwise_eightgua = ["坎", "艮", "震", "巽", "離", "坤", "兌", "乾"];
  static anti_clockwise_eightgua = this.clockwise_eightgua.slice().reverse();
  static door_r = ["休", "生", "傷", "杜", "景", "死", "驚", "開"];
  static star_r = ["蓬", "任", "沖", "輔", "英", "禽", "柱", "心"];
  // static liujiaxun_dict = {('甲子', '乙丑', '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申', '癸酉'): '甲子', ('甲戌', '乙亥', '丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未'): '甲戌', ('甲申', '乙酉', '丙戌', '丁亥', '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳'): '甲申', ('甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥', '庚子', '辛丑', '壬寅', '癸卯'): '甲午', ('甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥', '壬子', '癸丑'): '甲辰', ('甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥'): '甲寅'}
  static liujiaxun_dict = Object.assign(
    this.jiazi()
      .slice(0, 10)
      .reduce((obj, cur, index) => {
        obj[cur] = "甲子";
        return obj;
      }, {}),
    this.jiazi()
      .slice(10, 20)
      .reduce((obj, cur, index) => {
        obj[cur] = "甲戌";
        return obj;
      }, {}),
    this.jiazi()
      .slice(20, 30)
      .reduce((obj, cur, index) => {
        obj[cur] = "甲申";
        return obj;
      }, {}),
    this.jiazi()
      .slice(30, 40)
      .reduce((obj, cur, index) => {
        obj[cur] = "甲午";
        return obj;
      }, {}),
    this.jiazi()
      .slice(40, 50)
      .reduce((obj, cur, index) => {
        obj[cur] = "甲辰";
        return obj;
      }, {}),
    this.jiazi()
      .slice(50, 60)
      .reduce((obj, cur, index) => {
        obj[cur] = "甲寅";
        return obj;
      }, {})
  );

  static liujiaxun_dict2 = Object.assign(
    this.jiazi()
      .slice(0, 10)
      .reduce((obj, cur, index) => {
        obj[cur] = "甲子戊";
        return obj;
      }, {}),
    this.jiazi()
      .slice(10, 20)
      .reduce((obj, cur, index) => {
        obj[cur] = "甲戌己";
        return obj;
      }, {}),
    this.jiazi()
      .slice(20, 30)
      .reduce((obj, cur, index) => {
        obj[cur] = "甲申庚";
        return obj;
      }, {}),
    this.jiazi()
      .slice(30, 40)
      .reduce((obj, cur, index) => {
        obj[cur] = "甲午辛";
        return obj;
      }, {}),
    this.jiazi()
      .slice(40, 50)
      .reduce((obj, cur, index) => {
        obj[cur] = "甲辰壬";
        return obj;
      }, {}),
    this.jiazi()
      .slice(50, 60)
      .reduce((obj, cur, index) => {
        obj[cur] = "甲寅癸";
        return obj;
      }, {})
  );

  static door_code = {
    陽遁: this.range(1, 9).reduce((obj, cur, index) => {
      obj[cur] = this.eight_door2[index];
      return obj;
    }, {}),
    陰遁: this.range(1, 9).reduce((obj, cur, index) => {
      obj[cur] = this.eight_door2.slice().reverse()[index];
      return obj;
    }, {}),
  };

  static findyuan_dict = Object.assign(
    this.jiazi()
      .slice(0, 5)
      .reduce((obj, cur, index) => {
        obj[cur] = "上元";
        return obj;
      }, {}),
    this.jiazi()
      .slice(15, 20)
      .reduce((obj, cur, index) => {
        obj[cur] = "上元";
        return obj;
      }, {}),
    this.jiazi()
      .slice(30, 35)
      .reduce((obj, cur, index) => {
        obj[cur] = "上元";
        return obj;
      }, {}),
    this.jiazi()
      .slice(45, 50)
      .reduce((obj, cur, index) => {
        obj[cur] = "上元";
        return obj;
      }, {}),
    this.jiazi()
      .slice(5, 10)
      .reduce((obj, cur, index) => {
        obj[cur] = "中元";
        return obj;
      }, {}),
    this.jiazi()
      .slice(20, 25)
      .reduce((obj, cur, index) => {
        obj[cur] = "中元";
        return obj;
      }, {}),
    this.jiazi()
      .slice(35, 40)
      .reduce((obj, cur, index) => {
        obj[cur] = "中元";
        return obj;
      }, {}),
    this.jiazi()
      .slice(50, 55)
      .reduce((obj, cur, index) => {
        obj[cur] = "中元";
        return obj;
      }, {}),
    this.jiazi()
      .slice(10, 15)
      .reduce((obj, cur, index) => {
        obj[cur] = "下元";
        return obj;
      }, {}),
    this.jiazi()
      .slice(25, 30)
      .reduce((obj, cur, index) => {
        obj[cur] = "下元";
        return obj;
      }, {}),
    this.jiazi()
      .slice(40, 45)
      .reduce((obj, cur, index) => {
        obj[cur] = "下元";
        return obj;
      }, {}),
    this.jiazi()
      .slice(55, 60)
      .reduce((obj, cur, index) => {
        obj[cur] = "下元";
        return obj;
      }, {})
  );

  static guxu = {
    甲子: { 孤: "戌亥", 虛: "辰巳" },
    甲戌: { 孤: "申酉", 虛: "寅卯" },
    甲申: { 孤: "午未", 虛: "子丑" },
    甲午: { 孤: "辰巳", 虛: "戌亥" },
    甲辰: { 孤: "寅卯", 虛: "申酉" },
    甲寅: { 孤: "子丑", 虛: "午未" },
  };
  static xunlist = { 0: "戊", 10: "己", 8: "庚", 6: "辛", 4: "壬", 2: "癸" };
  static jieqi_all = this.new_list(
    this.range(0, this.len(this.stc), 2).map((i) => this.stc.slice(i, i + 2)),
    "冬至"
  );
  static yingyang_dun = Object.assign(
    this.jieqi_all.slice(0, 12).reduce((obj, cur, index) => {
      obj[cur] = "陽遁";
      return obj;
    }, {}),
    this.jieqi_all.slice(12, 24).reduce((obj, cur, index) => {
      obj[cur] = "陰遁";
      return obj;
    }, {})
  );
  static yingyang_order = {
    陽遁: ["戊", "己", "庚", "辛", "壬", "癸", "丁", "丙", "乙"],
    陰遁: ["戊", "乙", "丙", "丁", "癸", "壬", "辛", "庚", "己"],
  };
  static cnumber_order = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];
  static clockwise_cnum = ["一", "八", "三", "四", "九", "二", "七", "六"];
  static cnum_dict = this.cnumber_order.reduce((obj, cur, index) => {
    obj[cur] = index + 1;
    return obj;
  }, {});

  static twelve_luck = [
    "長生",
    "沐浴",
    "冠帶",
    "臨冠",
    "帝旺",
    "衰",
    "病",
    "死",
    "墓",
    "絕",
    "胎",
    "養",
  ];

  static twelve_luck_i = [
    "死",
    "病",
    "衰",
    "帝旺",
    "臨冠",
    "冠帶",
    "沐浴",
    "長生",
    "養",
    "胎",
    "絕",
    "墓",
  ];

  static abListMerge(a, b = this.encryptionVectorList, type = 1) {
    let c = [];
    for (let i of this.range(0, this.len(a))) {
      c.push(a[i] + b[i] * type);
    }
    return c;
  }

  static zipSolarTermsList(inputList, charCountLen = 2) {
    let tempList = abListMerge(inputList, (type = -1));
    let data = 0;
    let num = 0;
    for (let i of tempList) {
      data += bigInt(charCountLen * num).shiftLeft(i);
      num += 1;
    }
    return hex(data), this.len(0, tempList);
  }
  static unZipSolarTermsList(data, rangeEndNum = 24, charCountLen = 2) {
    let list2 = [];
    for (let i of this.range(1, rangeEndNum + 1)) {
      let right = charCountLen * (rangeEndNum - i);
      if (typeof data == "string") data = parseInt(data, 16);
      let x = bigInt(data).shiftRight(right).toJSNumber();
      let c = bigInt(2).pow(charCountLen).toJSNumber();
      list2.unshift(this.mod(x, c));
    }
    return this.abListMerge(list2);
  }
  static getTheYearAllSolarTermsList(year) {
    return this.unZipSolarTermsList(
      this.solarTermsData[year - this.START_YEAR]
    );
  }

  static twentyfourjieqi(year) {
    let day = this.getTheYearAllSolarTermsList(year);
    let month = this.range(1, 13).reduce((obj, cur, index) => {
      this.range(0, 2).map(() => obj.push(cur));
      return obj;
    }, []);
    let riqi_jieqi = {};
    for (let i in this.range(0, 23)) {
      riqi_jieqi[
        year.toString() + "/" + month[i].toString() + "/" + day[i].toString()
      ] = this.solarTermsNameList[i];
    }
    return riqi_jieqi;
  }

  static find_shier_luck(gan) {
    //五阳干
    let yang = "亥寅寅巳申".split("").reduce((obj1, cur1, index1) => {
      obj1[
        this.Gan.filter((item, index) => {
          if (!(index % 2)) {
            return item;
          }
        })[index1]
      ] = this.new_list(this.Zhi, cur1).reduce((obj2, cur2, index2) => {
        obj2[cur2] = this.twelve_luck[index2];
        return obj2;
      }, {});
      return obj1;
    }, {});
    //五阴干
    let yin = "亥寅寅巳申".split("").reduce((obj1, cur1, index1) => {
      obj1[
        this.Gan.filter((item, index) => {
          if (index % 2) {
            return item;
          }
        })[index1]
      ] = this.new_list(this.Zhi, cur1).reduce((obj2, cur2, index2) => {
        obj2[cur2] = this.twelve_luck_i[index2];
        return obj2;
      }, {});
      return obj1;
    }, {});

    return Object.assign(yang, yin)[gan];
  }
};
