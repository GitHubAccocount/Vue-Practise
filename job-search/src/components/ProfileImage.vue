<template>
  <img :src="ImgLink" class="h-8 w-8 rounded-3xl object-contain" alt="User profile image" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      ImgLink:
        'https://cdn-icons-png.flaticon.com/512/465/465363.png?w=740&t=st=1682600741~exp=1682601341~hmac=fdcfa5d96a8efaa0693aa44183c12b371bbcb0faa10516ce3b295995759cd06c'
    }
  }
}
</script>
