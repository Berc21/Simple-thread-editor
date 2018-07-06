<template>
<div>

  <br><br>
  <section class="thread">
    <h1>{{ thread.title }} | {{thread.id}}</h1>
    <hr>
     <div class="container" v-html="thread.body">
     </div>
  </section>
</div>
</template>

<script>

import marked from "marked";
export default {
  name: "SingleThread",
  data() {
    return {
      thread: {
        id: "",
        title: "",
        body: ""
      }
    };
  },
  created(){
    this.thread.id = this.$route.params.id;
    this.thread.title = this.$route.params.title;
    this.thread.body = '<h2 id="a-heading-with-some-title">A heading with some title</h2> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officiis debitis consequatur maiores aliquam fuga adipisci fugiat numquam eum qui exercitationem illo sequi, impedit vitae eos animi similique. Veniam, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad assumenda sed suscipit voluptatem reprehenderit provident blanditiis. Similique iusto quam neque impedit corporis harum eveniet illo officiis at, quas assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo beatae molestiae ea praesentium sequi, aperiam id corrupti voluptas recusandae fuga magni rem cumque quia tempore consequatur libero hic error ipsa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates vero error nihil, non tenetur quibusdam accusantium dolore libero dolor nemo, perspiciatis fuga rerum numquam ad! Doloremque officiis voluptatibus nostrum saepe! </p>'
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
