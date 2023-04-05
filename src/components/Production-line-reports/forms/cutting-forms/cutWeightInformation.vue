<template>
  <div>
    <div class="card m-2">
      <div class="card-header">
        <h2 class="text-center">اطلاعات وزنی نمونه برش از رول یا شیت</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
            <div class="form-row form-group form-row mb-3">
              <label class="form-control-lg text-center d-block" for="rollOrSheet">کد رول/شیت </label>
              <!-- <select
                class="form-select form-select-lg"
                id="rollOrSheet"
                v-model="formData.rollOrSheet"
                aria-expanded="false"
              >
                <option value="" class="spinner-border">
                  <div v-if="loading.listOfRollsOrSheets === false">
                    کد رول یا شیت را انتخاب کنید
                  </div>
                  <div v-if="loading.listOfRollsOrSheets">
                    در حال بارگذاری...
                  </div>
                </option>
                <option v-for="roll in listOfRolls" :value="roll" :key="roll.index">{{ roll.code }}  |  مالکیت: {{ roll.ownership }} |  جنس:{{ roll.material }} |  برند: {{ roll.brand }} |  کشور سازنده: {{ roll.manuf_country }}</option>
                <option v-for="sheet in listOfSheets" :value="sheet" :key="sheet.index">{{ sheet.code }}  |  مالکیت: {{ sheet.ownership }} |  جنس:{{ sheet.material }} |  برند: {{ sheet.brand }} |  کشور سازنده: {{ sheet.manuf_country }}</option>
              </select>
              <div class="form-text text-danger">
                {{validateData.rollOrSheet}}
              </div>  -->

              <v-select 
                dir="rtl" 
                id="rollOrSheet"
                class="form-select-lg" 
                v-model="formData.rollOrSheet" 
                placeholder="کد رول یا شیت را انتخاب کنید"
                :filter="fuseSearchRollAndSheet"
                :options="listOfRolls && listOfSheets" 
                :get-option-label="(option) => option.code"
                :loading="loading.listOfRollsOrSheets"
                close-on-select
              >

                <template #spinner="{ loading }">
                  <div
                    v-if="loading.listOfRollsOrSheets"
                    style="border-left-color: rgba(88, 151, 251, 0.71)"
                    class="vs__spinner"
                  >
                  </div>
                </template>

                <template #option="{ code , ownership , material , brand , manuf_country}">
                  <h4 style="margin: 0">{{ code }}</h4>
                  <em>مالکیت: {{ ownership }} | جنس: {{ material }} | برند: {{ brand }} | کشور سازنده: {{ manuf_country }}</em>
                </template>

                <template #footer>
                  <div class="form-text text-danger">
                    {{validateData.rollOrSheet}}
                  </div>
                </template>
                
              </v-select>
            </div>


          <div class="row mb-3">
            <div class="form-group col-md-6 ">
              <label class="form-control-lg" for="lenghtOfPrimary"
                >طول برش اولیه
              </label>
            <div class="input-group">
              <input
                type="number"
                id="lenghtOfPrimary"
                class="form-control position-relative input-lg text-center"
                v-model="formData.lenghtOfPrimary"
                placeholder="طول برش اولیه را وارد کنید"
              />
              <span class="input-group-text">m</span>
            </div>    
            <div class="form-text text-danger">
              {{validateData.lenghtOfPrimary}}
            </div>               
            </div>

            <div class="form-group col-md-6 ">
              <label class="form-control-lg" for="firstCutWeight"
                >وزن برش اولیه
              </label>
              <div class="input-group">
                <input
                  type="number"
                  id="firstCutWeight"
                  class="form-control position-relative input-lg text-center"
                  v-model="formData.firstCutWeight"
                  placeholder="وزن برش اولیه را وارد کنید"
                />
                <span class="input-group-text">Kg</span>
              </div>
              <div class="form-text text-danger">
                {{validateData.firstCutWeight}}
              </div>     
            </div>
          </div>

          <div class="card p-2">
            <div class="card-header mb-3">
              <label class="form-control-lg font-medium-5 d-block text-center">ورود محصولات</label>            
            </div>

            <div class="row mb-3">
  
              <div class="form-group col-md-4">
                <!-- <select
                  class="form-select form-select-lg"
                  id="product1"
                  aria-expanded="false"
                  @click="getListOfProducts"
                  v-model="formData.product1"
                >
                  <option value="" class="spinner-border">
                    <div v-if="loading.product === false">
                      نام محصول را انتخاب کنید
                    </div>
                    <div v-if="loading.product">
                      در حال بارگذاری...
                    </div>
                  </option>
                  <option v-for="productList in productsList" :value="productList.id" :key="productList.index">{{ productList.code }}  |  کد محصول: {{ productList.productCode }}</option>
                </select> 
                <div class="form-text text-danger">
                  {{validateData.product1}}
                </div>    -->

                <v-select 
                  dir="rtl"
                  @click="getListOfProducts" 
                  id="product1"
                  class="" 
                  v-model="formData.product1" 
                  placeholder="نام محصول را انتخاب کنید"
                  :filter="fuseSearchProduct"
                  :options="productsList" 
                  :get-option-label="(option) => option.code"
                  :loading="loading.product"
                  close-on-select
                  requierd
                >

                  <template #spinner="{ loading }">
                    <div
                      v-if="loading.product"
                      style="border-left-color: rgba(88, 151, 251, 0.71)"
                      class="vs__spinner"
                    >
                    </div>
                  </template>
                
                  <template #option="{code , productCode}">
                    <h4 style="margin: 0">{{ code }}</h4>
                    <em>کد محصول: {{ productCode }}</em>
                  </template>

                  <template #footer>
                    <div class="form-text text-danger">
                      {{validateData.product1}}
                    </div>
                  </template>

                </v-select>
              </div>
  
              <div class="form-group col-md-3">
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control position-relative input-lg text-center"
                    id="pureWeight1"
                    placeholder="وزن خالص"
                    v-model="formData.pureWeight1"
                  />
                      <span class="input-group-text">kg</span>
                </div> 
                <div class="form-text text-danger">
                  {{validateData.pureWeight1}}
                </div>                  
              </div>
  
                <div class="form-group col-md-4">
                  <div class="input-group">
                    <input type="number" id="secondCutX1" aria-label="طول" placeholder="طول" class="form-control position-relative input-lg text-center" v-model="secondCutX1">
                    <input type="number" id="secondCutY1" aria-label="عرض" placeholder="عرض" class="form-control position-relative input-lg text-center" v-model="secondCutY1">
                      <span class="input-group-text">m</span>
                  </div>
                  <div class="form-text text-danger">
                    {{validateData.secondCutXY1 }}
                  </div>
                </div>
  
                <div class="d-grid col-md-1 mx-auto">
                  <button
                    @click="addPieceWeightRow"
                    type="button"
                    class="btn btn-outline-logo"
                    :disabled="pieceWeightRow === 1"                           
                  >
                  <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
  
            </div>
  
            <div v-if="pieceWeightRow < 3" class="row mb-3">
  
                <div class="form-group col-md-4">
                  <!-- <select
                    class="form-select form-select-lg"
                    id="product2"
                    aria-expanded="false"
                    @click="getListOfProducts"
                    v-model="formData.product2"
                    required
                  >
                    <option value="" class="spinner-border">
                      <div v-if="loading.product === false">
                        نام محصول را انتخاب کنید
                      </div>
                      <div v-if="loading.product">
                        در حال بارگذاری...
                      </div>
                    </option>
                    <option v-for="productList in productsList" :value="productList.id" :key="productList.index">{{ productList.code }}  |  کد محصول: {{ productList.productCode }}</option>
                  </select>      -->

                  <v-select 
                    dir="rtl"
                    @click="getListOfProducts" 
                    id="product2"
                    class="" 
                    v-model="formData.product2" 
                    placeholder="نام محصول را انتخاب کنید"
                    :filter="fuseSearchProduct"
                    :options="productsList" 
                    :get-option-label="(option) => option.code"
                    :loading="loading.product"
                    close-on-select
                    requierd
                  >

                    <template #spinner="{ loading }">
                      <div
                        v-if="loading.product"
                        style="border-left-color: rgba(88, 151, 251, 0.71)"
                        class="vs__spinner"
                      >
                      </div>
                    </template>
                  
                    <template #option="{code , productCode}">
                      <h4 style="margin: 0">{{ code }}</h4>
                      <em>کد محصول: {{ productCode }}</em>
                    </template>

                    <template #footer>
                      <div class="form-text text-danger">
                        {{validateData.product1}}
                      </div>
                    </template>

                  </v-select>
                </div>       
              
              <div class="form-group col-md-3">
                <div class="input-group">
                <input
                  type="number"
                  class="form-control position-relative input-lg text-center"
                  id="pureWeight2"
                  placeholder="وزن خالص"
                  v-model="formData.pureWeight2"
                  required
                />
                <span class="input-group-text">kg</span>  
                </div>            
              </div>
  
                <div class="form-group col-md-4">
                  <div class="input-group">
                    <input type="number" id="secondCutX2" aria-label="طول" placeholder="طول" class="form-control position-relative input-lg text-center" v-model="secondCutX2" required>
                    <input type="number" id="secondCutY2" aria-label="عرض" placeholder="عرض" class="form-control position-relative input-lg text-center" v-model="secondCutY2" required>
                      <span class="input-group-text">m</span>
                  </div>
                </div>
  
                <div class="d-grid col-md-1 mx-auto">
                  <button
                    @click="delPieceWeightRow"
                    v-if="pieceWeightRow === 2"
                    type="button"
                    class="btn btn-outline-danger"
                  >
                  <i class="fa-solid fa-minus"></i>
                  </button>
                </div>
  
            </div>
  
            <div v-if="pieceWeightRow < 2" class="row mb-3">
  
              <div class="form-group col-md-4">
                <!-- <select
                  class="form-select form-select-lg"
                  id="product3"
                  aria-expanded="false"
                  @click="getListOfProducts"
                  v-model="formData.product3"
                >
                  <option value="" class="spinner-border">
                    <div v-if="loading.product === false">
                      نام محصول را انتخاب کنید
                    </div>
                    <div v-if="loading.product">
                      در حال بارگذاری...
                    </div>
                  </option>
                  <option v-for="productList in productsList" :value="productList.id" :key="productList.index">{{ productList.code }}  |  کد محصول: {{ productList.productCode }}</option>
                </select>       -->

                <v-select 
                  dir="rtl"
                  @click="getListOfProducts" 
                  id="product3"
                  class="" 
                  v-model="formData.product3" 
                  placeholder="نام محصول را انتخاب کنید"
                  :filter="fuseSearchProduct"
                  :options="productsList" 
                  :get-option-label="(option) => option.code"
                  :loading="loading.product"
                  close-on-select
                  requierd
                >

                  <template #spinner="{ loading }">
                    <div
                      v-if="loading.product"
                      style="border-left-color: rgba(88, 151, 251, 0.71)"
                      class="vs__spinner"
                    >
                    </div>
                  </template>
                
                  <template #option="{code , productCode}">
                    <h4 style="margin: 0">{{ code }}</h4>
                    <em>کد محصول: {{ productCode }}</em>
                  </template>

                  <template #footer>
                    <div class="form-text text-danger">
                      {{validateData.product1}}
                    </div>
                  </template>

                </v-select>
              </div>       
  
              <div class="form-group col-md-3">
                <div class="input-group">
                <input
                  type="number"
                  class="form-control position-relative input-lg text-center"
                  id="pureWeight3"
                  placeholder="وزن خالص"
                  v-model="formData.pureWeight3"
                  required
                />
                      <span class="input-group-text prepend-rtl">kg</span>
                </div>              
              </div>
  
              <div class="form-group col-md-4">
                <div class="input-group">
                  <input type="number" id="secondCutX3" aria-label="طول" placeholder="طول" class="form-control position-relative input-lg text-center" v-model="secondCutX3" required>
                  <input type="number" id="secondCutY3" aria-label="عرض" placeholder="عرض" class="form-control position-relative input-lg text-center" v-model="secondCutY3" required>
                    <span class="input-group-text">m</span>
                </div>
              </div>
              <div class="d-grid col-md-1 mx-auto">
                <button
                  @click="delPieceWeightRow"
                  v-if="pieceWeightRow === 1"
                  type="button"
                  class="btn btn-outline-danger"
                >
                <i class="fa-solid fa-minus"></i>
                </button>
              </div>
            </div>
          </div>


          <div class="form-group mb-3">
              <label class="form-control-lg d-block text-center" for="infoCutWeight">توضیحات</label>
              <select                     
              id="infoCutWeight"
              @click="getDescriptions()"
              class="form-select form-select-lg"
              aria-label=".form-select-sm example"
              v-model="formData.description"
              >
                  <option value="" class="spinner-border">
                    <div v-if="loading.operator === false">
                      علت ایجاد ضایعات را انتخاب کنید
                    </div>
                    <div v-if="loading.descriptionsList">
                      در حال بارگذاری...
                    </div>
                  </option>
                  <option v-for="description in descriptionsList" :value="description.id" :key="description.index"> {{ description.text }} </option>
                  <option value="moreDescription">توضیحات بیشتر</option>
              </select>
              <textarea 
              v-if="formData.description == 'moreDescription'"
              class="form-control position-relative input-lg" 
              id="moreInfoCutWeight" 
              rows="3"
              placeholder="توضیحات بیشتر را وارد کنید" 
              ></textarea>
          </div>

          <div class="form-row d-grid gap-2 d-md-block justify-content-md-end d-md-flex">
            <button @click="backToMain" class="btn btn-danger col-md-2 btn-lg">
              بازگشت
            </button>

            <button class="btn btn-logo col-md-10 btn-lg" type="submit">
              تایید فرم
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import {useProductionLineStore} from '../../production-line-reports-store/productionLineReportsStore'
import { computed } from '@vue/runtime-core';
import Fuse from 'fuse.js'

