import template from './sw-cms-el-config-youtube.html.twig';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-config-youtube', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('youtube');
        }
    }
});
