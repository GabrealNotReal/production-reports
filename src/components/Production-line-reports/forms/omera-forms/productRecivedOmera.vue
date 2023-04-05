<!-- eslint-disable no-extra-semi -->
<!-- eslint-disable no-extra-semi -->
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
                          for="numberOfProductRecivedOmera"
                           >تعداد محصول
                          </label>
                          <input 
                          type="number" 
                          class="form-control position-relative input-lg" 
                          id="numberOfProductRecivedOmera" 
                          v-model="formData.numberOfProductRecivedOmera"
                          placeholder="تعداد محصول دریافتی را وارد کنید" 
                          >
                          <div class="form-text text-danger">
                          {{formData.numberOfProductRecivedOmeraValidate}}
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
                        <select class="input-lg custom-select custom-select-lg" id="ProductOriginOmera1" v-model="formData.ProductOriginOmera1" aria-expanded="false" >
                        <option value="" selected="selected">محل تامین محصولات را انتخاب کنید</option>
                        <option value="1">مرحله قبلی</option>
                        <option value="2">انبار</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.ProductOriginOmera1Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfProductRecivedOmera1" 
                        placeholder="تعداد محصول را وارد کنید"
                        v-model="formData.numberOfProductRecivedOmera1"
                        >
                        <div class="form-text text-danger">
                        {{formData.numberOfProductRecivedOmera1Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                            <button
                              @click="addwasteOmeraRow"
                              type="button"
                              class="btn btn-outline-info btn-block btn-lg"
                              :disabled="wasteOmeraRow.row === 1"                            
                            >
                              <i class="ft ft-plus"></i>
                            </button>
                </div>  
            </div>

            
            <div class="form-row" v-if="wasteOmeraRow.row < 2">

                <div class="form-group col-6">
                        <select class="input-lg custom-select custom-select-lg" id="ProductOriginOmera2"  v-model="formData.ProductOriginOmera2" aria-expanded="false" >
                            <option value="" selected="selected">محل تامین محصولات را انتخاب کنید</option>
                        <option value="1">مرحله قبلی</option>
                        <option value="2">انبار</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.ProductOriginOmera2Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfProductRecivedOmera2" 
                        v-model="formData.numberOfProductRecivedOmera2"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfProductRecivedOmera2Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteOmeraRow"
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

        const wasteOmeraRow = reactive({row: 2});
    
        const formData = reactive({
            orderProduct:'',
            orderProductValidate:'',
            ProductOriginOmera1:'',
            ProductOriginOmera2:'',
            ProductOriginOmera1Validate:'',
            ProductOriginOmera2Validate:'',
            numberOfProductRecivedOmera1:'',
            numberOfProductRecivedOmera2:'',
            numberOfProductRecivedOmera1Validate:'',
            numberOfProductRecivedOmera2Validate:'',
     
        })

function addwasteOmeraRow() {
    wasteOmeraRow.row = wasteOmeraRow.row- 1;
}

function delWasteOmeraRow() {
    wasteOmeraRow.row = wasteOmeraRow.row + 1;
}

function validate(){
    if(wasteOmeraRow.row === 2){
        if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }

        if(formData.ProductOriginOmera1 === ""){
            formData.ProductOriginOmera1Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginOmera1Validate = ''
        }

        if(formData.numberOfProductRecivedOmera1 === ""){
            formData.numberOfProductRecivedOmera1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedOmera1Validate = ''
        }
    }
        

    if(wasteOmeraRow.row == 1){
        if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }

        if(formData.ProductOriginOmera1 === ""){
            formData.ProductOriginOmera1Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginOmera1Validate = ''
        }

        if(formData.numberOfProductRecivedOmera1 === ""){
            formData.numberOfProductRecivedOmera1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedOmera1Validate = ''
        }

        if(formData.ProductOriginOmera2 === ""){
            formData.ProductOriginOmera2Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginOmera2Validate = ''
        }

        if(formData.numberOfProductRecivedOmera2 === ""){
            formData.numberOfProductRecivedOmera2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedOmera2Validate = ''
        }
        }  
    }
  
  
      return{
          formData,
          validate,
          wasteOmeraRow,
          addwasteOmeraRow,
          delWasteOmeraRow,
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