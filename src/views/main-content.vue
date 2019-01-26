<template>
    <div class="main-content">
        <div v-if="loadingData" class="loadingFather">
            <span class="spinner"></span>
            <span class="loadingText">
                Now loading
            </span>
        </div>
        <div v-else>
            <draggable 
                v-model="inOrderData" 
                class="picsContainer" 
                @start="drag=true" 
                @end="drag=false"
                :options="{delay:200}"
                >
                <div 
                    class="item column is-one-third-mobile" 
                    v-for="(item, i) in inOrderData"
                    :key="i"
                    draggable="true" 
                    @dragstart="dragStart(i, $event)" 
                    @dragover.prevent
                    @dragend="dragEnd" 
                    @drop="dragFinish(i, $event)"
                    >
                    <picItself 
                        :id="item.id"
                        :title="item.title"
                        :url="item.url"
                        :thumbnailUrl="item.thumbnailUrl"
                    />
                </div>
            </draggable>
        </div>
    </div>
</template>

<script src="./main.js"></script>
<style lang="scss" scoped>
    @import './main.scss';
</style>
