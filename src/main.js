import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//UTILIZANDO COMO PONTO CENTRAL DE TROCA DE DADOS
export const eventBus = new Vue({
  methods: {
    selecionarFilme(filmeSelecionado) {
      this.$emit('selecionarFilme', filmeSelecionado)
    },
    atualizarFilme(filmeAtualizado) {
      this.$emit('atualizarFilme', filmeAtualizado)
    }
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
