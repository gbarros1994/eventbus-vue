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
            eventBus.selecionarFilme(this.filme)
        }
    }
}
</script>