<template>
  <div class="row align--center justify--center align-self--center">
    <div class="center-grid">
      <div class="item">
        <div class="row align--center justify--center align-self--center" style="margin-bottom: 20px;">
          <img src="https://content.betterweb.co.za/bettercorp/logos/2022/BetterPortal.png"
            style="max-width: 100%; width: 500px; max-height: 150px;" />
        </div>
        <va-card color="white" v-if="clients.length === 0">
          <va-card-title>Sorry, no clients available for you. (registration one day)
          </va-card-title>
        </va-card>
        <va-inner-loading :loading="formBusy === true || appConfig.isLoading.value === true" :size="60" v-else>
          <va-card v-if="appConfig.isLoading.value === true">
            <va-card-content>
              <div style="padding: 20px;"></div>
            </va-card-content>
          </va-card>
          <va-scroll-container vertical style="max-height: 300px;"
            v-else-if="appConfig.state.value!.features.clientListType === 1">
            <va-card style="margin-bottom: 10px;" color="white" v-for="clientId in clients" v-bind:key="clientId">
              <!-- <va-card-title>{{ clientId }}</va-card-title> -->
              <va-card-title>{{ betterportal.auth.user!.clients[clientId].name }}
              </va-card-title>
              <va-card-actions align="right">
                <va-button @click="selectClient(clientId)" color="primary" gradient class="mr-4 mb-2">SELECT
                </va-button>
              </va-card-actions>
            </va-card>
          </va-scroll-container>
          <div v-else-if="appConfig.state.value!.features.clientListType === 2">
            <va-card style="margin-bottom: 10px;" color="white">
              <!-- <va-card-title>{{ clientId }}</va-card-title> -->
              <va-card-title>
                <va-input class="flex mb-2 md12" placeholder="Select your client" v-model="filterClients" />
              </va-card-title>
              <va-card-content>
                <va-data-table :items="clientsData" :columns="clientsDataColumns" :filter="filterClients"
                  :hide-default-header="true">
                  <template #cell(id)="{ rowIndex }">
                    <va-button flat icon="double_arrow" @click="selectClient(clientsData[rowIndex].id)" />
                  </template>
                </va-data-table>
              </va-card-content>
            </va-card>

          </div>
        </va-inner-loading>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BetterPortal } from '@bettercorp/betterportal/src/betterportal';
import type { BPv2WhoAmIDefinition } from '@/components/appConfig';
import { useAsyncState } from '@vueuse/core';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { VaInput, VaDataTable, VaCard, VaCardTitle, VaInnerLoading, VaCardContent, VaCardActions, VaSpacer, VaButton, VaScrollContainer } from 'vuestic-ui';
import type { Client } from '@bettercorp/betterportal/src/auth';

const betterportal = new BetterPortal<BPv2WhoAmIDefinition>();
const appConfig = useAsyncState(betterportal.whoami.getApp(), undefined);
const router = useRouter();
const formBusy = ref(false);
const filterClients = ref("");

async function selectClient(clientId: string) {
  formBusy.value = true;
  if (betterportal.auth.selectClient(clientId)) {
    //setTimeout(() => {
    router.push('/');
    //}, 100);
    return;
  }
  setTimeout(() => formBusy.value = false, 100);
}

defineComponent({
  components: {
    VaInput, VaDataTable, VaCard, VaCardTitle, VaInnerLoading, VaCardContent, VaCardActions, VaSpacer, VaButton, VaScrollContainer
  }
});

let clients: Array<string> = [];
interface ClientData extends Client {
  id: string;
}
let clientsData: Array<ClientData> = [];
let clientsDataColumns = [
  { key: 'name', sortable: true, width: '100%' },
  { key: 'id', sortable: false, width: 80 },
];
if (!betterportal.auth.isLoggedIn) {
  router.replace('/App/Login');
}
else {
  clients = Object.keys(betterportal.auth.user!.clients);
  for (let client of clients.filter(x => betterportal.auth.user!.clients[x].enabled != false)) {
    clientsData.push({
      id: client,
      ...betterportal.auth.user!.clients[client]
    });
  }

  if (clients.length === 1) {
    betterportal.auth.selectClient(clients[0]);
  }
}

</script>