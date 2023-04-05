<template>
  <div>
    <div class="card-block">
        <div class="card-header">
            <h1 class="text-center">آغاز تولید سفارش P/O</h1>
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

                <div class="">
                      <div v-if=" startVolumePunchPO.startTimeAndDate==''" class="form-group">
                      <label class="font-medium-5 d-block text-center" for="startVolumePunchPOTimeAndDate">تاریخ و ساعت شروع کار</label>
                        <date-picker type='datetime' color="#03a9f4" id="startVolumePunchPOTimeAndDate" v-model="startVolumePunchPO.startTimeAndDate"></date-picker>
                        <div class="form-text text-danger">
                            {{startVolumePunchPO.startTimeAndDateValidate}}
                        </div>
                      </div>
                      

                      <div v-if="startVolumePunchPO.startTimeAndDate!=''" class="form-group">
                        <label class="font-medium-5 d-block text-center" for="startVolumePunchPOTimeAndDate">تاریخ و ساعت شروع کار</label>
                        <input id="startVolumePunchPOTimeAndDate" type="text" class="form-control position-relative" v-model="startVolumePunchPO.startTimeAndDate" disabled>   
                        <div class="form-text text-danger">
                        {{startVolumePunchPO.startTimeAndDateValidate}}
                        </div>           
                      </div>

                      <!-- <div class="form-group col-md-6">
                        <label class="font-medium-5" for="DrawingPOTimeAndDate">تاریخ و ساعت خاتمه کار</label>
                        <date-picker color="#03a9f4" type='datetime' id="DrawingPOTimeAndDate"></date-picker>
                      </div> -->
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
    
    components: {
    },    
    
    data(){
        
        return{
            startVolumePunchPO:{
                startTimeAndDate:'',
                startTimeAndDateValidate:'',
            }
        }
},

    methods:{
        startDate(){
          if(this.startVolumePunchPO.startTimeAndDate==''){
            document.querySelector('#startVolumePunchPOTimeAndDate').disabled= 'disabled'
          }
        },

    },

setup(){

    const formData = reactive({
        orderProduct:'',
        orderProductValidate:'',
        // startTimeAndDate:'',
        // startTimeAndDateValidate:'',
    })


    function validate(){
        if(formData.orderProduct === ""){
            formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProductValidate = ''
        }

        if(this.startVolumePunchPO.startTimeAndDate === ""){
            this.startVolumePunchPO.startTimeAndDateValidate = "تعداد ورق نباید خالی باشد!"
        }
        else{
            this.startVolumePunchPO.startTimeAndDateValidate = ''
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

.vs__search, .vs__search:focus{
    border: 8px solid transparent !important;
    font-size: 1.3rem !important;
}

/* .custom-select-lg{
    padding-right: 1rem;
} */

</style>