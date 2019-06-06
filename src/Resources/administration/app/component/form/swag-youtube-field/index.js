import { Component } from 'src/core/shopware';
import template from './swag-youtube-field.html.twig';

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
            var youTubeRegex = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;
            var id = url.replace(youTubeRegex, '$1');

            this.currentValue = id;
            this.$emit('input', this.currentValue);
        }
    }
});