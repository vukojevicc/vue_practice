<template>
  <div>
    <TheHeader/>
    <BadgeList/>
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></UserInfo>
    <CourseGoals>
      <template v-slot:default="courseGoals">
        <h2>{{ courseGoals.item }}</h2>
        <p>{{ courseGoals['another-prop'] }}</p>
      </template>
    </CourseGoals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue'

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals
  },
  props: ['item'],
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>