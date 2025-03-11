<script setup lang="ts">
defineProps<{
    to?: string
}>()
</script>

<template>
    <NuxtLink :to un-text="blue-600 dark:blue-300">
        <slot />
    </NuxtLink>
</template>
