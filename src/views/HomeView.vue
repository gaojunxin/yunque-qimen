<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { gsap } from "gsap";
import { onMounted, ref } from 'vue';
import fonts from '../assets/fonts.json';
// Canvas
const canvas = ref();


onMounted(() => {

  // Scene
  const scene = new THREE.Scene();

  //----------------------

  const fontLoader = new FontLoader();
  const fontUrl = "fonts.json";
  let font;
  const loadFont = new Promise((resolve, reject) => {
    // fontLoader.load(
    //   fontUrl,
    //   function (loadedFont) {
    //     font = loadedFont;
    //     resolve();
    //   },
    //   undefined,
    //   function (err) {
    //     reject(err);
    //   }
    // );
    font = fontLoader.parse(fonts);
    resolve();
  });
  const text = {
    五行: ["金", "木", "水", "火", "土"],
    八卦: ["乾", "坤", "震", "巽", "坎", "艮", "离", "兑"],
    八门: ["休", "生", "伤", "杜", "景", "死", "惊", "开"],
    八神: ["值符", "螣蛇", "太阴", "六合", "白虎", "玄武", "九地", "九天"],
    九星: ["天蓬", "天任", "天冲", "天辅", "天英", "天芮", "天柱", "天心"],
    数字: ["壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖", "拾"],
    天干: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
    地支: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥",],
    节气: [
      "立  春",
      "雨  水",
      "惊  蛰",
      "春  分",
      "清  明",
      "谷  雨",
      "立  夏",
      "小  满",
      "芒  种",
      "夏  至",
      "小  暑",
      "大  暑",
      "立  秋",
      "处  暑",
      "白  露",
      "秋  分",
      "寒  露",
      "霜  降",
      "立  冬",
      "小  雪",
      "大  雪",
      "冬  至",
      "小  寒",
      "大  寒",
    ],
  };
  const data = [
    {
      innerRing: 2,
      outerRing: 1.5,
      lineWidth: 0.1,
      circleWidth: [0.1, 0.1],
      lineNum: 8,
      text: [0xffffff],
      offsetX: 0,
      offsetY: 0,
      size: 0.3,
      direction: -1,
      duration: 40,
    },
    {
      innerRing: 3.5,
      outerRing: 0.7,
      lineWidth: 0.15,
      circleWidth: [0.1, 0.1],
      lineNum: 8,
      text: text["八神"],
      offsetX: -0.2,
      offsetY: -0.08,
      size: 0.3,
      direction: 1,
      duration: 10,
    },
    {
      innerRing: 4.2,
      outerRing: 0.7,
      lineWidth: 0.15,
      circleWidth: [0.1, 0.1],
      lineNum: 8,
      text: text["九星"],
      offsetX: -0.2,
      offsetY: -0.08,
      size: 0.3,
      direction: -1,
      duration: 20,
    },
    {
      innerRing: 4.9,
      outerRing: 0.7,
      lineWidth: 0.15,
      circleWidth: [0.1, 0.1],
      lineNum: 8,
      text: text["八门"],
      offsetX: -0.4,
      offsetY: -0.2,
      size: 0.3,
      direction: 1,
      duration: 30,
    },
    {
      innerRing: 5.6,
      outerRing: 0.7,
      lineWidth: 0.15,
      circleWidth: [0.1, 0.1],
      lineNum: 8,
      text: text["天干"],
      offsetX: -0.4,
      offsetY: -0.2,
      size: 0.3,
      direction: 1,
      duration: 30,
    },
    {
      innerRing: 6.3,
      outerRing: 0.4,
      lineWidth: 0.15,
      circleWidth: [0, 0],
      lineNum: 60,
      text: text["天干"],
      offsetX: -0.13,
      offsetY: 0.01,
      size: 0.2,
      direction: 1,
      duration: 25,
    },
    {
      innerRing: 6.7,
      outerRing: 0.4,
      lineWidth: 0.15,
      circleWidth: [0, 0],
      lineNum: 60,
      text: text["地支"],
      offsetX: -0.13,
      offsetY: -0.07,
      size: 0.2,
      direction: 1,
      duration: 25,
    },
    {
      innerRing: 7.1,
      outerRing: 0.5,
      lineWidth: 0.15,
      circleWidth: [0.1, 0.1],
      lineNum: 24,
      text: text["节气"],
      offsetX: -0.36,
      offsetY: -0.03,
      size: 0.2,
      direction: 1,
      duration: 30,
    },
    {
      innerRing: 7.6,
      outerRing: 0.8,
      lineWidth: 0.15,
      circleWidth: [0.1, 0.1],
      lineNum: 32,
      text: text["八卦"],
      offsetX: -0.3,
      offsetY: -0.1,
      size: 0.4,
      direction: -1,
      duration: 60,
    },
    {
      innerRing: 8.4,
      outerRing: 0.5,
      lineWidth: 0.15,
      circleWidth: [0.1, 0.1],
      lineNum: 50,
      text: text["五行"],
      offsetX: -0.13,
      offsetY: -0.02,
      size: 0.2,
      direction: 1,
      duration: 35,
    },
    {
      innerRing: 8.9,
      outerRing: 1,
      lineWidth: 0.1,
      circleWidth: [1, 0],
      lineNum: 64,
      text: [0x000000],
      offsetX: 0,
      offsetY: 0,
      size: 0.3,
      direction: 1,
      duration: 30,
    },
  ];
  const Rings = [];
  const duration = [
    0, 0.7, 0.7, 0.7, 0.7, 0, 0.7, 0.7, 0.7, 0.7, 0.7, 0, 0.7, 0.7, 0.7,
  ];

  //Ring
  const Ring = ({
    innerRing,
    outerRing,
    lineWidth,
    circleWidth,
    lineNum,
    offsetX,
    offsetY,
    text,
    size,
    direction,
    duration,
  }) => {
    const RingGroup = new THREE.Group();
    const circle = [0, outerRing];
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    });

    // create ring
    circle.forEach((i, j) => {
      const RingGeo = new THREE.RingGeometry(
        innerRing + i,
        innerRing + circleWidth[j] + i,
        64,
        1
      );
      const Ring = new THREE.Mesh(RingGeo, material);
      RingGroup.add(Ring);
    });

    // create line
    for (let i = 0; i < lineNum; i++) {
      const r = innerRing + circle[1] / 2;
      const rad = ((2 * Math.PI) / lineNum) * i;
      const x = Math.cos(rad) * r;
      const y = Math.sin(rad) * r;
      const planeGeo = new THREE.PlaneGeometry(lineWidth, circle[1]);
      const line = new THREE.Mesh(planeGeo, material);

      line.position.set(x, y, 0);
      line.rotation.set(0, 0, rad + Math.PI / 2);
      RingGroup.add(line);
    }

    // create text
    if (text.length > 1) {
      for (let i = 0; i < lineNum; i++) {
        const r = innerRing + circle[1] / 2;
        const rad = ((2 * Math.PI) / lineNum) * i + Math.PI / lineNum;
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;
        var txtGeo = new TextGeometry(text[i % text.length], {
          font: font,
          size: size,
          height: 0.001,
          curveSegments: 12,
        });
        txtGeo.translate(offsetX, offsetY, 0);
        var txtMater = new THREE.MeshStandardMaterial({ color: 0xffffff });
        var txtMesh = new THREE.Mesh(txtGeo, txtMater);
        txtMesh.position.set(x, y, 0);
        txtMesh.rotation.set(0, 0, rad + -Math.PI / 2);
        RingGroup.add(txtMesh);
      }
    }

    // create bagua
    if (text.length == 1) {
      const baguaData = [
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 1],
        [0, 1, 0],
        [0, 1, 1],
        [1, 0, 0],
        [1, 0, 1],
        [1, 1, 0],
      ];
      for (let i = 0; i < lineNum; i++) {
        const r = innerRing + circle[1] / 2;
        const rad = ((2 * Math.PI) / lineNum) * i + Math.PI / lineNum;
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;
        RingGroup.add(
          createBagua(baguaData[i % 8], x, y, 0.0001, rad + Math.PI / 2, text[0]),
          createBagua(baguaData[i % 8], x, y, -0.0001, rad + Math.PI / 2, text[0])
        );
      }
    }

    // animation
    {
      gsap.to(RingGroup.rotation, {
        duration: duration,
        z: Math.PI * 2 * direction,
        repeat: -1,
        ease: "none",
      });

      const amColor = { r: 1, g: 1, b: 1 };
      const explode = gsap.timeline({ repeat: -1, delay: 5 });
      explode
        .to(RingGroup.position, {
          duration: 1,
          ease: "ease.inOut",
          y: Math.random() * 10 - 5,
          delay: 5,
        })
        .to(amColor, {
          r: 133 / 255,
          g: 193 / 255,
          b: 255 / 255,
          duration: 2,
          onUpdate: () =>
            ambientLight.color.setRGB(amColor.r, amColor.g, amColor.b),
        })
        .to(RingGroup.position, {
          duration: 1,
          ease: "ease.inOut",
          delay: 5,
          y: 0,
        })
        .to(amColor, {
          r: 1,
          g: 1,
          b: 1,
          duration: 3,
          onUpdate: () =>
            ambientLight.color.setRGB(amColor.r, amColor.g, amColor.b),
        });
    }

    // rotate
    RingGroup.rotateX(-Math.PI / 2);
    return RingGroup;
  };

  //taiji
  const createTaiji = (position, scale) => {
    const taiji = new THREE.Group();
    const createCircle = (r, color, thetaStart, thetaLength) => {
      const material = new THREE.MeshBasicMaterial({
        color: color,
        side: THREE.DoubleSide,
      });
      const geometry = new THREE.CircleGeometry(r, 64, thetaStart, thetaLength);
      const circle = new THREE.Mesh(geometry, material);
      return circle;
    };

    const ying = createCircle(1.8, 0x000000, 0, Math.PI);
    const yang = createCircle(1.8, 0xffffff, Math.PI, Math.PI);
    const Lblack = createCircle(0.9, 0x000000, 0, Math.PI * 2);
    const Lwhite = createCircle(0.9, 0xffffff, 0, Math.PI * 2);
    const Sblack = createCircle(0.25, 0x000000, 0, Math.PI * 2);
    const Swhite = createCircle(0.25, 0xffffff, 0, Math.PI * 2);

    const Lblack1 = createCircle(0.9, 0x000000, 0, Math.PI * 2);
    const Lwhite1 = createCircle(0.9, 0xffffff, 0, Math.PI * 2);
    const Sblack1 = createCircle(0.25, 0x000000, 0, Math.PI * 2);
    const Swhite1 = createCircle(0.25, 0xffffff, 0, Math.PI * 2);

    Lblack.position.set(-0.9, 0, 0.001);
    Lwhite.position.set(0.9, 0, 0.001);
    Swhite.position.set(-0.9, 0, 0.002);
    Sblack.position.set(0.9, 0, 0.002);
    Lblack1.position.set(-0.9, 0, -0.001);
    Lwhite1.position.set(0.9, 0, -0.001);
    Swhite1.position.set(-0.9, 0, -0.002);
    Sblack1.position.set(0.9, 0, -0.002);

    taiji.add(
      ying,
      yang,
      Lblack,
      Lwhite,
      Swhite,
      Sblack,
      Lblack1,
      Lwhite1,
      Swhite1,
      Sblack1
    );
    gsap.to(taiji.rotation, {
      duration: 30,
      z: -Math.PI * 2,
      repeat: -1,
      ease: "none",
    });
    taiji.rotateX(-Math.PI / 2);
    taiji.position.set(...position);
    taiji.scale.set(...scale);
    return taiji;
  };
  scene.add(createTaiji([0, 0, 0], [1, 1, 1]));

  // bagua
  const createBagua = (data, x, y, z, deg, color) => {
    const idx = [-0.32, 0, 0.32];
    const bagua = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({
      color: color,
      side: THREE.DoubleSide,
    });
    data.forEach((i, j) => {
      if (i == 1) {
        const yang = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.2), material);
        yang.position.set(0, idx[j], 0);
        bagua.add(yang);
      }
      if (i == 0) {
        const ying1 = new THREE.Mesh(
          new THREE.PlaneGeometry(0.45, 0.2),
          material
        );
        const ying2 = new THREE.Mesh(
          new THREE.PlaneGeometry(0.45, 0.2),
          material
        );
        ying1.position.set(-0.275, idx[j], 0);
        ying2.position.set(0.275, idx[j], 0);
        bagua.add(ying1, ying2);
      }
    });
    bagua.position.set(x, y, z);
    bagua.rotation.set(0, 0, deg);
    return bagua;
  };



  //loadFont, Rings
  loadFont.then(() => {
    data.forEach((item) => {
      Rings.push(Ring(item));
    });
    start();
  });

  //start
  const start = function () {
    const showRing = (item) => {
      scene.add(item);
      item.scale.set(1.2, 1.2, 1.2);
      gsap.to(item.scale, {
        duration: 0.8,
        x: 1,
        y: 1,
        repeat: 0,
        ease: "easeInOut",
      });
    };
    const tl = gsap.timeline();
    Rings.forEach((item, idx) => {
      tl.to(".webgl", { duration: duration[idx] }).call(() => {
        showRing(item);
      });
    });
  };


  //----------------------


  //Light
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);


  //Sizes
  const sizes = {
    width: window.innerWidth < 767 ? window.innerWidth:  window.innerWidth - 180,
    height: window.innerHeight,
  };


  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    1,
    1000
  );
  camera.position.y = 10;
  camera.position.x = 10;
  camera.position.z = 10;
  camera.lookAt(scene.position);
  scene.add(camera);


  //Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true,
  });

  renderer.setSize(sizes.width, sizes.height);

  window.addEventListener("resize", () => {
    sizes.height = window.innerHeight;
    sizes.width = window.innerWidth;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
  });

  //controls
  const controls = new OrbitControls(camera, canvas.value);
  controls.enableDamping = true;
  controls.maxDistance = 50;
  controls.enablePan = false;

  const tick = () => {
    renderer.render(scene, camera);
    controls.update();
    window.requestAnimationFrame(tick);
  };
  tick();
});


</script>

<template>
  <canvas ref="canvas"></canvas>
</template>
<style></style>