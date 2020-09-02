import template from './swag-dailymotion-field.html.twig';

const { Component } = Shopware;

Component.register('swag-dailymotion-field', {
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
        beforeGetValue(url) {
            const regExp = /^https:\/\/(www)*((dai\.ly\/)|(\.dailymotion\.com\/embed\/video\/))/ig;

            this.currentValue = url.replace(regExp, '$1');

            this.$emit('input', this.currentValue);
        },

        emitChanges(content) {
            if (content !== this.element.config.content.value) {
                this.element.config.daily.value = content;
                this.$emit('element-update', this.element);
            }
        }
    }
});
