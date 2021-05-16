// three.jsをnode moduleから読み込み
import * as THREE from 'three';
// orbitControls.jsをnode moduleから読み込み
import {
  OrbitControls
} from "three/examples/jsm/controls/OrbitControls";
import Return from './return';
const rt = new Return();

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

class Canvas {
  constructor() {}
  init() {

    this.top_kv();

  }

  top_kv() {

    //親要素を取得
    var parent = document.getElementById("parent");
    // 親要素の幅と高さを変数化
    var cW = parent.clientWidth;
    var cH = parent.clientHeight;

    // OrbitControls用domElement変数
    let domElement = document.getElementById("myCanvas");

    let c_pos = {
      angle: 45,
      range: cW / cH,
      near: 10,
      far: 10000
    }

    // グローバルでの変数定義
    var renderer, scene, camera, room, controls, directionalLight, ambientLight, pointLight, geometryList, material, mesh;

    // 部屋の奥行
    var depth = cW;

    // 関数実行
    setting();
    scene_camera_light();
    init();
    animate();









    function setting() {
      // rendererインスタンス定義(canvas要素にWebGL使用定義)
      renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas'),
        antialias: true
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(cW, cH);
      renderer.setClearColor("#000", 0);

      renderer.shadowMap.enabled = true;
    };


    function scene_camera_light() {

      // シーンを定義
      scene = new THREE.Scene();

      // カメラを定義
      camera = new THREE.PerspectiveCamera(
        c_pos.angle, //カメラの画角
        c_pos.range, //撮影結果の縦横比。別段指定がなければ、キャンバスの幅 / キャンバスの高さ
        c_pos.near, //ニアークリップの距離。nearより近い領域は非表示
        c_pos.far //ファークリップの距離。farより遠い領域は非表示
      );
      camera.position.set(0, 0, -depth);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      scene.add(camera);

      // 平行光源を定義
      pointLight = new THREE.PointLight("#fff");
      pointLight.castShadow = true;
      pointLight.position.set(cW * .25, -cH * .25, -depth / 2);
      pointLight.intensity = .3;
      pointLight.distance = 1100; //光の届く距離
      scene.add(pointLight);
      // 環境光源を定義
      ambientLight = new THREE.AmbientLight("lightblue");
      ambientLight.position.set(0, 0, -depth / 2);
      ambientLight.intensity = .2;

      scene.add(ambientLight);

      // mousedragで、カメラ位置変更
      controls = new OrbitControls(camera, domElement);

    }





    function init(e) {

      /**
       * 部屋
       */
      var room = new THREE.Object3D();
      scene.add(room);


      /**
       * 視点
       */
      function create_dot(sx, sy, r, px, py, pz, rx, ry, rz, c) {
        var geometry = new THREE.SphereGeometry(sx, sy, r); // 平面
        var material = new THREE.MeshPhongMaterial({
          color: c,
          emissive: c
        });
        var dot = new THREE.Mesh(geometry, material);
        dot.receiveShadow = false;
        dot.position.set(px, py, pz);
        dot.rotation.set(
          rx,
          ry,
          rz
        );
        dot.name = 'dot';
        return dot;
      }

      room.add(create_dot(5, 5, 5, 0, 0, 0, 0, 0, 0, '#fff'));


      /**
       * 壁
       */
      function create_wall(sx, sy, px, py, pz, rx, ry, rz, c) {
        var geometry = new THREE.PlaneGeometry(sx, sy); // 平面
        var material = new THREE.MeshPhongMaterial({
          color: c,
          side : THREE.DoubleSide
        });
        var wall = new THREE.Mesh(geometry, material);
        wall.position.set(px, py, pz);
        wall.rotation.set(
          rx,
          ry,
          rz
        );
        wall.name = 'wall';
        return wall;
      }

      /**
       * 壁
       */
      var wall_arr = [];
      wall_arr.push(create_wall(cW, cH, 0, 0, 0, 0, 0, 0, '#999')); //正面
      wall_arr.push(create_wall(cW, cH, 0, -cH / 2, -cH / 2, -Math.PI / 2, 0, 0, '#888')); //床
      wall_arr.push(create_wall(cW, cH, 0, cH / 2, -cH / 2, Math.PI / 2, 0, 0, '#888')); //天井
      wall_arr.push(create_wall(cH, cH, cW / 2, 0, -cH / 2, 0, -Math.PI / 2, 0, '#777')); // 右
      wall_arr.push(create_wall(cH, cH, -cW / 2, 0, -cH / 2, 0, Math.PI / 2, 0, '#666')); // 左

      for (var el of wall_arr) {
        room.add(el);
      };

      /**
       * モニター
       */
      function create_monitor(sx, sy, sz, px, py, pz, rx, ry, rz, c) {
        var geometry = new THREE.BoxGeometry(sx, sy, sz); // 平面
        var material = new THREE.MeshPhongMaterial({
          specular: 0x666666,
          shininess: 120,
          emissive: c,
          emissiveIntensity: 1,
          // metal:true,
        });
        var monitor = new THREE.Mesh(geometry, material);
        monitor.receiveShadow = false;
        monitor.position.set(px, py, pz);
        monitor.rotation.set(
          rx,
          ry,
          rz
        );
        monitor.matrixAutoUpdate  = false;
        monitor.name = 'monitor';
        return monitor;
      }

      /**
       * 正面モニター
       */
      var front_moni_arr = [];
      front_moni_arr.push(create_monitor(rt.moni_size(cW), rt.moni_size(cH), 20, rt.moni_x(cW, -1), rt.moni_y(cH, 1), 5, 0, 0, 0, '#43F2FF')); //左上
      front_moni_arr.push(create_monitor(rt.moni_size(cW), rt.moni_size(cH), 20, rt.moni_x(cW, 1), rt.moni_y(cH, 1), 5, 0, 0, 0, '#00FFA2')); //右上
      front_moni_arr.push(create_monitor(rt.moni_size(cW), rt.moni_size(cH), 20, rt.moni_x(cW, -1), rt.moni_y(cH, -1), 5, 0, 0, 0, '#0099FF')); //右下
      front_moni_arr.push(create_monitor(rt.moni_size(cW), rt.moni_size(cH), 20, rt.moni_x(cW, 1), rt.moni_y(cH, -1), 5, 0, 0, 0, '#43F2FF')); //左下

      for (var el of front_moni_arr) {
        room.add(el);
      };

      /**
       * 天井モニター
       */
      var ceiling_moni_arr = [];
      ceiling_moni_arr.push(create_monitor(rt.moni_size(cW), rt.moni_size(cH), 20, rt.moni_x(cW, -1), cH / 2, -cH / 2, -Math.PI / 2, 0, 0, '#43F2FF')); //左
      ceiling_moni_arr.push(create_monitor(rt.moni_size(cW), rt.moni_size(cH), 20, rt.moni_x(cW, 1), cH / 2, -cH / 2, -Math.PI / 2, 0, 0, '#43F2FF')); //左

      for (var el of ceiling_moni_arr) {
        room.add(el);
      };

      /**
       * 左壁モニター
       */
      var left_moni_arr = [];
      left_moni_arr.push(create_monitor(cH * 2 / 3, rt.moni_size(cH), 20, -cW / 2, rt.moni_y(cH, 1), -cH / 2, 0, -Math.PI / 2, 0, '#43F2FF')); //上
      left_moni_arr.push(create_monitor(cH * 2 / 3, rt.moni_size(cH), 20, -cW / 2, rt.moni_y(cH, -1), -cH / 2, 0, -Math.PI / 2, 0, '#43F2FF')); //下
      for (var el of left_moni_arr) {
        room.add(el);
      };

      /**
       * 右壁モニター
       */
      var right_moni_arr = [];
      right_moni_arr.push(create_monitor(cH * 2 / 3, rt.moni_size(cH), 20, cW / 2, rt.moni_y(cH, 1), -cH / 2, 0, -Math.PI / 2, 0, '#43F2FF')); //上
      right_moni_arr.push(create_monitor(cH * 2 / 3, rt.moni_size(cH), 20, cW / 2, rt.moni_y(cH, -1), -cH / 2, 0, -Math.PI / 2, 0, '#43F2FF')); //下

      for (var el of right_moni_arr) {
        room.add(el);
      };


      /**
       * 机
       */
      function create_desk(sx, sy, sz, px, py, pz, rx, ry, rz, c) {
        var geometry = new THREE.BoxGeometry(sx, sy, sz); // 平面
        var material = new THREE.MeshPhongMaterial({
          color: c
          // specular: 0x666666,
          // shininess: 120,
          // emissive: c,
          // emissiveIntensity: 1,
          // metal:true,
        });
        var desk = new THREE.Mesh(geometry, material);
        desk.receiveShadow = false;
        desk.position.set(px, py, pz);
        desk.rotation.set(
          rx,
          ry,
          rz
        );
        desk.name = 'desk';
        return desk;
      }

      room.add(create_desk(cW * 3 / 5, cH / 20, cH * 3 / 4, 0, -cH / 2 + cH / 20, -cH / 2 - (cH / 4 / 2), 0, 0, 0, 'yellow'));

      /**
       * イス
       */







      /**
       * テキストの描画
       */




      /**
       * 線の描画
       */
      // const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
      //       const points = [];
      // points.push( new THREE.Vector3( - 10, 0, 0 ) );
      // points.push( new THREE.Vector3( 0, 10, 0 ) );
      // points.push( new THREE.Vector3( 10, 0, 0 ) );
      // const chair = new THREE.BufferGeometry().setFromPoints( points );
      // const line = new THREE.Line( chair, material );
      // room.add(line);

      console.log(room)
      console.log(room.monitor)
      console.log(scene)

    };

    /**
     *  常に連続的に描画するためのアニメーション関数
     */
    function animate(e) {
      // rendererインスタンスにシーンとカメラを渡し、レンダリング
      renderer.render(scene, camera);
      // mousedragでカメラ位置変更
      controls.update();
      // animate()関数を連続実行
      requestAnimationFrame(animate);
    }




  }



};


export default Canvas;
