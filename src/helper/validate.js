import { toast } from 'react-hot-toast'

function accountNameValidate(error = {}, values) {
    const regexPattern = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    if (!values.ac_name) {
        error.ac_name = toast.error('ac_name required...!')
    }
    else if (!regexPattern.test(values.ac_name)) {
        error.ac_name = toast.error('ac_name no spaces allowed!')
    }

    return error
}
function itemNameValidate(error = {}, values) {
    const regexPattern = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    if (!values.item_name) {
        error.item_name = toast.error('item_name required...!')
    }
    else if (!regexPattern.test(values.item_name)) {
        error.item_name = toast.error('item_name no spaces allowed!')
    }

    return error
}


function vrnoValidate(error = {}, values) {
    const regexPattern = /^\d+$/;
    if (!values.vr_no) {
        error.vr_no = toast.error('vr_no required...!')
    }
    else if (!regexPattern.test(values.vr_no)) {
        error.vr_no = toast.error('only numbers are allowed for vr_no')
    }

    return error
}

function itemCodeValidate(error = {}, values) {
    const regexPattern = /^\d+$/;
    if (!values.item_code) {
        error.item_code = toast.error('item_code required...!')
    }
    else if (!regexPattern.test(values.item_code)) {
        error.item_code = toast.error('only numbers are allowed for item_code')
    }

    return error
}
function srnoValidate(error = {}, values) {
    const regexPattern = /^\d+$/;
    if (!values.sr_no) {
        error.sr_no = toast.error('sr_no required...!')
    }
    else if (!regexPattern.test(values.sr_no)) {
        error.sr_no = toast.error('only numbers are allowed for sr_no')
    }

    return error
}
function qtyValidate(error = {}, values) {
    const regexPattern = /^\d+$/;
    if (!values.qty) {
        error.qty = toast.error('qty required...!')
    }
    else if (!regexPattern.test(values.qty)) {
        error.qty = toast.error('only numbers are allowed for qty')
    }

    return error
}
function rateValidate(error = {}, values) {
    const regexPattern = /^\d+$/;
    if (!values.rate) {
        error.rate = toast.error('rate required...!')
    }
    else if (!regexPattern.test(values.rate)) {
        error.rate = toast.error('only numbers are allowed for rate')
    }

    return error
}
function dateValidate(error = {}, values) {
    if (!values.vr_date) {
        error.vr_date = toast.error('vr_date required...!')
    }


    return error
}

function statusValidate(error = {}, values) {
    if (!values.status) {
        error.status = toast.error('status required...!')
    }
    return error
}
function descriptionValidate(error = {}, values) {
    if (!values.description) {
        error.description = toast.error('description required...!')
    }
    return error
}


export async function headerDetailsValidation(values) {
    const error = accountNameValidate({}, values)
    if (error.ac_name) return error
    vrnoValidate(error, values)
    if (error.vr_no) return error
    dateValidate(error, values)
    if (error.vr_date) return error
    statusValidate(error, values)
    return error
}
export async function DetailsValidation(values) {
    const error = itemNameValidate({}, values)
    if (error.item_name) return error
    itemCodeValidate(error, values)
    if (error.item_code) return error
    descriptionValidate(error, values)
    if (error.description) return error
    srnoValidate(error, values)
    if (error.sr_no) return error
    qtyValidate(error, values)
    if (error.qty) return error
    rateValidate(error, values)
    return error
}