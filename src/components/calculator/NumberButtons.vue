<template>
    <div class="numbers">
        <div class="container">
            <div class="row justify-content-around">
                <button class="col-2 m-2 btn button" v-for="button in buttons.top" :key="button" @click="calculate(button)">{{button}}</button>
                <button class="col-2 m-2 px-2 btn button reset" @click="deletevalue()">DEL</button>
            </div>

            <div class="row justify-content-around">
                <button class="col-2 m-2 btn button" v-for="button in buttons.second" :key="button" @click="calculate(button)">{{button}}</button>
            </div>

            <div class="row justify-content-around">
                <button class="col-2 m-2 btn button" v-for="button in buttons.third" :key="button" @click="calculate(button)">{{button}}</button>
            </div>

            <div class="row justify-content-around">
                <button class="col-2 m-2 btn button" v-for="button in buttons.fourth" :key="button" @click="calculate(button)">{{button}}</button>
            </div>

            <div class="row justify-content-around">
                <button class="col-5 m-2 btn button reset" @click="reset()">RESET</button>
                <button class="col-5 m-2 btn button equal" @click="calculate('=')">=</button>
            </div>

        </div>
    </div>
</template>

<script>
import {reactive} from 'vue'
import {useStore} from 'vuex'

export default {
    emits: ['numberValue'],
    setup(_, {emit}) {

        const store = useStore()

        const buttons = reactive({
            top: ['7', '8', '9'],
            second: ['4', '5', '6', '+'],
            third: ['1', '2', '3', '-'],
            fourth: ['.', '0', '/', '*'],
            fifth: ['RESET', '=']
        })

        function calculate(val) {
            emit('numberValue', val)
        }

        function reset() {
            store.dispatch('reset')
        }

        function deletevalue() {
            store.dispatch('deletevalue')
        }
        
        return {
            buttons,
            calculate,
            reset,
            deletevalue
        }
    },
}
</script>

<style scoped>
.numbers {
    background-color: hsl(224, 36%, 15%);
}
.button {
    background-color: white;
}
.equal {
    background-color: red;
    color: white;
}
.reset {
    background-color: hsl(222, 26%, 31%);
    color: white;
}
</style>