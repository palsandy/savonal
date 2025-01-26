import express from "express";
import {
    getKaryawan, 
    getKaryawanById,
    createKaryawan,
    updateKaryawan,
    deleteKaryawan
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getKaryawan);
router.get('/users/:id_karyawan', getKaryawanById);
router.post('/users', createKaryawan);
router.patch('/users/:id_karyawan', updateKaryawan);
router.delete('/users/:id_karyawan', deleteKaryawan);

export default router;