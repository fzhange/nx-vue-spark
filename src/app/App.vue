<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="operate-button-con">
    <button class="theme-button" @click="toggleDark()">
      <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
    </button>
  </div>
  <router-view />
</template>

<style scoped lang="less">
.operate-button-con {
  display: flex;
  justify-content: right;
  padding-right: 12px;
  .theme-button {
    padding: 3px 15px;
    background-color: var(--vp-c-brand-1);
    border: none;
    outline: none;
    color: #fff;
    margin: 0.5rem 0;
    border-bottom: 2px solid var(--vp-c-brand-2);
    text-shadow: 1px 1px 1px var(--vp-c-brand-2);
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
    vertical-align: middle;
  }
}
</style>
