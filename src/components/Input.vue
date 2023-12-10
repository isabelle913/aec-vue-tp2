<template>
  <label for="id" class="block">
    {{ label }}
    <span class="text-red-500 text-xl"> *</span>
  </label>
  <!--  @input="$emit('update:modelValue', $event.target.value)" -->
  <input type="text" id="id" v-model="theModel" class="p-2 rounded-lg w-full" />

  <p v-if="erreurMessage" class="text-red-500 text-xs">{{ erreurMessage }}</p>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
    erreurMessage: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    theModel: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value.trim());
      },
    },
  },
};
</script>
