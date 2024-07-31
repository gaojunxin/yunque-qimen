<template>
    <div class="wrapper">
        <div class="wrapper-item">
            <span >{{ viewData.暗干 }}</span>
            <span>{{ viewData.八神 }}</span>
            <span class="placeholder">空</span>
        </div>
        <div class="wrapper-item">
            <span class="placeholder">空 </span>
            <span v-if="viewData.八门" style="font-size: 24px;" :style="{ color: getFontColor('八门', viewData.八门) }">{{ viewData.八门 }}</span>
            <span v-else style="font-size: 24px;" :style="{ color: getFontColor('八门', viewData.八门) }" class="placeholder">空</span>
            <span class="placeholder"> 马</span>
        </div>
        <div class="wrapper-item">
            <span v-if="viewData.天盘1" :style="{ color: getFontColor('天干', viewData.天盘1) }">{{ viewData.天盘1 }}</span>
            <span v-else class="placeholder">空</span>
            <span :style="{ color: getFontColor('九星', viewData.九星) }">{{ viewData.九星 }}</span>
            <span :style="{ color: getFontColor('天干', viewData.天盘) }">{{ viewData.天盘 }}</span>
        </div>
        <div class="wrapper-item">
            <span class="placeholder">符</span>
            <span>{{ index }}</span>
            <span :style="{ color: getFontColor('天干', viewData.地盘) }">{{ viewData.地盘 }}</span>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps, reactive } from "vue";
import { useQimenStore } from "../stores/index";
import Config from "../qimendunjia/config";
const props = defineProps(
    { index: String }
);



// 奇门盘数据
const store = useQimenStore()
const index = props.index;

// 获取当前八卦方位
const bagua = Config.gongs_code[index];
const viewData =  store.getGongViewData(bagua);

// 五行颜色对照表
const wuxingColor = {
    金: '#f28413',
    木: '#167318',
    水: '#08059c',
    火: '#bf403a',
    土: '#87561e',
};

// 所有符号的五行属性对照表
const wuxingMap = {
    八门: {
        "休": '水',
        "死": '土',
        "傷": '木',
        "杜": '木',
        "開": '金',
        "驚": '金',
        "生": '土',
        "景": '火',
    },
    八神: {},
    九星: {
        "蓬": '水',
        "芮": '土',
        "沖": '木',
        "輔": '木',
        "禽": '土',
        "心": '金',
        "柱": '金',
        "任": '土',
        "英": '火',
    },
    天干: {
        甲: '木',
        乙: '木',
        丙: '火',
        丁: '火',
        戊: '土',
        己: '土',
        庚: '金',
        辛: '金',
        壬: '水',
        癸: '水',
    }
}

/**
 * 根据类型和符号获取五行对应的颜色
 * @param {*} type 类型：八门、九星、天干 
 * @param {*} value 值
 */
function getFontColor(type, value) {
    const wuxing = wuxingMap[type][value]
    return wuxingColor[wuxing];
}
</script>
  
<style>
.wrapper {}

.wrapper-item {
    display: flex;
    justify-content: space-between;
}

/** 占位 */
.placeholder {
    visibility: hidden;
    margin: 0;
}
</style>
  