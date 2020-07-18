import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faEnvelope,
    faPhoneVolume,
    faMapMarkedAlt,
    faBackspace,
    faKey
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const Icons = () => {
    return library.add(
        faTrash,
        faSignOutAlt,
        faEdit,
        faSpinner,
        faPlusCircle,
        faEnvelope,
        faPhoneVolume,
        faMapMarkedAlt,
        faBackspace,
        faKey
    )
}

export default Icons