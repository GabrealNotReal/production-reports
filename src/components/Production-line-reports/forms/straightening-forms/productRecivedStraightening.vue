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
                          for="numberOfProductRecivedStraightening"
                           >تعداد محصول
                          </label>
                          <input 
                          type="number" 
                          class="form-control position-relative input-lg" 
                          id="numberOfProductRecivedStraightening" 
                          v-model="formData.numberOfProductRecivedStraightening"
                          placeholder="تعداد محصول دریافتی را وارد کنید" 
                          >
                          <div class="form-text text-danger">
                          {{formData.numberOfProductRecivedStraighteningValidate}}
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
                        <select class="input-lg custom-select custom-select-lg" id="ProductOriginStraightening1" v-model="formData.ProductOriginStraightening1" aria-expanded="false" >
                        <option value="" selected="selected">محل تامین محصولات را انتخاب کنید</option>
                        <option value="1">مرحله قبلی</option>
                        <option value="2">انبار</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.ProductOriginStraightening1Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfProductRecivedStraightening1" 
                        placeholder="تعداد محصول را وارد کنید"
                        v-model="formData.numberOfProductRecivedStraightening1"
                        >
                        <div class="form-text text-danger">
                        {{formData.numberOfProductRecivedStraightening1Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                            <button
                              @click="addwasteStraighteningRow"
                              type="button"
                              class="btn btn-outline-info btn-block btn-lg"
                              :disabled="wasteStraighteningRow.row === 1"                            
                            >
                              <i class="ft ft-plus"></i>
                            </button>
                </div>  
            </div>

            
            <div class="form-row" v-if="wasteStraighteningRow.row < 2">

                <div class="form-group col-6">
                        <select class="input-lg custom-select custom-select-lg" id="ProductOriginStraightening2"  v-model="formData.ProductOriginStraightening2" aria-expanded="false" >
                            <option value="" selected="selected">محل تامین محصولات را انتخاب کنید</option>
                        <option value="1">مرحله قبلی</option>
                        <option value="2">انبار</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.ProductOriginStraightening2Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfProductRecivedStraightening2" 
                        v-model="formData.numberOfProductRecivedStraightening2"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfProductRecivedStraightening2Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteStraighteningRow"
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

        const wasteStraighteningRow = reactive({row: 2});
    
        const formData = reactive({
            orderProduct:'',
            orderProductValidate:'',
            ProductOriginStraightening1:'',
            ProductOriginStraightening2:'',
            ProductOriginStraightening1Validate:'',
            ProductOriginStraightening2Validate:'',
            numberOfProductRecivedStraightening1:'',
            numberOfProductRecivedStraightening2:'',
            numberOfProductRecivedStraightening1Validate:'',
            numberOfProductRecivedStraightening2Validate:'',
     
        })

function addwasteStraighteningRow() {
    wasteStraighteningRow.row = wasteStraighteningRow.row- 1;
}

function delWasteStraighteningRow() {
    wasteStraighteningRow.row = wasteStraighteningRow.row + 1;
}

function validate(){
    if(wasteStraighteningRow.row === 2){
        if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }

        if(formData.ProductOriginStraightening1 === ""){
            formData.ProductOriginStraightening1Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginStraightening1Validate = ''
        }

        if(formData.numberOfProductRecivedStraightening1 === ""){
            formData.numberOfProductRecivedStraightening1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedStraightening1Validate = ''
        }
    }
        

    if(wasteStraighteningRow.row == 1){
        if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }

        if(formData.ProductOriginStraightening1 === ""){
            formData.ProductOriginStraightening1Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginStraightening1Validate = ''
        }

        if(formData.numberOfProductRecivedStraightening1 === ""){
            formData.numberOfProductRecivedStraightening1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedStraightening1Validate = ''
        }

        if(formData.ProductOriginStraightening2 === ""){
            formData.ProductOriginStraightening2Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginStraightening2Validate = ''
        }

        if(formData.numberOfProductRecivedStraightening2 === ""){
            formData.numberOfProductRecivedStraightening2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedStraightening2Validate = ''
        }
        }  
    }
  
  
      return{
          formData,
          validate,
          wasteStraighteningRow,
          addwasteStraighteningRow,
          delWasteStraighteningRow,
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