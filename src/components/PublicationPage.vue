<template>
    <Slide v-for="(title, index) in title" :key=index :title_id=title_id[index] :title=title />
</template>
<script>
import Slide from './SlideTool.vue';
export default {
    name: "PublicationPage",
    data() {
        return {
            title_id: ["books", "articles", "booklets", "leaflets", "courses"],
            title: ["Books", "Articles", "Booklets", "Leaflets / Flyers", "Formation Courses"]
        }
    },
    components: {
        Slide,
    }
}
</script>