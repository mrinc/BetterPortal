<template>
  <div class="row align--center justify--center align-self--center">
    <div class="center-grid">
      <div class="item">
        <div class="row align--center justify--center align-self--center" style="margin-bottom: 20px;">
          <img src="https://content.betterweb.co.za/bettercorp/logos/2022/BetterPortal.png"
            style="max-width: 100%; width: 500px; max-height: 150px;" />
        </div>
        <va-inner-loading :loading="formBusy" :size="60">
          <va-card color="white">
            <va-card-title>Login/Register</va-card-title>
            <va-card-content v-if="formFlow === FormFlowState.Login">
              <va-form style="text-align: center;" ref="loginForm" @submit="startLogin">
                <div>
                  <va-input class="mb-4" v-model="formEmail" :rules="rules.email" type="email" label="Email"
                    placeholder="Enter a valid email address" />
                </div>
                <div>
                  <va-input class="mb-4" v-model="formPassword" :rules="rules.password" type="password" label="Password"
                    placeholder="Enter a valid password" />
                </div>
                <div>
                  <va-button @click="startLogin" color="primary" gradient class="mr-4 mb-2">Login
                  </va-button>
                </div>
              </va-form>
            </va-card-content>
            <va-card-content v-if="formFlow === FormFlowState.OTP">
              <va-form style="text-align: center;" ref="loginForm" @submit="startLogin">
                <div>
                  <va-input class="mb-4" v-model="formOtp" :rules="rules.otp" type="otp" label="One Time Pin"
                    placeholder="Enter a valid OTP" />
                </div>
                <div>
                  <va-button @click="startLogin" color="primary" gradient class="mr-4 mb-2">Login
                  </va-button>
                </div>
              </va-form>
            </va-card-content>
          </va-card>
        </va-inner-loading>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BPv2WhoAmIDefinition } from '@/components/appConfig';
import { AuthResponse } from '@bettercorp/betterportal/src/auth';
import { BetterPortal } from '@bettercorp/betterportal/src/betterportal';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { VaCard, VaCardTitle, VaCardContent, VaForm, VaInput, VaInnerLoading } from 'vuestic-ui';
import { VRules } from '../components/vuefyRules';

const betterportal = new BetterPortal<BPv2WhoAmIDefinition>();

const rules = VRules;
const router = useRouter();
const loginForm = ref();
const formEmail = ref("");
const formPassword = ref("");
const formOtp = ref("");
enum FormFlowState {
  Busy,
  Login,
  OTP
}
const formBusy = ref(false);
const formFlow = ref(FormFlowState.Login);

async function startLogin() {
  if (loginForm.value.validate() !== true) return;
  formBusy.value = true;
  let response = await betterportal.auth.login({
    email: formEmail.value,
    password: formPassword.value,
    emailToken: formOtp.value,
    whatsappToken: formOtp.value,
    optToken: formOtp.value
  });
  formBusy.value = false;
  switch (response.status) {
    case AuthResponse.OTP_VALIDATION: {
      formFlow.value = FormFlowState.OTP;
    } break;
    case AuthResponse.ACCEPTED: {
      router.replace('/App/Client');
    } break;
  }
  console.log(response);
}

console.log(betterportal.auth.isLoggedIn)
if (betterportal.auth.isLoggedIn)
  router.replace('/App/Client');

defineComponent({
  components: {
    VaCard, VaCardTitle, VaCardContent, VaForm, VaInput, VaInnerLoading
  }
});
</script>