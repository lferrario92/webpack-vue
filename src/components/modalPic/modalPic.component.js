export default {
    name: 'modalPic',
    data: () => ({
    	name: 'modalPic',
    	isModalOpened: false,
    }),
    props: ['url', 'title'],
    methods: {
    	toggleModalInside: function(value) {
    		this.isModalOpened = !this.isModalOpened;
	    }
    }
}
