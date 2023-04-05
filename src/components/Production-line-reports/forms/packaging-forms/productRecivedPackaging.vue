<template>
    <div>
      <div class="card-block">
          <div class="card-header">
              <h1 class="text-center">دریافت محصول از مرحله قبلی</h1>
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
<!--   
                  <div class="form-group">
                          <label 
                          class="font-medium-5 d-block text-center"
                          for="numberOfProductRecivedPackaging"
                           >تعداد محصول
                          </label>
                          <input 
                          type="number" 
                          class="form-control position-relative input-lg" 
                          id="numberOfProductRecivedPackaging" 
                          v-model="formData.numberOfProductRecivedPackaging"
                          placeholder="تعداد محصول دریافتی را وارد کنید" 
                          >
                          <div class="form-text text-danger">
                          {{formData.numberOfProductRecivedPackagingValidate}}
                          </div>
                  </div>   -->
                  
<!-- --waste number start-- -->
        <div>
            <label 
            class="font-medium-5 d-block text-center"
            >محصولات دریافتی
            </label>
            
            <div class="form-row">

                <div class="form-group col-6">
                        <select class="input-lg custom-select custom-select-lg" id="ProductOriginPackaging1" v-model="formData.ProductOriginPackaging1" aria-expanded="false" >
                        <option value="" selected="selected">محل تامین محصولات را انتخاب کنید</option>
                        <option value="1">مرحله قبلی</option>
                        <option value="2">انبار</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.ProductOriginPackaging1Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfProductRecivedPackaging1" 
                        placeholder="تعداد محصول را وارد کنید"
                        v-model="formData.numberOfProductRecivedPackaging1"
                        >
                        <div class="form-text text-danger">
                        {{formData.numberOfProductRecivedPackaging1Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                            <button
                              @click="addwastePackagingRow"
                              type="button"
                              class="btn btn-outline-info btn-block btn-lg"
                              :disabled="wastePackagingRow.row === 1"                            
                            >
                              <i class="ft ft-plus"></i>
                            </button>
                </div>  
            </div>

            
            <div class="form-row" v-if="wastePackagingRow.row < 2">

                <div class="form-group col-6">
                        <select class="input-lg custom-select custom-select-lg" id="ProductOriginPackaging2"  v-model="formData.ProductOriginPackaging2" aria-expanded="false" >
                            <option value="" selected="selected">محل تامین محصولات را انتخاب کنید</option>
                        <option value="1">مرحله قبلی</option>
                        <option value="2">انبار</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.ProductOriginPackaging2Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfProductRecivedPackaging2" 
                        v-model="formData.numberOfProductRecivedPackaging2"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfProductRecivedPackaging2Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWastePackagingRow"
                          type="button"
                          class="btn btn-outline-danger btn-block btn-lg"
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

        const wastePackagingRow = reactive({row: 2});
    
        const formData = reactive({
            orderProduct:'',
            orderProductValidate:'',
            ProductOriginPackaging1:'',
            ProductOriginPackaging2:'',
            ProductOriginPackaging1Validate:'',
            ProductOriginPackaging2Validate:'',
            numberOfProductRecivedPackaging1:'',
            numberOfProductRecivedPackaging2:'',
            numberOfProductRecivedPackaging1Validate:'',
            numberOfProductRecivedPackaging2Validate:'',
     
        })

function addwastePackagingRow() {
    wastePackagingRow.row = wastePackagingRow.row- 1;
}

function delWastePackagingRow() {
    wastePackagingRow.row = wastePackagingRow.row + 1;
}

function validate(){
    if(wastePackagingRow.row === 2){
        if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }

        if(formData.ProductOriginPackaging1 === ""){
            formData.ProductOriginPackaging1Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginPackaging1Validate = ''
        }

        if(formData.numberOfProductRecivedPackaging1 === ""){
            formData.numberOfProductRecivedPackaging1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedPackaging1Validate = ''
        }
    }
        

    if(wastePackagingRow.row == 1){
        if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }

        if(formData.ProductOriginPackaging1 === ""){
            formData.ProductOriginPackaging1Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginPackaging1Validate = ''
        }

        if(formData.numberOfProductRecivedPackaging1 === ""){
            formData.numberOfProductRecivedPackaging1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedPackaging1Validate = ''
        }

        if(formData.ProductOriginPackaging2 === ""){
            formData.ProductOriginPackaging2Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginPackaging2Validate = ''
        }

        if(formData.numberOfProductRecivedPackaging2 === ""){
            formData.numberOfProductRecivedPackaging2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedPackaging2Validate = ''
        }
        }  
    }
  
  
      return{
          formData,
          validate,
          wastePackagingRow,
          addwastePackagingRow,
          delWastePackagingRow,
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