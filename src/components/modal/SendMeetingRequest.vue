<template>
  <b-modal id="requestModal" hide-footer hide-header centered>
    <div class="requestModalContainer">
      <div class="closeX" @click="$bvModal.hide('requestModal')">X</div>
      hihi
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "SendMeetingRequest",
  data() {
    return {
      pros: "",
      cons: "",
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#requestModal {
  .requestModalContainer {
    padding: 20px;
  }
  position: relative;
}
</style>
