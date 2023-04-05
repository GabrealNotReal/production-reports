import { createRouter , createWebHistory } from 'vue-router';

import home from  "./components/HelloWorld.vue"
import productionLineMain from "./components/Production-line-reports/main.vue"
import productionOrder from "./components/Production-line-reports/main-forms/productionOrder.vue"
import cuttingLvl from "./components/Production-line-reports/forms/cuttingLvl.vue"
import sheetLvl from "./components/Production-line-reports/forms/sheetLvl.vue"
import sheetCut from "./components/Production-line-reports/forms/cutting-forms/sheetCut.vue"
import startAndEndCuttingRollOrSheet from "./components/Production-line-reports/forms/cutting-forms/startAndEndCuttingRollOrSheet.vue"
import receiveReturnSheets from "./components/Production-line-reports/forms/cutting-forms/receiveReturnSheets.vue"
import cuttingWaste from "./components/Production-line-reports/forms/cutting-forms/cuttingWaste.vue"
import cutWeightInformation from "./components/Production-line-reports/forms/cutting-forms/cutWeightInformation.vue"
import sheetDeliveredCutting from "./components/Production-line-reports/forms/cutting-forms/sheetDeliveredCutting.vue"
import sheetDeliveredForWastes from "./components/Production-line-reports/forms/cutting-forms/sheetDeliveredForWastes.vue"
import sheetDeliveredForTestTemplate from "./components/Production-line-reports/forms/cutting-forms/sheetDeliveredForTestTemplate.vue"
import sheetRecivedDrawing from "./components/Production-line-reports/forms/drawing-forms/sheetRecivedDrawing.vue"
import returnSheetsDrawing from "./components/Production-line-reports/forms/drawing-forms/returnSheetsDrawing.vue"
import sheetDeliveredDrawing from "./components/Production-line-reports/forms/drawing-forms/sheetDeliveredDrawing.vue"
import drawingReport from "./components/Production-line-reports/forms/drawing-forms/drawingReport.vue"
import wasteReportDrawing from "./components/Production-line-reports/forms/drawing-forms/wasteReportDrawing.vue"
import startDrawingPO from "./components/Production-line-reports/forms/drawing-forms/startDrawingPO.vue"
import productRecivedBorderCutting from "./components/Production-line-reports/forms/borderCutting-forms/productRecivedBorderCutting.vue"
import startBorderCuttingPO from "./components/Production-line-reports/forms/borderCutting-forms/startBorderCuttingPO.vue"
import sheetDeliveredBorderCutting from "./components/Production-line-reports/forms/borderCutting-forms/sheetDeliveredBorderCutting.vue"
import borderCuttingReport from "./components/Production-line-reports/forms/borderCutting-forms/borderCuttingReport.vue"
import wasteReportBorderCutting from "./components/Production-line-reports/forms/borderCutting-forms/wasteReportBorderCutting.vue"
import productRecivedOmera from "./components/Production-line-reports/forms/omera-forms/productRecivedOmera.vue"
import startOmeraPO from "./components/Production-line-reports/forms/omera-forms/startOmeraPO.vue"
import sheetDeliveredOmera from "./components/Production-line-reports/forms/omera-forms/sheetDeliveredOmera.vue"
import omeraReport from "./components/Production-line-reports/forms/omera-forms/omeraReport.vue"
import wasteReportOmera from "./components/Production-line-reports/forms/omera-forms/wasteReportOmera.vue"
import productRecivedVolumePunch from "./components/Production-line-reports/forms/volumePunch-forms/productRecivedVolumePunch.vue"
import startVolumePunchPO from "./components/Production-line-reports/forms/volumePunch-forms/startVolumePunchPO.vue"
import sheetDeliveredVolumePunch from "./components/Production-line-reports/forms/volumePunch-forms/sheetDeliveredVolumePunch.vue"
import volumePunchReport from "./components/Production-line-reports/forms/volumePunch-forms/volumePunchReport.vue"
import wasteReportVolumePunch from "./components/Production-line-reports/forms/volumePunch-forms/wasteReportVolumePunch.vue"
import productRecivedGrinding from "./components/Production-line-reports/forms/grinding-forms/productRecivedGrinding.vue"
import startGrindingPO from "./components/Production-line-reports/forms/grinding-forms/startGrindingPO.vue"
import sheetDeliveredGrinding from "./components/Production-line-reports/forms/grinding-forms/sheetDeliveredGrinding.vue"
import grindingReport from "./components/Production-line-reports/forms/grinding-forms/grindingReport.vue"
import wasteReportGrinding from "./components/Production-line-reports/forms/grinding-forms/wasteReportGrinding.vue"
import productRecivedStraightening from "./components/Production-line-reports/forms/straightening-forms/productRecivedStraightening.vue"
import startStraighteningPO from "./components/Production-line-reports/forms/straightening-forms/startStraighteningPO.vue"
import sheetDeliveredStraightening from "./components/Production-line-reports/forms/straightening-forms/sheetDeliveredStraightening.vue"
import straighteningReport from "./components/Production-line-reports/forms/straightening-forms/straighteningReport.vue"
import wasteReportStraightening from "./components/Production-line-reports/forms/straightening-forms/wasteReportStraightening.vue"
import productRecivedPackaging from "./components/Production-line-reports/forms/packaging-forms/productRecivedPackaging.vue"
import gettingLabelPackaging from "./components/Production-line-reports/forms/packaging-forms/gettingLabelPackaging.vue"
import startPackagingPO from "./components/Production-line-reports/forms/packaging-forms/startPackagingPO.vue"
import sheetDeliveredPackaging from "./components/Production-line-reports/forms/packaging-forms/sheetDeliveredPackaging.vue"
import packagingReport from "./components/Production-line-reports/forms/packaging-forms/packagingReport.vue"
import productRecivedLaser from "./components/Production-line-reports/forms/laser-forms/productRecivedLaser.vue"
import startLaserPO from "./components/Production-line-reports/forms/laser-forms/startLaserPO.vue"
import sheetDeliveredLaser from "./components/Production-line-reports/forms/laser-forms/sheetDeliveredLaser.vue"
import laserReport from "./components/Production-line-reports/forms/laser-forms/laserReport.vue"
import wasteReportLaser from "./components/Production-line-reports/forms/laser-forms/wasteReportLaser.vue"
import templateTestInfo from "./components/Production-line-reports/forms/templateTest-forms/templateTestInfo.vue"
import qualityControlSupervisor from "./components/Production-line-reports/higher-access/qualityControlSupervisor.vue"

