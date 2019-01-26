<template>
    <div>
        <div
        	class="thumbnail"
        	:style="{backgroundImage: `url(${thumbnailUrl})`}"
            @click="toggleModal()"
        >
        </div>
        <modalPic
            :url="url"
            :title="title"
            ref="modalPic"
    	/>
    </div>
</template>

<script src="./picItself.component.js"></script>
<style lang="scss" scoped>
    @import './picItself.scss';
</style>