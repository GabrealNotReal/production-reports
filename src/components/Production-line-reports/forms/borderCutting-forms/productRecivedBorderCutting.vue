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
                          for="numberOfProductRecivedBorderCutting"
                           >تعداد محصول
                          </label>
                          <input 
                          type="number" 
                          class="form-control position-relative input-lg" 
                          id="numberOfProductRecivedBorderCutting" 
                          v-model="formData.numberOfProductRecivedBorderCutting"
                          placeholder="تعداد محصول دریافتی را وارد کنید" 
                          >
                          <div class="form-text text-danger">
                          {{formData.numberOfProductRecivedBorderCuttingValidate}}
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
                        <select class="input-lg custom-select custom-select-lg" id="ProductOriginBorderCutting1" v-model="formData.ProductOriginBorderCutting1" aria-expanded="false" >
                        <option value="" selected="selected">محل تامین محصولات را انتخاب کنید</option>
                        <option value="1">مرحله قبلی</option>
                        <option value="2">انبار</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.ProductOriginBorderCutting1Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfProductRecivedBorderCutting1" 
                        placeholder="تعداد محصول را وارد کنید"
                        v-model="formData.numberOfProductRecivedBorderCutting1"
                        >
                        <div class="form-text text-danger">
                        {{formData.numberOfProductRecivedBorderCutting1Validate}}
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
                        <select class="input-lg custom-select custom-select-lg" id="ProductOriginBorderCutting2"  v-model="formData.ProductOriginBorderCutting2" aria-expanded="false" >
                            <option value="" selected="selected">محل تامین محصولات را انتخاب کنید</option>
                        <option value="1">مرحله قبلی</option>
                        <option value="2">انبار</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.ProductOriginBorderCutting2Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfProductRecivedBorderCutting2" 
                        v-model="formData.numberOfProductRecivedBorderCutting2"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfProductRecivedBorderCutting2Validate}}
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
import { reactive } from '@vue/reactivity';
  
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

        const wasteOmeraRow = reactive({row: 2})
    
        const formData = reactive({
            orderProduct:'',
            orderProductValidate:'',
            ProductOriginBorderCutting1:'',
            ProductOriginBorderCutting2:'',
            ProductOriginBorderCutting1Validate:'',
            ProductOriginBorderCutting2Validate:'',
            numberOfProductRecivedBorderCutting1:'',
            numberOfProductRecivedBorderCutting2:'',
            numberOfProductRecivedBorderCutting1Validate:'',
            numberOfProductRecivedBorderCutting2Validate:'',
     
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

        if(formData.ProductOriginBorderCutting1 === ""){
            formData.ProductOriginBorderCutting1Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginBorderCutting1Validate = ''
        }

        if(formData.numberOfProductRecivedBorderCutting1 === ""){
            formData.numberOfProductRecivedBorderCutting1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedBorderCutting1Validate = ''
        }
    }
        

    if(wasteOmeraRow.row == 1){
        if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }

        if(formData.ProductOriginBorderCutting1 === ""){
            formData.ProductOriginBorderCutting1Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginBorderCutting1Validate = ''
        }

        if(formData.numberOfProductRecivedBorderCutting1 === ""){
            formData.numberOfProductRecivedBorderCutting1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedBorderCutting1Validate = ''
        }

        if(formData.ProductOriginBorderCutting2 === ""){
            formData.ProductOriginBorderCutting2Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginBorderCutting2Validate = ''
        }

        if(formData.numberOfProductRecivedBorderCutting2 === ""){
            formData.numberOfProductRecivedBorderCutting2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedBorderCutting2Validate = ''
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