<template>
    <div class="Header">
        <a href="/">Motoblog</a>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss" scoped>
@import '/src/assets/styling/theme.scss';

.Header {
    display: flex;

    padding: 1em;

    background-color: $primary-color;
    color: $primary-text-color;

    font-weight: bold;
}

a {
    text-decoration: inherit;
    color: inherit;
}
</style>