export default {
  data() {
    return {
      orderOrStore1: "null",
      orderOrStore2: "null",
      orderOrStore3: "null",
      moreInfo : 'null',
    };
  },

  methods: {

    backToMain(){
      this.$router.push({path:"/production"})
    },

    fuseSearchRollAndSheet(options, search) {
     const fuse = new Fuse(options, {
       keys: ['code' , 'ownership' , 'material' , 'brand' , 'manuf_country'],
       shouldSort: true,
     })
     return search.length
       ? fuse.search(search).map(({ item }) => item)
       : fuse.list
    },

    fuseSearchProduct(options, search) {
      const fuse = new Fuse(options, {
        keys: ['code' , 'productCode'],
        shouldSort: true,
      })
      return search.length
        ? fuse.search(search).map(({ item }) => item)
        : fuse.list
    },

  },

  setup() {
    const formData = reactive({
      subLevel : 'cutWeightInformation',
      rollOrSheet : '',
      lenghtOfPrimary : '',
      weightOfPrimary : '',
      product1 : '',
      product2 : '',
      product3 : '',
      pureWeight1 : '',
      pureWeight2 : '',
      pureWeight3 : '',
      pureWeight4 : '',
      secondCutX1 : '',
      secondCutX2 : '',
      secondCutX3 : '',
      secondCutX4 : '',
      secondCutY1 : '',
      secondCutY2 : '',
      secondCutY3 : '',
      secondCutY4 : '',
      description : '',
    })

    const loading = reactive({
        listOfRollsOrSheets : false,
        product : false,   
        descriptionsList : false,   
    })

    const validateData = reactive({
        rollOrSheet : '',
        lenghtOfPrimary : '',
        weightOfPrimary : '',
        pureWeight1 : '',
        product1 : '',
        numberOfSecondaryCut1 : '',
        secondCutXY1 : '',
        description : '',
    })  

    const store = useProductionLineStore();

    const pieceWeightRow = ref(3);

    const classOrderOrStore1 = ref(null)
    const classOrderOrStore2 = ref(null)
    const classOrderOrStore3 = ref(null)

    const listOfRolls = computed(() => store.allRolls);
    const listOfSheets = computed(() => store.allSheets);
    const productsList = computed(() => store.productsList);
    const descriptionsList = computed(() => store.allDescriptions);

    function addPieceWeightRow() {
      pieceWeightRow.value = pieceWeightRow.value - 1;
    }

    function delPieceWeightRow() {
      pieceWeightRow.value = pieceWeightRow.value + 1;
    }

    async function getRollsAndSheetsList() {
          loading.listOfRollsOrSheets = true;
          await store.getListOfRolls();
          await store.getListOfSheets();
          loading.listOfRollsOrSheets = false;
        } 
    
    async function getListOfProducts() {
        loading.product = true;
        await store.getListOfproducts();
        loading.product = false;
    }

        
    async function getDescriptions() {
      loading.descriptionsList = true;
      await store.getListOfDescription();
      loading.descriptionsList = false;
    }

    getRollsAndSheetsList()

    async function submitForm() {
          if (formData.rollOrSheet == "" || 
          formData.lenghtOfPrimary == "" || 
          formData.weightOfPrimary == "" || 
          formData.product1 == "" || 
          formData.pureWeight1 == "" || 
          formData.secondCutX1 == "" || 
          formData.secondCutY1 == "" ) {
            if(formData.rollOrSheet == ""){
              validateData.rollOrSheet = "رول را مشخص کنید!";
            }
            else validateData.rollOrSheet = "";

            if(formData.lenghtOfPrimary == ""){
              validateData.lenghtOfPrimary = "طول برش اولیه را وارد کنید!";
            }
            else validateData.lenghtOfPrimary = "";

            if(formData.weightOfPrimary == ""){
              validateData.weightOfPrimary = "وزن برش اولیه را وارد کنید!";
            }
            else validateData.weightOfPrimary = "";

            if(formData.product1 == ""){
              validateData.product1 = "نام محصول را انتخاب کنید!";
            }
            else validateData.product1 = "";

            if(formData.pureWeight1 == ""){
              validateData.pureWeight1 = "وزن خالص را وارد کنید!";
            }
            else validateData.pureWeight1 = "";

            if(formData.secondCutX1 == "" || formData.secondCutY1 == ""){
              validateData.secondCutXY1 = "ابعاد برش ثانویه را وارد کنید!";
            }
            else validateData.secondCutXY1 = "";
          } 
          
          else {
            // loading.value = true;
            await ( 
              store.submitCuttingform(formData)

              // store.authenticateUser(formData.productionLevel)
              )
            // loading.value = false;
          }
        }
    
    return {
      pieceWeightRow,
      addPieceWeightRow,
      delPieceWeightRow,
      classOrderOrStore1,
      classOrderOrStore2,
      classOrderOrStore3,
      formData,
      loading,
      validateData,
      getListOfProducts,
      productsList,
      getDescriptions,
      descriptionsList,
      getRollsAndSheetsList,
      listOfRolls,
      listOfSheets,
      submitForm,
    };
  },
};
</script>

<style>
.border-radius {
  border-radius: 5rem;
  font-size: 1.3rem;
}

.prepend-rtl {
  border-top-left-radius: 0.4rem !important;
  border-bottom-left-radius: 0.4rem !important;
}

.number-select{
  padding-right: 1rem;
}

input.form-control.input-lg {
    font-size: 1.2rem;
    height: 3rem;
}

/* .form-control-lg {
  font-size: 1.2rem;
} */

/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */
</style>