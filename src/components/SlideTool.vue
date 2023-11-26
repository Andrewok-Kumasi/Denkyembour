<template>
    <div class="slideTool">
        <div class="title" :id=title_id>
            <h2>{{ title }}</h2>
        </div>
        <div class="slide">
            <CardTool />
            <CardTool />
            <CardTool />
            <CardTool />
        </div>
    </div>
</template>
<script>
import CardTool from '@/components/CardTool.vue';
export default {
    name: "SlideTool",
    components: {
        CardTool,
    },
    props: {
        title: String,
        title_id: String,
    },
}
</script>
<style>
.slideTool {
    margin-top: 3rem;
}

.slide {
    overflow-x: scroll;
    background-color: rgb(190, 233, 218, 0.5);
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
}

.slide::-webkit-scrollbar {
    height: 0;
}

.title {
    margin-top: 3rem;
    margin-bottom: 1rem;
}
</style>
