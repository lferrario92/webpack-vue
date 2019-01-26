import modalPic from "../modalPic/modalPic"

export default {
    name: 'picItself',
    data: () => ({
    	name: 'picItself'
    }),
    props: ['id', 'title', 'url', 'thumbnailUrl'],
    components: {
        modalPic,
    },
    methods: {
    	toggleModal() {
	        this.$refs.modalPic.toggleModalInside();
	    }
    }
}