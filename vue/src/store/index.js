import {createStore} from "vuex";
import axiosClient from "../axios";

const tempSurveys = [
    {
        id:100,
        title:"The survey Title ",
        slug:"the-survey-title",
        status:"draft",
        image:"https://images.unsplash.com/photo-1474376700777-eb547d9bed2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2MzE2MTZ8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        description:"This is a testing description ",
        created_at:'',
        updated_at:'',
        expired_date:'',
        questions:[{
            id:1,
            type:'select',
            question:'The first Question is.....?!!!',
            description:null,
            data:{
                options:[
                    {uuid:"101",text:'usa'},
                    {uuid:"102",text:'india'},
                    {uuid:"103",text:'china'},
                    {uuid:"104",text:'america'},
                ]
            }
        }]

    },
    {
        id:101,
        title:"The survey Title2 ",
        slug:"the-survey-title2",
        status:"draft",
        image:"https://images.unsplash.com/photo-1474376700777-eb547d9bed2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2MzE2MTZ8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        description:"This is a testing description2",
        created_at:'',
        updated_at:'',
        expired_date:'',
        questions:[{
            id:2,
            type:'checkbox',
            question:'The Second Question is.....?!!!',
            description:null,
            data:{
                options:[
                    {uuid:"105",text:'usa'},
                    {uuid:"106",text:'india'},
                    {uuid:"107",text:'china'},
                    {uuid:"108",text:'america'},
                ]
            }
        }]

    },
    {
        id:103,
        title:"The survey Title3 ",
        slug:"the-survey-title3",
        status:"draft",
        image:"https://images.unsplash.com/photo-1474376700777-eb547d9bed2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2MzE2MTZ8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        description:"This is a testing description2",
        created_at:'',
        updated_at:'',
        expired_date:'',
        questions:[{
            id:3,
            type:'checkbox',
            question:'The Second Question is.....?!!!',
            description:null,
            data:{
                options:[
                    {uuid:"111",text:'usa'},
                    {uuid:"112",text:'india'},
                    {uuid:"113",text:'china'},
                    {uuid:"114",text:'america'},
                ]
            }
        }]

    }
]
const store = createStore({
    state:{
        users:{
            data:{},
            token:sessionStorage.getItem("TOKEN")
        },
        surveys:[...tempSurveys]
    },
    getters:{},
    actions:{
        register({commit},user){
            return axiosClient.post('/register',user)
            .then(({data})=>{
                commit('setUser',data)
                return data;
            })
        },
        login({commit},user){
            return axiosClient.post('/login',user)
            .then(({data})=>{
                commit('setUser',data)
                return data;
            })
        },
        logout:({commit},state)=>{
            return axiosClient.post('/logout')
            .then((response)=>{
                commit('logout')
                return response;
            })
        },
    },
    mutations:{
        logout:(    )=>{
            state.users.data = {},
            state.users.token = null
            sessionStorage.setItem('TOKEN','')
        },
        setUser:(state,userData)=>{
            state.users.token = userData.token
            state.users.data = userData.user
            sessionStorage.setItem('TOKEN',userData.token)
        }
        
    },
    modules:{}
})

export default store