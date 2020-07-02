<template>
  <div class="row">

    <!-- coluna 1 -->
    <div class="col-8">

      <h2>Filmes</h2>
      {{filmeSelecionado}}

      <div class="list-group list-group-flush">

        <FilmesListaIten v-for="filme in filmes"
        :key="filme.id"
        :filme="filme"
        :class="aplicarClasseAtive(filme)"
        @selecionarFilme="filmeSelecionado = $event" />

      </div>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">

      <FilmesListaItenInfo :filme="filmeSelecionado" />

    </div>

  </div>
</template>

<script>

import FilmesListaIten from './FilmesListaIten.vue'
import FilmesListaItenInfo from './FilmesListaItenInfo.vue'

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo
  },
  data() {
    return {
      filmes: [
       { id: 1, titulo: 'Naruto', ano: 2008 },
       { id: 2, titulo: 'Bleach', ano: 2009 },
       { id: 3, titulo: 'Harry potter', ano: 2015 },
       { id: 4, titulo: 'Bob Esponja', ano: 2000 },
      ],
      filmeSelecionado: undefined
    }
  },
  methods: {
    aplicarClasseAtive(filmeIterado) {
      return {
        active: this.filmeSelecionado && this.filmeSelecionado.id === filmeIterado.id
      }
    }
  },
}
</script>
