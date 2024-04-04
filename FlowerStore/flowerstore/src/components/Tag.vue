<template>
    <div class="main" :style="{backgroundColor: color}">
      <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    props: ['text', 'color']
}
</script>

<style scoped>
.main{
    width: fit-content;
    height: 20px;
    border-radius: 5px;
    padding: 4px 8px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.tag p{
    margin: 0;
    font-size: 0.8rem;
}
</style>