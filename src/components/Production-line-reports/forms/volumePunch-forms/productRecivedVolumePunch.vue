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
                          for="numberOfProductRecivedVolumePunch"
                           >تعداد محصول
                          </label>
                          <input 
                          type="number" 
                          class="form-control position-relative input-lg" 
                          id="numberOfProductRecivedVolumePunch" 
                          v-model="formData.numberOfProductRecivedVolumePunch"
                          placeholder="تعداد محصول دریافتی را وارد کنید" 
                          >
                          <div class="form-text text-danger">
                          {{formData.numberOfProductRecivedVolumePunchValidate}}
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
                        <select class="input-lg custom-select custom-select-lg" id="ProductOriginVolumePunch1" v-model="formData.ProductOriginVolumePunch1" aria-expanded="false" >
                        <option value="" selected="selected">محل تامین محصولات را انتخاب کنید</option>
                        <option value="1">مرحله قبلی</option>
                        <option value="2">انبار</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.ProductOriginVolumePunch1Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfProductRecivedVolumePunch1" 
                        placeholder="تعداد محصول را وارد کنید"
                        v-model="formData.numberOfProductRecivedVolumePunch1"
                        >
                        <div class="form-text text-danger">
                        {{formData.numberOfProductRecivedVolumePunch1Validate}}
                        </div>
                </div>

                <div class="col-md-1">
                            <button
                              @click="addwasteVolumePunchRow"
                              type="button"
                              class="btn btn-outline-info btn-block btn-lg"
                              :disabled="wasteVolumePunchRow.row === 1"                            
                            >
                              <i class="ft ft-plus"></i>
                            </button>
                </div>  
            </div>

            
            <div class="form-row" v-if="wasteVolumePunchRow.row < 2">

                <div class="form-group col-6">
                        <select class="input-lg custom-select custom-select-lg" id="ProductOriginVolumePunch2"  v-model="formData.ProductOriginVolumePunch2" aria-expanded="false" >
                            <option value="" selected="selected">محل تامین محصولات را انتخاب کنید</option>
                        <option value="1">مرحله قبلی</option>
                        <option value="2">انبار</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.ProductOriginVolumePunch2Validate}}
                        </div>
                </div>

                <div class="form-group col-5">
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfProductRecivedVolumePunch2" 
                        v-model="formData.numberOfProductRecivedVolumePunch2"
                        placeholder="تعداد محصول را وارد کنید" 
                        >
                    <div class="form-text text-danger">
                        {{formData.numberOfProductRecivedVolumePunch2Validate}}
                    </div>
                </div>

                <div class="col-md-1">
                        <button
                          @click="delWasteVolumePunchRow"
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

        const wasteVolumePunchRow = reactive({row: 2});
    
        const formData = reactive({
            orderProduct:'',
            orderProductValidate:'',
            ProductOriginVolumePunch1:'',
            ProductOriginVolumePunch2:'',
            ProductOriginVolumePunch1Validate:'',
            ProductOriginVolumePunch2Validate:'',
            numberOfProductRecivedVolumePunch1:'',
            numberOfProductRecivedVolumePunch2:'',
            numberOfProductRecivedVolumePunch1Validate:'',
            numberOfProductRecivedVolumePunch2Validate:'',
     
        })

function addwasteVolumePunchRow() {
    wasteVolumePunchRow.row = wasteVolumePunchRow.row- 1;
}

function delWasteVolumePunchRow() {
    wasteVolumePunchRow.row = wasteVolumePunchRow.row + 1;
}

function validate(){
    if(wasteVolumePunchRow.row === 2){
        if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }

        if(formData.ProductOriginVolumePunch1 === ""){
            formData.ProductOriginVolumePunch1Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginVolumePunch1Validate = ''
        }

        if(formData.numberOfProductRecivedVolumePunch1 === ""){
            formData.numberOfProductRecivedVolumePunch1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedVolumePunch1Validate = ''
        }
    }
        

    if(wasteVolumePunchRow.row == 1){
        if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }

        if(formData.ProductOriginVolumePunch1 === ""){
            formData.ProductOriginVolumePunch1Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginVolumePunch1Validate = ''
        }

        if(formData.numberOfProductRecivedVolumePunch1 === ""){
            formData.numberOfProductRecivedVolumePunch1Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedVolumePunch1Validate = ''
        }

        if(formData.ProductOriginVolumePunch2 === ""){
            formData.ProductOriginVolumePunch2Validate = "محل تامین محصول را مشخص کنید!"
        }
        else{
            formData.ProductOriginVolumePunch2Validate = ''
        }

        if(formData.numberOfProductRecivedVolumePunch2 === ""){
            formData.numberOfProductRecivedVolumePunch2Validate = "تعداد محصول را وارد کنید!"
        }
        else{
            formData.numberOfProductRecivedVolumePunch2Validate = ''
        }
        }  
    }
  
  
      return{
          formData,
          validate,
          wasteVolumePunchRow,
          addwasteVolumePunchRow,
          delWasteVolumePunchRow,
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