<template>

 <div>
   <dummy-content></dummy-content>

  <section class="teditor">

    <header class="teditor-composer">
      <h3 class="teditor-composer__heading">Create a New Thread</h3>
      <div class="tinput-wrapper">
          <input class="tinput-wrapper__title" type="text" v-model="title" placeholder="Type a title">
          <input class="tinput-wrapper__category" type="text" v-model="category" placeholder="Category">
        </div>

      <div class="composer-wrapper">
        <button @click="makeBold">Bold </button>
          <button @click="strike">Strike </button>
          <button @click="emphasize" >Emphasize</button>
      </div>

    </header>
    <main class="teditor-main">
        <textarea v-model="teditor" ref="teditor" class="teditor-main__text-area" @select="selectText" placeholder=
        "You can type here but before that let me give you some tips.If you are asking a question about a particular lesson or quiz, please provide a link.Please include any resources that may help a mentor answer your post. This can include code snippets, github repos, images, or other links.Use Markdown, BBCode, or HTML to format. Drag or paste images.">
       </textarea >
      <section class="teditor-main__text-preview" v-html="htmlPreview">

    </section>
    </main>
    <footer class="teditor-footer">
        <button class="teditor-footer__btn teditor-footer__btn--blue" @click="createThread">Create</button>
        <button class="teditor-footer__btn">Cancel</button>

        <span style="padding: 8px; background-color: yellow; display:inline-block;" v-show="warnIt"> Don't use H1 for subtitles for better SEO experience  </span>
    </footer>

  </section>
 </div>
</template>

<script>
import DummyContent from "@/components/DummyContent";
import marked from "marked";
export default {
  name: "ThreadEditor",
  components: {
    DummyContent
  },
  data() {
    return {
      teditor: "",
      title: "",
      category: "",
      start: "",
      end: "",
      thread: {
        id: 1,
        title: "",
        body: ""
      },
      selectedText: ""
    };
  },
  methods: {
    createThread() {
      this.thread.title = this.title;
      this.thread.body = this.htmlPreview;
      this.$router.push({
        name: "SingleThread",
        params: { title: this.thread.title, id: this.thread.id }
      });
    },
    selectText() {
      this.end = event.target.selectionEnd;
      this.start = event.target.selectionStart;
      this.val = event.target.value;

      this.selectedText = this.val.substring(this.start, this.end);
    },
    makeBold() {
      let regeX = new RegExp(/(^\*\*|\*\*$)/, "gm");
      if (regeX.test(this.selectedText)) {
        this.teditor = this.val.replace(
          this.selectedText,
          this.selectedText.replace(regeX, "")
        );

        this.$nextTick(() => {
          let textArea = this.$refs.teditor;
          textArea.focus();
          textArea.setSelectionRange(this.start, this.end);
        });
      } else {
        this.teditor = this.val.replace(
          this.selectedText,
          `**${this.selectedText}**`
        );

        this.$nextTick(() => {
          let textArea = this.$refs.teditor;
          textArea.focus();
          textArea.setSelectionRange(this.start, this.end + 4);
        });
      }

    },
    strike() {
      let regeX = new RegExp(/(^\~\~|\~\~$)/, "gm");
      if (regeX.test(this.selectedText)) {
        this.teditor = this.val.replace(
          this.selectedText,
          this.selectedText.replace(regeX, "")
        );

        this.$nextTick(() => {
          let textArea = this.$refs.teditor;
          textArea.focus();
          textArea.setSelectionRange(this.start, this.end);
        });
      } else {
        this.teditor = this.val.replace(
          this.selectedText,
          `~~${this.selectedText}~~`
        );

        this.$nextTick(() => {
          let textArea = this.$refs.teditor;
          textArea.focus();
          textArea.setSelectionRange(this.start, this.end + 4);
        });
      }
    },
    emphasize() {
       let regeX = new RegExp(/(^\_|\_$)/, "gm");
        if (regeX.test(this.selectedText)) {
        this.teditor = this.val.replace(
          this.selectedText,
          this.selectedText.replace(regeX, "")
        );
        this.$nextTick(() => {
          let textArea = this.$refs.teditor;
          textArea.focus();
          textArea.setSelectionRange(this.start, this.end);
        });

    }else {
        this.teditor = this.val.replace(
          this.selectedText,
          `_${this.selectedText}_`
        );

        this.$nextTick(() => {
          let textArea = this.$refs.teditor;
          textArea.focus();
          textArea.setSelectionRange(this.start, this.end + 2);
        });
      }
    }
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

      return marked(this.teditor);
    },
    warnIt() {
      return this.htmlPreview.includes("</h1>");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.drag {

}
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
  resize: vertical;
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
