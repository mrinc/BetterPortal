<template>
  <div class="row align--center justify--center align-self--center">
    <div class="center-grid">
      <div class="item">
        <div class="row align--center justify--center align-self--center" style="margin-bottom: 20px;">
          <img src="https://content.betterweb.co.za/bettercorp/logos/2022/BetterPortal.png"
            style="max-width: 500px; max-height: 150px;" />
        </div>
        <va-card color="white">
          <va-card-title>Login/Register</va-card-title>
          <va-card-content>
            <va-form style="text-align: center;" ref="loginForm" @validation="validation = $event">
              <div>
                <va-input class="mb-4" v-model="formEmail" :rules="rules.email" type="email" label="Email"
                  placeholder="Enter a valid email address" />
              </div>
              <div>
                <va-input class="mb-4" v-model="formEmail" :rules="[(v) => v.length > 3 || `Fulfill the condition`]"
                  type="email" label="Email" placeholder="Enter a valid email address" />
              </div>
              <div>
                <va-button color="primary" :disabled="validation" gradient class="mr-4 mb-2">Login</va-button>
                {{validation}}
              </div>
            </va-form>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">import { defineComponent, ref } from 'vue';
import { VaCard, VaCardTitle, VaCardContent, VaForm, VaInput } from 'vuestic-ui';
import { VRules } from '../components/vuefyRules';

const rules = VRules;

const formEmail = ref("");
const validation = ref<any>();

defineComponent({
  components: {
    VaCard, VaCardTitle, VaCardContent, VaForm, VaInput
  }
});
</script>