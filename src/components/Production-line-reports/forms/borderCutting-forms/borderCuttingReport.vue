<template>
  <div>
    <div class="card-block">
        <div class="card-header">
            <h1 class="text-center">گزارش تولید P/O</h1>
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
                        for="numberOfProducedProductBorderCutting"
                         >تعداد محصول
                        </label>
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfProducedProductBorderCutting" 
                        v-model="formData.numberOfProducedProductBorderCutting"
                        placeholder="تعداد محصول تولید شده را وارد کنید" 
                        >
                        <div class="form-text text-danger">
                        {{formData.numberOfProducedProductBorderCuttingValidate}}
                        </div>
                </div>

                <div class="row">
                    <div class="form-group col-6">
                        <label 
                        class="font-medium-5"
                        for="machinsParticipant"
                        >دستگاه های به کارگیری شده
                        </label>

                        <v-select 
                        class="input-lg" 
                        :options="['دستگاه 1','دستگاه 2' , 'دستگاه 3']" 
                        multiple 
                        id="machinsParticipant" 
                        aria-expanded="false"   
                        placeholder="دستگاه های به کارگیری شده در این تولید را انتخاب کنید" 
                        v-model="formData.machinsParticipant"                       
                        />
                        <div class="form-text text-danger">
                        {{formData.machinsParticipantValidate}}
                        </div>
                    </div>

                    <div class="form-group col-6">
                        <label 
                        class="font-medium-5"
                        for="staffParticipant"
                        >کارکنان مشارکت داشته در این تولید
                        </label>

                        <v-select 
                        class="input-lg" 
                        :options="['محمدرضا هدایت','فرهاد مغانلو' , 'کامران هومن']" 
                        multiple 
                        id="staffParticipant" 
                        aria-expanded="false" 
                        v-model="formData.staffParticipant"
                        placeholder="کارکنان مشارکت داشته در این تولید را انتخاب کنید" 
                        />
                        <div class="form-text text-danger">
                        {{formData.staffParticipantValidate}}
                        </div>
                    </div>                    
                </div>

                <div class="form-group">
                        <label 
                        class="font-medium-5 d-block text-center"
                        for="endProductionReason"
                        >علت پایان تولید
                        </label>
                    
                        <!-- <v-select 
                        class="input-lg" 
                        :options="['نقص فنی دستگاه','مصدومیت اپراتور' , 'انجام سفارش ضروری', 'قطع برق', 'پایان ساعت کاری' , 'پایان تولید سفارش']" 
                        multiple 
                        id="endProductionReason" 
                        v-model="formData.endProductionReason"
                        aria-expanded="false" 
                        placeholder="علت پایان تولید را انتخاب کنید"                                                
                        /> -->

                        <select class="input-lg custom-select custom-select-lg" id="endProductionReason" v-model="formData.endProductionReason" aria-expanded="false">
                        <option value="">علت پایان تولید را انتخاب کنید</option>
                        <option value="1">نقص فنی دستگاه</option>
                        <option value="2">مصدومیت اپراتور</option>
                        <option value="3">انجام سفارش ضروری</option>
                        <option value="4">قطع برق</option>
                        <option value="5">پایان ساعت کاری</option>
                        <option value="6">پایان تولید سفارش</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.endProductionReasonValidate}}
                        </div>
                    </div>

                    <div >
                          <!-- <div v-if=" drawingReport.startTimeAndDate==''" class="form-group col-md-6">
                          <label class="font-medium-5" for="startDrawingTimeAndDate">تاریخ و ساعت شروع کار</label>
                            <date-picker type='datetime' color="#03a9f4" id="startDrawingTimeAndDate" v-model="drawingReport.startTimeAndDate"></date-picker>
                          </div>
                        
                          <div v-if="drawingReport.startTimeAndDate!=''" class="form-group col-md-6">
                            <label class="font-medium-5" for="startDrawingTimeAndDate">تاریخ و ساعت شروع کار</label>
                            <input id="startDrawingTimeAndDate" type="text" class="form-control position-relative" v-model="drawingReport.startTimeAndDate" disabled>              
                          </div> -->
                        
                          <div class="form-group">
                            <label class="font-medium-5 d-block text-center" for="endBorderCuttingTimeAndDate">تاریخ و ساعت خاتمه کار</label>
                            <date-picker color="#03a9f4" type='datetime' id="endBorderCuttingTimeAndDate" v-model="formData.endBorderCuttingTimeAndDate"></date-picker>
                        <div class="form-text text-danger">
                        {{formData.endBorderCuttingTimeAndDateValidate}}
                        </div>
                          </div>
                    </div>    


                <button class="btn btn-info btn-block text-center mt-3" type="submit">تایید فرم</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import Swal from 'sweetalert2';
import { reactive } from '@vue/reactivity';


export default {
    
    components: {
    },    
    
    data(){
        
        return{
            drawingReport:{
                startTimeAndDate:'',
            }
        }
},

    methods:{
        startDate(){
          if(this.drawingReport.startTimeAndDate==''){
            document.querySelector('#startDrawingTimeAndDate').disabled= 'disabled'
          }
        },

    },

setup(){

  const formData = reactive({
        orderProduct:'',
        orderProductValidate:'',
        numberOfProducedProductBorderCutting:'',
        numberOfProducedProductBorderCuttingValidate:'',
        machinsParticipant:'',
        machinsParticipantValidate:'',
        staffParticipant:'',
        staffParticipantValidate:'',
        endProductionReason:'',
        endProductionReasonValidate:'',
        endBorderCuttingTimeAndDate:'',
        endBorderCuttingTimeAndDateValidate:'',

    })

    function validate(){
        if(formData.orderProduct === ""){
            formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProductValidate = ''
        }

        if(formData.numberOfProducedProductBorderCutting === ""){
            formData.numberOfProducedProductBorderCuttingValidate = "تعداد محصول نباید خالی باشد!"
        }
        else{
            formData.numberOfProducedProductBorderCuttingValidate = ''
        }

        if(formData.machinsParticipant === ""){
            formData.machinsParticipantValidate = "دستگاه های به کارگیری شده باید انتخاب شود!"
        }
        else{
            formData.machinsParticipantValidate = ''
        }

        if(formData.staffParticipant === ""){
            formData.staffParticipantValidate = "کارکنان مشارکت داشته باید انتخاب شود!"
        }
        else{
            formData.staffParticipantValidate = ''
        }

        if(formData.endProductionReason === ""){
            formData.endProductionReasonValidate = "علت پایان تولید باید انتخاب شود!"
        }
        else{
            formData.endProductionReasonValidate = ''
        }

        if(formData.endBorderCuttingTimeAndDate === ""){
            formData.endBorderCuttingTimeAndDateValidate = "تاریخ و ساعت خاتمه کار باید مشخص شود!"
        }
        else{
            formData.endBorderCuttingTimeAndDateValidate = ''
        }

        if(formData.orderProduct !== "" && formData.numberOfProducedProductBorderCutting !== "" && formData.machinsParticipant !== "" && formData.staffParticipant !== "" && formData.endProductionReason === "6" && formData.endBorderCuttingTimeAndDate !== ""){
          endOfPO()
        }
    }

    function endOfPO(){
        Swal.fire({
          title: 'اتمام تولید P/O ؟',
          text: "آیا تولید این شناسه به پایان رسیده است؟",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#FFA500',
          confirmButtonText: 'بله تمام شده',
          cancelButtonText: 'خیر ، تولید ادامه دارد!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'اتمام تولید',
              'تولید شناسه ... به پایان رسید.',
              'success'
            )
          }
        })    
    }

    return{
        endOfPO,
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