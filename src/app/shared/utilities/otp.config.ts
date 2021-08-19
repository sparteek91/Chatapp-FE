interface IOtpSettings {
    length: number,
    numbersOnly: boolean,
    timer: number,
    timerType: number,
    inputClass: string,
    wrapperClass: string,
    btnClass: string,
    inputStyles?: any,
    wrapperStyles?: any,
    allowKeyCodes?: string[]
}

export const otpSettings: IOtpSettings = {
    length: 6,
    numbersOnly: true,
    timer: 120,
    timerType: 1,
    inputClass: 'form-control d-inline-block input-class',
    wrapperClass: 'text-center',
    // btnClass: 'btn w-100 py-2 px-5 mt-4 otp-button '
    btnClass: 'btn btn_primary w-100 mt-4 p-2'
    // 
}