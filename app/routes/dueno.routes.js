const dueno = require('../controllers/perfildueno.controller')
var router = require("express").Router();

router.get("/profile", dueno.verificar, dueno.Menu);
router.get("/profile/pets", dueno.verificar, dueno.verMascotas);
router.get('/profile/controls', dueno.verificar, dueno.verControles);
router.get('/profile/adopcion', dueno.verificar, dueno.verMascotasEnAdopcion);

router.post("/profile/editUser", dueno.editarDatosDueno);
router.post("/add-new-mascota-dueno", dueno.addMascota);
router.post("/edit-mascota-dueno", dueno.editMascota);
router.post("/addControl-dueno", dueno.addControl);
router.post("/editControl-dueno", dueno.editControl);
router.post("/adoptar-mascota", dueno.adoptarMascota);

module.exports = router;