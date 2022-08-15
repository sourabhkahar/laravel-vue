<template>
    <pageComponent>
        <template v-slot:header>
            <div class="flex justify-between items-center">
                 <h1 class="text-3xl font-bold text-gray-900">content goes here for Surveys</h1>
            </div>
        </template>
        <div>
            <pre>{{surveys}}</pre>
        </div>
    </pageComponent>
</template>
<script setup>
import pageComponent from "../components/pageComponent.vue"

</script>