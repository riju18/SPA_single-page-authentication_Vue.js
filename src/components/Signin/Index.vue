<template>
    <div class="container">
        <div class="signin_container">
            <form
                    @submit.prevent="formSubmit"
            >
                <div class="input_field"
                     :class="{invalid:$v.formData.email.$error}"
                >
                    <label>Email:</label>
                    <input
                            @blur="$v.formData.email.$touch()"
                            type="email" v-model.trim="formData.email" placeholder="email">
                    <div v-if="$v.formData.email.$error">
                        <p class="error_label" v-if="!$v.formData.email.required">
                            this field is required
                        </p>
                        <p class="error_label" v-if="!$v.formData.email.email">
                            please enter a valid email
                        </p>
                    </div>
                </div>

                <div class="input_field"
                     :class="{invalid:$v.formData.password.$error}"
                >
                    <label>Password:</label>
                    <input
                            @blur="$v.formData.password.$touch()"
                            type="password" v-model.trim="formData.password">
                    <div v-if="$v.formData.password.$error">
                        <p class="error_label" v-if="!$v.formData.password.required">
                            this field is required
                        </p>
                        <p class="error_label" v-if="!$v.formData.password.minLength">
                            password must be 4 character long
                        </p>

                    </div>
                </div>

                <button type="submit"> login </button>

                <p class="error_label" v-if="errorMsg">
                    something is wrong
                </p>

                <p class="error_label" v-if="authFail">
                    please check your email and password
                </p>
            </form>
        </div>
    </div>
</template>

<script>
    import { required, email, minLength } from 'vuelidate/lib/validators'

    export default {
        data(){
            return{
                errorMsg:false,
                formData:{
                    email:'',
                    password:''
                }
            }
        },
        validations:{
            formData: {
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength:minLength(4)
                }
            }
        },
        computed:{
            authFail(){
                return this.$store.state.admin.authFail;
            }
        },
        // when we go outside of signIn page
        destroyed(){
            this.$store.commit('admin/authFail', 'reset');
        },
        methods:{
            formSubmit(){
                if (!this.$v.$invalid){
                    this.$store.dispatch('admin/signIn', this.formData);

                } else {
                    this.errorMsg = true;
                    setTimeout(()=>{
                        this.errorMsg = false;
                    },2000)
                }
            }
        }
    }
</script>

<style scoped>
    .input_field.invalid input,
    .input_field.invalid select{
        border: 1px solid red;
    }
</style>