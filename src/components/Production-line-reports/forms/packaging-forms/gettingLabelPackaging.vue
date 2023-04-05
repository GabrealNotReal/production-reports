<template>
    <div>
      <div class="card-block">
          <div class="card-header">
              <h1 class="text-center">دریافت لیبل و نمونه وزن</h1>
          </div>
          <div class="card-body">
              <form @submit.prevent="validate">
  
                  <div class="form-group">
                          <label 
                          class="font-medium-5 d-block text-center"
                          for="orderProductID"
                           >شناسه تولید
                          </label>
                          <select class="input-lg custom-select custom-select-lg" id="orderProductID" v-model="formData.orderProduct" aria-expanded="false">
                          <option value="">شناسه تولید را انتخاب کنید</option>
                          <option value="1">mn123456</option>
                          <option value="2">pw233456</option>
                          </select>
                          <div class="form-text text-danger">
                          {{formData.orderProductValidate}}
                          </div>
                  </div>
  
                <div class="form-row">
                  <div class="form-group col-md-6">
                          <label 
                          class="font-medium-5"
                          for="numberOfLabelRecivedPackaging"
                           >تعداد لیبل دریافتی
                          </label>
                          <input 
                          type="number"
                          class="form-control position-relative input-lg" 
                          id="numberOfLabelRecivedPackaging" 
                          v-model="formData.numberOfLabelRecivedPackaging"
                          placeholder="تعداد لیبل دریافتی را وارد کنید" 
                          >
                          <div class="form-text text-danger">
                          {{formData.numberOfLabelRecivedPackagingValidate}}
                          </div>
                  </div>
  
                  <div class="form-group col-md-6">
                          <label 
                          class="font-medium-5"
                          for="numberOfLabelRecivedUsedPackaging"
                           >تعداد لیبل مصرف شده
                          </label>
                          <input 
                          type="number" 
                          class="form-control position-relative input-lg" 
                          id="numberOfLabelRecivedUsedPackaging" 
                          v-model="formData.numberOfLabelRecivedUsedPackaging"
                          placeholder="تعداد لیبل مصرف شده را وارد کنید" 
                          >
                          <div class="form-text text-danger">
                          {{formData.numberOfLabelRecivedUsedPackagingValidate}}
                          </div>
                  </div>      
                </div>
                  
