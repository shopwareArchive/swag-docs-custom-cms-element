import template from './swag-youtube-field.html.twig';

const { Component } = Shopware;

Component.register('swag-youtube-field', {
    template,

    props: {
        value: {
            type: String,
            required: false,
            default: ''
        }
    },

    data() {
        return {
            currentValue: this.value || ''
        };
    },

    methods: {
        onFetchIdFromUrl(url) {
            const youTubeRegex = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;

            this.currentValue = url.replace(youTubeRegex, '$1');
            this.$emit('input', this.currentValue);
        }
    }
});
