import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'dailymotion',
    label: 'Dailymotion Video',
    component: 'sw-cms-el-dailymotion',
    configComponent: 'sw-cms-el-config-dailymotion',
    previewComponent: 'sw-cms-el-preview-dailymotion',
    defaultConfig: {
        dailyUrl: {
            source: 'static',
            value: ''
        }
    }
});
