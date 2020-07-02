<template>
    <li class="list-group-item">
        <span>{{ fontMaior }} | {{ filme.ano }}</span>
        <button class="btn float-right" @click="selecionar">Selecionar</button>
    </li>
</template>

<script>
export default {
    // inheritAttrs: false,
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
            this.$emit('selecionarFilme', this.filme)
        }
    },
    // created() {
    //     console.log(this.$attr)
    // },
}
</script>