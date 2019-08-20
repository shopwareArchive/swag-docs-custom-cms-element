import template from './sw-cms-el-youtube.html.twig';
import './sw-cms-el-youtube.scss';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-youtube', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
        videoSrc() {
            return 'https://www.youtube.com/embed/'
                + this.element.config.videoSrc.value
                + '?controls='
                + (this.element.config.showControls.value ? 1 : 0);
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('youtube');
        }
    }
});
