<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent='appRed'">Load Red Template</button>
                <hr>
                <component :is="selectedComponent">
                    <p v-if="selectedComponent==='appBlue'">This is the blue content</p>
                    <p v-if="selectedComponent==='appGreen'">This is the green content</p>
                    <p v-if="selectedComponent==='appRed'">This is the red content</p>
                </component>
                <!-- <app-blue>
                    <p>This is the content</p>
                </app-blue>
                <app-green>
                    <p>This is the content</p>
                </app-green>
                <app-red>
                    <p>This is the content</p>
                </app-red>-->
            </div>
        </div>
    </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
    data() {
        return {
            selectedComponent: "appBlue"
        };
    },
    components: {
        appBlue: Blue,
        appGreen: Green,
        appRed: Red
    }
};
</script>

<style>
</style>
