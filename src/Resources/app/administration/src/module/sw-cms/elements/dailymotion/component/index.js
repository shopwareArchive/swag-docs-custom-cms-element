import template from './sw-cms-el-dailymotion.html.twig';
import './sw-cms-el-dailymotion.scss';

const { Component } = Shopware;

Component.register('sw-cms-el-dailymotion', {
    template,

    mixins: [
        'cms-element'
    ],

    computed: {
        dailyUrl() {
            return `https://www.dailymotion.com/embed/video/${this.element.config.dailyUrl.value}`
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('dailymotion');
        }
    }
});
