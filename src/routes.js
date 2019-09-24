import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './Store/store';

import Home from './components/Home/Index';
import Content from './components/Home/Content';
import Feature from './components/Home/Feature';
import SignIn from  './components/Signin/Index'
import Dashboard from "./components/Dashboard/Index"

Vue.use(VueRouter);


// checking if not login redirect to signin page
const autograd = {
    beforeEnter:(to, from, next)=>{
        if (store.state.admin.token){
            next('/dashboard')
        }else {
            next('/signin')
        }
    }
}
;

const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/signin',
        component:SignIn
    },
    {
        path:'/dashboard',
        component:Dashboard,...autograd
    },
];

export default new VueRouter({
    mode:'history',  // because don't want default # in url
    routes,
    scrollBehavior(to, from, saveedPosition) {
        return{
            x:0,
            y:0
        }
    }
})