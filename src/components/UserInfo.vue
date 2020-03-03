<template>
  <div class="app-user-info">
    <div class="app-user-info__logo"/>
    <div class="app-user-info__description">
      <div class="app-user-info__name">{{ name }}</div>
      <div class="app-user-info__role">{{ role }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      name: 'Alexander C.',
      role: 'Administrator'
    }
  }
}
</script>
<style>
  .app-user-info {
    display: flex;
    align-items: center;
  }

  .app-user-info__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .app-user-info__logo {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: #ccc;
    opacity: .4;
    margin-right: 5px;
    background-image: url('https://dist.edu-frn.spb.ru/pluginfile.php/1303/course/summary/3.учитель.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .app-user-info__name {
    font-size: 14px;
    font-weight: 600;
    color: #000;
  }

  .app-user-info__role {
    color: #6d6d6d;
    font-size: 12px;
    font-weight: 500;
  }
</style>
