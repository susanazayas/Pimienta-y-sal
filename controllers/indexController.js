module.exports = {
      index: function (req, res, next) {
            res.render("index", {
                  title: "Comision 19",
            });
      },
      detalle: function (req, res) {
            if (Number(req.params.id) == 1) {
                  res.render("detalleMenu", { title: `Detalle ${req.params.id}` });
            } else {
                  res.send("Plato Tipico");
            }
      },
};
