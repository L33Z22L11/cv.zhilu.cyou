<script setup lang="ts">
defineProps<{
    name: string
    desc: string
    link?: string
    from: string
    to?: string
    techs: Tech[]
}>()
</script>

<template>
    <section m="y-3">
        <p bg="gray-400/15" m="x--2" p="x-2 y-.5" rounded="1">
            <span m="ie-2" font="bold">{{ name }}</span>
            <span m="is-2" float="right">{{ from }} - {{ to ?? '至今' }}</span>

            <span m="ie-2" text="nowrap" op="60">{{ desc }}</span>
            <InfoLink v-if="link" :to="link" />
        </p>

        <p text="sm" p="y-1">
            <span v-for="tech in techs" :key="tech" m="not-last:ie-2" text="nowrap">
                <Icon :name="getTechIcon(tech)" un-size="4" />
                <span m="is-.5">{{ tech }}</span>
            </span>
        </p>

        <slot />
    </section>
</template>
