import User from "../models/UserModel.js";

export const getKaryawan = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKaryawanById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id_karyawan: req.params.id_karyawan
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createKaryawan = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateKaryawan = async(req, res) =>{
    try {
        await User.update(req.body,{
            where:{
                id_karyawan: req.params.id_karyawan
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteKaryawan = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id_karyawan: req.params.id_karyawan
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}