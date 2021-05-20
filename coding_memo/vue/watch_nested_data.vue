

<template>
  <div>
  </div>
</template>

<script>
import "vuex";
export default {
  data() {
    return {
      val: {
        x: 0,
        y: 0,
        w: 1,
        r: 0,
      },
    };
  },
  computed: {
  },
  methods: {
    reflect_val(latest) {
      var target = document.querySelector(".js-target");
      target.style.transform = `translate(${latest.x}px,${latest.y}px) scale(${latest.w}) rotate(${latest.r}deg)`;
    },
  },
  watch: {
    val: { // 監視するdata
      handler: function (latest) {
        this.current.x = latest.x;
        this.current.y = latest.y;
        this.current.w = latest.w;
        this.current.r = latest.r;
        this.reflect_val(latest);
      },
      deep: true, //指定したプロパティがネストオブジェクトの場合
    },
  },
};
</script>

<style scoped lang="scss">
</style>
