import Config from "./config";
import Calendar from "./calendar";
import Wannianli from "./wannianli";
class Qimen {
  constructor(year, month, day, hour) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.p = {
      干支:
        this.gangzhi()[0] +
        "年 " +
        this.gangzhi()[1] +
        "月 " +
        this.gangzhi()[2] +
        "日 " +
        this.gangzhi()[3] +
        "時 ",
      干支1:
      {
        "年": this.gangzhi()[0],
        "月": this.gangzhi()[1],
        "日": this.gangzhi()[2],
        "時": this.gangzhi()[3],
      },
      旬首: this.xun(),
      旬空: this.daykong_shikong(),
      局日: this.qimen_ju_day(),
      排局: this.qimen_ju_name(),
      節氣: this.find_jieqi(),
      值符值使: this.zhifu_n_zhishi(),
      天乙: this.tianyi(),
      天盤: this.pan_sky(),
      地盤: this.pan_earth()[0],
      門: this.pan_door(),
      星: this.pan_star()[0],
      神: this.pan_god(),
      暗干: this.pan_angan(),
      馬星: {
        天馬: this.moonhorse(),
        丁馬: this.dinhorse(),
        驛馬: this.hourhorse(),
      },
      長生運: this.gong_chengsun(),
    };
    this.g = this.gpan();
    this.overall = { 時家奇門: this.pan, 金函玉鏡: this.g };
  }

  //干支
  gangzhi() {
    // 农历
    const lunar = Calendar.solar2lunar(this.year, this.month, this.day);
    lunar.hour = this.hour;
    const bazi = Wannianli.getResult(lunar).bazi;
    return [bazi.year, bazi.month, bazi.date, bazi.hour];
  }

  //找节气
  find_jieqi() {
    let jieqi_list = Config.twentyfourjieqi(this.year);
    let s_date = Object.keys(jieqi_list);
    let date =
      this.year.toString() +
      "/" +
      this.month.toString() +
      "/" +
      this.day.toString();
    let closest = s_date.sort(function (a, b) {
      return (
        Math.abs(new Date(a).getTime() - new Date(date).getTime()) -
        Math.abs(new Date(b).getTime() - new Date(date).getTime())
      );
    })[0];
    //这里是序号加1
    let test = {
      true:
        jieqi_list[s_date[s_date.findIndex((item1) => item1 == closest) + 1]],
      false: jieqi_list[closest],
    };
    return test[new Date(closest).getTime() > new Date(date).getTime()];
  }

  //旬
  xun() {
    let gangzhi = this.gangzhi()[2];
    let gangzhi_gang = Config.Gan.reduce((obj, cur, index) => {
      obj[cur] = Config.range(1, 11)[index];
      return obj;
    }, {});
    let gangzhi_zhi = Config.Zhi.reduce((obj, cur, index) => {
      obj[cur] = Config.range(1, 13)[index];
      return obj;
    }, {});
    let gang = gangzhi_gang[gangzhi[0]];
    let zhi = gangzhi_zhi[gangzhi[1]];
    let xun_value = zhi - gang;
    if (xun_value < 0) xun_value = xun_value + 12;
    return Config.xunlist[xun_value];
  }

  //日空時空
  daykong_shikong() {
    return {
      日空: Config.multi_key_dict_get(
        Config.guxu,
        Config.multi_key_dict_get(Config.liujiaxun_dict, this.gangzhi()[2])
      )["孤"],
      時空: Config.multi_key_dict_get(
        Config.guxu,
        Config.multi_key_dict_get(Config.liujiaxun_dict, this.gangzhi()[3])
      )["孤"],
    };
  }

  //奇門局日
  qimen_ju_day() {
    let day_gangzhi = this.gangzhi()[2];
    let ju_day_dict = Object.assign(
      "甲己".split("").reduce((obj, cur, index) => {
        obj[cur] = "甲己日";
        return obj;
      }, {}),
      "乙庚".split("").reduce((obj, cur, index) => {
        obj[cur] = "乙庚日";
        return obj;
      }, {}),
      "丙辛".split("").reduce((obj, cur, index) => {
        obj[cur] = "丙辛日";
        return obj;
      }, {}),
      "丁壬".split("").reduce((obj, cur, index) => {
        obj[cur] = "丁壬日";
        return obj;
      }, {}),
      "戊癸".split("").reduce((obj, cur, index) => {
        obj[cur] = "戊癸日";
        return obj;
      }, {})
    );
    let find_d = null;
    try {
      find_d = Config.multi_key_dict_get(ju_day_dict, day_gangzhi[0]);
    } catch (TypeError) {
      find_d = Config.multi_key_dict_get(ju_day_dict, day_gangzhi[1]);
    }
    return find_d;
  }

  //奇門排局
  qimen_ju_name() {
    let find_yingyang = Config.multi_key_dict_get(
      Config.yingyang_dun,
      this.find_jieqi()
    );
    let findyuan = Config.multi_key_dict_get(
      Config.findyuan_dict,
      this.gangzhi()[2]
    );
    let jieqicode = Config.multi_key_dict_get(
      Config.jieqidun_code,
      this.find_jieqi()
    );
    let find_kok = {
      上元: jieqicode[0],
      中元: jieqicode[1],
      下元: jieqicode[2],
    };
    return find_yingyang + find_kok[findyuan] + "局" + findyuan;
  }

  //三元
  find_yuan() {
    let find_yingyang = Config.multi_key_dict_get(
      Config.yingyang_dun,
      this.find_jieqi()
    );
    let findyuan = Config.multi_key_dict_get(
      Config.findyuan_dict,
      this.gangzhi()[2]
    );
    return findyuan;
  }

  //排值符
  zhifu_pai() {
    let yinyang = this.qimen_ju_name()[0];
    let kook = this.qimen_ju_name()[2];
    let pai = Config.paiyinyang[yinyang][kook];
    // return {
    //   陰: Config.liuxun.reduce((obj1, cur1, index1) => {
    //     obj1[cur1] = Config.new_list_r(Config.cnumber, kook)[index1] + pai;
    //     return obj1;
    //   }, {}),
    //   陽: Config.liuxun.reduce((obj2, cur2, index2) => {
    //     obj2[cur2] = Config.new_list(Config.cnumber, kook)[index2] + pai;
    //     return obj2;
    //   }, {}),
    // }[yinyang];

    return {
      陰: Config.zip_dict(
        Config.liuxun,
        Config.new_list_r(Config.cnumber, kook).map((item) => item + pai)
      ),
      陽: Config.zip_dict(
        Config.liuxun,
        Config.new_list(Config.cnumber, kook).map((item) => item + pai)
      ),
    }[yinyang];
  }

  //排值使
  zhishi_pai() {
    let yinyang = this.qimen_ju_name()[0];
    let kook = this.qimen_ju_name()[2];
    let yanglist =
      Config.new_list(Config.cnumber, kook).join("") +
      Config.new_list(Config.cnumber, kook).join("") +
      Config.new_list(Config.cnumber, kook).join("");

    let yinlist =
      Config.new_list_r(Config.cnumber, kook).join("") +
      Config.new_list_r(Config.cnumber, kook).join("") +
      Config.new_list_r(Config.cnumber, kook).join("");

    let yangpai = Config.zip_dict(
      Config.liuxun,
      Config.new_list(Config.cnumber, kook)
        .slice(0, 6)
        .map(
          (i) =>
            i +
            yanglist
              .slice(
                yanglist.split("").findIndex((item) => item == i) + 1,
                Config.len(yanglist)
              )
              .slice(0, 11)
        )
    );

    let yinpai = Config.zip_dict(
      Config.liuxun,
      Config.new_list_r(Config.cnumber, kook)
        .slice(0, 6)
        .map(
          (i) =>
            i +
            yinlist
              .slice(
                yinlist.split("").findIndex((item) => item == i) + 1,
                Config.len(yinlist)
              )
              .slice(0, 11)
        )
    );

    return {
      陰: yinpai,
      陽: yangpai,
    }[yinyang];
  }

  //找值符及值使
  zhifu_n_zhishi() {
    let hgan = Config.gans_code[this.gangzhi()[3][0]];
    let chour = Config.multi_key_dict_get(
      Config.liujiaxun_dict,
      this.gangzhi()[3]
    );

    let star = Config.zip_dict(
      Object.keys(this.zhifu_pai()),
      Object.values(this.zhifu_pai()).map((item) => Config.stars_code[item[0]])
    )[chour];

    let door = Config.zip_dict(
      Object.keys(this.zhishi_pai()),
      Object.values(this.zhishi_pai()).map((item) => Config.doors_code[item[0]])
    )[chour];

    if (door == "中") door = "死";

    let zhifu_gong = Config.zip_dict(
      Object.keys(this.zhifu_pai()),
      Object.values(this.zhifu_pai()).map(
        (item) => Config.gongs_code[item[hgan]]
      )
    )[chour];

    let zhishi_gong = Config.zip_dict(
      Object.keys(this.zhishi_pai()),
      Object.values(this.zhishi_pai()).map(
        (item) => Config.gongs_code[item[hgan]]
      )
    )[chour];

    return { 值符星宮: [star, zhifu_gong], 值使門宮: [door, zhishi_gong] };
  }

  //天乙
  tianyi() {
    let star_location = null;
    try {
      star_location =
        Config.stars_gong_code[this.zhifu_n_zhishi()["值符星宮"][1]];
    } catch (IndexError) {
      star_location = "禽";
    }
    return star_location;
  }

  //天盤
  pan_sky() {
    let fu_head = this.hourganghzi_zhifu()[2];
    let fu_head_location = this.zhifu_n_zhishi()["值符星宮"][1];
    //let earth_order = this.pan_earth();
    let rotate = {
      陽: Config.clockwise_eightgua,
      陰: Config.anti_clockwise_eightgua,
    }[this.qimen_ju_name()[0]];
    let gan_reorder = [];
    try {
      gan_reorder = Config.new_list(
        rotate.map((i) => this.pan_earth()[0][i]),
        fu_head
      );
    } catch (ValueError) {
      gan_reorder = Config.new_list(
        rotate.map((i) => this.pan_earth()[0][i]),
        this.pan_earth()[0]["乾"]
      );
    }
    let gong_reorder = [];
    if (fu_head_location == "中") {
      gong_reorder = Config.new_list(rotate, "坤");
    } else {
      gong_reorder = Config.new_list(rotate, fu_head_location);
    }
    return [
      Config.zip_dict(gong_reorder, gan_reorder),
      { [this.pan_star()[1]["禽"]]: this.pan_earth()[0]["中"] },
    ];
  }

  //值符
  hourganghzi_zhifu() {
    return Config.multi_key_dict_get(Config.liujiaxun_dict2, this.gangzhi()[3]);
  }

  //地盤
  pan_earth() {
    let kok = this.qimen_ju_name()[2];
    let kok_yingyang = this.qimen_ju_name().slice(0, 2);
    let cnum_to_gua = Config.zip_dict(Config.cnumber_order, Config.eight_gua);
    let new_gua = Config.new_list(Config.cnumber_order, kok).map(
      (i) => cnum_to_gua[i]
    );
    let earth = Config.zip_dict(new_gua, Config.yingyang_order[kok_yingyang]);
    let reverse_earth = Config.zip_dict(
      Config.yingyang_order[kok_yingyang],
      new_gua
    );
    let cnumngua = Config.zip_dict(
      Config.new_list(Config.cnumber_order, kok),
      Config.yingyang_order[kok_yingyang]
    );
    let clockwise_gan = Config.clockwise_cnum.map((i) => cnumngua[i]);
    return [earth, reverse_earth, clockwise_gan];
  }

  //九星
  pan_star() {
    let starting_star = this.zhifu_n_zhishi()["值符星宮"][0].replace(
      "芮",
      "禽"
    );
    let starting_gong = this.zhifu_n_zhishi()["值符星宮"][1];
    let rotate = {
      陽: Config.clockwise_eightgua,
      陰: Config.anti_clockwise_eightgua,
    }[this.qimen_ju_name()[0]];
    let star_reorder = {
      陽: Config.new_list(Config.star_r, starting_star),
      陰: Config.new_list(Config.star_r.slice().reverse(), starting_star),
    }[this.qimen_ju_name()[0]];
    let gong_reorder = [];
    if (starting_gong == "中") {
      gong_reorder = Config.new_list(rotate, "坤");
    } else {
      gong_reorder = Config.new_list(rotate, starting_gong);
    }
    return [
      Config.zip_dict(gong_reorder, star_reorder),
      Config.zip_dict(star_reorder, gong_reorder),
    ];
  }

  //八門
  pan_door() {
    let starting_door = this.zhifu_n_zhishi()["值使門宮"][0];
    let starting_gong = this.zhifu_n_zhishi()["值使門宮"][1];
    let rotate = {
      陽: Config.clockwise_eightgua,
      陰: Config.anti_clockwise_eightgua,
    }[this.qimen_ju_name()[0]];
    let door_reorder = {
      陽: Config.new_list(Config.door_r, starting_door),
      陰: Config.new_list(Config.door_r.slice().reverse(), starting_door),
    }[this.qimen_ju_name()[0]];
    let gong_reorder = [];
    if (starting_gong == "中") {
      gong_reorder = Config.new_list(rotate, "坤");
    } else {
      gong_reorder = Config.new_list(rotate, starting_gong);
    }
    return Config.zip_dict(gong_reorder, door_reorder);
  }

  //八神
  pan_god() {
    let god_order = Config.god_dict[this.qimen_ju_name()[0]];
    let starting_gong = this.zhifu_n_zhishi()["值符星宮"][1];
    let rotate = {
      陽: Config.clockwise_eightgua,
      陰: Config.anti_clockwise_eightgua,
    }[this.qimen_ju_name()[0]];
    let gong_reorder = [];
    if (starting_gong == "中") {
      gong_reorder = Config.new_list(rotate, "坤");
    } else {
      gong_reorder = Config.new_list(rotate, starting_gong);
    }
    return Config.zip_dict(gong_reorder, god_order);
  }

  // 暗干
  pan_angan() {
    // 根据当前局的阴阳遁确定天干顺序
    let yingyang = this.qimen_ju_name().slice(0, 2);
    let gans = Config.yingyang_order[yingyang];
    
    // 从值符所在的宫位开始排列
    let zhifu_gong = this.zhifu_n_zhishi()["值符星宮"][1];
    
    // 确定旋转方向
    let rotate = {
      陽遁: Config.clockwise_eightgua,
      陰遁: Config.anti_clockwise_eightgua,
    }[yingyang];
    
    // 时干
    let shigan = this.gangzhi()[3][0];
    
    // 获取地盘信息
    let dipan = this.pan_earth()[0];
    
    // 确定起始宫位
    let start_gong = zhifu_gong;
    // 特殊情况：当时干与值符落宫地盘干相同时，起始位置调整
    if (shigan == dipan[zhifu_gong]) {
      // 找到中宫在旋转序列中的位置，从该位置开始
      let zhong_index = rotate.indexOf("中");
      if (zhong_index !== -1) {
        start_gong = "中";
      }
    }
    
    let gong_reorder = Config.new_list(rotate, start_gong);
    let angan_reorder = Config.new_list(gans, shigan);
    
    return Config.zip_dict(gong_reorder, angan_reorder);
  }

  //丁馬
  dinhorse() {
    let dinhorsedict = Config.zip_dict(
      ["甲子", "甲戌", "甲申", "甲午", "甲辰", "甲寅"],
      ["卯", "丑", "亥", "酉", "未", "巳"]
    );
    let xun = Config.multi_key_dict_get(
      Config.liujiaxun_dict,
      this.gangzhi()[2]
    );
    return Config.multi_key_dict_get(dinhorsedict, xun);
  }

  //天馬
  moonhorse() {
    let moonhorsedict = Config.zip_dict(
      ["寅申", "卯酉", "辰戌", "巳亥", "午子", "丑未"],
      ["午", "申", "戌", "子", "寅", "辰"]
    );
    return Config.multi_key_dict_get(moonhorsedict, this.gangzhi()[2][1]);
  }

  //驛馬星
  hourhorse() {
    let hourhorsedict = Config.zip_dict(
      ["申子辰", "寅午戌", "亥卯未", "巳酉丑"],
      ["寅", "申", "巳", "亥"]
    );
    return Config.multi_key_dict_get(hourhorsedict, this.gangzhi()[3][1]);
  }

  //九宮長生十二神
  gong_chengsun() {
    //天盘的宫位、天干
    let sky_pan = this.pan_sky()[0];
    let sky_gong_gan_twelve_luck = this.gong_sheng_wang_mu(sky_pan);

    //地盘的宫位、天干
    let earth_pan = this.pan_earth()[0];
    let earth_gong_gan_twelve_luck = this.gong_sheng_wang_mu(earth_pan);
    return { 天盤: sky_gong_gan_twelve_luck, 地盤: earth_gong_gan_twelve_luck };
  }

  gong_sheng_wang_mu(pan) {
    //计算每个天干的生旺墓
    let find_gong_gan_twelve_luck = Config.zip_dict(
      Object.values(pan),
      Object.values(pan).map((i) => Config.find_shier_luck(i))
    );
    //使得宫、干、生旺墓对应
    let find_gong_gan_twelve_luck_new = Config.zip_dict(
      Object.keys(pan),
      find_gong_gan_twelve_luck
    );
    //依照宫内地支筛选生旺墓
    let gong_gan_twelve_luck = {};
    for (let ii in find_gong_gan_twelve_luck_new) {
      gong_gan_twelve_luck[ii] = {};
      for (let jj in find_gong_gan_twelve_luck_new[ii]) {
        gong_gan_twelve_luck[ii][jj] = {};
        for (let kk in find_gong_gan_twelve_luck_new[ii][jj]) {
          if (ii != "中" && Config.gong_dizhi[ii].includes(kk)) {
            gong_gan_twelve_luck[ii][jj][kk] =
              find_gong_gan_twelve_luck_new[ii][jj][kk];
          }
        }
      }
    }
    return gong_gan_twelve_luck;
  }

  // 鶴神
  crane_god() {
    let newjz = Config.new_list(Config.jiazi(), "庚申");
    let crane_nums = [6, 5, 6, 5, 6, 5, 16, 6, 5];
    let crane_list = ["巽", "離", "坤", "兌", "乾", "坎", "天", "艮", "震"];
    let newc_list = [];
    for (let i of Config.range(0, 9)) {
      let newc = new Array(crane_nums[i]).fill(crane_list[i].slice(0, 5));
      newc_list = newc_list.concat(newc);
    }
    return Config.zip_dict(newjz, newc_list);
  }

  //神
  getgtw() {
    let newgtw_order = [
      "地籥",
      "天關",
      "唐符",
      "風雲",
      "唐符",
      "風雲",
      "雷公",
      "風伯",
      "天曹",
      "五符",
    ];
    let newgtw = newgtw_order.map((i) => Config.new_list(Config.gtw, i));
    let newgtw_list = newgtw.map((i) => Config.zip_dict(Config.Zhi, i));
    return Config.zip_dict(Config.Gan, newgtw_list);
  }

  //金函玉鏡 日家奇門
  gpan() {
    let start_jia = Config.jiazi().space(0, 10);
    //console.log("start_jia", start_jia);
    let find_xun = Config.zip_dict(
      start_jia.map((i) => Config.new_list(Config.jiazi(), i).slice(0, 10)),
      start_jia
    );
    //console.log("find_xun", find_xun);
    let dgz = this.gangzhi()[2];
    let xun = Config.multi_key_dict_get(find_xun, dgz);
    //console.log("xun", xun);
    let start_gong_d = { 冬至: "艮離坎坤震巽", 夏至: "坤離巽坤離兌" };
    let yy_dun = { 冬至: "陽遁", 夏至: "陰遁" };

    let start_gong =
      start_gong_d[
        Config.multi_key_dict_get(
          Object.assign(
            Config.jieqi_all.slice(0, 12).reduce((obj, cur, index) => {
              obj[cur] = "冬至";
              return obj;
            }, {}),
            Config.jieqi_all.slice(13, 24).reduce((obj, cur, index) => {
              obj[cur] = "夏至";
              return obj;
            }, {})
          ),
          this.find_jieqi()
        )
      ];

    let yy =
      yy_dun[
        Config.multi_key_dict_get(
          Object.assign(
            Config.jieqi_all.slice(0, 12).reduce((obj, cur, index) => {
              obj[cur] = "冬至";
              return obj;
            }, {}),
            Config.jieqi_all.slice(13, 24).reduce((obj, cur, index) => {
              obj[cur] = "夏至";
              return obj;
            }, {})
          ),
          this.find_jieqi()
        )
      ];

    let gong = Config.zip_dict(start_jia, start_gong)[xun];
    let triple_list = Config.range(0, 21).map((i) => i * 3);
    let b = [];
    for (let i of Config.range(0, Config.len(triple_list))) {
      let a = Config.jiazi().slice(triple_list[i], triple_list[i + 1]);
      if (Config.len(a) > 0) b.push(a);
    }
    let g = [];
    let f = {
      陰遁: Config.anti_clockwise_eightgua,
      陽遁: Config.clockwise_eightgua,
    };
    let c_gong = Config.new_list(Config.eight_gua, gong);
    let a_gong = Config.new_list(Config.eight_gua.slice().reverse(), gong);
    let close_ten_day = Config.new_list(Config.jiazi(), xun).slice(0, 10);
    //console.log(close_ten_day);
    let ying = Config.zip_dict(
      Config.new_list(
        Config.eight_gua,
        Object.assign(Config.zip_dict(close_ten_day, a_gong), {
          [close_ten_day[-1]]: a_gong[0],
        })[dgz]
      ),
      Config.golen_d
    );
    let yang = Config.zip_dict(
      Config.new_list(
        Config.eight_gua,
        Object.assign(Config.zip_dict(close_ten_day, c_gong), {
          [close_ten_day[-1]]: a_gong[0],
        })[dgz]
      ),
      Config.golen_d
    );
    let star = { 陰遁: ying, 陽遁: yang }[yy];

    for (let i of Config.eight_gua2) {
      let c = Config.zip_dict(Config.new_list(f[yy], i), Config.door_r);
      g.push(c);
    }
    let door = Config.multi_key_dict_get(Config.zip_dict(b, g, false), dgz);
    return {
      局: yy + dgz + "日",
      鶴神: this.crane_god()[dgz],
      星: star,
      門: Object.assign(door, { 中: "" }),
      神: this.getgtw()[dgz.split("")[0]],
    };
  }
}

// console.log(JSON.stringify(new Qimen(2021, 12, 02, 00).p));
//console.log(new Lunar(2021, 11, 29).getTZ());
export default Qimen;