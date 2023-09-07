import productModel from "../models/productModel.js";

class EccService {

    constructor() {
        this.productModel = new productModel()
    }

    getAll = limit => {
        const data = this.productModel.getAll()
        
        return this.getLimit(data, limit)
    }

    getCheapest = (limit) => {
        const data = this.productModel.getAll()
            .sort((t1, t2) => t1.price > t2.price )

        return this.getLimit(data, limit)
    }

    #getLimit (data, limit) {
        const end = limit <= data.length ? limit : data.length
        return data.slice(0, end)
    }

    create = data => {
        return this.productModel.create(data)
    }

}

export default EccService