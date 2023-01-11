<template>
  <div>
    TEMPLATE
    <div class="row align--center justify--center align-self--center">
      <va-inner-loading :loading="!appConfig.isReady || appConfig.state.value === undefined" :size="60"
        class="profile-box">
        <va-card color="white">
          <va-card-content>
            <div class="row">
              <div class="profilePic">
                <va-icon name="store" size="5rem" color="primary" />
              </div>
              <div class="profileInfo">
                <h1 v-if="!appConfig.isReady || appConfig.state.value === undefined">Company</h1>
                <h1 v-else>{{ appConfig.state.value.tenant.company.name }}</h1>
                <div>
                  <h5 v-if="!appConfig.isReady || appConfig.state.value === undefined">
                    <va-icon name="mail" /> Email
                  </h5>
                  <h5
                    v-else-if="appConfig.state.value.tenant.company.supportEmail !== undefined && appConfig.state.value.tenant.company.supportEmail !== null && appConfig.state.value.tenant.company.supportEmail !== ''">
                    <va-icon name="mail" /> {{ appConfig.state.value.tenant.company.supportEmail }}
                  </h5>
                  <h5 v-if="!appConfig.isReady || appConfig.state.value === undefined">
                    <va-icon name="phone" />
                    Phone
                  </h5>
                  <h5
                    v-else-if="appConfig.state.value.tenant.company.supportNumber !== undefined && appConfig.state.value.tenant.company.supportNumber !== null && appConfig.state.value.tenant.company.supportNumber !== ''">
                    <va-icon name="phone" />
                    {{ appConfig.state.value.tenant.company.supportNumber }}
                  </h5>
                </div>
              </div>
            </div>
          </va-card-content>
        </va-card>
      </va-inner-loading>
      <va-card class="profile-box item" v-if="loggedIn && user !== null">
        <va-card-content>
          <div class="row">
            <div class="profilePic">
              <va-icon name="person" size="5rem" color="primary" />
            </div>
            <!-- <div class="profileInfo">
              <h1>{{ user.name }} {{ user.surname }}</h1>
              <div>
                <h5>
                  <va-icon name="mail" /> {{ user.email }}
                </h5>
                <h5>
                  <va-icon name="phone" />
                  {{ user.cell }}
                </h5>
              </div>
            </div> -->
          </div>
        </va-card-content>
      </va-card>
    </div>
    <div class="row align--center justify--center align-self--center">
      <va-card v-if="!loggedIn">
        <va-card-content>
          <router-link to="/Account/Login">
            <va-button>Login to view your information</va-button>
          </router-link>
        </va-card-content>
      </va-card>
      <va-card v-else>
        <va-card-content>
          <va-button @click="logout()" color="danger">Logout</va-button>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { BetterPortal } from '@bettercorp/betterportal-sdk/src';
import { defineComponent, onMounted, ref } from 'vue';
import { VaButton, VaCard, VaCardTitle, VaCardContent, VaForm, VaInput, VaInnerLoading, VaIcon, VaTab, VaTabs } from 'vuestic-ui';
import { useAsyncState } from '@vueuse/core';
import { useRouter } from 'vue-router';

const betterportal = new BetterPortal();

const props = defineProps<{
  msg: string;
}>();

const router = useRouter();
const loggedIn = betterportal.auth.isLoggedIn;
const user = betterportal.auth.user;
const appConfig = useAsyncState(betterportal.whoami.getApp(), undefined);

const logout = () => {
  betterportal.auth.logout();
  router.push('/');
};

defineComponent({
  components: {
    VaButton, VaCard, VaCardTitle, VaCardContent, VaForm, VaInput, VaInnerLoading, VaIcon, VaTab, VaTabs
  }
});
const emit = defineEmits(['load']);
onMounted(() => {
  emit('load');
});
</script>

<style scoped>
.profilePic {
  width: 100px;
  height: 100px;
  /* background: rgb(242, 242, 242); */
  border-radius: var(--va-card-border-radius, var(--va-block-border-radius));
  line-height: 100px;
  text-align: center;
  vertical-align: middle;
}

.profilePic>img {
  line-height: 100px;
  vertical-align: middle;
  max-width: 100px;
  max-height: 100px;
}

.profileInfo {
  margin: 10px;
}

h1 {
  font-size: 1.8rem;
  font-weight: 700;
  padding: 5px;
}

h5 {
  font-size: 0.8rem;
  font-weight: 400;
  padding: 5px;
  display: inline-block
}

.profile-box {
  max-width: 80vw;
  width: 550px;
  margin: 20px;
}

.actions {
  width: 100%;
  padding: 5px;
  padding-top: 10px;
  ;
  padding-bottom: 0;
}
</style>