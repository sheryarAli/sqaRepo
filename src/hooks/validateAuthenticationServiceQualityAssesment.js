export default function validateAuthentication(values) {
    console.log('validateAuthentication called');
    let errors = {}
    if (!values.hoLocation) {
        errors.hoLocation = "Required HO Location"
        console.log('hoLocation error')
    }
    if (!values.hostName) {
        errors.hostName = "Required Host Name"
    }
    if (!values.hostDept) {
        errors.hostDept = "Required Host Department"
    }
    if (!values.date) {
        errors.date = "Required Date"
    }

    return errors;
}