import Swal from 'sweetalert2';

export const alerts = () => {

    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
    })

};

export default alerts;
