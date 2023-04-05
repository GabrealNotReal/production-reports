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
  
                  <div class="form-group">
                          <label 
                          class="font-medium-5 d-block text-center"
                          for="numberOfProductRecivedLasering"
                           >تعداد محصول دریافتی
                          </label>
                          <input 
                          type="number" 
                          class="form-control position-relative input-lg" 
                          id="numberOfProductRecivedLasering" 
                          v-model="formData.numberOfProductRecivedLasering"
                          placeholder="تعداد محصول دریافتی را وارد کنید" 
                          >
                          <div class="form-text text-danger">
                          {{formData.numberOfProductRecivedLaseringValidate}}
                          </div>
                  </div>            
  
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
  
      const formData = reactive({
          orderProduct:'',
          orderProductValidate:'',
          numberOfProductRecivedLasering:'',
          numberOfProductRecivedLaseringValidate:'',
          operator:'',
          operatorValidate:'',
  
      })
  
      function validate(){
          if(formData.orderProduct === ""){
              formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
          }
          else{
              formData.orderProductValidate = ''
          }
  
          if(formData.numberOfProductRecivedLasering === ""){
              formData.numberOfProductRecivedLaseringValidate = "تعداد ورق نباید خالی باشد!"
          }
          else{
              formData.numberOfProductRecivedLaseringValidate = ''
          }
  
          if(formData.operator === ""){
              formData.operatorValidate = "نوع تولید باید انتخاب شود!"
          }
          else{
              formData.operatorValidate = ''
          }
      }
  
  
      return{
          formData,
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