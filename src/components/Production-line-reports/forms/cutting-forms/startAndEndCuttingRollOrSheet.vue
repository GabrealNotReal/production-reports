<template>
  <div>
    <div class="card m-2">
      <div class="card-header">
        <h2 class="text-center">اطلاعات آغاز و پایان برش از رول یا شیت</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">

          <div class="btn-group form-row text-center d-block mt-3 mb-3" role="group" aria-label="Basic radio toggle button group">
            <input @click="getRollsList()  && roll()" type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off">
            <label class="btn btn-outline-warning col-md-2 btn-lg" for="btnradio1">رول</label>

            <input @click="getSheetsList() && sheet()" type="radio" class="btn-check " name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-info col-md-2 btn-lg" for="btnradio2">شیت</label>
          </div>        
        
          <div v-if="formData.rollOrSheetSelected !== '' ">
              <div v-if="formData.rollOrSheetSelected == 'roll'" class="form-group form-row text-center mb-3">
                  <label class="form-control-lg" for="rollsOrSheetsID">کد رول </label>
                  <!-- <select
                    @click="getRollsList"
                    @change ="selectRoll"
                    class="form-select-lg form-select"
                    id="rolls"
                    v-model="formData.roll"
                    required
                  >
                    <option value="" class="spinner-border">
                      <div v-if="loading.listOfRollsOrSheets === false">
                        کد رول یا شیت را انتخاب کنید
                      </div>
                      <div v-if="loading.listOfRollsOrSheets">
                        در حال بارگذاری...
                      </div>
                    </option>
                    <option v-for="roll in listOfRolls" :value="roll" :startCuttingDate="roll.start_cutting_date" :key="roll.index">{{ roll.code }}  |  مالکیت: {{ roll.ownership }} |  جنس:{{ roll.material }} |  برند: {{ roll.brand }} |  کشور سازنده: {{ roll.manuf_country }}</option>
                  </select> -->

                  <v-select 
                    dir="rtl" 
                    @option:selected="selectRoll"
                    class="form-select-lg" 
                    v-model="formData.roll" 
                    placeholder="کد رول را انتخاب کنید"
                    :filter="fuseSearch"
                    :options="listOfRolls" 
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
                    
                  </v-select>
                </div>

              <div v-if="formData.rollOrSheetSelected == 'sheet'" class="form-group form-row text-center mb-3">
                  <label class="form-control-lg" for="rollsOrSheetsID">کد شیت </label>
                  <!-- <select
                    @click="getSheetsList"
                    @change ="selectSheet"
                    class="form-select-lg form-select"
                    id="rolls"
                    v-model="formData.sheet"
                    required
                  >
                    <option value="" class="spinner-border">
                      <div v-if="loading.listOfRollsOrSheets === false">
                        کد رول یا شیت را انتخاب کنید
                      </div>
                      <div v-if="loading.listOfRollsOrSheets">
                        در حال بارگذاری...
                      </div>
                    </option>
                    <option v-for="roll in listOfSheets" :value="roll" :startCuttingDate="roll.start_cutting_date" :key="roll.index">{{ roll.code }}  |  مالکیت: {{ roll.ownership }} |  جنس:{{ roll.material }} |  برند: {{ roll.brand }} |  کشور سازنده: {{ roll.manuf_country }}</option>
                  </select> -->

                  <v-select 
                    dir="rtl"
                    @click="getSheetsList()" 
                    @option:selected="selectSheet"
                    class="form-select-lg" 
                    v-model="formData.sheet" 
                    placeholder="کد شیت را انتخاب کنید"
                    :filter="fuseSearch"
                    :options="listOfSheets" 
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

                    <template #option="{ code , ownership , material , brand , country}">
                      <h4 style="margin: 0">{{ code }}</h4>
                      <em>مالکیت: {{ ownership }} | جنس: {{ material }} | برند: {{ brand }} | کشور سازنده: {{ country }}</em>
                    </template>
                    
                  </v-select>
                </div>

            <div class="row">
              <div class="form-group col-md-6">
              <label class="form-control-lg font-medium-5 d-block text-center" for="cutStartDate">تاریخ شروع برش از رول یا شیت</label>
                <date-picker format="YYYY-MM-DD HH:mm:ss" display-format="dddd jDD jMMMM jYYYY" type='datetime' color="#03a9f4" id="cutStartDate" v-model="formData.cutStartDate" :disabled="entredData.cutStartDate"></date-picker>
                <div class="form-text text-danger">
                  {{validateData.cutStartDate}}
                </div> 
              </div>
              
            <!-- <div v-if="formData.cutStartDate!=null" class="form-group col-md-6">
              <label class="form-control-lg font-medium-5 d-block text-center" for="cutStartDate">تاریخ شروع برش از رول یا شیت</label>
              <input id="cutStartDate" type="text" class="form-control position-relative" v-model="formData.cutStartDate" disabled>
            </div> -->
  
  
  
              <div class="form-group col-md-6">
                <label class="form-control-lg font-medium-5 d-block text-center" for="finishCuttingRollOrSheetDate">تاریخ پایان برش از رول یا شیت</label>
                <date-picker format="YYYY-MM-DD HH:mm:ss" display-format="dddd jDD jMMMM jYYYY" color="#03a9f4" type='datetime' id="finishCuttingRollOrSheetDate" v-model="formData.cutFinishDate"></date-picker>
              </div>
            </div>
  
            <div class="form-row form-group form-row mt-3 mb-3">
              <label
                class="form-control-lg text-center d-block"
                for="َadditionalsWeight"
                >اضافات رول یا شیت
              </label>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control position-relative input-lg text-center d-block"
                  id="َadditionalsWeight"
                  placeholder="وزن اضافات رول یا شیت را وارد کنید"
                  v-model="formData.additionalsWeight"
                />
                  <span class="input-group-text">Kg</span>
              </div>
              <div class="form-text text-danger">
                {{validateData.additionalsWeight}}
              </div> 
            </div>
  
            <div v-if="formData.rollOrSheetSelected == 'roll' " class="form-row form-group form-row text-center mb-3">
              <label 
              class="form-control-lg" 
              for="reelWeight"
              >توپی رول
              </label>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control position-relative input-lg text-center d-block"
                  id="reelWeight"
                  placeholder="وزن توپی رول را وارد کنید"
                  v-model="formData.reelWeight"
                />
                  <span class="input-group-text prepend-rtl">Kg</span>
              </div>
            </div>
  
  
  
            <div class="form-group mb-3">
                <label
                  class="form-control-lg d-block text-center"
                  for="description"
                >
                  توضیحات
                </label>
              <textarea
              class="form-control position-relative input-lg"
              id="description"
              rows="3"
              placeholder="توضیحات بیشتر را وارد کنید"
              v-model="formData.description"
              ></textarea>
            </div>

            <div class="form-row d-grid gap-2 justify-content-md-center d-md-flex">
              <button @click="backToMain" class="btn btn-danger col-md-2 btn-lg">
                بازگشت
              </button>
    
              <button class="btn btn-logo col-md-10 btn-lg" type="submit">
                تایید فرم
              </button>
            </div>
        </div>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core';
