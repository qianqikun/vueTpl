<template>
  <div>
    <p class=test>{{msg}}</p>
  </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'hello'
        };
    },
    created() {
        this.msg = 'world';
    }
};
</script>