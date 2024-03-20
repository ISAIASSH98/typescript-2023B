enum DoorState {
    Open = 'isaias',
    Closed = 'ias'
}
function checkDoorState(state:DoorState){
    console.log(state)
    switch (state) {
        case DoorState.Open:
            console.log('La puerta se encuentra abierta.')
            break;
        case DoorState.Closed:
            console.log('La puerta se encuentra cerrada.')
        default: 
            break;
    }
}

checkDoorState(DoorState.Closed); 

