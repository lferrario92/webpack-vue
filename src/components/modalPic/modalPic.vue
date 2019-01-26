<template>
	<div 
		class="modal"
		:class="{'is-active' : isModalOpened}"
		>
		<div 
			@click="toggleModalInside()"
			class="modal-background"
		></div>
		<div class="modal-content contentFather">
			<div
				class="imageItself"
				:style="{backgroundImage: `url(${url})`}"
			></div>
			<div class="imageTitle">
				{{ title }}
			</div>
		</div>
		<button 
			@click="toggleModalInside()"
			class="modal-close is-large"
			aria-label="close"
		></button>
	</div>
</template>

<script src="./modalPic.component.js"></script>
<style lang="scss" scoped>
    @import './modalPic.scss';
</style>
