<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
  <div>
    <div class="card-block">
        <div class="card-header">
            <h1 class="text-center">تحویل محصول</h1>
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
                        for="numberOfSheetDeliveredStraightening"
                         >تعداد محصول
                        </label>
                        <input 
                        type="number" 
                        class="form-control position-relative input-lg" 
                        id="numberOfSheetDeliveredStraightening" 
                        placeholder="تعداد محصول ارسالی را وارد کنید" 
                        v-model="formData.numberOfSheetDeliveredStraightening"
                        >
                        <div class="form-text text-danger">
                        {{formData.numberOfSheetDeliveredStraighteningValidate}}
                        </div>
                </div>

                <div class="form-group">
                        <label 
                        class="font-medium-5 d-block text-center"
                        for="productReciverStraightening"
                         >تحویل گیرنده محصول
                        </label>
                        <select 
                        class="input-lg custom-select custom-select-lg" 
                        id="productReciverStraightening" 
                        aria-expanded="false"
                        v-model="formData.productReciverStraightening"
                        >
                        <option value="">تحویل گیرنده محصول را انتخاب کنید</option>
                        <option value="1"> تولید</option>
                        <option value="2">اپراتور مرحله بعدی</option>
                        </select>
                        <div class="form-text text-danger">
                        {{formData.productReciverStraighteningValidate}}
                        </div>
                </div>


                <div class="form-check mt-3">
				      <input class="form-check-input" type="checkbox" name="deliveryDrawingSituation" id="deliveryDuringDrawing" value="option1">
				      <label class="form-check-label font-medium-5" for="deliveryDuringDrawing">
				      	پایان فرایند تولید و تحویل این سفارش
				      </label>
				</div>


                <button class="btn btn-info btn-block text-center mt-3" type="submit">تایید فرم</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
    // import Swal from 'sweetalert2'

export default {
data(){

    return{

    }
},

methods:{

},

setup(){

    const formData = reactive({
        orderProduct:'',
        orderProductValidate:'',
        numberOfSheetDeliveredStraightening:'',
        numberOfSheetDeliveredStraighteningValidate:'',
        productReciverStraightening:'',
        productReciverStraighteningValidate:'',

    })

    function validate(){
        if(formData.orderProduct === ""){
            formData.orderProductValidate = "شناسه تولید نباید خالی باشد!"
        }
        else{
            formData.orderProductValidate = ''
        }

        if(formData.numberOfSheetDeliveredStraightening === ""){
            formData.numberOfSheetDeliveredStraighteningValidate = "تعداد محصول نباید خالی باشد!"
        }
        else{
            formData.numberOfSheetDeliveredStraighteningValidate = ''
        }

        if(formData.productReciverStraightening === ""){
            formData.productReciverStraighteningValidate = "تحویل گیرنده نباید خالی باشد!"
        }
        else{
            formData.productReciverStraighteningValidate = ''
        }
    }
    
        // function endOfPO(){
        //     Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       Swal.fire(
        //         'Deleted!',
        //         'Your file has been deleted.',
        //         'success'
        //       )
        //     }
        //   })            
        // }

    return{
        // endOfPO,
        validate,
        formData,
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

.checkbox-lg .form-check-input{
 top: .8rem;
 scale: 1.4;
 }

.checkbox-lg .form-check-label {
 padding-top: 13px;
 }

</style>