function tinhTiendien(kwh) {
    let tienDien = 0;

    if (kwh <= 50 ) {
        tienDien = kwh * 1500;
    } else if (kwh <= 100 && kwh > 51) {
        tienDien = 50 * 1500 + (kwh - 50) * 2000;
    } else {
        tienDien = 50 * 1500 + 50 * 2000 + (kwh - 100) * 3000;
    }

    return tienDien;
}

console.log(tinhTiendien(40));
console.log(tinhTiendien(69));