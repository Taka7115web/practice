// PHP、TWIGファイルにて

①PHP、Twigの変数として配列データ作成

$category_data = ["記念日","季節","イベント","動物","食べ物","その他"];

②変数をJSON形式にエンコード

$json_category_data = json_encode($category_data);

// TWIGファイルにて

③Twigの変数として再定義

{% set data = $json_category_data %} 

④場合によっては下記で変数の値を確認

{{ dump(data) }}

⑤コンポーネントタグにて変数をv-bind

<v-target :props="{{ data }}"></v-target>

⑥これでコンポーネント内にデータが渡る