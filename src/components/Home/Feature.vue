<template>
    <div>
        <carousel
                :per-page="1"
                :mouse-drag="true"
                :paginationEnabled="true"
                :autoplay="true"
                :loop="true"
        >
            <slide
                    v-for="(slide,index) in slides" :key="index"
            >
                <div class="slider_bck" :style="{'background':`url(${slide.bg})`}">
                    <div class="container">
                        <div class="content">
                            <!-- :addClass is a property contains some classes, we send it to Button.vue file  -->
                            <app-button
                                    type="link"
                                    linkTo="#"
                                    :addClass="['hello', 'there']"
                                    :ovStyle="{'color':'yellow'}"
                                    :action="trigger"
                            >see more</app-button>
                            <div class="item">
                                {{slide.title}}
                            </div>
                        </div>
                    </div>
                </div>

            </slide>
        </carousel>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    import slide1 from '../../assets/images/featured/1.jpg';
    import slide2 from '../../assets/images/featured/2.jpg';
    import slide3 from '../../assets/images/featured/3.jpg';
    import slide4 from '../../assets/images/featured/4.jpg';

    export default {
        data(){
            return{
                slides:[
                    {
                        title:'red head redemption 2',
                        bg:slide1
                    },
                    {
                        title:'watchdogs 2',
                        bg:slide2
                    },
                    {
                        title:'rise of tomb rider',
                        bg:slide3
                    },
                    {
                        title:'spiderman',
                        bg:slide4
                    }
                ]
            }
        },
        components: {
            Carousel,
            Slide
        },
    }
</script>

<style scoped>

</style>