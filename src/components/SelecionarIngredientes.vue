<script lang="ts">
import { obterCategorias } from '@/http';
import type ICategoria from '@/interfaces/ICategoria';
import CardCategoria from './CardCategoria.vue';
import BotãoPrincipal from './BotaoPrincipal.vue';

export default {
    data() {
        return {
            categorias: [] as ICategoria[]
        }
    },
    async created() {
        this.categorias = await obterCategorias();
    },
    components: { CardCategoria, BotãoPrincipal },
    emits: ['adicionarIngrediente', 'removerIngrediente', 'BuscarReceitas']
}
</script>

<template>
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

        <p class="paragrafo-lg intrucoes">
            Selecione abaixo os ingredientes que voce quer usar nessa receita:
        </p>

        <ul class="categorias">
            <li v-for="categoria in categorias" v-bind:key="categoria.nome">
                <CardCategoria 
                :categoria="categoria" 
                @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
                @remover-ingrediente="$emit('removerIngrediente', $event)"
                />
            </li>
        </ul>

        <p class="paragrafo dica">
            *Atenção: consideramos que você tenha em casa sal, pimenta e água
        </p>

        <BotãoPrincipal texto="Buscar receitas!" @click="$emit('BuscarReceitas')"/>
    </section>
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>