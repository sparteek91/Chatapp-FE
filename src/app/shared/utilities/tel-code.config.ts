import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

interface ITelCodeOptions {
    SearchCountryField: any,
    CountryISO: any,
    PhoneNumberFormat: any,
    preferredCountries: CountryISO[]
}

export const telCodeOptions: ITelCodeOptions = {
	SearchCountryField: SearchCountryField,
	CountryISO: CountryISO,
	PhoneNumberFormat: PhoneNumberFormat,
	preferredCountries: [CountryISO.UnitedStates, CountryISO.India]
}