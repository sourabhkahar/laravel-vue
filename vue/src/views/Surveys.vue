<template>
    <pageComponent>
        <template v-slot:header>
            <div class=" flex justify-between items-center">
                 <h1 class="text-3xl font-bold text-gray-900">content goes here for surveys</h1>
                 <router-link :to="{name:'SurveyCreate'}" class="py-2 px-3 text-white bg-gray-800  bg-emraled-500 rounded-md hover:bg-emraled-600" >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" color="black">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    Add new Survey
                 </router-link>
            </div>
        </template>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            <div
                v-for="survey in surveys"
                :key="survey.id"
                class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]" 
            >
                <img :src="survey.image" alt="" class="w-full h-48 object-cover">
                <h4 class="mt-4 text-lg font-bold">{{survey.title}}</h4>
                <div v-html="survey.description" class="overflow-hidden flex-1"></div>
                <div class="flex justify-between items-center mt-3">
                    <router-link
                        :to="{name:'SurveyView',params:{id:survey.id}}"
                        class="flex py-2 px=4 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                    </router-link>
                    <button
                        v-if="survey.id"
                        type="button"
                        @click="destroySurvey(survey.id)"
                        class="h-8 w-8 flex items-center  justify-center rounde-full border border-transparent text-sm text-red-500
                                focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </pageComponent>
</template>
<script setup>
    import pageComponent from "../components/pageComponent.vue"
    import store  from '../store'
    import { computed } from 'vue'
    const surveys = computed(()=>store.state.surveys) 
    console.log(surveys,"assds")
</script>