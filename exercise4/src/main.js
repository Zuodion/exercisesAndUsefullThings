import Vue from 'vue'
import App from './App.vue'

Vue.filter('stringLength', function(value) {
    return value.length > 0 ? `${value} (${value.length})` : null
});

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
