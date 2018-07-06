<template>
  <section class="teditor">
    <header class="teditor-composer">
      <h3 class="teditor-composer__heading">Create a New Thread</h3>
      <div class="tinput-wrapper">
          <input class="tinput-wrapper__title" type="text" placeholder="Type a title">
          <input class="tinput-wrapper__category" type="text" placeholder="Category">
        </div>

    </header>
    <main class="teditor-main">
        <textarea v-model="teditor" class="teditor-main__text-area" name="" placeholder=
        "You can type here but before that let me give you some tips.If you are asking a question about a particular lesson or quiz, please provide a link.Please include any resources that may help a mentor answer your post. This can include code snippets, github repos, images, or other links.Use Markdown, BBCode, or HTML to format. Drag or paste images.">
       </textarea >
      <section class="teditor-main__text-preview" v-html="htmlPreview">

    </section>
    </main>
    <footer class="teditor-footer">
        <button class="teditor-footer__btn teditor-footer__btn--blue">Create</button>
        <button class="teditor-footer__btn">Cancel</button>

        <span style="padding: 8px; background-color: yellow; display:inline-block;" v-show="warnIt"> Don't use H1 for subtitles for better SEO experience  </span>
    </footer>



  </section>
</template>

<script>
import marked from "marked";
export default {
  name: "ThreadEditor",
  data() {
    return {
      teditor: ""
    };
  },
  computed: {
    htmlPreview() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
      });

      return marked(this.teditor)
    },
    warnIt() {
      return this.htmlPreview.includes("</h1>")
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
input[type="text"],
textarea {
  transition: all 0.3s ease-in-out;
  outline: none;
}

input[type="text"]:focus,
textarea:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
}

.teditor {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  padding: 8px 16px;
  height: 560px;
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: calc(50% - 590px);
  z-index: 4;
  background: white;
}

.teditor-composer {
  padding-top: 16px;
  &__heading {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }
}

.tinput-wrapper {
  margin-bottom: 16px;
  width: 50%;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  &__title {
    flex-grow: 1;
    margin-right: 16px;
  }
  &__title,
  &__category {
    border-radius: 3px;
    padding: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
}

.teditor-main {
  display: flex;
  align-items: stretch;
  height: 75%;
  &__text-area {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 16px;
    resize: none;
    flex: 1;
  }
  &__text-preview {
    flex: 1;
    padding: 0 16px;
    margin-left: 8px;
  }
}

.teditor-footer {
  margin-top: 16px;
  &__btn {
    width: 100%;
    max-width: 100px;
    min-height: 48px;
    border-radius: 5px;
    font-size: bold;
    &--blue {
      background: #1976d2;
      color: white;
    }
  }
}
</style>
