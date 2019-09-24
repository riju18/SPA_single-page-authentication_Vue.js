import Vue from 'vue';
import router from '../../routes';

const fbAuth = 'https://identitytoolkit.googleapis.com/v1';
const fbApi = 'AIzaSyCm_Nah5BgiN-Mx7cS-rOzZQk69Rp6jDR8';

const admin = {
    namespaced:true,
    state:{
        token: null,
        refresh: null,
        authFail:false
    },
    getters:{
        isAuth(state) {
            if (state.token) {
                return true
            }
            return false;
        }
    },
    mutations:{
        authUser(state, authData){ // (2.0) it'll set the token & refresh on browser
            state.token = authData.idToken;
            state.refresh = authData.refreshToken;

            if (authData.type==='signIn'){
                router.push('/dashboard')
            }
        },
        authFail(state, type){  // (2.1) then it'll make true the authfail property
            if (type === 'reset'){
                state.authFail = false;
            } else {
                state.authFail = true;
            }
        },
        logoutuser(state){
            state.token = null;
            state.refresh = null;

            localStorage.removeItem('token');
            localStorage.removeItem('refresh');

            router.push('/');
        }
    },
    actions:{
        signIn({commit}, payload){
            Vue.http.post(`${fbAuth}/accounts:signInWithPassword?key=${fbApi}`,{
                ...payload,
                returnSecureToken:true
            })
                .then(response=>response.json())
                .then(authData=>{
                    commit('authUser',{  // (1.0) when login successful it goes to mutation
                        ...authData,
                        type:'signIn' // optional
                    });
                    localStorage.setItem('token', authData.idToken);
                    localStorage.setItem('refresh', authData.refreshToken);
                })
                .catch(error=>{
                    commit('authFail') // (1.1) if any error occur while signin it goes to mutation
                })
        }
    }
};

export default admin;