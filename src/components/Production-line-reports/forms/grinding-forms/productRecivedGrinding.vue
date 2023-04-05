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
                          for="numberOfProductRecivedGrinding"
                           >تعداد محصول
                          </label>
                          <input 
                          type="number" 
                          class="form-control position-relative input-lg" 
                          id="numberOfProductRecivedGrinding" 
                          v-model="formData.numberOfProductRecivedGrinding"
                          placeholder="تعداد محصول دریافتی را وارد کنید" 
                          >
                          <div class="form-text text-danger">
                          {{formData.numberOfProductRecivedGrindingValidate}}
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
                        <select class="input-lg custom-select custom-select-lg" id="ProductOriginGrinding1" v-model="formData.ProductOriginGrinding1" aria-expanded="false" >
                        <option value="" selected="selected">محل تامین محصولات را انتخاب کنید</option>
                        <option value="1">مرحله قبلی</option>
                        <option value="2">انبار</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.ProductOriginGrinding1Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfProductRecivedGrinding1" 
                        placeholder="تعداد محصول را وارد کنید"
                        v-model="formData.numberOfProductRecivedGrinding1"
                        >
                        <div class="form-text text-danger">
                        {{formData.numberOfProductRecivedGrinding1Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                            <button
                              @click="addwasteGrindingRow"
                              type="button"
                              class="btn btn-outline-info btn-block btn-lg"
                              :disabled="wasteGrindingRow.row === 1"                            
                            >
                              <i class="ft ft-plus"></i>
                            </button>
                </div>  
            </div>

            
            <div class="form-row" v-if="wasteGrindingRow.row < 2">

                <div class="form-group col-md-6">
                        <select class="input-lg custom-select custom-select-lg" id="ProductOriginGrinding2"  v-model="formData.ProductOriginGrinding2" aria-expanded="false" >
                            <option value="" selected="selected">محل تامین محصولات را انتخاب کنید</option>
                        <option value="1">مرحله قبلی</option>
                        <option value="2">انبار</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.ProductOriginGrinding2Validate}}
                        </div>
                </div>

                <div class="form-group col-md-5">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfProductRecivedGrinding2" 
                        v-model="formData.numberOfProductRecivedGrinding2"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfProductRecivedGrinding2Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteGrindingRow"
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

        const wasteGrindingRow = reactive({row: 2});
    
        const formData = reactive({
            orderProduct:'',
            orderProductValidate:'',
            ProductOriginGrinding1:'',
            ProductOriginGrinding2:'',
            ProductOriginGrinding1Validate:'',
            ProductOriginGrinding2Validate:'',
            numberOfProductRecivedGrinding1:'',
            numberOfProductRecivedGrinding2:'',
            numberOfProductRecivedGrinding1Validate:'',
            numberOfProductRecivedGrinding2Validate:'',
     
        })

function addwasteGrindingRow() {
    wasteGrindingRow.row = wasteGrindingRow.row- 1;
}

function delWasteGrindingRow() {
    wasteGrindingRow.row = wasteGrindingRow.row + 1;
}

function validate(){
    if(wasteGrindingRow.row === 2){
        if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }

        if(formData.ProductOriginGrinding1 === ""){
            formData.ProductOriginGrinding1Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginGrinding1Validate = ''
        }

        if(formData.numberOfProductRecivedGrinding1 === ""){
            formData.numberOfProductRecivedGrinding1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedGrinding1Validate = ''
        }
    }
        

    if(wasteGrindingRow.row == 1){
        if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }

        if(formData.ProductOriginGrinding1 === ""){
            formData.ProductOriginGrinding1Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginGrinding1Validate = ''
        }

        if(formData.numberOfProductRecivedGrinding1 === ""){
            formData.numberOfProductRecivedGrinding1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedGrinding1Validate = ''
        }

        if(formData.ProductOriginGrinding2 === ""){
            formData.ProductOriginGrinding2Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginGrinding2Validate = ''
        }

        if(formData.numberOfProductRecivedGrinding2 === ""){
            formData.numberOfProductRecivedGrinding2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedGrinding2Validate = ''
        }
        }  
    }
  
  
      return{
          formData,
          validate,
          wasteGrindingRow,
          addwasteGrindingRow,
          delWasteGrindingRow,
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