<template>
  <!-- Resizable -->
  <div class="resizable-box">
    <slot>
      Resizable Box Content
    </slot>
  </div>
</template>

<script>
export default {
  name: 'va-resizable-box',
  props: {
    handles: {
      type: String,
      default: 'n, e, s, w'
    },
    minWidth: Number,
    minHeight: Number,
    maxWidth: Number,
    maxHeight: Number,
    resize: Function
  },
  mounted () {
    const $inner = $('.resizable-box :first')
    $inner.resizable({
      alsoResize: '.resizable-box :first',
      handles: this.handles,
      minWidth: this.minWidth,
      minHeight: this.minHeight,
      maxWidth: this.maxWidth,
      maxHeight: this.maxHeight,
      resize: this.resize
    })
  }
}
</script>
