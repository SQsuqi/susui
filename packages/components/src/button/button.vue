<template>
    <button class="s-button" :class="buttonStyle"><slot /><span>99999</span></button>
</template>

<script lang="ts" setup>
    import { computed } from "vue";
    import "./style/index.less";

    defineOptions({ name: "s-button" });

    type ButtonProps = {
        type?: string;
        size?: string;
    };

    const buttonProps = defineProps<ButtonProps>();

    const buttonStyle = computed(() => {
        return { [`s-button--${buttonProps.type}`]: buttonProps.type };
    });
</script>