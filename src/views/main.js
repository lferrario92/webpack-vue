import axios from "axios";
import draggable from 'vuedraggable'
import picItself from "../components/picItself/picItself"

export default {
    name: "main-content",
    data: () => ({
        loadingData: true,
        inOrderData: [],
        dragging: -1,
    }),
    mounted() {
        axios({ method: "GET", "url": "https://jsonplaceholder.typicode.com/photos?albumId=1" }).then(result => {
            this.initData(result)
        }, error => {
            console.error(error);
        });
    },
    methods: {
        initData(result) {

            result.data.forEach(x => {
                const vowelCount = this.checkVowels(x.title);
                x.vowelCount = vowelCount;
                this.inOrderData.push(x);
            })

            this.inOrderData.sort((a, b) => {
                var aVowel = a.vowelCount;
                var bVowel = b.vowelCount;
                var aId = a.id;
                var bId = b.id;

                if (a.id === this.inOrderData[this.inOrderData.length-1].id ||
                    b.id === this.inOrderData[this.inOrderData.length-1].id) {
                    this.loadingData = false;
                }

                if (aVowel == bVowel) {
                    return (aId < bId) ? -1 : (aId > bId) ? 1 : 0;
                } else {
                    return (aVowel < bVowel) ? -1 : 1;
                }

            });
        },
        checkVowels(str) {
            var vowelList = 'aeiouAEIOU';
            var vowelCount = 0;

            for(var x = 0; x < str.length ; x++) {
                if (vowelList.indexOf(str[x]) !== -1) {
                  vowelCount += 1;
                }
            }
            return vowelCount;
        },
        dragStart(which, ev) {
          ev.dataTransfer.setData('Text', this.id);
          ev.dataTransfer.dropEffect = 'move'
          this.dragging = which;
        },
        dragEnd(ev) {
          this.dragging = -1
        },
        dragFinish(to, ev) {
          this.moveItem(this.dragging, to);
          ev.target.style.marginTop = '2px'
          ev.target.style.marginBottom = '2px'
        },
        moveItem(from, to) {
          if (to === -1) {
            this.removeItemAt(from);
          } else {
            this.inOrderData.splice(to, 0, this.inOrderData.splice(from, 1)[0]);
          }
        },
        pantest() {
            console.log('pantest');
        }
    },
    computed: {
        isDragging() {
            return this.dragging > -1
        }
    },
    components: {
        picItself,
        draggable,
    }
}