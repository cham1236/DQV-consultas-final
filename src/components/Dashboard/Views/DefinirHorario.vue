<template>

<div>
<b-row>
<b-col md="3">
<v-date-picker
    mode='multiple'
    v-model='selectedValue'
    show-caps
    :disabled-dates='{ weekdays: [1, 7] }'>
</v-date-picker>
</b-col>
<b-button></b-button>

</b-row>

<b-row>

<b-table>



</b-table>

</b-row>

</div>
</template>

<script>

export default {
  data() {
    return {
      selectedValue: new Date(),
    };
  },
};

</script>
