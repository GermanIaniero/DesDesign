import EccService from "../services/ecc.service.js";

const EccService = new EccService()

export const getAll = (req, res) => {
    const { limit } = req.query
    res.json(EccService.getAll(limit))
}

export const getCheapest = (req, res) => {
    const { limit } = req.query
    res.json(EccService.getCheapest(limit))
}

export const create = (req, res) => {
    const data = req.body

    res.json(EccService.create(data))
}