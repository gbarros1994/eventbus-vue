<template>
    <li class="list-group-item">
        <span>{{ fontMaior }} | {{ filme.ano }}</span>
        <button class="btn float-right" @click="selecionar">Selecionar</button>
    </li>
</template>

<script>

import { eventBus } from './../main'


export default {
    props: {
        filme: {
            type: Object,
            required: true
        }
    },
    computed: {
        fontMaior() {
            return this.filme.titulo.toUpperCase()
        }
    },
    methods: {
        selecionar() {
            // this.$emit('selecionarFilme', this.filme)
            eventBus.$emit('selecionarFilme', this.filme)
        }
    }
}
</script>