<template>
  <div class="center-grid">
    <div class="item">
      <div class="row align--center justify--center align-self--center" style="margin-bottom: 20px;"
        v-if="appConfig.isReady && appConfig.state.value !== undefined">
        <img :src="appConfig.state.value.features.logo" style="max-width: 100%; width: 500px; max-height: 150px;"
          alt="Logo" />
      </div>
      <va-inner-loading :loading="formBusy" :size="60">
        <va-card>
          <va-card-title v-if="formFlow === FormFlowState.Register">Register</va-card-title>
          <va-card-title v-else-if="formFlow === FormFlowState.OTP">One Time Pin Verification</va-card-title>
          <va-card-title v-else>Login/Register</va-card-title>
          <va-card-content v-if="formFlow === FormFlowState.Login">
            <va-form tag="form" style="text-align: center;" ref="loginForm" @submit.prevent="startLogin">
              <div>
                <va-input class="mb-4" v-model="formEmail" :rules="rules.email" type="email" label="Email"
                  aria-required="true" autocorrect="off" autocomplete="email" autofocus
                  placeholder="Enter a valid email address" />
              </div>
              <div>
                <va-input class="mb-4" v-model="formPassword" :rules="rules.password" type="password" label="Password"
                  aria-required="true" autocorrect="off" autocomplete="current-password" autofocus
                  placeholder="Enter a valid password" />
              </div>
              <div>
                <va-button type="submit" gradient class="mr-4 mb-2">Login
                </va-button>
              </div>
            </va-form>
          </va-card-content>
          <va-card-content v-if="formFlow === FormFlowState.OTP">
            <va-form tag="form" style="text-align: center;" ref="loginForm" @submit.prevent="startLogin">
              <div>
                <va-input class="mb-4" v-model="formOtp" :rules="rules.otp" type="otp" label="One Time Pin"
                  autocorrect="off" aria-required="true" autocomplete="one-time-code" placeholder="Enter a valid OTP" />
              </div>
              <div>
                <va-button type="submit" gradient class="mr-4 mb-2">Login
                </va-button>
              </div>
            </va-form>
          </va-card-content>
          <va-card-content v-if="formFlow === FormFlowState.Register">
            <va-form tag="form" style="text-align: center;" ref="loginForm" @submit.prevent="startLogin">
              <div>
                <va-input class="mb-4" :readonly="true" v-model="formEmail" :rules="rules.email" type="email"
                  label="Email" placeholder="Enter a valid email address" />
              </div>
              <div>
                <va-input class="mb-4" :readonly="true" v-model="formPassword" :rules="rules.password" type="password"
                  label="Password" placeholder="Enter a valid password" />
              </div>
              <div>
                <va-input class="mb-4" v-model="formFirstName" :rules="rules.basicText('First Name', 2, 255)"
                  type="text" label="First Name" aria-required="true" autocorrect="off" autocomplete="given-name"
                  autofocus placeholder="Enter your first name" />
              </div>
              <div>
                <va-input class="mb-4" v-model="formLastName" :rules="rules.basicText('Last Name', 2, 255)" type="text"
                  label="Last Name" aria-required="true" autocorrect="off" autocomplete="family-name"
                  placeholder="Enter your last name" />
              </div>
              <div>
                <va-input class="mb-4" v-model="formPhono" :rules="rules.basicIntlTel('Phone')" type="tel"
                  label="Phone Number" aria-required="true" autocorrect="off" autocomplete="tel"
                  placeholder="Enter your phone number" />
              </div>
              <div>
                <va-button type="submit" gradient class="mr-4 mb-2">Login
                </va-button>
              </div>
            </va-form>
          </va-card-content>
        </va-card>
      </va-inner-loading>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AppFeatures, BPv2WhoAmIDefinition } from '@/components/appConfig';
import { AuthResponse } from '@bettercorp/betterportal-sdk/src/auth';
import { BetterPortal } from '@bettercorp/betterportal-sdk/src/betterportal';
import { useAsyncState } from '@vueuse/core';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { VRules } from '../components/vuefyRules';
//import telecodes from '../components/telecodes';

const betterportal = new BetterPortal<AppFeatures, BPv2WhoAmIDefinition>();
const appConfig = useAsyncState(betterportal.whoami.getApp(), undefined);

const rules = VRules;
const router = useRouter();
const loginForm = ref();
const formEmail = ref("");
const formPassword = ref("");
const formOtp = ref("");
const formFirstName = ref("");
const formLastName = ref("");
const formPhono = ref("");
enum FormFlowState {
  Busy,
  Login,
  OTP,
  Register
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
    optToken: formOtp.value,
    firstName: formFirstName.value,
    lastName: formLastName.value,
    cell: formPhono.value
  });
  formBusy.value = false;
  switch (response.status) {
    case AuthResponse.OTP_VALIDATION: {
      formFlow.value = FormFlowState.OTP;
    } break;
    case AuthResponse.USER_NOT_FOUND: {
      formFlow.value = FormFlowState.Register;
    } break;
    case AuthResponse.ACCEPTED: {
      router.replace('/Account/Client');
    } break;
  }
}

console.log(betterportal.auth.isLoggedIn);
if (betterportal.auth.isLoggedIn)
  router.replace('/Account/Client');

defineComponent({
  components: {
  }
});
</script>