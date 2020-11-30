<template>
  <div v-if="item" class="bg-white shadow-container rounded-md p-12 w-details-container min-h-details-container mx-auto relative pb-32">
    <h1 class="text-3xl font-bold">{{ itemName }}</h1>

    <div class="mt-12 w-full flex justify-between">
      <div class="w-details-subcontainer">
        <h2 class="text-2xl font-bold">{{ detailTitle }}</h2>

        <hr class="border-gray my-2"/>

        <div class="text-xl">
          <span v-html="detail"></span>
        </div>
      </div>

      <div class="w-details-subcontainer">
        <h2 class="text-2xl font-bold">{{ relatedTitle }}</h2>

        <hr class="border-gray my-2"/>

        <div class="text-xl">
          <span
            class="cursor-pointer hover:underline text-detail-link"
            v-for="detail in itemDetails"
            :key="detail.url"
            @click="selectItem(detail)"
            >
            {{ detailName(detail) }},
          </span>
        </div>
      </div>
    </div>

    <div class="absolute bottom-14">
      <router-link
        :to="{ name: 'Home' }"
        class="
          rounded-search-button py-3 px-8 text-xl font-bold text-white
          transition uppercase bg-primary cursor-pointer hover:bg-primary-hover
        "
      >
        Back to Search
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { GET_SELECTED_ITEM, GET_ITEM_DETAILS_LIST } from '@/store/getters';
import { FETCH_RESOURCES_BY_URLS, SELECT_ITEM } from '@/store/actions';

export default {
  name: 'Details',
  created() {
    if (!this.item) {
      this.$router.push({ name: 'Home' });
    }
  },
  mounted() {
    this.loadRelated();
  },
  watch: {
    item() {
      this.loadRelated();
    },
  },
  computed: {
    ...mapGetters({
      item: GET_SELECTED_ITEM,
      itemDetails: GET_ITEM_DETAILS_LIST,
    }),
    itemName() {
      return this.item.name ?? this.item.title;
    },
    detailTitle() {
      return this.item.birth_year ? 'Details' : 'Opening Crawl';
    },
    relatedTitle() {
      return this.item.birth_year ? 'Movies' : 'Characters';
    },
    detail() {
      if (this.item.birth_year) {
        return [
          `Birth Year: ${this.item.birth_year}`,
          `Gender: ${this.item.gender}`,
          `Eye Color: ${this.item.eye_color}`,
          `Hair Color: ${this.item.hair_color}`,
          `Height: ${this.item.height}`,
          `Mass: ${this.item.mass}`,
        ].join('<br />');
      }

      return this.item.opening_crawl.replace(/(?:\r\n|\r|\n)/g, '<br>');
    },
  },
  methods: {
    ...mapActions({
      getResourcesByUrl: FETCH_RESOURCES_BY_URLS,
      selectItem: SELECT_ITEM,
    }),
    loadRelated() {
      const { films, characters } = this.item;
      this.getResourcesByUrl(films ?? characters);
    },
    detailName(detail) {
      return detail.title ?? detail.name;
    },
  },
};
</script>
