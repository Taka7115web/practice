

ejsやhtmlファイルに記述あるvueコンポーネントタグの
そのファイル内で設定もしくはimportした配列などの変数を
v-bindさせたいとき。


<div style="display:none;">

{{ arr = ["","","","","",""]  }}

</div>


<v-target :props="arr"></v-target>


のように{{}}内で変数指定、その変数をv-bindできる