<!-- --waste number start-- -->
        <div>
            <label 
            class="font-medium-5 d-block text-center"
            >نمونه وزن
            </label>
            
            <div class="form-row">

                <div class="form-group col-6">
                        <select class="input-lg custom-select custom-select-lg" id="productNamePackaging1" v-model="formData.productNamePackaging1" aria-expanded="false" >
                        <option value="">نام محصول را انتخاب کنید</option>
                        <option value="1">محصول شماره 1</option>
                        <option value="2">محصول شماره 2</option>
                        <option value="3">محصول شماره 3</option>
                        <option value="4">محصول شماره 4</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.productNamePackaging1Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                    <div class="input-group">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="productWeightPackaging1" 
                        placeholder="وزن محصول را وارد کنید"
                        v-model="formData.productWeightPackaging1"                        
                        >
                        <div class="input-group-prepend">
                            <span class="input-group-text prepend-rtl">kg</span>
                        </div>               
                    </div>            
                        <div class="form-text text-danger">
                        {{formData.productWeightPackaging1Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                            <button
                              @click="addwasteLaseringRow"
                              type="button"
                              class="btn btn-outline-info btn-block btn-lg"
                              :disabled="wasteLaseringRow.row === 1"                            
                            >
                              <i class="ft ft-plus"></i>
                            </button>
                </div>  
            </div>

            
            <div class="form-row" v-if="wasteLaseringRow.row < 4">

                <div class="form-group col-6">
                        <select class="input-lg custom-select custom-select-lg" id="productNamePackaging2" v-model="formData.productNamePackaging2" aria-expanded="false" >
                        <option value="">نام محصول را انتخاب کنید</option>
                        <option value="1">محصول شماره 1</option>
                        <option value="2">محصول شماره 2</option>
                        <option value="3">محصول شماره 3</option>
                        <option value="4">محصول شماره 4</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.productNamePackaging2Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                    <div class="input-group">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="productWeightPackaging2" 
                        placeholder="وزن محصول را وارد کنید"
                        v-model="formData.productWeightPackaging2"
                        >
                        <div class="input-group-prepend">
                            <span class="input-group-text prepend-rtl">kg</span>
                        </div>               
                    </div>                          
                        <div class="form-text text-danger">
                        {{formData.productWeightPackaging2Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteLaseringRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteLaseringRow.row < 3"                            
                        >
                        <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="wasteLaseringRow.row < 3">

                <div class="form-group col-6">
                        <select class="input-lg custom-select custom-select-lg" id="productNamePackaging3" v-model="formData.productNamePackaging3" aria-expanded="false" >
                        <option value="">نام محصول را انتخاب کنید</option>
                        <option value="1">محصول شماره 1</option>
                        <option value="2">محصول شماره 2</option>
                        <option value="3">محصول شماره 3</option>
                        <option value="4">محصول شماره 4</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.productNamePackaging3Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                    <div class="input-group">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="productWeightPackaging3" 
                        placeholder="وزن محصول را وارد کنید"
                        v-model="formData.productWeightPackaging3"
                        >
                        <div class="input-group-prepend">
                            <span class="input-group-text prepend-rtl">kg</span>
                        </div>               
                    </div>                          
                        <div class="form-text text-danger">
                        {{formData.productWeightPackaging3Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteLaseringRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteLaseringRow.row === 1"                            
                        >
                        <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
            <div class="form-row" v-if="wasteLaseringRow.row < 2">

                <div class="form-group col-6">
                        <select class="input-lg custom-select custom-select-lg" id="productNamePackaging4" v-model="formData.productNamePackaging4" aria-expanded="false" >
                        <option value="">نام محصول را انتخاب کنید</option>
                        <option value="1">محصول شماره 1</option>
                        <option value="2">محصول شماره 2</option>
                        <option value="3">محصول شماره 3</option>
                        <option value="4">محصول شماره 4</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.productNamePackaging4Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                    <div class="input-group">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="productWeightPackaging4" 
                        placeholder="وزن محصول را وارد کنید"
                        v-model="formData.productWeightPackaging4"
                        >
                        <div class="input-group-prepend">
                            <span class="input-group-text prepend-rtl">kg</span>
                        </div>               
                    </div>                          
                        <div class="form-text text-danger">
                        {{formData.productWeightPackaging4Validate}}
                        </div>
                </div>

                <div class="col-md-1" v-if="wasteLaseringRow.row < 2">
                        <button
                          @click="delWasteLaseringRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
                          :disabled="wasteLaseringRow.row === 0"                            
                        >
                            <i class="ft ft-trash"></i>
                        </button>
                </div>  
            </div>
            
        </div>
                 <!-- --waste number end-- -->
  
                  <button class="btn btn-info btn-block text-center mt-3" type="submit">تایید فرم</button>
              </form>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive } from '@vue/reactivity'
  
  export default {
      
  data(){
  
  return{
      // moreInfo : 'null',
  }
  },
  
      methods:{
          // moreInformation(){
          //     this.moreInfo = document.querySelector('#sheetReceivedFault').value;
          // },
  
      },
  
  setup(){
      const wasteLaseringRow = reactive({row: 4});

      const formData = reactive({
          orderProduct:'',
          orderProductValidate:'',
          numberOfLabelRecivedPackaging:'',
          numberOfLabelRecivedPackagingValidate:'',
          numberOfLabelRecivedUsedPackaging:'',
          numberOfLabelRecivedUsedPackagingValidate:'',
          operator:'',
          operatorValidate:'',
          productNamePackaging1:'',
          productNamePackaging2:'',
          productNamePackaging3:'',
          productNamePackaging4:'',
          productNamePackaging1Validate:'',
          productNamePackaging2Validate:'',
          productNamePackaging3Validate:'',
          productNamePackaging4Validate:'',
          productWeightPackaging1:'',
          productWeightPackaging2:'',
          productWeightPackaging3:'',
          productWeightPackaging4:'',
          productWeightPackaging1Validate:'',
          productWeightPackaging2Validate:'',
          productWeightPackaging3Validate:'',
          productWeightPackaging4Validate:'',
  
      })

      function addwasteLaseringRow() {
          wasteLaseringRow.row = wasteLaseringRow.row- 1;
      }
      
      function delWasteLaseringRow() {
          wasteLaseringRow.row = wasteLaseringRow.row + 1;
      }
  
      function validate(){
          if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }
  
          if(formData.numberOfLabelRecivedPackaging === ""){
              formData.numberOfLabelRecivedPackagingValidate = "تعداد لیبل دریافتی نباید خالی باشد!"
          }
          else{
              formData.numberOfLabelRecivedPackagingValidate = ''
          }
  
          if(formData.numberOfLabelRecivedUsedPackaging === ""){
              formData.numberOfLabelRecivedUsedPackagingValidate = "تعداد لیبل مصرف شده نباید خالی باشد!"
          }
          else{
              formData.numberOfLabelRecivedUsedPackagingValidate = ''
          }
  
          if(formData.operator === ""){
              formData.operatorValidate = "نوع تولید باید انتخاب شود!"
          }
          else{
              formData.operatorValidate = ''
          }
      }

    // eslint-disable-next-line no-redeclare
    function validate(){
    if(wasteLaseringRow.row === 4){
        if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }
  
          if(formData.numberOfLabelRecivedPackaging === ""){
              formData.numberOfLabelRecivedPackagingValidate = "تعداد لیبل دریافتی نباید خالی باشد!"
          }
          else{
              formData.numberOfLabelRecivedPackagingValidate = ''
          }
  
          if(formData.numberOfLabelRecivedUsedPackaging === ""){
              formData.numberOfLabelRecivedUsedPackagingValidate = "تعداد لیبل مصرف شده نباید خالی باشد!"
          }
          else{
              formData.numberOfLabelRecivedUsedPackagingValidate = ''
          }
  
          if(formData.operator === ""){
              formData.operatorValidate = "نوع تولید باید انتخاب شود!"
          }
          else{
              formData.operatorValidate = ''
          }

        if(formData.productNamePackaging1 === ""){
            formData.productNamePackaging1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.productNamePackaging1Validate = ''
        }

        if(formData.productWeightPackaging1 === ""){
            formData.productWeightPackaging1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.productWeightPackaging1Validate = ''
        }
    }
        

    if(wasteLaseringRow.row == 3){
        if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }
  
          if(formData.numberOfLabelRecivedPackaging === ""){
              formData.numberOfLabelRecivedPackagingValidate = "تعداد لیبل دریافتی نباید خالی باشد!"
          }
          else{
              formData.numberOfLabelRecivedPackagingValidate = ''
          }
  
          if(formData.numberOfLabelRecivedUsedPackaging === ""){
              formData.numberOfLabelRecivedUsedPackagingValidate = "تعداد لیبل مصرف شده نباید خالی باشد!"
          }
          else{
              formData.numberOfLabelRecivedUsedPackagingValidate = ''
          }
  
          if(formData.operator === ""){
              formData.operatorValidate = "نوع تولید باید انتخاب شود!"
          }
          else{
              formData.operatorValidate = ''
          }

        if(formData.productNamePackaging1 === ""){
            formData.productNamePackaging1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.productNamePackaging1Validate = ''
        }

        if(formData.productWeightPackaging1 === ""){
            formData.productWeightPackaging1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.productWeightPackaging1Validate = ''
        }

        if(formData.productNamePackaging2 === ""){
            formData.productNamePackaging2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.productNamePackaging2Validate = ''
        }

        if(formData.productWeightPackaging2 === ""){
            formData.productWeightPackaging2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.productWeightPackaging2Validate = ''
        }
    }

    if(wasteLaseringRow.row == 2){
        if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }
  
          if(formData.numberOfLabelRecivedPackaging === ""){
              formData.numberOfLabelRecivedPackagingValidate = "تعداد لیبل دریافتی نباید خالی باشد!"
          }
          else{
              formData.numberOfLabelRecivedPackagingValidate = ''
          }
  
          if(formData.numberOfLabelRecivedUsedPackaging === ""){
              formData.numberOfLabelRecivedUsedPackagingValidate = "تعداد لیبل مصرف شده نباید خالی باشد!"
          }
          else{
              formData.numberOfLabelRecivedUsedPackagingValidate = ''
          }
  
          if(formData.operator === ""){
              formData.operatorValidate = "نوع تولید باید انتخاب شود!"
          }
          else{
              formData.operatorValidate = ''
          }

        if(formData.productNamePackaging1 === ""){
            formData.productNamePackaging1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.productNamePackaging1Validate = ''
        }

        if(formData.productWeightPackaging1 === ""){
            formData.productWeightPackaging1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.productWeightPackaging1Validate = ''
        }

        if(formData.productNamePackaging2 === ""){
            formData.productNamePackaging2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.productNamePackaging2Validate = ''
        }

        if(formData.productWeightPackaging2 === ""){
            formData.productWeightPackaging2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.productWeightPackaging2Validate = ''
        }

        if(formData.productNamePackaging3 === ""){
            formData.productNamePackaging3Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.productNamePackaging3Validate = ''
        }

        if(formData.productWeightPackaging3 === ""){
            formData.productWeightPackaging3Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.productWeightPackaging3Validate = ''
        }
    }   

    if(wasteLaseringRow.row == 1){
        if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }
  
          if(formData.numberOfLabelRecivedPackaging === ""){
              formData.numberOfLabelRecivedPackagingValidate = "تعداد لیبل دریافتی نباید خالی باشد!"
          }
          else{
              formData.numberOfLabelRecivedPackagingValidate = ''
          }
  
          if(formData.numberOfLabelRecivedUsedPackaging === ""){
              formData.numberOfLabelRecivedUsedPackagingValidate = "تعداد لیبل مصرف شده نباید خالی باشد!"
          }
          else{
              formData.numberOfLabelRecivedUsedPackagingValidate = ''
          }
  
          if(formData.operator === ""){
              formData.operatorValidate = "نوع تولید باید انتخاب شود!"
          }
          else{
              formData.operatorValidate = ''
          }

        if(formData.productNamePackaging1 === ""){
            formData.productNamePackaging1Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.productNamePackaging1Validate = ''
        }

        if(formData.productWeightPackaging1 === ""){
            formData.productWeightPackaging1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.productWeightPackaging1Validate = ''
        }

        if(formData.productNamePackaging2 === ""){
            formData.productNamePackaging2Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.productNamePackaging2Validate = ''
        }

        if(formData.productWeightPackaging2 === ""){
            formData.productWeightPackaging2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.productWeightPackaging2Validate = ''
        }

        if(formData.productNamePackaging3 === ""){
            formData.productNamePackaging3Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.productNamePackaging3Validate = ''
        }

        if(formData.productWeightPackaging3 === ""){
            formData.productWeightPackaging3Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.productWeightPackaging3Validate = ''
        }

        if(formData.productNamePackaging4 === ""){
            formData.productNamePackaging4Validate = "نوع محصول را مشخص کنید!"
        }
        else{
            formData.productNamePackaging4Validate = ''
        }

        if(formData.productWeightPackaging4 === ""){
            formData.productWeightPackaging4Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.productWeightPackaging4Validate = ''
        }
    }   
    }
  
  
      return{
        formData,
        wasteLaseringRow,
        addwasteLaseringRow,
        delWasteLaseringRow,
        validate,
      }
  }
  }
  </script>
  
  <style>
  
  .border-radius{
      border-radius:  5rem;
      font-size: 1.3rem;
  }
  
  textarea {
     font-size: 20px!important;
  }
  
  </style>