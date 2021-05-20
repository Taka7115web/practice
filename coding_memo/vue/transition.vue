<template>
<div>

<!-- v-ifでトランジション変化開始 -->
<transition name="fade">
  <target v-if="this.modal_state">
  </target>
</transition>

</div>
</template>


<script>
export default {
    props: {
    num: {
      type: Number,
      default: "0",
    },
    txt: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      active:false
    };
  },
  computed: {
  },
  methods: {

  },
    watch: {
    active: function (latest, old) { //activeの値が変化したら実行される
      console.log(latest);
    },
     deep: false, //指定したプロパティがネストオブジェクトの場合
    immediate: true, //mount時も適用するかどうか
  },
};
</script>


<style scoped lang="scss">








.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}
.fade-enter-active {
  transition-delay: .5s; //show時のみ.5sの遅延
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>