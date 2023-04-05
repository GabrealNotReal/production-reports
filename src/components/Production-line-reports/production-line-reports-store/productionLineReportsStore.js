import { defineStore } from 'pinia'
import axios from "axios"
import Swal from 'sweetalert2'

axios.defaults.baseURL = 'http://192.168.0.136/sap/api/';

export const useProductionLineStore = defineStore('authenticate-user' ,{
  state: () => {
      return {
        authenticateUsers: [],
        submitCuttingforms: [],
        listOfRolls: [],
        listOfSheets: [],
        listOfDescriptions: [],
        storingCode: [],
        cuttingRollOrSheetStartDate: [],
        orderProductIDs: [],
        storingCodes: [],
        productsList: [],
        returnIDs: [],
        reasonsForWaste: [],
        operators: [],
        // storageLocations:[]
        }
  },

  getters: {
      getAuthenticateUser(state) {
          return state.authenticateUsers
        },

      getSubmitCuttingform(state) {
          return state.submitCuttingforms
        },

      allRolls(state) {
          return state.listOfRolls
        },

      allSheets(state) {
          return state.listOfSheets
        },

      allDescriptions(state) {
          return state.listOfDescriptions
        },

      getStoringCodes(state) {
          return state.storingCode
        },

      getStorageLocation(state) {
          return state.storageLocations
        },

      getOrderProductID(state) {
          return state.orderProductIDs
        },

      allproducts(state) {
          return state.productsList
        },

      allReturnIDs(state) {
          return state.returnIDs
        },

      allReasonForWaste(state) {
          return state.reasonsForWaste
        },

      allOperators(state) {
          return state.operators
        },

  },

  actions: {
      // async authenticateUser(formData) {
      //   try {
      //     const response = await axios.post('authenticate-user-for-production-line', {
      //         id: formData.username,
      //         productionlvl: formData.productionlvl,
      //         // completed: false
      //     })
      //     // console.log(formData)
      //     this.authenticateUsers.unshift(response.data)
      //     // console.log(response.data)
          
      //     if(response.data == false){
      //       Swal.fire({
      //         title: "!شناسه معتبر نیست",
      //         icon: "error",
      //         confirmButtonText: "باشه",
      //     });
      //     }
      //     else{
      //       Swal.fire({
      //           title: "ورود به سیستم توسط " + response.data.name,
      //           icon: "success",
      //           showConfirmButton: false,
      //           timerProgressBar: true,
      //           timer: 3000,
      //           toast: true,
      //           position: 'top',
      //       }
      //       );
      //     }
      // } catch (error) { 
      //     Swal.fire({
      //         title: "!مشکل",
      //         text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
      //         icon: "error",
      //         confirmButtonText: "Ok",
      //     });
      // }
      //   },

      async submitCuttingform(formData) {
        try {
          const response = await axios.post('submit-form-cutting-level', {
            api: true,
            subLevel: formData.subLevel,
            rollOrSheetSelected: formData.rollOrSheetSelected,
            roll_id: formData.roll,
            sheet_id: formData.sheet,
            rollOrSheet: formData.rollOrSheet,
            rollOrSheet1: formData.rollOrSheet1,
            rollOrSheet2: formData.rollOrSheet2,
            rollOrSheet3: formData.rollOrSheet3,
            start_cutting_date: formData.cutStartDate,
            finish_cutting_date: formData.cutFinishDate,
            reel_weight: formData.reelWeight,
            additionals_weight: formData.additionalsWeight,
            descripition: formData.description,
            moreDescription: formData.moreDescription,
            NumberOfPrimaryCut: formData.NumberOfPrimaryCut,
            lenghtOfPrimaryCut: formData.lenghtOfPrimaryCut,
            usageSecondCut1: formData.usageSecondCut1,
            usageSecondCut2: formData.usageSecondCut2,
            usageSecondCut3: formData.usageSecondCut3,
            usageSecondCut4: formData.usageSecondCut4,
            orderProductID: formData.orderProductID,
            orderProductID1: formData.orderProductID1,
            orderProductID2: formData.orderProductID2,
            orderProductID3: formData.orderProductID3,
            orderProductID4: formData.orderProductID4,
            storingCode1: formData.storingCode1,
            storingCode2: formData.storingCode2,
            storingCode3: formData.storingCode3,
            storingCode4: formData.storingCode4,
            numberOfSecondaryCut1: formData.numberOfSecondaryCut1,
            numberOfSecondaryCut2: formData.numberOfSecondaryCut2,
            numberOfSecondaryCut3: formData.numberOfSecondaryCut3,
            numberOfSecondaryCut4: formData.numberOfSecondaryCut4,
            secondCutX1: formData.secondCutX1,
            secondCutX2: formData.secondCutX2,
            secondCutX3: formData.secondCutX3,
            secondCutX4: formData.secondCutX4,
            secondCutY1: formData.secondCutY1,
            secondCutY2: formData.secondCutY2,
            secondCutY3: formData.secondCutY3,
            secondCutY4: formData.secondCutY4,
            sheetDeliveredPlace1: formData.sheetDeliveredPlace1,
            sheetDeliveredPlace2: formData.sheetDeliveredPlace2,
            sheetDeliveredPlace3: formData.sheetDeliveredPlace3,
            numberOfSheetDeliveredCutting1: formData.numberOfSheetDeliveredCutting1,
            numberOfSheetDeliveredCutting2: formData.numberOfSheetDeliveredCutting2,
            numberOfSheetDeliveredCutting3: formData.numberOfSheetDeliveredCutting3,
            numberOfSheetDeliveredStore1: formData.numberOfSheetDeliveredStore1,
            numberOfSheetDeliveredStore2: formData.numberOfSheetDeliveredStore2,
            numberOfSheetDeliveredStore3: formData.numberOfSheetDeliveredStore3,
              // completed: false
          })
          // console.log(formData)
          // this.submitCuttingforms.unshift(response.data)
          console.log(response.data)
          if(response.data == 1){
            Swal.fire('اطلاعات وارد  شده ثبت شد')
          }

      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },

      async submitSheetCutform(formData , secondCutData) {
        try {
          const response = await axios.post('cut-report-store', {
            // subLevel: formData.subLevel,
            // rollOrSheetSelected: formData.rollOrSheetSelected,
            row: secondCutData,
            roll_id: formData.rollOrSheet.id,
            api: true,
            user_id: formData.primaryCutOperator,
            // sheet_id: formData.sheet,
            // rollOrSheet: formData.rollOrSheet,
            // rollOrSheet1: formData.rollOrSheet1,
            // rollOrSheet2: formData.rollOrSheet2,
            // rollOrSheet3: formData.rollOrSheet3,
            // start_cutting_date: formData.cutStartDate,
            // finish_cutting_date: formData.cutFinishDate,
            // reel_weight: formData.reelWeight,
            // additionals_weight: formData.additionalsWeight,
            'first_cut_description': formData.description,
            // moreDescription: formData.moreDescription,
            'first_cut_qty': formData.numberOfPrimaryCut,
            'first_cut_length': formData.lenghtOfPrimaryCut,
            'first_cut_weight': formData.weightOfPrimaryCut,
            'first_cut_operator': formData.primaryCutOperator,
            // usageSecondCut1: formData.usageSecondCut1,
            // usageSecondCut2: formData.usageSecondCut2,
            // usageSecondCut3: formData.usageSecondCut3,
            // usageSecondCut4: formData.usageSecondCut4,
            // orderProductID: formData.orderProductID,
            // orderProductID1: formData.orderProductID1,
            // orderProductID2: formData.orderProductID2,
            // orderProductID3: formData.orderProductID3,
            // orderProductID4: formData.orderProductID4,
            // storingCode1: formData.storingCode1,
            // storingCode2: formData.storingCode2,
            // storingCode3: formData.storingCode3,
            // storingCode4: formData.storingCode4,
            // numberOfSecondaryCut1: formData.numberOfSecondaryCut1,
            // numberOfSecondaryCut2: formData.numberOfSecondaryCut2,
            // numberOfSecondaryCut3: formData.numberOfSecondaryCut3,
            // numberOfSecondaryCut4: formData.numberOfSecondaryCut4,
            // secondCutX1: formData.secondCutX1,
            // secondCutX2: formData.secondCutX2,
            // secondCutX3: formData.secondCutX3,
            // secondCutX4: formData.secondCutX4,
            // secondCutY1: formData.secondCutY1,
            // secondCutY2: formData.secondCutY2,
            // secondCutY3: formData.secondCutY3,
            // secondCutY4: formData.secondCutY4,
            // sheetDeliveredPlace1: formData.sheetDeliveredPlace1,
            // sheetDeliveredPlace2: formData.sheetDeliveredPlace2,
            // sheetDeliveredPlace3: formData.sheetDeliveredPlace3,
            // numberOfSheetDeliveredCutting1: formData.numberOfSheetDeliveredCutting1,
            // numberOfSheetDeliveredCutting2: formData.numberOfSheetDeliveredCutting2,
            // numberOfSheetDeliveredCutting3: formData.numberOfSheetDeliveredCutting3,
            // numberOfSheetDeliveredStore1: formData.numberOfSheetDeliveredStore1,
            // numberOfSheetDeliveredStore2: formData.numberOfSheetDeliveredStore2,
            // numberOfSheetDeliveredStore3: formData.numberOfSheetDeliveredStore3,
              // completed: false
          })
          // console.log(formData)
          // this.submitCuttingforms.unshift(response.data)
          // console.log(response.data)

          if(response.data == 1){
            Swal.fire('اطلاعات وارد  شده ثبت شد')
          }

      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },

        
      async getListOfRolls() {
        try {
          const response = await axios.get('get-rolls-list')
          this.listOfRolls = response.data
          // console.log(response.data)

      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },
        
      async getListOfSheets() {
        try {
          const response = await axios.get('get-sheets-list')
          this.listOfSheets = response.data
          // console.log(response.data)

      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },
        
      async getListOfDescription() {
        try {
          const response = await axios.get('get-description-list')
          this.listOfDescriptions = response.data
          // console.log(response.data)

      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },
        
      async getStoringCode() {
        try {
          const response = await axios.get('get-storing-code')
          this.storingCode = response.data
          // console.log(response.data)

      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },
        
      async getCuttingRollOrSheetStartDate() {
        try {
          const response = await axios.get('get-cutting-roll-or-sheet-start-date')
          this.cuttingRollOrSheetStartDate = response.data

      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },
        
      async getListOfOrderProductIDs() {
        try {
          const response = await axios.get('get-order-products-list')
          this.orderProductIDs = response.data

      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },
        
      async getListOfStoringCodes() {
        try {
          const response = await axios.get('get-storing-code')
          this.storingCodes = response.data

      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },
        
      async getListOfproducts() {
        try {
          const response = await axios.get('get-products-list')
          this.productsList = response.data
      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },
        
      async getReturnIDs() {
        try {
          const response = await axios.get('get-return-id-list')
          this.returnIDs = response.data
      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },
        
      async getListOfReasonsForWaste() {
        try {
          const response = await axios.get('get-reasons-for-waste-list')
          this.reasonsForWaste = response.data
      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },
        
      async getListOfOperators() {
        try {
          const response = await axios.get('get-reasons-for-waste-list')
          this.operators = response.data
      } catch (error) { 
          Swal.fire({
              title: "!مشکل",
              text: "!مشکلی پیش آمده، لطفا به ادمین نرم افزار اطلاع دهید",
              icon: "error",
              confirmButtonText: "Ok",
          });
      }
        },
        
      // async allStorageLocations() {
      //     try {
      // await axios.get('/api/get/storageLocation/all')
      //       .then(response => (this.storageLocations = response.data))
      //       // console.log(this.storageLocations)
    
      //     } catch (error) {
      //       Swal.fire({
      //         title: "Error!",
      //         text: "There is a problem, please try again",
      //         icon: "error",
      //         confirmButtonText: "Ok",
      //       });
      //     }
      //   },
  },
})


// defineStore('lineReports', {
//     state: () => {
//         return {
//             suppliers: [],
//             storageLocations:[]
//           }
//     },

//     getters: {
//         getSuppliers(state) {
//             return state.suppliers
//           },

//         getStorageLocation(state) {
//             return state.storageLocations
//           },
//     },

//     actions: {
//         async allSuppliers() {
//             try {
//         await axios.get('/api/get/supplier/all')
//               .then(response => (this.suppliers = response.data))
//               // console.log(this.suppliers)
      
//             } catch (error) {
//               Swal.fire({
//                 title: "Error!",
//                 text: "There is a problem, please try again",
//                 icon: "error",
//                 confirmButtonText: "Ok",
//               });
//             }
//           },
          
//         async allStorageLocations() {
//             try {
//         await axios.get('/api/get/storageLocation/all')
//               .then(response => (this.storageLocations = response.data))
//               // console.log(this.storageLocations)
      
//             } catch (error) {
//               Swal.fire({
//                 title: "Error!",
//                 text: "There is a problem, please try again",
//                 icon: "error",
//                 confirmButtonText: "Ok",
//               });
//             }
//           },
//     },
//   })



  // export const useStore = defineStore('authenticate-user', {
  //   state: () => {
  //       return {
  //           suppliers: [],
  //           storageLocations:[]
  //         }
  //   },

  //   getters: {
  //       getSuppliers(state) {
  //           return state.suppliers
  //         },

  //       getStorageLocation(state) {
  //           return state.storageLocations
  //         },
  //   },

  //   actions: {
  //       async allSuppliers() {
  //           try {
  //       await axios.get('/api/get/supplier/all')
  //             .then(response => (this.suppliers = response.data))
  //             // console.log(this.suppliers)
      
  //           } catch (error) {
  //             Swal.fire({
  //               title: "Error!",
  //               text: "There is a problem, please try again",
  //               icon: "error",
  //               confirmButtonText: "Ok",
  //             });
  //           }
  //         },
          
  //       async allStorageLocations() {
  //           try {
  //       await axios.get('/api/get/storageLocation/all')
  //             .then(response => (this.storageLocations = response.data))
  //             // console.log(this.storageLocations)
      
  //           } catch (error) {
  //             Swal.fire({
  //               title: "Error!",
  //               text: "There is a problem, please try again",
  //               icon: "error",
  //               confirmButtonText: "Ok",
  //             });
  //           }
  //         },
  //   },
  // })