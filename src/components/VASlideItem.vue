<template>
  <router-link tag="li" v-if="router && router.name && (router.param === undefined || loginYn === router.param.loginYn)" :to="router">  
    <a href="#">
      <i :class="icon"></i> <span>{{ name }}</span>
      <span class="pull-right-container" v-show="badge">
        <small class="label pull-right" :class="[badge.type==='String'?'bg-green':'label-primary']">{{ badge.data }}</small>
      </span>
    </a>
  </router-link>
  <!--
  <li :class="getType" v-else>
    {{ isHeader ? name : '' }}
    <a href="#" v-if="!isHeader">
      <i :class="icon"></i> <span>{{ name }}</span>
      <span class="pull-right-container">
        <small v-if="badge && badge.data" class="label pull-right" :class="[badge.type==='String'?'bg-green':'label-primary']">{{ badge.data }}</small>
        <i v-else class="fa fa-angle-left pull-right"></i>
      </span>
    </a>
    <ul class="treeview-menu" v-if="items.length > 0">
      <router-link tag="li" v-for="item in items" :to="item.router" v-if="item.router && item.router.name">
        <a>
          <i :class="item.icon"> {{ item.name }}</i>
        </a>
      </router-link>
      <li v-else>
        <a>
          <i :class="item.icon"> {{ item.name }}</i>
        </a>
      </li>
    </ul>
  </li>
  -->
</template>

<script>
export default {
  name: 'va-slide-item',
  props: {
    type: {
      type: String,
      default: 'item'
    },
    isHeader: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    name: {
      type: String
    },
    badge: {
      type: Object,
      default () {
        return {}
      }
    },
    items: {
      type: Array,
      default () {
        return []
      }
    },
    router: {
      type: Object,
      default () {
        return {
          name: '',
          param: []
        }
      }
    },
    link: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      loginYn: localStorage.getItem('loginYn') === null || localStorage.getItem('loginYn') === undefined ? 'N' : localStorage.getItem('loginYn')
    }
  },
  created () {
  },
  computed: {
    getType () {
      if (this.isHeader) {
        return 'header'
      }
      return this.type === 'item' ? '' : 'treeview active'
    }
  }
}
</script>
