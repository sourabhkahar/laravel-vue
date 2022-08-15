import { createRouter,createWebHistory  } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Registration from "../views/Registration.vue";
import Login from "../views/Login.vue";
import Surveys from "../views/Surveys.vue";
import surveyView from "../views/surveyView.vue";
import DefaultLayout from '../components/DefaultLayout.vue'
import store from "../store";
const routes= [
    {        
        path:'/',
        // redirect:'/dashboard',
        component:DefaultLayout,
        meta:{requireAuth:true},
        children:[
            {path:'/dashboard',name:'Dashboard',component:Dashboard},
            {path:'/surveys',name:'Surveys',component:Surveys},
            {path:'/surveys/create',name:'SurveyCreate',component:surveyView},
            {path:'/surveys/:id',name:'SurveyView',component:surveyView}
        ]
    },
    {path:'/Login',name:'Login',component:Login,meta:{isGuest:true}},
    {path:'/registration',name:'Registration',component:Registration,meta:{isGuest:true}}
    
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to,form,next)=>{

    if(to.meta.requireAuth && !store.state.users.token){
        next({name:'Login'});
    }else if(store.state.users.token && to.meta.isGuest) {
        next({name:'Dashboard'});
    }else{
        next()
    }

})
export default router