const routes = [
    {
        path: "/",
        component: home,
        name: "home",
    },
    {
        path: "/production",
        component: productionLineMain,
        name: "productionLineMain",
    },
    {
        path: "/production/order",
        component: productionOrder,
        name: "productionOrder",
    },
    {
        path: "/production/order/cutting-lvl",
        component: cuttingLvl,
        name: "cuttingLvl",
    },
    {
        path: "/production/order/sheet-lvl",
        component: sheetLvl,
        name: "sheetLvl",
    },
    {
        path: "/production/cut/done",
        component: sheetCut,
        name: "sheetCut",
    },
    {
        path: "/production/cut/startAndEndCuttingRollOrSheet",
        component: startAndEndCuttingRollOrSheet,
        name: "startAndEndCuttingRollOrSheet",
    },
    {
        path: "/production/cut/receiveReturnSheets",
        component: receiveReturnSheets,
        name: "receiveReturnSheets",
    },
    {
        path: "/production/cut/waste",
        component: cuttingWaste,
        name: "cuttingWaste",
    },
    {
        path: "/production/cut/weightInformation",
        component: cutWeightInformation,
        name: "cutWeightInformation",
    },
    {
        path: "/production/cut/sheetDelivered",
        component: sheetDeliveredCutting,
        name: "sheetDeliveredCutting",
    },
    {
        path: "/production/cut/sheetDeliveredForWastes",
        component: sheetDeliveredForWastes,
        name: "sheetDeliveredForWastess",
    },
    {
        path: "/production/cut/sheetDeliveredForTestTemplate",
        component: sheetDeliveredForTestTemplate,
        name: "sheetDeliveredForTestTemplate",
    },
    {
        path: "/production/draw/sheetRecived",
        component: sheetRecivedDrawing,
        name: "sheetRecivedDrawing",
    },
    {
        path: "/production/draw/returnSheets",
        component: returnSheetsDrawing,
        name: "returnSheetsDrawing",
    },
    {
        path: "/production/draw/sheetDelivered",
        component: sheetDeliveredDrawing,
        name: "sheetDeliveredDrawing",
    },
    {
        path: "/production/draw/report",
        component: drawingReport,
        name: "drawingReport",
    },
    {
        path: "/production/draw/wasteReport",
        component: wasteReportDrawing,
        name: "wasteReportDrawing",
    },
    {
        path: "/production/draw/startPO",
        component: startDrawingPO,
        name: "startDrawingPO",
    },
    {
        path: "/production/borderCutting/productRecived",
        component: productRecivedBorderCutting,
        name: "productRecivedBorderCutting",
    },
    {
        path: "/production/borderCutting/startPO",
        component: startBorderCuttingPO,
        name: "startBorderCuttingPO",
    },
    {
        path: "/production/borderCutting/sheetDelivered",
        component: sheetDeliveredBorderCutting,
        name: "sheetDeliveredBorderCutting",
    },
    {
        path: "/production/borderCutting/report",
        component: borderCuttingReport,
        name: "borderCuttingReport",
    },
    {
        path: "/production/borderCutting/wasteReport",
        component: wasteReportBorderCutting,
        name: "wasteReportBorderCutting",
    },
    {
        path: "/production/omera/productRecived",
        component: productRecivedOmera,
        name: "productRecivedOmera",
    },
    {
        path: "/production/omera/startPO",
        component: startOmeraPO,
        name: "startOmeraPO",
    },
    {
        path: "/production/omera/sheetDelivered",
        component: sheetDeliveredOmera,
        name: "sheetDeliveredOmera",
    },
    {
        path: "/production/omera/report",
        component: omeraReport,
        name: "omeraReport",
    },
    {
        path: "/production/omera/wasteReport",
        component: wasteReportOmera,
        name: "wasteReportOmera",
    },
    {
        path: "/production/volumePunch/productRecived",
        component: productRecivedVolumePunch,
        name: "productRecivedVolumePunch",
    },
    {
        path: "/production/volumePunch/startPO",
        component: startVolumePunchPO,
        name: "startVolumePunchPO",
    },
    {
        path: "/production/volumePunch/sheetDelivered",
        component: sheetDeliveredVolumePunch,
        name: "sheetDeliveredVolumePunch",
    },
    {
        path: "/production/volumePunch/Report",
        component: volumePunchReport,
        name: "volumePunchReport",
    },
    {
        path: "/production/volumePunch/wasteReport",
        component: wasteReportVolumePunch,
        name: "wasteReportVolumePunch",
    },
    {
        path: "/production/grinding/productRecived",
        component: productRecivedGrinding,
        name: "productRecivedGrinding",
    },
    {
        path: "/production/grinding/startPO",
        component: startGrindingPO,
        name: "startGrindingPO",
    },
    {
        path: "/production/grinding/sheetDelivered",
        component: sheetDeliveredGrinding,
        name: "sheetDeliveredGrinding",
    },
    {
        path: "/production/grinding/report",
        component: grindingReport,
        name: "grindingReport",
    },
    {
        path: "/production/grinding/wasteReport",
        component: wasteReportGrinding,
        name: "wasteReportGrinding",
    },
    {
        path: "/production/straightening/productRecived",
        component: productRecivedStraightening,
        name: "productRecivedStraightening",
    },
    {
        path: "/production/straightening/startPO",
        component: startStraighteningPO,
        name: "startStraighteningPO",
    },
    {
        path: "/production/straightening/sheetDelivered",
        component: sheetDeliveredStraightening,
        name: "sheetDeliveredStraightening",
    },
    {
        path: "/production/straightening/report",
        component: straighteningReport,
        name: "straighteningReport",
    },
    {
        path: "/production/straightening/wasteReport",
        component: wasteReportStraightening,
        name: "wasteReportStraightening",
    },
    {
        path: "/production/packaging/productRecived",
        component: productRecivedPackaging,
        name: "productRecivedPackaging",
    },
    {
        path: "/production/packaging/gettingLabel",
        component: gettingLabelPackaging,
        name: "gettingLabelPackaging",
    },
    {
        path: "/production/packaging/startPO",
        component: startPackagingPO,
        name: "startPackagingPO",
    },
    {
        path: "/production/packaging/sheetDelivered",
        component: sheetDeliveredPackaging,
        name: "sheetDeliveredPackaging",
    },
    {
        path: "/production/packaging/report",
        component: packagingReport,
        name: "packagingReport",
    },
    {
        path: "/production/lasering/productRecived",
        component: productRecivedLaser,
        name: "productRecivedLaser",
    },
    {
        path: "/production/lasering/startPO",
        component: startLaserPO,
        name: "startLaserPO",
    },
    {
        path: "/production/lasering/sheetDelivered",
        component: sheetDeliveredLaser,
        name: "sheetDeliveredLaser",
    },
    {
        path: "/production/lasering/Report",
        component: laserReport,
        name: "laserReport",
    },
    {
        path: "/production/lasering/wasteReport",
        component: wasteReportLaser,
        name: "wasteReportLaser",
    },
    {
        path: "/production/templateTest/templateTestInfo",
        component: templateTestInfo,
        name: "templateTestInfo",
    },
    {
        path: "/production/higherAccess/qualityControlSupervisor",
        component: qualityControlSupervisor,
        name: "qualityControlSupervisor",
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;