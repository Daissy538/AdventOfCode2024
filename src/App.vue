<script setup lang="ts">
import { ref } from 'vue';
import { Puzzle, PuzzlePart } from './puzzles/base/puzzleBase';
import { PuzzleResult } from './puzzles/base/PuzzleResult';
import { Puzzle1 } from './puzzles/puzzle_1';
import {
    Listbox,
    ListboxOptions,
    ListboxOption,
    ListboxButton
  } from '@headlessui/vue'



const activePuzzle = ref<Puzzle>();
const inputText = ref<string>("");
const result = ref<PuzzleResult>();

const puzzles = ref<Puzzle[]>([]);

puzzles.value.push(new Puzzle1(1));
activePuzzle.value = puzzles.value[0] as Puzzle;

function runPuzzle(){
  activePuzzle.value?.run(inputText.value, PuzzlePart.ONE);
  activePuzzle.value?.run(inputText.value, PuzzlePart.TWO);
}

</script>
<template>
<div class=" min-h-screen bg-red-600 text-green-600 font-bold" >
  <div class="flex flex-col items-center space-y-8">
    <div class="w-72">
      <Listbox v-model="activePuzzle">
        <div class="relative mt-1">
          <ListboxButton class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"          >{{ activePuzzle?.puzzleNumber }}</ListboxButton>
          
          <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
        <ListboxOptions class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
          
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="puzzle in puzzles"
              :key="puzzle.puzzleNumber"
              :value="puzzle"
            >
            <li
                :class="[
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ activePuzzle?.puzzleNumber }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
        </div>
      </Listbox>
    </div>
  <div>
    <span>Input value</span>
    <textarea v-model="inputText" @change=""/>
  </div>

  <button class="bg-green-600 text-white px-8 py-2 rounded-lg" @click="runPuzzle">Run puzzle</button>

  <div>
    <span>Result A: {{ result?.resultNumber }}</span>
  </div>
  </div>
</div>
</template>

<style scoped>

</style>
