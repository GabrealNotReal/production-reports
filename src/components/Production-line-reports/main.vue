<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
    <!--Container-Start-->
    <div class="container mt-5">
      <div class="row gy-4 justify-content-center">
        <img class="col-7 d-block mt-5" src="../../assets/logoHeavens.png" alt="heavens-logo" >
        <!-- <div class="mt-3 row justify-content-md-center align-items-center"> -->
          <div class="form-group col-11">
            <label
            class="form-control-lg d-block text-center" 
            for="userID"
            >شناسه شما
            </label>
            <input 
            type="password" 
            class="form-control position-relative input-lg" 
            id="userID" 
            v-model="formData.username"
            placeholder="کد شناسه خود را وارد کنید"
            required
            >
            <div class="form-text text-danger">
              {{validateData.username}}
            </div>     
          </div>

        <div class="form-group col-11">
        <label class="form-control-lg d-block text-center">مرحله تولید را وارد کنید</label>
        <select id="productionLvl" @click="productionLvlfunc" v-model="formData.productionLevel" class="form-control form-control-lg" >
          <option value="">مرحله تولید را انتخاب کنید</option>
          <option value="#cuttingModal">1. برشکاری</option>
          <option value="#templateTestModal">2. تست قالب</option>
          <option value="#drawing">3. کشش</option>
          <option value="#borderCuttingModal">4. پرس دوربرش</option>
          <option value="#omeraModal">5. امرا</option>
          <option value="#volumePunchModal">6. پانچ ولوم</option>
          <option value="#grindingModal">7. سنگ زنی</option>
          <option value="#straighteningModal">8. تابگیری</option>
          <option value="#laseringModal">9. لیزر</option>
          <option value="#packagingModal">10. بسته بندی</option>
        </select>
        <div class="form-text text-danger">
          {{validateData.productionLevel}}
        </div>  
        </div>

        <div class="d-grid gap-2 col-11">
          <button @click="authenticateUser" id="selectLvlBtn" class="btn btn-logo btn-lg mt-3" data-bs-toggle="modal" data-keyboard="false" data-bs-target="">مرحله بعدی</button>
        </div>
              </div>

        <div class="row">
          <div class="form-group mt-4 d-flex justify-content-around">
            <button id="productionPlanner" class="btn btn-outline-logo btn-lg col-3" data-keyboard="false" data-bs-toggle="modal" data-bs-target="#higherAccess" data-whatever="@mdo">دسترسی برنامه ریز تولید</button>
            <button id="qualityControlSupervisr" class="btn btn-outline-logo btn-lg col-3" data-keyboard="false" data-bs-toggle="modal" data-bs-target="#higherAccess">دسترسی سرپرست کنترل کیفی</button>
            <button id="management" class="btn btn-outline-logo btn-lg col-3" data-keyboard="false" data-bs-toggle="modal" data-bs-target="#higherAccess">دسترسی مدیریت</button>
          </div>
        </div>

  			<!-- Cutting-Modal -->
        <div class="modal fade text-left" id="cuttingModal" tabindex="-1" role="dialog" aria-labelledby="basicModalLabel3" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
					<h3 class="modal-title" id="cuttingModalLabe">مرحله برشکاری</h3>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
            <div class="form-group container">
              <label class="form-control-md mb-3 h4">نوع عملیات را مشخص کنید.</label>
              <div class="row gy-2">
                <button @click="goToStartAndEndCuttingRollOrSheet" class="btn btn-outline-secondary btn-lg d-block" data-bs-dismiss="modal">اطلاعات آغاز و پایان برش از رول یا شیت</button>
                <button @click="goToSheetCut" class="btn btn-outline-secondary btn-lg d-block" data-bs-dismiss="modal">برش ورق از رول</button>
                <!-- <button @click="goToSheetDelivered" class="btn btn-outline-secondary btn-lg d-block" data-bs-dismiss="modal"> تحویل ورق به مرحله بعدی</button>
                <button @click="goTosheetDeliveredForTestTemplate" class="btn btn-outline-secondary btn-lg d-block" data-bs-dismiss="modal"> تحویل ورق جهت تست قالب</button>
                <button @click="goToSheetDeliveredForWaste" class="btn btn-outline-secondary btn-lg d-block" data-bs-dismiss="modal">تحویل ورق جهت جبران ضایعات</button>
                <button @click="goToReceiveReturnSheets" class="btn btn-outline-secondary btn-lg d-block" data-bs-dismiss="modal">دریافت ورق مرجوعی</button>
                <button @click="goToCuttingWaste" class="btn btn-outline-secondary btn-lg d-block" data-bs-dismiss="modal">اعلام ضایعات رول یا شیت</button>
                <button @click="goTocutWeightInformation" class="btn btn-outline-secondary btn-lg d-block" data-bs-dismiss="modal">اطلاعات وزنی نمونه برش از رول یا شیت</button> -->
              </div>
            </div>
          </div>
				</div>
				</div>
			</div>
      <!-- </Cutting-Modal> -->

  			<!-- templateTest-Modal -->
        <div class="modal fade text-left" id="templateTestModal" tabindex="-1" role="dialog" aria-labelledby="basicModalLabel3" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
					<h3 class="modal-title" id="templateTestLabel">مرحله تست قالب</h3>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
            <div class="form-group">
              <label class="form-control-md mb-3 h4">نوع عملیات را مشخص کنید.</label>
              <div class="row">
                <button @click="goToTemplateTestInfo" class="btn btn-outline-secondary btn-lg d-block" data-bs-dismiss="modal">ورود اطلاعات تست قالب</button>
              </div>
            </div>

          </div>
				</div>
				</div>
			</div>
      <!-- </templateTest-Modal> -->

  			<!-- Drawing-Modal -->
        <div class="modal fade text-left" id="drawing" tabindex="-1" role="dialog" aria-labelledby="basicModalLabel3" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
					<h3 class="modal-title" id="drawingModalLabe">مرحله کشش</h3>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
            <div class="form-group container">
              <label class="form-control-md mb-3 h4">نوع عملیات را مشخص کنید.</label>
              <div class="row gy-2">
                <button @click="goToSheetRecivedDrawing" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">دریافت مواد</button>
                <button @click="goToStartDrawingPO" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">آغاز تولید سفارش P/O</button>
                <button @click="goToSheetDeliveredDrawing" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">تحویل محصول به مرحله بعدی</button>
                <button @click="goToReturnSheetsDrawing" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal"> عودت مواد</button>
                <button @click="goToDrawingReport" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">گزارش تولید P/O</button>
                <button @click="goToWeasteReportDrawing" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">گزارش ضایعات ، افت گرید و ارفاقی</button>
              </div>
            </div>

          </div>
				</div>
				</div>
			</div>
      <!-- </Drawing-Modal> -->

  			<!-- BorderCutting-Modal -->
        <div class="modal fade text-left" id="borderCuttingModal" tabindex="-1" role="dialog" aria-labelledby="basicModalLabel3" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
					<h3 class="modal-title" id="borderCuttingLabe">مرحله پرس دوربرش</h3>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
            <div class="form-group container">
              <label class="form-control-md mb-3 h4">نوع عملیات را مشخص کنید.</label>
              <div class="row gy-2">
              <button @click="goToProductRecivedBorderCutting" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">دریافت محصول از مرحله قبلی</button>
              <button @click="goToStartBorderCuttingPO" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">آغاز تولید سفارش P/O</button>
              <button @click="goToSheetDeliveredBorderCutting" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">تحویل محصول به مرحله بعدی</button>
              <button @click="goToBorderCuttingReport" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">گزارش تولید P/O</button>
              <button @click="goToWasteReportBorderCutting" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">گزارش ضایعات ، افت گرید و ارفاقی</button>
              </div>              
            </div>
          </div>
				</div>
				</div>
			</div>
      <!-- </BorderCutting-Modal> -->

  			<!-- Omera-Modal -->
        <div class="modal fade text-left" id="omeraModal" tabindex="-1" role="dialog" aria-labelledby="basicModalLabel3" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
					<h3 class="modal-title" id="omeraLabel">مرحله امرا</h3>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
            <div class="form-group container">
              <label class="form-control-md mb-3 h4">نوع عملیات را مشخص کنید.</label>
              <div class="row gy-2">
              <button @click="goToProductRecivedOmera" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">دریافت محصول از مرحله قبلی</button>
              <button @click="goToStartOmeraPO" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">آغاز تولید سفارش P/O</button>
              <button @click="goToSheetDeliveredOmera" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">تحویل محصول به مرحله بعدی</button>
              <button @click="goToOmeraReport" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">گزارش تولید P/O</button>
              <button @click="goToWasteReportOmera" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">گزارش ضایعات ، افت گرید و ارفاقی</button>
              </div>            
            </div>

          </div>
				</div>
				</div>
			</div>
      <!-- </Omera-Modal> -->

  			<!-- volumePunch-Modal -->
        <div class="modal fade text-left" id="volumePunchModal" tabindex="-1" role="dialog" aria-labelledby="basicModalLabel3" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
					<h3 class="modal-title" id="volumePunchLabel">مرحله پانچ ولوم</h3>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
            <div class="form-group container">
              <label class="form-control-md mb-3 h4">نوع عملیات را مشخص کنید.</label>
              <div class="row gy-2">
              <button @click="goToProductRecivedVolumePunch" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">دریافت محصول از مرحله قبلی</button>
              <button @click="goToStartVolumePunchPO" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">آغاز تولید سفارش P/O</button>
              <button @click="goToSheetDeliveredVolumePunch" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">تحویل محصول به مرحله بعدی</button>
              <button @click="goToVolumePunchReport" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">گزارش تولید P/O</button>
              <button @click="goToWasteReportVolumePunch" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">گزارش ضایعات ، افت گرید و ارفاقی</button>
              </div>            
            </div>

          </div>
				</div>
				</div>
			</div>
      <!-- </volumePunch-Modal> -->

  			<!-- Grinding-Modal -->
        <div class="modal fade text-left" id="grindingModal" tabindex="-1" role="dialog" aria-labelledby="basicModalLabel3" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
					<h3 class="modal-title" id="grindingLabel">مرحله سنگزنی</h3>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
            <div class="form-group container">
              <label class="form-control-md mb-3 h4">نوع عملیات را مشخص کنید.</label>
              <div class="row gy-2">
              <button @click="goToProductRecivedGrinding" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">دریافت محصول از مرحله قبلی</button>
              <button @click="goToStartGrindingPO" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">آغاز تولید سفارش P/O</button>
              <button @click="goToSheetDeliveredGrinding" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">تحویل محصول به مرحله بعدی</button>
              <button @click="goToGrindingReport" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">گزارش تولید P/O</button>
              <button @click="goToWasteReportGrinding" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">گزارش ضایعات ، افت گرید و ارفاقی</button>
              </div>            
            </div>
          </div>
				</div>
				</div>
			</div>
      <!-- </Grinding-Modal> -->

  		<!-- Straighten-Modal -->
      <div class="modal fade text-left" id="straighteningModal" tabindex="-1" role="dialog" aria-labelledby="basicModalLabel3" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
				<h3 class="modal-title" id="straighteningLabel">مرحله تابگیری</h3>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
          <div class="form-group container">
            <label class="form-control-md mb-3 h4">نوع عملیات را مشخص کنید.</label>
              <div class="row gy-2">
            <button @click="goToProductRecivedStraightening" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">دریافت محصول از مرحله قبلی</button>
            <button @click="goToStartStraighteningPO" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">آغاز تولید سفارش P/O</button>
            <button @click="goToSheetDeliveredStraightening" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">تحویل محصول به مرحله بعدی</button>
            <button @click="goToStraighteningReport" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">گزارش تولید P/O</button>
            <button @click="goToWasteReportStraightening" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">گزارش ضایعات ، افت گرید و ارفاقی</button>
              </div>          
          </div>
        </div>
			</div>
			</div>
			</div>
      <!-- </Grinding-Modal> -->

  		<!-- Laser-Modal -->
      <div class="modal fade text-left" id="laseringModal" tabindex="-1" role="dialog" aria-labelledby="basicModalLabel3" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
				<h3 class="modal-title" id="laseringLabel">مرحله لیزر</h3>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
          <div class="form-group container">
            <label class="form-control-md mb-3 h4">نوع عملیات را مشخص کنید.</label>
              <div class="row gy-2">
            <button @click="goToProductRecivedLaser" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">دریافت محصول از مرحله قبلی</button>
            <button @click="goToStartLaserPO" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">آغاز تولید سفارش P/O</button>
            <button @click="goToSheetDeliveredLaser" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">تحویل محصول به مرحله بعدی</button>
            <button @click="goToLaserReport" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">گزارش تولید P/O</button>
            <button @click="goToWasteReportLaser" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">گزارش ضایعات ، افت گرید و ارفاقی</button>
              </div>          
          </div>
        </div>
			</div>
			</div>
			</div>
      <!-- </Laser-Modal> -->

  		<!-- Packaging-Modal -->
      <div class="modal fade text-left" id="packagingModal" tabindex="-1" role="dialog" aria-labelledby="basicModalLabel3" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
				<h3 class="modal-title" id="packagingLabel">مرحله بسته بندی</h3>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
          <div class="form-group container">
            <label class="form-control-md mb-3 h3">نوع عملیات را مشخص کنید.</label>
              <div class="row gy-2">
            <button @click="goToProductRecivedPackaging" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">دریافت محصول از مرحله قبلی</button>
            <button @click="goToGettingLabelPackaging" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">دریافت لیبل و نمونه وزن</button>
            <button @click="goToStartPackagingPO" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">آغاز بسته بندی سفارش P/O</button>
            <button @click="goToSheetDeliveredPackaging" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">تحویل محصول به انبار فروش</button>
            <button @click="goToPackagingReport" class="btn btn-outline-secondary btn-lg btn-block" data-bs-dismiss="modal">گزارش بسته بندی P/O</button>
              </div>          
          </div>
        </div>
			</div>
			</div>
			</div>
      <!-- </Packaging-Modal> -->

  		<!-- higherAccess-Modal -->
      <div class="modal fade text-left" id="higherAccess" tabindex="-1" role="dialog" aria-labelledby="basicModalLabel3" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="higherAccessLabel">دسترسی</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="userName" class="form-control-md h3">کد شناسه خود را وارد کنید:</label>
            <input type="text" class="form-control" id="userName">
          </div>

          <div class="form-group">
            <label for="password" class="form-control-md h3">کد رمز خود را وارد کنید:</label>
            <input type="password" class="form-control" id="password">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
        <button type="button" class="btn btn-info">تایید</button>
      </div>
    </div>
  </div>
			</div>
      <!-- </Packaging-Modal> -->

    </div><!--Container-End-->
  </template>
  
  <script>
