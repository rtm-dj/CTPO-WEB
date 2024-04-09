<template>
    <div>
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 100%"
        :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item" :alt="slotProps.item" style="object-fit: cover; height: 500px; width: 100%; display: block;" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
            </template>
        </Galleria>
        <div class="reasons">
            <h2>Why FlowerStore?</h2>
            <div class="row1">
                <div class="reason-small">

                </div>
                <div class="reason-big">

                </div>
            </div>
            <div class="row2">
                <div class="reason-big">

                </div>
                <div class="reason-small">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: ['../src/static/banner/1.jpg',
            '../src/static/banner/2.jpg',
            '../src/static/banner/3.jpg'],
        };
    },
};
</script>

<style scoped>
.row1{
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 10px;
}
.row2{
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 10px;
}

.reason-small, .reason-big{
    background-color: rgb(225, 225, 225);
    height: 300px;
}

.reason-big{
    width: 600px;
}
.reason-small{
    width: 300px;
}

.reasons{
    padding: 0 20vw;
}

</style>