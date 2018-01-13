<template>
  <div id="itemView">
    <h1 class="itemTitle">{{itemData.CatalogEntryView[0].title}}</h1>
    <h2 class="price">{{itemData.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue}} <span class="priceQualifier">{{itemData.CatalogEntryView[0].Offers[0].OfferPrice[0].priceQualifier}}</span></h2>
    <div class="promotions" v-for="promotion in itemData.CatalogEntryView[0].Promotions">
        <h3 v-for="description in promotion.Description">{{description.shortDescription}}</h3>
    </div>
    <div class="quantityCounter">{QUANTITY COUNTER GOES HERE}</div>
    <div class="buttons">
        <button class="pickUp">PICK UP IN STORE</button>
        <button class="addToCart">ADD TO CART</button>
    </div>
    <h3 class="returns">returns | <span class="returnPolicy">This item must be returned within 30 days of the ship date. See {return policy} for details. Prices, promotions, styles and availibility may vary by store and online.</span></h3>
    <div class="buttons">
        <button>ADD TO REGISTRY</button>
        <button>ADD TO LIST</button>
        <button>SHARE</button>
    </div>
        <h4 v-for="feature in features">{{feature}}</h4>
  </div>
</template>

<script>
export default {
  name: 'itemView',
  props: ['itemData'],
  data(){
      return {
          features: [],
      }
  },
  created(){
      let items = this.itemData.CatalogEntryView[0].ItemDescription;
      items.map((item) => {
          item.features.map((feature) => {
              this.features.push(feature);
          })
      });
  }
}
</script>

<style lang="scss" scoped>
    #itemView{
        margin: 200px;
    }
</style>