import {useProductionLineStore} from '../../production-line-reports-store/productionLineReportsStore';
import Fuse from 'fuse.js'

export default {
  data() {
    return {
      moreInfo: "null",
      

    };
  },

  methods: {
    descriptions() {
      this.moreInfo = document.querySelector('#description').value;
    },
    
    backToMain(){
      this.$router.push({path:"/production"})
    },

    fuseSearch(options, search) {
      const fuse = new Fuse(options, {
        keys: ['code' , 'ownership' , 'material' , 'brand' , 'manuf_country'],
        shouldSort: true,
      })
      return search.length
        ? fuse.search(search).map(({ item }) => item)
        : fuse.list
    },
    
  },

  setup(){

    const formData = reactive(
    {
      subLevel : 'startAndFinishCuttingRollOrSheet',
      rollOrSheetSelected : '',
      roll : null,
      sheet: null,
      cutStartDate:'',
      cutFinishDate: null,
      reelWeight: null,
      additionalsWeight: null,
      description: null,
    })

    const entredData = reactive(
      {
        cutStartDate : false,
      })

    const validateData = reactive(
      {
        rollsOrSheetsID : '',
        cutStartDate : '',
        reelWeight : '',
        additionalsWeight : '',
      })

    const loading =reactive({
      listOfRollsOrSheets : false,
      descriptionsList : false,
    })

    const store = useProductionLineStore()
    const cuttingRollOrSheetStartDate = computed(() => store.cuttingRollOrSheetStartDate);

    // function startDate(){
    //   if(formData.cutStartDate==''){
    //     document.querySelector('#cutStartDate').disabled= 'disabled'
    //   }
    // }

    function roll(){
      formData.rollOrSheetSelected = 'roll'
      formData.sheet = null
      formData.cutStartDate = ''
      formData.cutFinishDate = null
      formData.reelWeight = null
      formData.additionalsWeight = null
      formData.description = ''
    }
    
    function sheet(){
      formData.rollOrSheetSelected = 'sheet'
      formData.sheet = null
      formData.cutStartDate = ''
      formData.cutFinishDate = null
      formData.reelWeight = null
      formData.additionalsWeight = null
      formData.description = ''
    }
    
    async function selectRoll() {
      var rollSelected = formData.roll
      formData.cutStartDate = rollSelected.start_cutting_date
      formData.cutFinishDate = rollSelected.finish_cutting_date
      formData.reelWeight = rollSelected.reel_weight
      formData.additionalsWeight = rollSelected.additionals_weight
      formData.description = rollSelected.description
      if(formData.cutStartDate === null){
        entredData.cutStartDate = false
      }
      else{
        entredData.cutStartDate = true
      }

      // console.log(formData.roll)
      // console.log('pipi')
    }
    
    async function selectSheet() {
      var sheetSelected = formData.sheet
      formData.cutStartDate = sheetSelected.start_cutting_date
      formData.cutFinishDate = sheetSelected.finish_cutting_date
      formData.additionalsWeight = sheetSelected.addiotionals_weight
      formData.description = sheetSelected.description
      if(formData.cutStartDate === null){
        entredData.cutStartDate = false
      }
      else{
        entredData.cutStartDate = true
      }
    }
    
    
    const listOfRolls = computed(() => store.allRolls);
    const listOfSheets = computed(() => store.allSheets);

    async function getRollsList() {
      loading.listOfRollsOrSheets = true;
      await store.getListOfRolls();
      loading.listOfRollsOrSheets = false;
    }

    async function getSheetsList() {
      loading.listOfRollsOrSheets = true;
      await store.getListOfSheets();
      loading.listOfRollsOrSheets = false;
    }

    const descriptionsList = computed(() => store.allDescriptions);
    
    async function getDescriptions() {
      loading.descriptionsList = true;
      await store.getListOfDescription();
      loading.descriptionsList = false;
    }

    async function submitForm() {
      if (formData.cutStartDate == "" || formData.additionalsWeight == null) {

        if(formData.cutStartDate == ""){
          validateData.cutStartDate = "تاریخ شروع برش از رول را انتخاب کنید!";
        }
        else validateData.cutStartDate = "";

        if(formData.additionalsWeight == null){
          validateData.additionalsWeight = "وزن اضافات را وارد کنید!";
        }
        else validateData.additionalsWeight = "";

      } else {
        // loading.value = true;
        // titleErrorText.value = "";
        await ( 
          store.submitCuttingform(formData)
          
          // store.authenticateUser(formData.productionLevel)
          )

          // const lvlSelected = document.querySelector('#productionLvl').value;
          // document.querySelector('#selectLvlBtn').dataset.bsTarget = lvlSelected;

        // loading.value = false;
      }
        // console.log(formData)
    }

    return{
      getRollsList,
      getSheetsList,
      validateData,
      store,
      formData,
      // startDate,
      submitForm,
      roll,
      sheet,
      selectRoll,
      selectSheet,
      cuttingRollOrSheetStartDate,
      listOfRolls,
      listOfSheets,
      loading,
      getDescriptions,
      descriptionsList,
      entredData,
    }
  }
}
</script>

<style>
.border-radius {
  border-radius: 5rem;
  font-size: 1.3rem;
}

/* .datePicker-icone-size{
  margin-bottom: 0rem !important;
  padding: 0 15px !important;
} */

textarea {
  font-size: 20px !important;
}

.vs__spinner {
  border-left-color: rgba(88, 151, 251, 0.71);
}
</style>