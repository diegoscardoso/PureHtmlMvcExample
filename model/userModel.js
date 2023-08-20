// model.js
class Model {
    constructor() {
        this.name =  "",
        this.email = "",
        this.subscribe = false,
        this.birthdate = ""
    }

    updateData(field, value) {
        this.formData[field] = value;
    }

    getFormData() {
        return this;
    }
}

const model = new Model();