import { reactive} from '@vue/runtime-core';
import Swal from 'sweetalert2'
import { useProductionLineStore } from './production-line-reports-store/productionLineReportsStore'
  

  export default {
  
    components:{
  },

      data() {
      return {
        // lvlSelected : 'null',
        productionLvlModal : 'null',
      };
    },
    
    methods:{

      goToSheetCut() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/cut/done'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToStartAndEndCuttingRollOrSheet() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/cut/startAndEndCuttingRollOrSheet'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToReceiveReturnSheets() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/cut/receiveReturnSheets'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToCuttingWaste() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/cut/waste'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goTocutWeightInformation() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/cut/weightInformation'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToSheetDelivered() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/cut/sheetDelivered'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToSheetDeliveredForWaste() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/cut/sheetDeliveredForWastes'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goTosheetDeliveredForTestTemplate() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/cut/sheetDeliveredForTestTemplate'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToSheetRecivedDrawing() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/draw/sheetRecived'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToReturnSheetsDrawing() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/draw/returnSheets'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToSheetDeliveredDrawing() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/draw/sheetDelivered'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToDrawingReport() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/draw/report'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToWeasteReportDrawing() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/draw/wasteReport'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToStartDrawingPO() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/draw/startPO'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToProductRecivedBorderCutting() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/borderCutting/ProductRecived'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToStartBorderCuttingPO() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/borderCutting/startPO'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToSheetDeliveredBorderCutting() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/borderCutting/sheetDelivered'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToBorderCuttingReport() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/borderCutting/report'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToWasteReportBorderCutting() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/borderCutting/wasteReport'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToProductRecivedOmera() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/omera/productRecived'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToStartOmeraPO() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/omera/startPO'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToSheetDeliveredOmera() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/omera/SheetDelivered'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToOmeraReport() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/omera/report'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToWasteReportOmera() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/omera/WasteReport'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToProductRecivedVolumePunch() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/volumePunch/productRecived'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToStartVolumePunchPO() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/volumePunch/StartPO'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToSheetDeliveredVolumePunch() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/volumePunch/sheetDelivered'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToVolumePunchReport() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/volumePunch/report'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToWasteReportVolumePunch() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/volumePunch/wasteReport'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToProductRecivedGrinding() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/grinding/productRecived'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToStartGrindingPO() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/grinding/startPO'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToSheetDeliveredGrinding() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/grinding/sheetDelivered'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToGrindingReport() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/grinding/report'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToWasteReportGrinding() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/grinding/wasteReport'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToProductRecivedStraightening() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/straightening/productRecived'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToStartStraighteningPO() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/straightening/startPO'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToSheetDeliveredStraightening() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/straightening/sheetDelivered'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToStraighteningReport() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/straightening/report'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToWasteReportStraightening() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/straightening/wasteReport'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToProductRecivedPackaging() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/packaging/productRecived'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToGettingLabelPackaging() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/packaging/gettingLabel'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToStartPackagingPO() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/packaging/startPO'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToSheetDeliveredPackaging() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/packaging/sheetDelivered'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToPackagingReport() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/packaging/report'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToProductRecivedLaser() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/lasering/ProductRecived'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToSheetDeliveredLaser() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/lasering/sheetDelivered'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToStartLaserPO() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/lasering/startPO'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToLaserReport() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/lasering/report'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToWasteReportLaser() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/lasering/WasteReport'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToTemplateTestInfo() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/templateTest/templateTestInfo'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      goToQualityControlSupervisor() {
        if(this.formData.username == 'att'){
          this.$router.push({path:'/production/higherAccess/qualityControlSupervisor'})
        }
        else{
          Swal.fire({
            title: 'شناسه کاربری خود را به درستی وارد کنید',
            input: 'text',
            inputPlaceholder: 'شناسه کاربری',
            icon: 'error',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'برگشت',
            confirmButtonText: 'ورود',
            confirmButtonColor:'#048eca',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                // .then(response => {
                if (login == 'att') {
                  this.$router.push({path:'/production/cut/done'})
                }
                else{
                  Swal.showValidationMessage(
                    'شناسه کاربری صحیح نمی باشد'
                  )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        
          });
        }
      },

      productionLvlfunc(){
        // if(this.formData.username != '' ){
          this.lvlSelected = document.querySelector('#productionLvl').value;
          document.querySelector('#selectLvlBtn').dataset.bsTarget = this.lvlSelected;
        // }
      },
    },

    setup() {

      const formData = reactive({
        username : null,
        productionLevel : '',
      })
      
      const validateData = reactive({
        username : '',
        productionLevel : '',
      })

      const store = useProductionLineStore()
      const lvlSelected = reactive('')

      // const authenticateUser = computed(() => store.getAuthenticateUser);

      async function authenticateUser() {
      if (formData.username != 'att' || formData.productionLevel == "") {
        if(formData.username == null){
          validateData.username = "شناسه کاربری را صحیح وارد کنید!";
        }
        else{
          validateData.productionLevel = "مرحله تولید را انتخاب کنید!";
        }
      }
      // else {
      //   // loading.value = true;
      //   // titleErrorText.value = "";
      //   await ( 
      //     store.authenticateUser(formData)

      //     // store.authenticateUser(formData.productionLevel)
      //     )

      //     // const lvlSelected = document.querySelector('#productionLvl').value;
      //     // document.querySelector('#selectLvlBtn').dataset.bsTarget = lvlSelected;

      //   // loading.value = false;
      // }
        // console.log(formData)
    }

      return{
        store,
        authenticateUser,
        formData,
        validateData,
        lvlSelected,
      }
    }
  

  };
  </script>
  
  <style>
.btn-logo{
  /* background-color: #0199dc!important ; */
  --bs-btn-color: #ffffff!important;
  --bs-btn-bg: #0199dc!important;
  --bs-btn-border-color: #0199dc!important;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #20b7f8!important;
  --bs-btn-hover-border-color: #20b7f8!important;
  --bs-btn-focus-shadow-rgb: 49,132,253;
  --bs-btn-active-color: #fff!important;
  --bs-btn-active-bg: #01a9dc!important;
  --bs-btn-active-border-color: #0199dc!important;
  --bs-btn-active-shadow: inset 0 3px 5pxrgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff!important;
  --bs-btn-disabled-bg: #0199dc!important;
  --bs-btn-disabled-border-color: #0199dc!important;
}

.btn-outline-logo{
  --bs-btn-color: #0199dc!important;
    --bs-btn-border-color: #0199dc!important;
    --bs-btn-hover-color: #fff!important;
    --bs-btn-hover-bg: #0199dc!important;
    --bs-btn-hover-border-color: #0199dc!important;
    --bs-btn-focus-shadow-rgb: 13, 110, 253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #0199dc;
    --bs-btn-active-border-color: #0199dc;
    --bs-btn-active-shadow: inset 0 3px 5pxrgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #0199dc;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #0199dc;
    --bs-gradient: none;
}

/* .form-control-lg{
  font-size: 1.7rem!important;} */

input.form-control.input-lg{
  font-size: 1.7rem;
  height: 3.5rem;
}
  html body .la {
    font-size: 4rem;
  }
  .claimSteps1 {
    width: 210px;
    height: 200px;
    background-color: #d3407a;
    color: #ffffff;
    text-align: center;
    position: relative;
    margin: -1.7rem;
    display: table;
  }
  .claimSteps2 {
    width: 210px;
    height: 200px;
    background-color: #21a9c1;
    color: #ffffff;
    text-align: center;
    position: relative;
    margin: 0rem;
    display: table;
  }
  .claimSteps3 {
    width: 210px;
    height: 200px;
    background-color: #d5a327;
    color: #ffffff;
    text-align: center;
    position: relative;
    margin: 1.7rem;
    display: table;
  }
  .claimStepNumber {
    margin-top: 35px;
    font-size: 32px;
    background-color: #ffffff;
    color: #2dccd3;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    position: absolute;
    display: table-cell;
    left: 50%;
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
  }
  .icon {
    margin-top: 35px;
    font-size: 32px;
    color: #ffffff;
    position: absolute;
    display: table-cell;
    left: 50%;
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
  }
  .claimStepTitle {
    color: #ffffff;
    font-size: 18px;
    margin-top: 130px;
  }

  .modal-backdrop {
  z-index: -1!important;
}

  /* .btn-lg, .btn-group-lg > .btn {
    --bs-btn-padding-y: 1.4rem!important;
    --bs-btn-padding-x: 2.7rem!important;
  } */
  </style>