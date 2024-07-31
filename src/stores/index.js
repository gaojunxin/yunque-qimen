import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useQimenStore = defineStore('qimenpan', () => {
  const panData = ref({})
  function setPanData(data) {
    panData.value = data;
  }

  // 根据八卦获取对应宫的信息
  function getGongViewData(bagua) {
    return computed(() => {
      if (panData.value['門']) {
        return {
          八门: panData.value['門'][bagua],
          八神: panData.value['神'][bagua],
          九星: panData.value['星'][bagua],
          八卦: bagua,
          天盘: panData.value['天盤'][0][bagua],
          天盘1: panData.value['天盤'][1][bagua],
          地盘: panData.value['地盤'][bagua],
          暗干: panData.value['暗干'][bagua],
        }
      } else {
        return {}
      }
    })
  }

  return { panData, getGongViewData, setPanData }
})
