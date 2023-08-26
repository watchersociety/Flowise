/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */
const CloudTablesApi = require('cloudtables-api').default

let api = new CloudTablesApi('n7uu3gwlxo', 'BWec3S8ptTMxORVoAxlcYHom', {
    clientId: 'CloudTables1',
    clientName: 'Ava-Flowise'
})

let token = await api.token()

const currentDate = new Date()
const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour12: false,
    timeZone: 'UTC'
}
const utcFormatter = new Intl.DateTimeFormat('en-US', options)
const formattedUtcDate = utcFormatter.format(currentDate)
const phoneNumber = $phone
const strippedPhoneNumber = phoneNumber.replace(/\D/g, '')

try {
    let result = await api.dataset('b03ea866-4437-11ee-8cd2-93cec0c90966').insert({
        'dp-18': formattedUtcDate,
        'dp-2': $firstname,
        'dp-3': $lastname,
        'dp-4': $email,
        'dp-5': strippedPhoneNumber,
        'dp-7': $ageverified,
        'dp-16': $insured,
        'dp-8': $policy,
        'dp-9': $calltransferverify
    })
    console.log('-----------<SUCCESS>------------')
    console.log('Record inserted', result)
    return 'CloudTable Data Saved Successfully'
} catch (error) {
    console.log('-----------ERROR--------------')
    console.log(result)
    return 'FAILED TO SAVE DATA TO CLOUDTABLE'
}
