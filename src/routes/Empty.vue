<template>
  <div class="empty">
    <div class="message">
      검색 된 영화정보가 없습니다! 영화를 검색하세요!
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/scss/main.scss';

.empty {
  margin: 40px;
  background-color: $gray-200;
  padding: 40px 0;
  border-radius: 4px;
  text-align: center;

  .message {
    color: $black;
    font-size: 20px;
  }
}
</style>